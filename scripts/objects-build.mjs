// Usage: node scripts/objects-build.mjs <dir with raw <slug>.glb files>
// Strips textures, simplifies towards 40k triangles and meshopt-compresses every object
// in docs/objects.json into public/objects/<slug>.glb. The web draws them as line-work
// (feature edges over a faint wireframe), so the mesh only has to carry the form.
import { readFileSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { dedup, prune, quantize, simplify, weld } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';

const rawDir = process.argv[2];
if (!rawDir) { console.error('usage: objects-build.mjs <raw dir> [out dir] [target triangles]'); process.exit(2); }
const outDir = process.argv[3] ?? 'public/objects';
const TARGET_TRIANGLES = Number(process.argv[4] ?? 40000);

await MeshoptEncoder.ready;
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
mkdirSync(outDir, { recursive: true });

const manifest = JSON.parse(readFileSync('docs/objects.json', 'utf8'));
for (const o of manifest) {
  const doc = await io.read(path.join(rawDir, `${o.slug}.glb`));
  const root = doc.getRoot();
  for (const t of root.listTextures()) t.dispose();
  for (const m of root.listMaterials()) {
    m.setBaseColorTexture(null).setMetallicRoughnessTexture(null).setNormalTexture(null).setOcclusionTexture(null).setEmissiveTexture(null);
  }
  const before = root.listMeshes().reduce((n, m) => n + m.listPrimitives().reduce((k, p) => k + (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3, 0), 0);
  await doc.transform(dedup(), weld());
  // the simplifier stops at its error bound; loosen it until the budget is met
  const count = () => root.listMeshes().reduce((n, m) => n + m.listPrimitives().reduce((k, p) => k + (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3, 0), 0);
  for (const error of [0.002, 0.01, 0.03, 0.08, 0.2, 0.5, 1]) {
    if (count() <= TARGET_TRIANGLES * 1.2) break;
    await doc.transform(simplify({ simplifier: MeshoptSimplifier, ratio: Math.min(1, TARGET_TRIANGLES / count()), error }));
  }
  await doc.transform(prune(), quantize());
  doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
  const after = root.listMeshes().reduce((n, m) => n + m.listPrimitives().reduce((k, p) => k + (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3, 0), 0);
  const out = path.join(outDir, `${o.slug}.glb`);
  await io.write(out, doc);
  console.log('ok  ', o.slug.padEnd(15), `${Math.round(before)} -> ${Math.round(after)} tris`, `${statSync(out).size} B`);
}
