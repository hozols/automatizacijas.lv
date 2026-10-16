import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, statSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('docs/objects.json', 'utf8'));

describe('objects manifest', () => {
  it('has seven unique slugs with alt text and Meshy provenance', () => {
    expect(manifest).toHaveLength(7);
    expect(new Set(manifest.map((o) => o.slug)).size).toBe(7);
    for (const o of manifest) {
      expect(o.slug).toMatch(/^[a-z-]+$/);
      expect(o.alt.length).toBeGreaterThan(10);
      expect(o.imageTask).toMatch(/^[0-9a-f-]{36}$/);
      expect(o.modelTask).toMatch(/^[0-9a-f-]{36}$/);
    }
  });
  it('ships a small meshopt GLB and the wireframe renders for every object', () => {
    for (const o of manifest) {
      const glb = `public/objects/${o.slug}.glb`;
      expect(existsSync(glb), glb).toBe(true);
      expect(statSync(glb).size, glb).toBeLessThan(1_200_000);
      for (const f of [`${o.slug}-800.webp`, `${o.slug}-400.webp`]) expect(existsSync(`public/objects/${f}`), f).toBe(true);
      if (o.wide) expect(existsSync(`public/objects/${o.slug}-wide-1600.webp`)).toBe(true);
    }
  });
});
