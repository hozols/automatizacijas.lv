// Usage: node scripts/objects-render.mjs
// Renders every object in docs/objects.json as white line-work on black (hidden-line
// wireframe, three.js in headless Chromium) into public/objects/<slug>-800.webp,
// -400.webp and, for wide objects, -wide-1600.webp / -wide-800.webp.
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const manifest = JSON.parse(readFileSync('docs/objects.json', 'utf8'));
const root = process.cwd();
const types = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.glb': 'model/gltf-binary', '.html': 'text/html', '.json': 'application/json' };
const server = createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = url === '/' ? null : path.join(root, url);
  if (url === '/') { res.setHeader('content-type', 'text/html'); return res.end(page); }
  if (!file || !file.startsWith(root) || !existsSync(file)) { res.statusCode = 404; return res.end('nope'); }
  res.setHeader('content-type', types[path.extname(file)] ?? 'application/octet-stream');
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const page = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#000}canvas{display:block}</style>
<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from '/node_modules/meshoptimizer/meshopt_decoder.mjs';
window.render = async (slug, w, h) => {
  document.querySelectorAll('canvas').forEach((c) => c.remove());
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.setSize(w, h); renderer.setClearColor(0x000000, 1);
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, w / h, 0.01, 100);
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync('/public/objects/' + slug + '.glb');
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()); const center = box.getCenter(new THREE.Vector3());
  const s = 1 / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(s); model.position.set(-center.x * s, -center.y * s, -center.z * s);
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = new THREE.MeshBasicMaterial({ color: 0x000000, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const lines = new THREE.LineSegments(new THREE.WireframeGeometry(o.geometry), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }));
    o.add(lines);
  });
  const group = new THREE.Group(); group.add(model); group.rotation.y = -0.6; scene.add(group);
  // wide frames put the object in the right third so a card can sit on the left
  const wide = w > h;
  group.position.x = wide ? 0.7 : 0;
  camera.position.set(0, 0.9, wide ? 2.7 : 3.1); camera.lookAt(wide ? 0.25 : 0, -0.02, 0);
  renderer.render(scene, camera);
  return true;
};
</script>`;

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const tab = await browser.newPage({ viewport: { width: 1600, height: 1600 } });
tab.on('pageerror', (e) => console.error('page error', e.message));
await tab.goto(base, { waitUntil: 'load' });
// every size is rendered at its own resolution so the 1px lines stay crisp (downscaling fades them)
const shoot = async (slug, w, h, out, quality) => {
  await tab.evaluate(([s, ww, hh]) => window.render(s, ww, hh), [slug, w, h]);
  const png = await tab.locator('canvas').screenshot({ type: 'png' });
  await sharp(png).webp({ quality }).toFile(out);
};
for (const o of manifest) {
  await shoot(o.slug, 800, 800, `public/objects/${o.slug}-800.webp`, 82);
  await shoot(o.slug, 400, 400, `public/objects/${o.slug}-400.webp`, 80);
  if (o.wide) {
    await shoot(o.slug, 1600, 1000, `public/objects/${o.slug}-wide-1600.webp`, 82);
    await shoot(o.slug, 800, 500, `public/objects/${o.slug}-wide-800.webp`, 80);
  }
  console.log('ok  ', o.slug);
}
await browser.close();
server.close();
