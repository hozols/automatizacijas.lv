# Scale Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin the site to the Scale reference system (white/black/grey ladder, Inter 400 headings, mono labels, flat 16px cards, dark hero → black void → white surface) without changing structure, copy, motion or SEO.

**Architecture:** Tokens, type and component classes live in `src/index.css` and `tailwind.config.ts`; components only change class names and small markup (logo, scroll prompt, cards). One static vitest file guards the system; the existing e2e, prerender and hydration gates guard behaviour.

**Tech Stack:** React 18, Vite 5, Tailwind 3, vitest, Playwright scripts, @fontsource-variable/inter, @fontsource-variable/jetbrains-mono.

**Spec:** `docs/superpowers/specs/2026-10-16-scale-restyle-design.md` (reference: `docs/design/scale-reference/`).

## Global Constraints

- Only the spec's colour tokens; no gradients; only `--shadow-subtle`.
- Headings weight 400 (500 for `.display-3`, h3, h4); never 600+ outside `src/components/ui`.
- Radii: 8 / 12 / 16 / 24px. `.wrap` 80rem. Card padding 2rem.
- Inter + JetBrains Mono only; Instrument Serif and Manrope removed.
- Hero stage is black from the first frame; pin stays CSS-only; motion classes stay DOM-owned.
- Gates: `npm test`, `npm run lint` (0 errors), `npm run build`, `check:hydration` 44/44, `hero:e2e` 20/20, `app:e2e` 19/19.
- Commit per task with the session trailer.

## Review Focus

1. A page prerendered with the old theme classes must not flash putty: `theme-color` and `body` background are white/black per spec (Task 3 test).
2. Fallback font width: Inter's fallback must not change the h1 line count before the font loads (Task 2 size-adjust).
3. Contrast: smoke (#929292) is never body text on white; graphite is (Task 3 tokens; Task 6 cards).
4. `.btn-line` inside `.band-ink` on the hero and the menu must stay visible (white border) (Task 3 CSS; Task 4 e2e click test).
5. Grayscale filter on vignettes must not apply to the `?hero=capture` scene or break the ash placeholder (Task 6; app-e2e 7).

---

### Task 1: Reference docs, spec, plan
Files: `docs/design/scale-reference/*`, `docs/superpowers/specs/2026-10-16-scale-restyle-design.md`, this plan.
- [ ] Commit: `docs: scale restyle spec, plan and reference tokens`

### Task 2: Fonts
Files: `package.json`, `public/fonts/`, `src/index.css` (font-face block), `index.html` preloads. Test: `src/styles.test.ts`.
- [ ] Write `src/styles.test.ts`:
```ts
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
```
- [ ] Run `npx vitest run src/styles.test.ts` → FAIL (files missing).
- [ ] `npm i @fontsource-variable/inter @fontsource-variable/jetbrains-mono && npm rm @fontsource-variable/manrope`; copy `node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2` and `inter-latin-ext-wght-normal.woff2` to `public/fonts/`; `git rm public/fonts/instrument-serif-*`.
- [ ] Replace the font-face block in `src/index.css` with Inter faces (unicode ranges as fontsource), the `Inter Fallback` face (`local('Arial')`, `size-adjust: 107%; ascent-override: 90%; descent-override: 22%; line-gap-override: 0%`), and `@import '@fontsource-variable/jetbrains-mono/wght.css';`. Replace the two preloads in `index.html`. Update every `font-family` in index.css and tailwind (`sans`, `display`, `mono`) to Inter / JetBrains Mono.
- [ ] Run the test → PASS. Commit: `feat(style): Inter and JetBrains Mono replace the serif and Manrope`

### Task 3: Tokens, type, components CSS, Tailwind
Files: `src/index.css`, `tailwind.config.ts`, `index.html` (theme-color). Test additions in `src/styles.test.ts`:
```ts
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
```
- [ ] Run → FAIL. Rewrite `:root`, base, `@layer components` and the gallery pieces in `src/index.css` per the spec tables; update Tailwind colours (`smoke`, `sand`, `forest`, `iris`, `slate`, remove `chalk`), `borderRadius`, `boxShadow` (all → subtle), `fontFamily`. Set theme-color.
- [ ] Run → PASS. `npm run lint`. Commit: `feat(style): scale tokens, type scale, flat components`

### Task 4: Hero on obsidian
Files: `src/index.css` (hero block), `src/components/hero/HeroSection.tsx`, `src/components/hero/TypewriterScene.tsx` (rim light), `scripts/app-e2e.mjs` check 10. Test additions:
```ts
describe('hero', () => {
  it('is black from the first frame and has the scroll prompt', () => {
    expect(css()).toMatch(/\.hero-stage \{[^}]*background: hsl\(var\(--ink\)\)/);
    expect(css()).not.toMatch(/--p-ink/);
    expect(read('src/components/hero/HeroSection.tsx')).toContain('scroll-prompt');
  });
});
```
- [ ] Run → FAIL. Implement: stage background ink, remove `--p-ink` from CSS and `HeroSection.onUpdate`, wordmark colour `color-mix(white, smoke by --p)`, cluster white text, add `<div className="scroll-prompt" aria-hidden="true">` with "Ritini tālāk" + chevron SVG inside the stage (opacity `calc(1 - var(--p-fade))`), key light intensity 2.2 + rim 1.6. Update app-e2e check 10 to assert only the cluster opacity.
- [ ] Run test → PASS. `npm run build && npx vite preview --port 4610 --strictPort &` then `npm run hero:e2e http://localhost:4610` 20/20 and `npm run app:e2e http://localhost:4610` 19/19; screenshot `npm run shoot http://localhost:4610/ <png>`.
- [ ] Commit: `feat(hero): obsidian stage, scroll prompt, stronger rim`

### Task 5: Header, logo, menu, footer, sticky bar
Files: `Header.tsx`, `Logo.tsx`, `MenuOverlay.tsx`, `Footer.tsx`, `MobileStickyBar.tsx`. Test additions:
```ts
describe('chrome', () => {
  it('has no monogram or chalk and uses mono labels', () => {
    for (const f of ['Header', 'Logo', 'MenuOverlay', 'Footer']) expect(read(`src/components/${f}.tsx`)).not.toMatch(/monogram|band-chalk|display-2/);
    expect(read('src/components/Logo.tsx')).toContain('logo-mark');
    expect(read('src/components/Footer.tsx')).toContain('band-ink');
  });
});
```
- [ ] Run → FAIL. Implement per spec (header `band-ink`, `.logo-mark` square in CSS, menu links `.display-1`, close button `.btn-line` square, footer ink with mono column labels and smoke links).
- [ ] PASS, lint, commit: `feat(chrome): obsidian header and footer, square mark`

### Task 6: Homepage rooms
Files: all `Home*.tsx`, `HomePainting.tsx` → `.case-card`. Test additions:
```ts
describe('rooms', () => {
  it('cases are flat cards, why is a sand panel, process is forest', () => {
    expect(read('src/components/HomeCases.tsx')).toContain('sheet');
    expect(read('src/components/HomeWhy.tsx')).toContain('panel-sand');
    expect(read('src/components/HomeProcess.tsx')).toContain('bg-forest');
    expect(read('src/components/HomePainting.tsx')).toContain('case-card');
    expect(read('src/components/HomePainting.tsx')).not.toContain('notched-card');
  });
});
```
- [ ] Run → FAIL. Implement per spec rooms 2–10. Update app-e2e check 7 placeholder to `rgb(146, 146, 146)` and the "circle" wording.
- [ ] PASS, lint, build, app:e2e 19/19, commit: `feat(home): scale rooms`

### Task 7: Inner pages and weight sweep
Files: `src/components/page/index.tsx`, `src/pages/*.tsx`, `src/components/*.tsx`. Test additions:
```ts
describe('weights', () => {
  it('never sets 600+ outside ui/', () => {
    const walk = (d: string): string[] => readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? (e.name === 'ui' ? [] : walk(path.join(d, e.name))) : e.name.endsWith('.tsx') ? [path.join(d, e.name)] : []);
    const offenders = [...walk('src/pages'), ...walk('src/components')].filter((f) => /font-(bold|semibold|extrabold|black)\b/.test(read(f)));
    expect(offenders).toEqual([]);
  });
});
```
- [ ] Run → FAIL. `sed -i '' -E 's/font-(bold|semibold|extrabold)/font-medium/g'` over the offenders; restyle `PageHero` vignette, `Section` sheet tone (`bg-card`), `RuledList` aside weight, `Steps` number.
- [ ] PASS, lint, build, `check:hydration` 44/44. Commit: `feat(pages): scale inner pages, weight sweep`

### Task 8: DESIGN.md, full gates, screenshots, preview
- [ ] Rewrite `DESIGN.md` for the Scale system (tokens table, type, shapes, rooms, motion, copy rules).
- [ ] `npm test`, `npm run lint`, `npm run build`, hydration, hero:e2e, app:e2e, Lighthouse mobile on `npx serve@14 -l 4611 dist`.
- [ ] Screenshots desktop + mobile home and one inner page → SendUserFile. Deploy preview: `npx vercel@latest build --yes --target preview && npx vercel@latest deploy --prebuilt --yes`.
- [ ] Commit: `docs: DESIGN.md for the scale system`
