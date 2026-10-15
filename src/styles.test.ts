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
