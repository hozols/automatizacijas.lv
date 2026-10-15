import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const read = (p: string) => readFileSync(path.resolve(p), 'utf8');
const css = () => read('src/index.css');
const html = () => read('index.html');

describe('fonts', () => {
  it('self-hosts Inter latin and latin-ext and preloads them', () => {
    expect(existsSync('public/fonts/inter-latin-wght-normal.woff2')).toBe(true);
    expect(existsSync('public/fonts/inter-latin-ext-wght-normal.woff2')).toBe(true);
    expect(html()).toContain('/fonts/inter-latin-wght-normal.woff2');
    expect(html()).toContain('/fonts/inter-latin-ext-wght-normal.woff2');
    expect(css()).toMatch(/font-family: 'Inter Variable'/);
    expect(css()).toMatch(/font-family: 'Inter Fallback'[\s\S]*size-adjust/);
    expect(css()).toContain("@import '@fontsource-variable/jetbrains-mono");
  });
  it('removed the serif and Manrope', () => {
    expect(readdirSync('public/fonts').some((f) => f.includes('instrument'))).toBe(false);
    expect(css()).not.toMatch(/Instrument Serif|Manrope/);
    expect(html()).not.toMatch(/instrument-serif/);
    expect(read('tailwind.config.ts')).not.toMatch(/Instrument Serif|Manrope/);
    expect(read('package.json')).not.toMatch(/@fontsource-variable\/manrope/);
  });
});

describe('tokens', () => {
  it('uses the scale palette', () => {
    const c = css();
    for (const t of ['--background: 0 0% 100%', '--foreground: 0 0% 0%', '--card: 0 0% 95%', '--primary: 0 0% 13%', '--muted-foreground: 0 0% 34%', '--border: 0 0% 90%', '--input: 0 0% 78%', '--smoke: 0 0% 57%', '--sand: 30 20% 57%', '--forest: 149 40% 16%', '--iris: 272 17% 47%', '--slate: 208 23% 61%', '--radius: 16px']) expect(c).toContain(t);
    expect(c).not.toMatch(/56 11% 74%|notched-card|monogram/);
    expect(html()).toContain('<meta name="theme-color" content="#000000" />');
  });
  it('shapes: 8px buttons, 80rem wrap, flat sheet, accent panels', () => {
    const c = css();
    expect(c).toMatch(/\.btn \{[^}]*border-radius: 8px/);
    expect(c).toMatch(/\.wrap \{[^}]*max-width: 80rem/);
    expect(c).toMatch(/\.sheet \{[^}]*border-radius: var\(--radius\)/);
    expect(c).not.toMatch(/\.sheet \{[^}]*border: 1px/);
    for (const p of ['.panel-sand', '.panel-forest', '.panel-iris', '.panel-slate', '.case-card', '.scroll-prompt', '.mono', '.caption']) expect(c).toContain(p);
    const tw = read('tailwind.config.ts');
    expect(tw).toMatch(/'2xl': '16px'/);
    expect(tw).toMatch(/sand: 'hsl\(var\(--sand\)\)'/);
    expect(tw).not.toMatch(/0 24px 48px/);
  });
});
