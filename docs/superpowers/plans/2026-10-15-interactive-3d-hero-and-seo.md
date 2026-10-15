# Interactive 3D Hero and SEO Prerender Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give automatizacijas.lv a hero with a 3D typewriter that types the value proposition, finish the homepage under DESIGN.md, and ship every sitemap route as prerendered HTML with data-backed titles.

**Architecture:** The hero is a lazy-loaded `@react-three/fiber` scene over a static fallback image; a pure typing state machine drives both the platen text and the keystroke nudge. Pages load through a preloadable lazy wrapper (no `Suspense`) so Playwright-captured HTML can be hydrated with `hydrateRoot`. A post-build script renders every sitemap route with Playwright into `dist/<route>/index.html` and fails the build on missing title, description or h1.

**Tech Stack:** React 18, Vite 5, TypeScript, Tailwind, `three` 0.170, `@react-three/fiber` 8, `@react-three/drei` 9, `@gltf-transform/cli`, Playwright (library), Vitest, Meshy MCP, DataForSEO MCP, Vercel CLI.

**Spec:** `docs/superpowers/specs/2026-10-15-interactive-3d-hero-and-seo-design.md`

## Global Constraints

- Branch: `redesign-2026`. Never commit to `main`.
- DESIGN.md governs every visual decision. Tokens only, never hard-coded colours (`blue-500`, `#fff`). No gradients, glow, blur, particles, shimmer, pulse, hover-lift, scale-on-hover, entrance animations. No icons as decoration. No pills, no `rounded-full`. No em dashes in copy. Sentence case.
- Motion only as an answer to a user action or as a depiction of what the nearby text says. The hero typewriter is the one self-moving scene.
- `prefers-reduced-motion: reduce` shows every allowed motion in its final state.
- 3D only on viewports ≥ 768 px, without reduced motion, with WebGL2, and never when `navigator.webdriver` is true (unless `?hero=3d` or `?hero=capture` overrides for tooling).
- `public/models/typewriter.glb` under 1.5 MB on disk. Meshy budget cap 60 credits. Confirm every credit-costing Meshy call with the user before sending it.
- Main JS bundle (`dist/assets/index-*.js`) must not grow more than 10 KB gzip over the baseline measured in Task 1.
- Homepage mobile Lighthouse: Performance ≥ 90, SEO ≥ 95, LCP ≤ 2.5 s.
- Every prerendered route must contain `<title>`, `<meta name="description">` and exactly one `<h1>`.
- Do not invent numbers, clients or results in copy or in the keyword map.
- Every commit message ends with:
  ```
  Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01DgJzwKfM5SuSpGZs29WHsr
  ```
- Downloaded files (Meshy GLB) land in the scratchpad directory first, never run from there, and are only copied into the repo after `gltf-transform` has rewritten them.

## Review Focus

1. **WebGL context loss after the scene is up.** Expected: the fallback image is shown again and no error loop. Test added in Task 8 (Playwright forces `WEBGL_lose_context`).
2. **Reduced motion toggled on after the 3D scene loaded.** Expected: scene unmounts, image shows. Test added in Task 4 (`decideHeroMode` unit test) and Task 8 (Playwright `emulateMedia` change).
3. **A route whose page renders without an `<h1>`.** Expected: `npm run build` fails naming the route. Test added in Task 10 (`checkDocument` unit test).
4. **An unknown URL such as `/nekas-te-nav`.** Expected: the SPA shell with the 404 page, not the prerendered homepage with a 200 title. Test added in Task 11 (curl on the preview deployment).
5. **Latvian diacritics typed character by character.** Expected: `Rēķini` reveals `R`, `Rē`, `Rēķ`, never a broken glyph. Test added in Task 3 (`visibleText` unit test on NFC strings).
6. **The GLB or the 3D chunk fails to download.** Expected: the page stays up with the fallback image; no blank hero, no crash. Test added in Task 8 (Playwright blocks the model URL).

---

### Task 1: Test tooling and baseline measurements

**Files:**
- Modify: `package.json` (scripts, devDependencies)
- Create: `vitest.config.ts`
- Create: `scripts/shoot.mjs`
- Create: `docs/superpowers/plans/2026-10-15-baseline.md`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `npm test` (vitest run), `node scripts/shoot.mjs <url> <out.png> [--mobile] [--dark] [--reduced]` for screenshots, baseline Lighthouse numbers.

- [ ] **Step 1: Install dev tooling**

```bash
npm i -D vitest@2 playwright@1.48.2 sharp@0.33.5
npx playwright install chromium
```

- [ ] **Step 2: Add vitest config and scripts**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'scripts/**/*.test.mjs'],
  },
});
```

In `package.json` scripts add:

```json
"test": "vitest run",
"shoot": "node scripts/shoot.mjs"
```

- [ ] **Step 3: Write the screenshot helper**

Create `scripts/shoot.mjs`:

```js
// Usage: node scripts/shoot.mjs <url> <out.png> [--mobile] [--dark] [--reduced] [--full]
import { chromium } from 'playwright';

const [url, out, ...flags] = process.argv.slice(2);
if (!url || !out) {
  console.error('usage: shoot.mjs <url> <out.png> [--mobile] [--dark] [--reduced] [--full]');
  process.exit(2);
}
const has = (f) => flags.includes(f);
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: has('--mobile') ? { width: 390, height: 844 } : { width: 1440, height: 900 },
  deviceScaleFactor: has('--mobile') ? 2 : 1,
  colorScheme: has('--dark') ? 'dark' : 'light',
  reducedMotion: has('--reduced') ? 'reduce' : 'no-preference',
});
const page = await context.newPage();
if (has('--dark')) {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
}
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: out, fullPage: has('--full') });
await browser.close();
console.log('wrote', out);
```

- [ ] **Step 4: Verify the tooling runs**

```bash
npm test
```
Expected: "No test files found" exit code 0 (vitest 2 passes with `--passWithNoTests`; if it exits 1, add `"test": "vitest run --passWithNoTests"`).

```bash
npm run build && (npm run preview -- --port 4173 & echo $! > /tmp/preview.pid; sleep 2) && node scripts/shoot.mjs http://localhost:4173/ /tmp/baseline-home.png --full && kill $(cat /tmp/preview.pid)
```
Expected: `wrote /tmp/baseline-home.png`. Open it and confirm it shows the baseline paper/ink homepage.

- [ ] **Step 5: Record baseline bundle size and Lighthouse**

```bash
ls -l dist/assets/index-*.js
gzip -c dist/assets/index-*.js | wc -c
CHROME_PATH="$(node -e "console.log(require('playwright').chromium.executablePath())")" \
  npx lighthouse@12 http://localhost:4173/ --form-factor=mobile --screenEmulation.mobile \
  --only-categories=performance,seo --chrome-flags="--headless=new" \
  --output=json --output-path=/tmp/lh-baseline.json --quiet
node -e "const r=require('/tmp/lh-baseline.json');console.log('perf',r.categories.performance.score*100,'seo',r.categories.seo.score*100,'lcp',r.audits['largest-contentful-paint'].displayValue)"
```
(Run the preview server again before lighthouse, as in step 4.)

Write `docs/superpowers/plans/2026-10-15-baseline.md`:

```markdown
# Baseline, 2026-10-15, commit <sha>

| Metric | Value |
| --- | --- |
| main bundle gzip | <bytes> |
| Lighthouse mobile performance | <n> |
| Lighthouse mobile SEO | <n> |
| LCP | <s> |
```

Fill in the real numbers.

- [ ] **Step 6: Commit**

```bash
printf '\n# tooling\n.vercel\ntest-results/\n' >> .gitignore
git add package.json package-lock.json vitest.config.ts scripts/shoot.mjs docs/superpowers/plans/2026-10-15-baseline.md .gitignore
git commit -m "Add vitest, playwright screenshot helper, and baseline measurements"
```

---

### Task 2: DESIGN.md rule 6 and reduced-motion base CSS

**Files:**
- Modify: `DESIGN.md` (rule 6 under "Layout rules")
- Modify: `src/index.css` (append)

- [ ] **Step 1: Rewrite rule 6**

Replace the current rule 6 text in `DESIGN.md` with:

```markdown
6. Motion is allowed only when it answers a user action (hover, click,
   scroll position) or shows the thing the nearby text describes. Hover
   changes colour or sweeps the highlighter. No background particles,
   glow, blur, shimmer, pulse, hover-lift, scale-on-hover or entrance
   animations. The hero typewriter is the one scene that moves on its own.
   `prefers-reduced-motion: reduce` turns every allowed motion into its
   final state.
```

- [ ] **Step 2: Add the reduced-motion base rule**

Append to `src/index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .sweep,
  .sweep.is-on {
    transition: none;
  }
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: `✓ built`.

- [ ] **Step 4: Commit**

```bash
git add DESIGN.md src/index.css
git commit -m "Allow meaningful motion in DESIGN.md rule 6, honour reduced motion"
```

---

### Task 3: Typing state machine

**Files:**
- Create: `src/components/hero/typingMachine.ts`
- Test: `src/components/hero/typingMachine.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export const HERO_LINES: readonly string[];
  export type Phase = 'typing' | 'hold' | 'return';
  export interface TypingState { lines: readonly string[]; line: number; chars: number; phase: Phase; nextAt: number; }
  export function createTypingState(lines: readonly string[], now: number, opts?: { complete?: boolean }): TypingState;
  export function tick(state: TypingState, now: number, rand?: () => number): TypingState;
  export function skip(state: TypingState, now: number): TypingState;
  export function visibleText(state: TypingState): string;
  export const HOLD_MS = 2400; export const RETURN_MS = 450; export const START_DELAY_MS = 400;
  ```
  `tick` returns the same object when nothing changed, so callers can compare by identity.

- [ ] **Step 1: Write the failing tests**

Create `src/components/hero/typingMachine.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import {
  createTypingState, tick, skip, visibleText, HOLD_MS, RETURN_MS, START_DELAY_MS, HERO_LINES,
} from './typingMachine';

const lines = ['Rēķini apstrādāti.', 'Līgumi sagatavoti.'];
const fixed = () => 0.5; // charDelay = 55 + 0.5*30 = 70 ms

describe('typingMachine', () => {
  it('starts empty, waits START_DELAY_MS, then types one character per delay', () => {
    let s = createTypingState(lines, 1000, undefined);
    expect(visibleText(s)).toBe('');
    expect(tick(s, 1000, fixed)).toBe(s);                 // first key is due at 1000 + START_DELAY_MS
    expect(tick(s, 1000 + START_DELAY_MS - 1, fixed)).toBe(s);
    s = tick(s, 1000 + START_DELAY_MS, fixed);            // nextAt becomes +70
    expect(visibleText(s)).toBe('R');
    s = tick(s, 1000 + START_DELAY_MS + 70, fixed);
    expect(visibleText(s)).toBe('Rē');
    s = tick(s, 1000 + START_DELAY_MS + 140, fixed);
    expect(visibleText(s)).toBe('Rēķ');
  });

  it('holds after the line, then returns, then starts the next line', () => {
    let s = createTypingState(lines, 0, undefined);
    let now = 0;
    while (s.phase === 'typing') { now += 70; s = tick(s, now, fixed); }
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('hold');
    expect(tick(s, now + HOLD_MS - 1, fixed)).toBe(s);
    s = tick(s, now + HOLD_MS, fixed);
    expect(s.phase).toBe('return');
    s = tick(s, now + HOLD_MS + RETURN_MS, fixed);
    expect(s.phase).toBe('typing');
    expect(s.line).toBe(1);
    expect(visibleText(s)).toBe('');
  });

  it('wraps to the first line after the last', () => {
    let s = createTypingState(lines, 0, { complete: true });
    s = { ...s, line: 1, chars: lines[1].length, phase: 'hold', nextAt: 0 };
    s = tick(s, 0, fixed);           // -> return
    s = tick(s, RETURN_MS, fixed);   // -> typing line 0
    expect(s.line).toBe(0);
  });

  it('skip finishes the line and goes straight to return', () => {
    let s = createTypingState(lines, 0, undefined);
    s = tick(s, 70, fixed);
    s = skip(s, 100);
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('return');
    expect(s.nextAt).toBe(100 + RETURN_MS);
  });

  it('skip during return is a no-op', () => {
    let s = createTypingState(lines, 0, { complete: true });
    s = { ...s, phase: 'return', nextAt: 500 };
    expect(skip(s, 100)).toBe(s);
  });

  it('complete option starts with the first line fully typed and held', () => {
    const s = createTypingState(lines, 0, { complete: true });
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('hold');
  });

  it('HERO_LINES are NFC and end with a full stop', () => {
    for (const l of HERO_LINES) {
      expect(l.normalize('NFC')).toBe(l);
      expect(l.endsWith('.')).toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
npm test
```
Expected: FAIL, "Failed to resolve import ./typingMachine".

- [ ] **Step 3: Implement the machine**

Create `src/components/hero/typingMachine.ts`:

```ts
/*
  Pure state machine for the hero typewriter. No DOM, no timers: the scene
  calls tick(state, now) every frame and compares identity to know whether
  a key was struck.
*/

export const HERO_LINES: readonly string[] = [
  'Rēķini apstrādāti.',
  'Dokumenti sakārtoti.',
  'Atbildes nosūtītas.',
  'Līgumi sagatavoti.',
].map((l) => l.normalize('NFC'));

export type Phase = 'typing' | 'hold' | 'return';

export interface TypingState {
  lines: readonly string[];
  line: number;
  chars: number;
  phase: Phase;
  nextAt: number;
}

export const HOLD_MS = 2400;
export const RETURN_MS = 450;
export const START_DELAY_MS = 400;
const MIN_CHAR_MS = 55;
const JITTER_MS = 30;

export function charDelay(rand: () => number = Math.random): number {
  return MIN_CHAR_MS + rand() * JITTER_MS;
}

export function createTypingState(
  lines: readonly string[],
  now: number,
  opts?: { complete?: boolean },
): TypingState {
  if (opts?.complete) {
    return { lines, line: 0, chars: [...lines[0]].length, phase: 'hold', nextAt: now + HOLD_MS };
  }
  return { lines, line: 0, chars: 0, phase: 'typing', nextAt: now + START_DELAY_MS };
}

function lineChars(state: TypingState): string[] {
  return [...state.lines[state.line]];
}

export function tick(state: TypingState, now: number, rand: () => number = Math.random): TypingState {
  if (now < state.nextAt) return state;
  switch (state.phase) {
    case 'typing': {
      const chars = state.chars + 1;
      if (chars >= lineChars(state).length) {
        return { ...state, chars: lineChars(state).length, phase: 'hold', nextAt: now + HOLD_MS };
      }
      return { ...state, chars, nextAt: now + charDelay(rand) };
    }
    case 'hold':
      return { ...state, phase: 'return', nextAt: now + RETURN_MS };
    case 'return': {
      const line = (state.line + 1) % state.lines.length;
      return { ...state, line, chars: 0, phase: 'typing', nextAt: now + charDelay(rand) };
    }
  }
}

export function skip(state: TypingState, now: number): TypingState {
  if (state.phase === 'return') return state;
  return { ...state, chars: lineChars(state).length, phase: 'return', nextAt: now + RETURN_MS };
}

export function visibleText(state: TypingState): string {
  return lineChars(state).slice(0, state.chars).join('');
}
```

- [ ] **Step 4: Run the tests**

```bash
npm test
```
Expected: 7 passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/typingMachine.ts src/components/hero/typingMachine.test.ts
git commit -m "Add pure typing state machine for the hero typewriter"
```

---

### Task 4: Hero gate (when to render 3D)

**Files:**
- Create: `src/components/hero/heroMode.ts`
- Create: `src/components/hero/useHeroMode.ts`
- Test: `src/components/hero/heroMode.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export type HeroMode = 'image' | '3d' | 'capture';
  export interface HeroEnv { width: number; reducedMotion: boolean; webgl2: boolean; webdriver: boolean; override: string | null; }
  export function decideHeroMode(env: HeroEnv): HeroMode;
  export function useHeroMode(): HeroMode;   // 'image' on first render, may become '3d' after idle
  ```

- [ ] **Step 1: Write the failing tests**

Create `src/components/hero/heroMode.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { decideHeroMode, type HeroEnv } from './heroMode';

const ok: HeroEnv = { width: 1440, reducedMotion: false, webgl2: true, webdriver: false, override: null };

describe('decideHeroMode', () => {
  it('renders 3d on a capable desktop', () => {
    expect(decideHeroMode(ok)).toBe('3d');
  });
  it('falls back to image below 768px', () => {
    expect(decideHeroMode({ ...ok, width: 767 })).toBe('image');
  });
  it('falls back to image with reduced motion', () => {
    expect(decideHeroMode({ ...ok, reducedMotion: true })).toBe('image');
  });
  it('falls back to image without WebGL2', () => {
    expect(decideHeroMode({ ...ok, webgl2: false })).toBe('image');
  });
  it('falls back to image under automation (prerender)', () => {
    expect(decideHeroMode({ ...ok, webdriver: true })).toBe('image');
  });
  it('override 3d wins over automation and width', () => {
    expect(decideHeroMode({ ...ok, webdriver: true, width: 320, override: '3d' })).toBe('3d');
  });
  it('override capture returns capture', () => {
    expect(decideHeroMode({ ...ok, webdriver: true, override: 'capture' })).toBe('capture');
  });
  it('override cannot beat missing WebGL2', () => {
    expect(decideHeroMode({ ...ok, webgl2: false, override: '3d' })).toBe('image');
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
npm test -- heroMode
```
Expected: FAIL, cannot resolve `./heroMode`.

- [ ] **Step 3: Implement the decision and the hook**

Create `src/components/hero/heroMode.ts`:

```ts
export type HeroMode = 'image' | '3d' | 'capture';

export interface HeroEnv {
  width: number;
  reducedMotion: boolean;
  webgl2: boolean;
  webdriver: boolean;
  /* value of the ?hero= query parameter, used by tooling only */
  override: string | null;
}

export const HERO_MIN_WIDTH = 768;

export function decideHeroMode(env: HeroEnv): HeroMode {
  if (!env.webgl2) return 'image';
  if (env.override === 'capture') return 'capture';
  if (env.override === '3d') return '3d';
  if (env.webdriver) return 'image';
  if (env.reducedMotion) return 'image';
  if (env.width < HERO_MIN_WIDTH) return 'image';
  return '3d';
}

export function hasWebGL2(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

export function readHeroEnv(): HeroEnv {
  return {
    width: window.innerWidth,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    webgl2: hasWebGL2(),
    webdriver: navigator.webdriver === true,
    override: new URLSearchParams(window.location.search).get('hero'),
  };
}
```

Create `src/components/hero/useHeroMode.ts`:

```ts
import { useEffect, useState } from 'react';
import { decideHeroMode, readHeroEnv, type HeroMode } from './heroMode';

const IDLE_FALLBACK_MS = 1500;

/*
  Always 'image' on the first render so prerendered HTML and the client
  agree. After hydration, waits for idle (or 1.5 s) and switches to '3d'
  when the environment allows. Reacts to reduced-motion changes.
*/
export function useHeroMode(): HeroMode {
  const [mode, setMode] = useState<HeroMode>('image');

  useEffect(() => {
    let cancelled = false;
    const apply = () => {
      if (!cancelled) setMode(decideHeroMode(readHeroEnv()));
    };
    const first = decideHeroMode(readHeroEnv());
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (first === 'capture') {
      apply();
    } else if (first === '3d') {
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number; cancelIdleCallback?: (id: number) => void };
      if (w.requestIdleCallback) idleId = w.requestIdleCallback(apply);
      timeoutId = window.setTimeout(apply, IDLE_FALLBACK_MS);
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', apply);
    return () => {
      cancelled = true;
      mq.removeEventListener('change', apply);
      if (idleId !== undefined) (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return mode;
}
```

- [ ] **Step 4: Run the tests**

```bash
npm test -- heroMode
```
Expected: 8 passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/heroMode.ts src/components/hero/useHeroMode.ts src/components/hero/heroMode.test.ts
git commit -m "Add hero mode decision: 3D only on capable desktops after idle"
```

---

### Task 5: Generate and optimise the typewriter model (Meshy)

**Files:**
- Create: `public/models/typewriter.glb`
- Create: `docs/superpowers/plans/2026-10-15-model-notes.md`
- Modify: `package.json` (devDependency `@gltf-transform/cli`)

**Interfaces:**
- Produces: `public/models/typewriter.glb`, meshopt-compressed, < 1.5 MB, single scene, Y up, arbitrary scale (the scene normalises it).

- [ ] **Step 1: Load the Meshy tool schemas**

Use ToolSearch: `select:mcp__meshy-mcp-server__meshy_text_to_3d,mcp__meshy-mcp-server__meshy_text_to_3d_refine,mcp__meshy-mcp-server__meshy_get_task_status,mcp__meshy-mcp-server__meshy_download_model,mcp__meshy-mcp-server__meshy_list_tasks`.

- [ ] **Step 2: Confirm cost with the user, then create the preview task**

Tell the user: "Meshy preview with meshy-7.1 costs 20 credits (balance 843). Proceed?" Wait for yes.

Call `meshy_text_to_3d` with:
- `prompt`: `A single vintage mechanical desktop typewriter, mid-century design, clean stylized surfaces, smooth navy blue enamel body, round cream-colored keys in four rows with dark legends, two dark red ribbon spools on top, chrome carriage return lever and chrome trim, no paper, no table, no text, no logos, one cohesive object centered, product design render style`
- `negative_prompt`: `paper, table, desk, text, letters, logo, multiple objects, low poly blob, melted keys, blurry`
- `ai_model`: `meshy-7.1`
- `art_style`: `realistic`
- `topology`: `triangle`
- `target_polycount`: `40000`
- `should_remesh`: `true`

Record the returned `task_id` in `docs/superpowers/plans/2026-10-15-model-notes.md` immediately.

- [ ] **Step 3: Wait for the preview and inspect it**

Call `meshy_get_task_status` with the task id until `SUCCEEDED`. Download the preview GLB with `meshy_download_model` to `/private/tmp/claude-501/-Users-hermanisozols-git-automatizacijas-lv/b52b2e38-c309-46bd-8aa7-d43ba265f660/scratchpad/meshy/typewriter-preview.glb` (format `glb`).

Render a quick look without the app: 

```bash
npx @gltf-transform/cli@4 inspect "<scratchpad>/meshy/typewriter-preview.glb"
```
Expected: one scene, one or a few meshes, vertex count around the target. Also open the thumbnail URL from the task status in the browser (or `curl` it to the scratchpad and `Read` it) and judge the silhouette: four key rows visible, carriage on top, reads as a typewriter at 300 px. If it fails that bar, ask the user before spending another 20 credits on a second preview with the prompt adjusted to what went wrong (e.g. "keys clearly separated, each key a distinct cylinder"). Maximum two previews.

- [ ] **Step 4: Confirm cost, then refine with texture**

Tell the user: "Refine with texture costs 10 credits. Proceed?" Wait for yes.

Call `meshy_text_to_3d_refine` with `preview_task_id`, `enable_pbr: true`, `texture_prompt`: `navy blue enamel body with soft sheen, cream round keys, dark red ribbon spools, brushed chrome lever and trim, clean, no text`. Poll `meshy_get_task_status` until `SUCCEEDED`, then `meshy_download_model` (glb) to `<scratchpad>/meshy/typewriter-refined.glb`.

If any create call times out or errors, run `meshy_list_tasks` with `task_type: text-to-3d` before retrying so credits are not spent twice.

- [ ] **Step 5: Optimise into the repo**

```bash
npm i -D @gltf-transform/cli@4
mkdir -p public/models
npx gltf-transform optimize "<scratchpad>/meshy/typewriter-refined.glb" public/models/typewriter.glb \
  --compress meshopt --texture-compress webp --texture-size 1024 --simplify false
ls -l public/models/typewriter.glb
npx gltf-transform inspect public/models/typewriter.glb
```
Expected: size under 1,500,000 bytes. If it is over, rerun with `--texture-size 512`. If still over, run `npx gltf-transform simplify <in> <out> --ratio 0.6 --error 0.001` before `optimize`.

Record before/after sizes, texture count, and vertex count in `docs/superpowers/plans/2026-10-15-model-notes.md` together with both task ids and credits spent.

- [ ] **Step 6: Commit**

```bash
git add public/models/typewriter.glb docs/superpowers/plans/2026-10-15-model-notes.md package.json package-lock.json
git commit -m "Add optimised Meshy typewriter model for the hero"
```

---

### Task 6: Three.js scene components

**Files:**
- Modify: `package.json` (dependencies)
- Modify: `vite.config.ts` (manualChunks)
- Create: `src/components/hero/TypewriterScene.tsx`
- Create: `src/components/hero/Typewriter.tsx`
- Create: `src/components/hero/PlatenSheet.tsx`
- Create: `src/components/hero/paperTexture.ts`
- Create: `src/components/hero/useTypingLoop.ts`
- Test: `src/components/hero/paperTexture.test.ts`

**Interfaces:**
- Consumes: `typingMachine.ts` (Task 3).
- Produces:
  ```tsx
  // TypewriterScene.tsx
  export interface TypewriterSceneProps { staticLine?: boolean; onReady?: () => void; onContextLost?: () => void; }
  export default function TypewriterScene(props: TypewriterSceneProps): JSX.Element;
  // paperTexture.ts
  export interface PaperColors { paper: string; ink: string; rule: string; }
  export function readPaperColors(): PaperColors;     // from CSS tokens on :root
  export function drawPaper(ctx: CanvasRenderingContext2D, w: number, h: number, text: string, colors: PaperColors, font: string): void;
  export function layoutLines(text: string, maxChars: number): string[];
  ```

- [ ] **Step 1: Install three and r3f, split the chunk**

```bash
npm i three@0.170.0 @react-three/fiber@8.17.10 @react-three/drei@9.117.3
npm i -D @types/three@0.170.0
```

In `vite.config.ts` replace the `build` block with:

```ts
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('node_modules/@react-three') || id.includes('node_modules/three-stdlib')) {
            return 'three';
          }
          return undefined;
        },
      },
    },
  },
```

- [ ] **Step 2: Write the failing test for the paper layout helper**

Create `src/components/hero/paperTexture.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { layoutLines } from './paperTexture';

describe('layoutLines', () => {
  it('keeps a short line whole', () => {
    expect(layoutLines('Rēķini apstrādāti.', 24)).toEqual(['Rēķini apstrādāti.']);
  });
  it('wraps at word boundaries when over the limit', () => {
    expect(layoutLines('Dokumenti sakārtoti un nosūtīti.', 20)).toEqual(['Dokumenti sakārtoti', 'un nosūtīti.']);
  });
  it('returns one empty line for empty text', () => {
    expect(layoutLines('', 20)).toEqual(['']);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

```bash
npm test -- paperTexture
```
Expected: FAIL, cannot resolve `./paperTexture`.

- [ ] **Step 4: Implement the paper texture helpers**

Create `src/components/hero/paperTexture.ts`:

```ts
/*
  Draws the sheet that sits in the typewriter platen. Pure canvas 2D so it
  can be unit tested (layoutLines) and redrawn when the theme changes.
*/

export interface PaperColors {
  paper: string;
  ink: string;
  rule: string;
}

export function readPaperColors(): PaperColors {
  const s = getComputedStyle(document.documentElement);
  const hsl = (name: string) => `hsl(${s.getPropertyValue(name).trim()})`;
  return { paper: hsl('--card'), ink: hsl('--foreground'), rule: hsl('--border') };
}

export function layoutLines(text: string, maxChars: number): string[] {
  if (!text) return [''];
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const candidate = current ? `${current} ${w}` : w;
    if ([...candidate].length > maxChars && current) {
      lines.push(current);
      current = w;
    } else {
      current = candidate;
    }
  }
  lines.push(current);
  return lines;
}

export const PAPER_W = 1024;
export const PAPER_H = 768;
export const PAPER_FONT_PX = 58;
const RULE_GAP = 72;
const MARGIN_X = 96;
const FIRST_BASELINE = 150;

export function drawPaper(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  text: string,
  colors: PaperColors,
  font: string,
): void {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = colors.paper;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = colors.rule;
  ctx.lineWidth = 2;
  for (let y = FIRST_BASELINE + 14; y < h; y += RULE_GAP) {
    ctx.beginPath();
    ctx.moveTo(MARGIN_X - 24, y);
    ctx.lineTo(w - MARGIN_X + 24, y);
    ctx.stroke();
  }
  ctx.fillStyle = colors.ink;
  ctx.font = font;
  ctx.textBaseline = 'alphabetic';
  const lines = layoutLines(text, 24);
  lines.forEach((line, i) => {
    ctx.fillText(line, MARGIN_X, FIRST_BASELINE + i * RULE_GAP);
  });
}
```

- [ ] **Step 5: Run the test**

```bash
npm test -- paperTexture
```
Expected: 3 passed.

- [ ] **Step 6: Write the typing loop hook**

Create `src/components/hero/useTypingLoop.ts`:

```ts
import { useCallback, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { HERO_LINES, createTypingState, skip, tick, visibleText, type TypingState } from './typingMachine';

export interface TypingLoop {
  text: string;
  chars: number;
  phase: TypingState['phase'];
  /* 1 right after a keystroke, decays to 0 over ~90 ms; read in useFrame */
  strike: React.MutableRefObject<number>;
  skipLine: () => void;
}

const STRIKE_MS = 90;

export function useTypingLoop(staticLine: boolean): TypingLoop {
  const stateRef = useRef<TypingState>(createTypingState(HERO_LINES, performance.now(), { complete: staticLine }));
  const strike = useRef(0);
  const [snapshot, setSnapshot] = useState(() => ({
    text: visibleText(stateRef.current),
    chars: stateRef.current.chars,
    phase: stateRef.current.phase,
  }));

  useFrame((_, delta) => {
    if (strike.current > 0) strike.current = Math.max(0, strike.current - (delta * 1000) / STRIKE_MS);
    if (staticLine) return;
    const next = tick(stateRef.current, performance.now());
    if (next === stateRef.current) return;
    if (next.phase === 'typing' && next.chars > stateRef.current.chars) strike.current = 1;
    stateRef.current = next;
    setSnapshot({ text: visibleText(next), chars: next.chars, phase: next.phase });
  });

  const skipLine = useCallback(() => {
    if (staticLine) return;
    const next = skip(stateRef.current, performance.now());
    if (next === stateRef.current) return;
    stateRef.current = next;
    setSnapshot({ text: visibleText(next), chars: next.chars, phase: next.phase });
  }, [staticLine]);

  return { ...snapshot, strike, skipLine };
}
```

- [ ] **Step 7: Write the platen sheet**

Create `src/components/hero/PlatenSheet.tsx`:

```tsx
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PAPER_FONT_PX, PAPER_H, PAPER_W, drawPaper, readPaperColors } from './paperTexture';

interface Props {
  text: string;
  chars: number;
  phase: 'typing' | 'hold' | 'return';
  /* world units the carriage moves per character; tuned against the model */
  charStep?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
}

const FONT = `700 ${PAPER_FONT_PX}px "Sofia Sans Variable", "Helvetica Neue", Arial, sans-serif`;

export default function PlatenSheet({
  text, chars, phase, charStep = 0.012, position = [0, 1.05, -0.32], rotation = [-0.28, 0, 0], width = 1.5,
}: Props) {
  const group = useRef<THREE.Group>(null);
  const canvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = PAPER_W;
    c.height = PAPER_H;
    return c;
  }, []);
  const texture = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }, [canvas]);

  useEffect(() => {
    let alive = true;
    const paint = () => {
      if (!alive) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      drawPaper(ctx, PAPER_W, PAPER_H, text, readPaperColors(), FONT);
      texture.needsUpdate = true;
    };
    if (document.fonts?.load) document.fonts.load(FONT).then(paint, paint);
    else paint();
    const observer = new MutationObserver(paint);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [canvas, texture, text]);

  useEffect(() => () => texture.dispose(), [texture]);

  // carriage travel: paper moves left as characters are typed, returns on 'return'
  useFrame((_, delta) => {
    if (!group.current) return;
    const target = phase === 'return' ? 0 : -chars * charStep;
    const speed = phase === 'return' ? 10 : 18;
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, position[0] + target, speed, delta);
  });

  const height = width * (PAPER_H / PAPER_W);
  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh castShadow={false} receiveShadow={false}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={texture} roughness={0.95} metalness={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
```

- [ ] **Step 8: Write the typewriter mesh**

Create `src/components/hero/Typewriter.tsx`:

```tsx
import { useLayoutEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const MODEL_URL = '/models/typewriter.glb';
const TARGET_WIDTH = 2.4;
const STRIKE_DEPTH = 0.012;

/* Set to true in Task 8 if the Meshy texture clashes with the palette. */
export const PALETTE_OVERRIDE = false;
const INK = new THREE.Color('#1B2440');

interface Props {
  strike: React.MutableRefObject<number>;
  onClick?: () => void;
}

export default function Typewriter({ strike, onClick }: Props) {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const s = TARGET_WIDTH / Math.max(size.x, 0.0001);
    clone.scale.setScalar(s);
    box.setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    clone.position.set(-center.x, -box.min.y, -center.z);
    clone.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = false;
      m.receiveShadow = false;
      const mat = m.material as THREE.MeshStandardMaterial;
      if (PALETTE_OVERRIDE && mat) {
        m.material = new THREE.MeshStandardMaterial({
          color: INK, roughness: 0.55, metalness: 0.1, normalMap: mat.normalMap ?? null,
        });
      } else if (mat) {
        mat.roughness = Math.max(mat.roughness ?? 0.5, 0.45);
      }
    });
    return clone;
  }, [scene]);

  useLayoutEffect(() => () => {
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) (m.material as THREE.Material).dispose?.();
    });
  }, [model]);

  useFrame(() => {
    if (!group.current) return;
    group.current.position.y = -STRIKE_DEPTH * strike.current;
  });

  return (
    <group
      ref={group}
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = ''; }}
    >
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
```

- [ ] **Step 9: Write the scene**

Create `src/components/hero/TypewriterScene.tsx`:

```tsx
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Typewriter from './Typewriter';
import PlatenSheet from './PlatenSheet';
import { useTypingLoop } from './useTypingLoop';

export interface TypewriterSceneProps {
  /* first line fully typed, no animation (fallback capture, reduced motion) */
  staticLine?: boolean;
  onReady?: () => void;
  onContextLost?: () => void;
}

const MAX_YAW = THREE.MathUtils.degToRad(8);
const MAX_PITCH = THREE.MathUtils.degToRad(4);

function Rig({ pointer, staticLine, onReady }: { pointer: React.MutableRefObject<{ x: number; y: number }>; staticLine: boolean; onReady?: () => void }) {
  const group = useRef<THREE.Group>(null);
  const loop = useTypingLoop(staticLine);
  const readyRef = useRef(false);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * MAX_YAW, 6, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.current.y * MAX_PITCH, 6, delta);
    if (!readyRef.current && state.clock.elapsedTime > 0.05) {
      readyRef.current = true;
      onReady?.();
    }
  });

  return (
    <group ref={group} rotation={[0.08, -0.35, 0]}>
      <Typewriter strike={loop.strike} onClick={loop.skipLine} />
      <PlatenSheet text={loop.text} chars={loop.chars} phase={loop.phase} />
    </group>
  );
}

function ContextLossWatcher({ onLost }: { onLost?: () => void }) {
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: Event) => { e.preventDefault(); onLost?.(); };
    el.addEventListener('webglcontextlost', handler);
    return () => el.removeEventListener('webglcontextlost', handler);
  }, [gl, onLost]);
  return null;
}

export default function TypewriterScene({ staticLine = false, onReady, onContextLost }: TypewriterSceneProps) {
  const pointer = useRef({ x: 0, y: 0 });
  const wrapper = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapper}
      className="absolute inset-0"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.current.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      }}
      onPointerLeave={() => { pointer.current.x = 0; pointer.current.y = 0; }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.7, 4.4], fov: 30 }}
        frameloop={inView ? 'always' : 'never'}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[-3, 5, 3]} intensity={1.7} />
        <directionalLight position={[3, 2, -2]} intensity={0.5} />
        <directionalLight position={[0, 3, -4]} intensity={0.8} />
        <Suspense fallback={null}>
          <Rig pointer={pointer} staticLine={staticLine} onReady={onReady} />
          <ContactShadows position={[0, -0.005, 0]} opacity={0.45} scale={6} blur={2.2} far={2} resolution={256} frames={1} />
        </Suspense>
        <ContextLossWatcher onLost={onContextLost} />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 10: Build and lint**

```bash
npm run build && npm run lint
```
Expected: build succeeds with a separate `dist/assets/three-*.js` chunk; `index-*.js` gzip size within 10 KB of the baseline. Lint passes (warnings allowed, errors not).

- [ ] **Step 11: Commit**

```bash
git add package.json package-lock.json vite.config.ts src/components/hero
git commit -m "Add typewriter 3D scene: model, platen sheet with canvas text, typing loop"
```

---

### Task 7: Hero section with gate, fallback image and lazy scene

**Files:**
- Create: `src/components/hero/HeroSection.tsx`
- Delete: `src/components/HeroSection.tsx`
- Delete: `src/components/ProcessSheet.tsx` (only used by the old hero; confirmed by grep)
- Modify: `src/pages/Index.tsx:4` (import path)
- Create: `public/images/hero-typewriter.webp` (temporary placeholder until Task 8 captures the real one)

**Interfaces:**
- Consumes: `useHeroMode` (Task 4), `TypewriterScene` (Task 6).
- Produces: `<HeroSection />` default export; `data-hero-mode` and `data-hero-ready` attributes on the scene wrapper for tooling.

- [ ] **Step 1: Make a temporary placeholder image**

```bash
mkdir -p public/images
node -e "
const sharp=require('sharp');
sharp({create:{width:1200,height:900,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).webp({quality:80}).toFile('public/images/hero-typewriter.webp').then(()=>console.log('ok'))"
```

- [ ] **Step 2: Write the hero section**

Create `src/components/hero/HeroSection.tsx`:

```tsx
import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import { useHeroMode } from './useHeroMode';

const TypewriterScene = lazy(() => import('./TypewriterScene'));

const IMAGE_SRC = '/images/hero-typewriter.webp';
const IMAGE_ALT = 'Rakstāmmašīna, kas raksta: rēķini apstrādāti';

/* A failed chunk or GLB load must not take the page down: report and show the image. */
class SceneErrorBoundary extends React.Component<{ onError: () => void; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    console.error('hero scene failed', error);
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function HeroVisual() {
  const mode = useHeroMode();
  const [ready, setReady] = useState(false);
  const [lost, setLost] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onLost = useCallback(() => setLost(true), []);
  const show3d = mode === '3d' && !lost;

  return (
    <div className="relative aspect-[4/3] w-full" data-hero-mode={show3d ? '3d' : 'image'} data-hero-ready={ready ? '1' : '0'}>
      <img
        src={IMAGE_SRC}
        alt={IMAGE_ALT}
        width={1200}
        height={900}
        decoding="async"
        fetchPriority="low"
        className="absolute inset-0 h-full w-full object-contain"
        style={{ opacity: show3d && ready ? 0 : 1, transition: 'opacity 300ms ease' }}
      />
      {show3d && (
        <div className="absolute inset-0" style={{ opacity: ready ? 1 : 0, transition: 'opacity 300ms ease' }} aria-hidden="true">
          <SceneErrorBoundary onError={onLost}>
            <Suspense fallback={null}>
              <TypewriterScene onReady={onReady} onContextLost={onLost} />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
    </div>
  );
}

/* Tooling only: ?hero=capture renders the scene alone at 1200x900 with the first line typed. */
function CaptureStage() {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative" style={{ width: 1200, height: 900 }} data-hero-mode="capture" data-hero-ready={ready ? '1' : '0'}>
      <Suspense fallback={null}>
        <TypewriterScene staticLine onReady={() => setReady(true)} />
      </Suspense>
    </div>
  );
}

const HeroSection = () => {
  const mode = useHeroMode();
  if (mode === 'capture') return <CaptureStage />;

  return (
    <section className="wrap pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-24">
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h1 className="display-1 m-0">
            AI automatizācija <br className="hidden lg:inline" />
            darbiem, kas birojā <br className="hidden lg:inline" />
            atkārtojas katru dienu
          </h1>

          <p className="lede mt-6 lg:mt-8 text-foreground">
            Rēķinu ievade, līgumu sagatavošana, atbildes uz klientu jautājumiem. Uzbūvējam sistēmu, kas šos
            darbus izdara pati, un pieslēdzam to programmām, kuras jau lietojat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" onClick={() => trackCTAClick('bezmaksas_konsultacija', 'hero')} className="btn btn-solid">
              Pieteikt bezmaksas konsultāciju
            </Link>
            <Link to="/portfolio" onClick={() => trackCTAClick('skatit_darbus', 'hero')} className="btn btn-line">
              Skatīt paveiktos darbus
            </Link>
          </div>

          <p className="mt-4 mb-0 text-muted-foreground">Konsultācija ir bez maksas un bez saistībām.</p>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

Note: `useHeroMode` is called twice (section and visual). Both start at `image` and resolve identically; this keeps `HeroVisual` self-contained.

- [ ] **Step 3: Wire it in and remove the old files**

In `src/pages/Index.tsx` change `import HeroSection from '@/components/HeroSection';` to `import HeroSection from '@/components/hero/HeroSection';`.

```bash
git rm src/components/HeroSection.tsx src/components/ProcessSheet.tsx
grep -rn "ProcessSheet\|components/HeroSection'" src
```
Expected: no matches.

- [ ] **Step 4: Run it and look**

```bash
npm run dev -- --port 8080 &
sleep 3
node scripts/shoot.mjs "http://localhost:8080/?hero=3d" /tmp/hero-3d.png
node scripts/shoot.mjs "http://localhost:8080/" /tmp/hero-image.png
node scripts/shoot.mjs "http://localhost:8080/" /tmp/hero-mobile.png --mobile
```
Open each. Expected: `/tmp/hero-3d.png` shows the typewriter on the right with text on the platen sheet; `/tmp/hero-image.png` (webdriver, no override) shows the transparent placeholder, so an empty right column; mobile stacks the visual under the text. Check the browser console in the dev run: no errors, no React warnings.

Tune the constants if needed so the composition reads: `PlatenSheet` `position`/`rotation`/`width` so the sheet sits in the platen slot of the generated model, `camera.position`, `Rig` base rotation, `charStep` so the sheet travels about one key width per character. Record final values in the model notes file.

- [ ] **Step 5: Build, lint, test**

```bash
npm run build && npm run lint && npm test
```
Expected: all pass. `dist/assets/TypewriterScene-*.js` exists (lazy chunk) and `index-*.js` within budget.

- [ ] **Step 6: Commit**

```bash
git add -A src/components/hero src/components/HeroSection.tsx src/components/ProcessSheet.tsx src/pages/Index.tsx public/images/hero-typewriter.webp
git commit -m "Replace hero with lazy 3D typewriter over a static fallback image"
```

---

### Task 8: Fallback image capture, palette check, visual and failure tests

**Files:**
- Create: `scripts/capture-hero.mjs`
- Create: `scripts/hero-e2e.mjs`
- Modify: `public/images/hero-typewriter.webp` (real capture)
- Modify: `src/components/hero/Typewriter.tsx` (`PALETTE_OVERRIDE` only if needed)
- Modify: `package.json` (scripts)

**Interfaces:**
- Consumes: `?hero=capture` stage (Task 7), `data-hero-ready` attribute.
- Produces: `npm run hero:capture <base-url>`, `npm run hero:e2e <base-url>`.

- [ ] **Step 1: Write the capture script**

Create `scripts/capture-hero.mjs`:

```js
// Usage: node scripts/capture-hero.mjs http://localhost:8080
import { chromium } from 'playwright';
import sharp from 'sharp';

const base = process.argv[2] ?? 'http://localhost:8080';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(`${base}/?hero=capture`, { waitUntil: 'networkidle' });
await page.waitForSelector('[data-hero-mode="capture"][data-hero-ready="1"]', { timeout: 30000 });
await page.waitForTimeout(800); // let the contact shadow and fonts settle
const png = await page.locator('[data-hero-mode="capture"] canvas').screenshot({ omitBackground: true, type: 'png' });
await browser.close();
await sharp(png).resize(1200, 900, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 82, alphaQuality: 90 }).toFile('public/images/hero-typewriter.webp');
console.log('wrote public/images/hero-typewriter.webp');
```

Add scripts to `package.json`:

```json
"hero:capture": "node scripts/capture-hero.mjs",
"hero:e2e": "node scripts/hero-e2e.mjs"
```

- [ ] **Step 2: Capture against the dev server**

```bash
npm run dev -- --port 8080 &
sleep 3
npm run hero:capture http://localhost:8080
ls -l public/images/hero-typewriter.webp
```
Expected: file written, under 150 KB. Open it: typewriter with "Rēķini apstrādāti." on the sheet, transparent background.

- [ ] **Step 3: Palette check**

Screenshot light and dark:

```bash
node scripts/shoot.mjs "http://localhost:8080/?hero=3d" /tmp/hero-light.png
node scripts/shoot.mjs "http://localhost:8080/?hero=3d" /tmp/hero-dark.png --dark
```
Judge: body reads as navy ink next to the `#1B2440` headline, keys read as paper, spools as carmine. If the Meshy texture is off-palette (for example teal or grey body), set `PALETTE_OVERRIDE = true` in `Typewriter.tsx`, rebuild, re-screenshot, and re-run step 2 so the fallback matches. Record the decision in the model notes.

- [ ] **Step 4: Write the failure-mode e2e script**

Create `scripts/hero-e2e.mjs`:

```js
// Usage: node scripts/hero-e2e.mjs http://localhost:8080
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:8080';
const browser = await chromium.launch();
let failures = 0;
const check = (name, ok) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) failures++; };

// 1. automation without override gets the image
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  check('webdriver -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  await page.close();
}

// 2. override renders 3d and becomes ready; context loss falls back to image
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hero-mode="3d"][data-hero-ready="1"]', { timeout: 30000 });
  check('3d override -> ready', true);
  await page.evaluate(() => {
    const c = document.querySelector('[data-hero-mode="3d"] canvas');
    const gl = c.getContext('webgl2');
    gl.getExtension('WEBGL_lose_context').loseContext();
  });
  await page.waitForTimeout(500);
  check('context loss -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  check('no canvas after context loss', (await page.locator('[data-hero-mode] canvas').count()) === 0);
  await page.close();
}

// 3. reduced motion switched on after load unmounts the scene
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hero-mode="3d"][data-hero-ready="1"]', { timeout: 30000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(500);
  // override '3d' is stronger than reduced motion by design, so test the real path on a non-override page:
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  check('reduced motion -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  await page.close();
}

// 4. a missing model falls back to the image instead of crashing the page
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.route('**/models/typewriter.glb', (route) => route.fulfill({ status: 404, body: 'gone' }));
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  check('missing GLB -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  check('missing GLB keeps the h1', (await page.locator('h1').count()) === 1);
  await page.close();
}

// 5. mobile viewport gets the image
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const img = page.locator('[data-hero-mode] img');
  check('mobile shows image with alt', (await img.getAttribute('alt'))?.length > 10);
  await page.close();
}

await browser.close();
if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
```

- [ ] **Step 5: Run it**

```bash
npm run hero:e2e http://localhost:8080
```
Expected: every line `ok`, exit 0. If `context loss -> image mode` fails, confirm `onContextLost` reaches `HeroVisual` (`setLost(true)`) and that `show3d` drops the scene.

- [ ] **Step 6: Full visual review**

```bash
node scripts/shoot.mjs "http://localhost:8080/?hero=3d" /tmp/home-desktop.png --full
node scripts/shoot.mjs "http://localhost:8080/" /tmp/home-mobile.png --mobile --full
node scripts/shoot.mjs "http://localhost:8080/?hero=3d" /tmp/home-dark.png --dark --full
node scripts/shoot.mjs "http://localhost:8080/" /tmp/home-reduced.png --reduced
```
Open all four and check against DESIGN.md: left aligned, no cards, no icons, tokens only, hero visual sized to the right column, image fallback shows the typed line. Fix anything off before committing.

- [ ] **Step 7: Commit**

```bash
git add scripts/capture-hero.mjs scripts/hero-e2e.mjs public/images/hero-typewriter.webp package.json src/components/hero/Typewriter.tsx docs/superpowers/plans/2026-10-15-model-notes.md
git commit -m "Capture hero fallback image, add hero failure-mode e2e checks"
```

---

### Task 9: Homepage audit and process progress rule

**Files:**
- Modify: `src/components/HomeServices.tsx:50-52`
- Modify: `src/components/HomeProcess.tsx`
- Create: `src/hooks/useScrollProgress.ts`
- Modify: `src/index.css` (append)
- Test: `src/hooks/scrollProgress.test.ts`

**Interfaces:**
- Produces: `export function scrollProgress(top: number, height: number, viewportH: number): number` (0..1) and `export function useScrollProgress<T extends HTMLElement>(): [React.RefObject<T>, number]`.

- [ ] **Step 1: Remove the DESIGN.md violation in HomeServices**

DESIGN.md "Avoid" lists "Uzzināt vairāk". In `src/components/HomeServices.tsx` delete the whole `<span className="lg:col-span-2 lg:text-right ...">Uzzināt vairāk</span>` element, and change the `<p>` to `lg:col-span-8`.

- [ ] **Step 2: Write the failing test for the progress maths**

Create `src/hooks/scrollProgress.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { scrollProgress } from './useScrollProgress';

describe('scrollProgress', () => {
  it('is 0 when the section top is still below the viewport bottom', () => {
    expect(scrollProgress(900, 600, 800)).toBe(0);
  });
  it('is 1 once the section bottom has passed 40% of the viewport height', () => {
    expect(scrollProgress(-600 + 320, 600, 800)).toBe(1);
  });
  it('is in between while scrolling through', () => {
    const p = scrollProgress(400, 600, 800);
    expect(p).toBeGreaterThan(0);
    expect(p).toBeLessThan(1);
  });
  it('clamps', () => {
    expect(scrollProgress(5000, 600, 800)).toBe(0);
    expect(scrollProgress(-5000, 600, 800)).toBe(1);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

```bash
npm test -- scrollProgress
```
Expected: FAIL, cannot resolve `./useScrollProgress`.

- [ ] **Step 4: Implement the hook**

Create `src/hooks/useScrollProgress.ts`:

```ts
import { useEffect, useRef, useState } from 'react';

/*
  Progress of an element through the viewport: 0 when its top reaches the
  viewport bottom, 1 when its bottom reaches 40% of the viewport height.
*/
export function scrollProgress(top: number, height: number, viewportH: number): number {
  const start = viewportH;             // top at viewport bottom
  const end = viewportH * 0.4 - height; // bottom at 40% of viewport
  const raw = (start - top) / (start - end);
  return Math.min(1, Math.max(0, raw));
}

export function useScrollProgress<T extends HTMLElement>(): [React.RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      setProgress(scrollProgress(r.top, r.height, window.innerHeight));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return [ref, progress];
}
```

- [ ] **Step 5: Run the test**

```bash
npm test -- scrollProgress
```
Expected: 4 passed.

- [ ] **Step 6: Apply it to HomeProcess**

In `src/components/HomeProcess.tsx`:

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import { useScrollProgress } from '@/hooks/useScrollProgress';

// ...steps array unchanged...

const HomeProcess = () => {
  const [listRef, progress] = useScrollProgress<HTMLOListElement>();
  return (
    <section className="wrap band">
      <h2 className="display-2 m-0 max-w-[14em]">Kā notiek AI automatizācijas ieviešana?</h2>

      <ol
        ref={listRef}
        className="progress-rule list-none p-0 m-0 mt-10 lg:mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
        style={{ '--progress': progress } as React.CSSProperties}
      >
        {steps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-foreground pt-4 pb-8">
            <span aria-hidden="true" className="font-display font-extrabold text-7xl leading-none text-primary">
              {i + 1}
            </span>
            <h3 className="mt-3 mb-2 text-xl font-bold leading-snug">{step.title}</h3>
            <p className="m-0 text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      {/* closing paragraph unchanged */}
    </section>
  );
};
```

Append to `src/index.css`:

```css
/* HomeProcess: the rule above the steps fills with the marker as the section scrolls into view. */
.progress-rule {
  position: relative;
}
.progress-rule::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: calc(var(--progress, 0) * 100%);
  background: hsl(var(--marker));
  pointer-events: none;
  z-index: 1;
}
```

The `<li>` elements keep their own `border-t-2`; the marker bar overlays the ink rule across the whole list width as the user scrolls.

- [ ] **Step 7: Audit the remaining Home* components**

Open each of `HomeClients.tsx`, `HomeCases.tsx`, `HomeWhy.tsx`, `HomeIndustries.tsx`, `HomeLeadForm.tsx`, `HomeFAQ.tsx` and check against DESIGN.md with this list; fix what fails:

- `text-center` or `mx-auto` on text: remove.
- `rounded-full`, `rounded-lg`, `rounded-xl`: change to `rounded-md` or none.
- Lucide icons used as decoration: remove.
- Hard-coded colours (`#`, `blue-`, `gray-`, `slate-`, `white` as colour): replace with tokens.
- "Uzzināt vairāk", "→", "·" meta separators, em dashes in copy: remove or rewrite.
- `hover:scale`, `hover:-translate`, `animate-`: remove.
- Section wrapper is `wrap band` (or `band-ink` for the dark band) and headings use `display-2`.

```bash
grep -n "text-center\|mx-auto\|rounded-full\|rounded-xl\|rounded-lg\|hover:scale\|animate-\|Uzzināt vairāk\|→\|—" src/components/Home*.tsx
```
Expected after fixes: no matches (or only ones you can justify in the commit message).

- [ ] **Step 8: Look, then build, lint, test**

```bash
node scripts/shoot.mjs "http://localhost:8080/" /tmp/home-after-audit.png --full
npm run build && npm run lint && npm test
```
Open the screenshot; scroll test by hand in the browser: the marker bar above the steps fills as the section scrolls up.

- [ ] **Step 9: Commit**

```bash
git add src/components/Home*.tsx src/hooks/useScrollProgress.ts src/hooks/scrollProgress.test.ts src/index.css
git commit -m "Homepage audit against DESIGN.md, scroll-filled marker rule on process steps"
```

---

### Task 10: Prerender every route and hydrate

**Files:**
- Create: `src/lib/lazyPage.tsx`
- Modify: `src/App.tsx` (lazy imports, remove Suspense, export `preloadRoute`)
- Modify: `src/main.tsx`
- Modify: `src/components/Header.tsx:45-51`
- Modify: `index.html` (theme init script)
- Create: `scripts/prerender-core.mjs`
- Create: `scripts/prerender.mjs`
- Create: `scripts/check-hydration.mjs`
- Test: `scripts/prerender-core.test.mjs`
- Modify: `package.json` (scripts)
- Modify: `vercel.json` (rewrite destination)

**Interfaces:**
- Produces:
  ```ts
  // src/lib/lazyPage.tsx
  export function lazyPage<P>(importer: () => Promise<{ default: React.ComponentType<P> }>): React.ComponentType<P> & { preload: () => Promise<void> };
  // src/App.tsx
  export function preloadRoute(pathname: string): Promise<void>;
  // scripts/prerender-core.mjs
  export function routesFromSitemap(xml: string): string[];           // pathnames, deduped, '/' first
  export function checkDocument(html: string, route: string): string[]; // error messages, empty when ok
  export function stripRuntimeScripts(html: string, keepSrcs: Set<string>): string;
  export function outputPathFor(route: string, distDir: string): string;
  ```

- [ ] **Step 1: Write the failing tests for the core helpers**

Create `scripts/prerender-core.test.mjs`:

```js
import { describe, it, expect } from 'vitest';
import { routesFromSitemap, checkDocument, stripRuntimeScripts, outputPathFor } from './prerender-core.mjs';

describe('routesFromSitemap', () => {
  it('extracts pathnames, dedupes, root first', () => {
    const xml = `<urlset><url><loc>https://automatizacijas.lv/blog</loc></url><url><loc>https://automatizacijas.lv/</loc></url><url><loc>https://automatizacijas.lv/blog</loc></url></urlset>`;
    expect(routesFromSitemap(xml)).toEqual(['/', '/blog']);
  });
});

describe('checkDocument', () => {
  const good = `<html><head><title>T</title><meta name="description" content="d"></head><body><h1>H</h1></body></html>`;
  it('accepts a complete document', () => {
    expect(checkDocument(good, '/x')).toEqual([]);
  });
  it('reports missing title, description, h1', () => {
    const errs = checkDocument('<html><head></head><body></body></html>', '/x');
    expect(errs.join(' ')).toMatch(/title/);
    expect(errs.join(' ')).toMatch(/description/);
    expect(errs.join(' ')).toMatch(/h1/);
  });
  it('reports more than one h1', () => {
    expect(checkDocument(good.replace('<h1>H</h1>', '<h1>H</h1><h1>G</h1>'), '/x').join(' ')).toMatch(/one h1/);
  });
});

describe('stripRuntimeScripts', () => {
  it('removes analytics scripts that were not in the shell', () => {
    const html = `<head><script async src="https://www.googletagmanager.com/gtag/js?id=G-1"></script><script src="https://www.clarity.ms/tag/abc"></script></head>`;
    const out = stripRuntimeScripts(html, new Set(['https://www.googletagmanager.com/gtag/js?id=G-1']));
    expect(out).toContain('gtag/js?id=G-1');
    expect(out).not.toContain('clarity.ms');
  });
});

describe('outputPathFor', () => {
  it('maps / to dist/index.html and /a/b to dist/a/b/index.html', () => {
    expect(outputPathFor('/', 'dist')).toBe('dist/index.html');
    expect(outputPathFor('/a/b', 'dist')).toBe('dist/a/b/index.html');
  });
});
```

- [ ] **Step 2: Run to verify failure**

```bash
npm test -- prerender-core
```
Expected: FAIL, cannot find `./prerender-core.mjs`.

- [ ] **Step 3: Implement the core helpers**

Create `scripts/prerender-core.mjs`:

```js
import path from 'node:path';

export function routesFromSitemap(xml) {
  const routes = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const unique = [...new Set(routes.map((r) => (r !== '/' && r.endsWith('/') ? r.slice(0, -1) : r)))];
  unique.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
  return unique;
}

export function checkDocument(html, route) {
  const errors = [];
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${route}: missing <title>`);
  if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/.test(html) && !/<meta[^>]+content="[^"]+"[^>]+name="description"/.test(html)) {
    errors.push(`${route}: missing meta description`);
  }
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length === 0) errors.push(`${route}: missing <h1>`);
  if (h1s.length > 1) errors.push(`${route}: expected exactly one h1, found ${h1s.length}`);
  return errors;
}

const RUNTIME_HOSTS = ['www.googletagmanager.com', 'www.google-analytics.com', 'www.clarity.ms'];

export function stripRuntimeScripts(html, keepSrcs) {
  return html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>\s*<\/script>/g, (tag, src) => {
    const host = (() => { try { return new URL(src).host; } catch { return ''; } })();
    if (RUNTIME_HOSTS.includes(host) && !keepSrcs.has(src)) return '';
    return tag;
  });
}

export function outputPathFor(route, distDir) {
  return route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

export function scriptSrcs(html) {
  return new Set([...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]));
}
```

- [ ] **Step 4: Run the tests**

```bash
npm test -- prerender-core
```
Expected: 6 passed.

- [ ] **Step 5: Add the preloadable lazy page wrapper**

Create `src/lib/lazyPage.tsx`:

```tsx
import React, { useEffect, useReducer } from 'react';
import Loader from '@/components/Loader';

/*
  Like React.lazy, but without Suspense: when the module has been preloaded
  (main.tsx does this for the current route before hydrating) the page
  renders synchronously, so prerendered HTML hydrates without SSR markers.
*/
export function lazyPage<P extends object>(importer: () => Promise<{ default: React.ComponentType<P> }>) {
  let Loaded: React.ComponentType<P> | null = null;
  let pending: Promise<void> | null = null;
  const preload = () => {
    if (!pending) pending = importer().then((m) => { Loaded = m.default; });
    return pending;
  };
  const Page = (props: P) => {
    const [, rerender] = useReducer((x: number) => x + 1, 0);
    useEffect(() => {
      if (!Loaded) preload().then(rerender);
    }, []);
    if (Loaded) return <Loaded {...props} />;
    return <Loader />;
  };
  Page.preload = preload;
  return Page as React.ComponentType<P> & { preload: () => Promise<void> };
}
```

- [ ] **Step 6: Rewrite App.tsx to use it and export preloadRoute**

In `src/App.tsx`:
- Replace `import { Suspense, lazy } from "react";` with `import { lazyPage } from "@/lib/lazyPage";`.
- Replace every `lazy(() => import("./pages/X"))` with `lazyPage(() => import("./pages/X"))`.
- Remove `<Suspense fallback={<Loader />}>` and its closing tag, keep the `<Routes>` inside. Remove the `Loader` import if unused.
- Add before `const queryClient`:

```ts
const routeTable: { pattern: RegExp; page: { preload: () => Promise<void> } }[] = [
  { pattern: /^\/$/, page: Index },
  { pattern: /^\/services$/, page: Services },
  { pattern: /^\/portfolio$/, page: Portfolio },
  { pattern: /^\/training$/, page: Training },
  { pattern: /^\/pricing$/, page: Pricing },
  { pattern: /^\/blog$/, page: Blog },
  { pattern: /^\/blog\/[^/]+$/, page: BlogPost },
  { pattern: /^\/contact$/, page: Contact },
  { pattern: /^\/kas-ir-maksligais-intelekts$/, page: KasIrMaksligaisIntelekts },
  { pattern: /^\/chatbotu-izstrade$/, page: ChatbotuIzstrade },
  { pattern: /^\/procesu-automatizacija$/, page: ProcesuAutomatizacija },
  { pattern: /^\/majaslapu-izstrade$/, page: MajaslapuIzstrade },
  { pattern: /^\/privacy$/, page: Privacy },
  { pattern: /^\/dokumentu-automatizacija$/, page: DokumentuAutomatizacija },
  { pattern: /^\/gramatvedibas-automatizacija$/, page: GramatvedibadAutomatizacija },
  { pattern: /^\/ai-platformu-izstrade$/, page: AiPlatformuIzstrade },
  { pattern: /^\/datu-analize$/, page: DatuAnalize },
  { pattern: /^\/ai-darbinieki$/, page: AiDarbinieki },
  { pattern: /^\/nozares$/, page: Nozares },
  { pattern: /^\/nozares\/gramatvediba-un-finanses$/, page: NozareGramatvediba },
  { pattern: /^\/nozares\/e-komercija$/, page: NozareEkomercija },
  { pattern: /^\/nozares\/razosana$/, page: NozareRazosana },
  { pattern: /^\/nozares\/logistika$/, page: NozareLogistika },
  { pattern: /^\/nozares\/juridiskas-firmas$/, page: NozareJuridiskasFirmas },
];

export function preloadRoute(pathname: string): Promise<void> {
  const clean = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const hit = routeTable.find((r) => r.pattern.test(clean));
  return (hit ? hit.page : NotFound).preload();
}
```

Check that the route paths in `routeTable` match the `<Route path=...>` list exactly (there are 25 routes plus `*`).

- [ ] **Step 7: Hydrate in main.tsx**

Replace `src/main.tsx` with:

```tsx
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App, { preloadRoute } from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  preloadRoute(window.location.pathname).then(() => hydrateRoot(container, app));
} else {
  createRoot(container).render(app);
}
```

- [ ] **Step 8: Remove the hydration mismatch in Header and avoid the theme flash**

In `src/components/Header.tsx` replace

```ts
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
```

with

```ts
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem('theme') === 'dark') setIsDarkMode(true);
    } catch { /* storage blocked */ }
  }, []);
```

and change the existing theme effect so it does not write `light` before the stored value has been read:

```ts
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);
    try { localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); } catch { /* storage blocked */ }
  }, [isDarkMode]);
```

Wait: on first paint `isDarkMode` is false and this effect writes `light` before the read effect runs. Order the effects so the read effect is declared first; React runs effects in declaration order, and the read effect's `setIsDarkMode(true)` re-runs the write effect with `dark`. But the first write already overwrote the stored `dark`. Fix by reading synchronously into a ref:

```ts
  const storedTheme = useRef<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    try { storedTheme.current = localStorage.getItem('theme'); } catch { storedTheme.current = null; }
    if (storedTheme.current === 'dark') setIsDarkMode(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);
    if (!isDarkMode && storedTheme.current === 'dark') return; // first pass, before the read applied
    try { localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); } catch { /* storage blocked */ }
  }, [isDarkMode]);
```

Use this final version (import `useRef` if not already imported).

In `index.html`, add as the first child of `<head>` after the charset/viewport metas:

```html
    <script>
      try { if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark-mode'); } catch (e) {}
    </script>
```

- [ ] **Step 9: Write the prerender script**

Create `scripts/prerender.mjs`:

```js
// Runs after `vite build`: renders every sitemap route to dist/<route>/index.html.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { preview } from 'vite';
import { chromium } from 'playwright';
import { routesFromSitemap, checkDocument, stripRuntimeScripts, outputPathFor, scriptSrcs } from './prerender-core.mjs';

const dist = 'dist';
const shellPath = path.join(dist, 'index.html');
const appShellPath = path.join(dist, 'app.html');
if (!existsSync(shellPath)) { console.error('dist/index.html missing, run vite build first'); process.exit(1); }

// keep the untouched shell for client-side-only routes (404, unknown URLs)
copyFileSync(shellPath, appShellPath);
const shell = readFileSync(shellPath, 'utf8');
const keep = scriptSrcs(shell);
const routes = routesFromSitemap(readFileSync('public/sitemap.xml', 'utf8'));

const server = await preview({ preview: { port: 4179, strictPort: false, open: false }, logLevel: 'silent' });
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: 'lv-LV' });
// cookie consent decided so the banner is not baked into the HTML
await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
const page = await context.newPage();
const errors = [];

for (const route of routes) {
  const url = `${base}${route}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.title.length > 0 && document.querySelector('h1') !== null, null, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(150);
  let html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
  html = stripRuntimeScripts(html, keep);
  const errs = checkDocument(html, route);
  if (errs.length) { errors.push(...errs); console.error('FAIL', route, errs.join('; ')); continue; }
  const out = outputPathFor(route, dist);
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log('ok  ', route, '->', out);
}

await browser.close();
await server.close();
if (errors.length) { console.error(`\n${errors.length} route(s) failed prerender`); process.exit(1); }
console.log(`\nprerendered ${routes.length} routes`);
```

Update `package.json` scripts:

```json
"build": "vite build && node scripts/prerender.mjs",
"build:spa": "vite build",
"prerender": "node scripts/prerender.mjs",
"check:hydration": "node scripts/check-hydration.mjs"
```

- [ ] **Step 10: Point the SPA rewrite at the untouched shell**

`vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/app.html" }]
}
```

- [ ] **Step 11: Write the hydration check**

Create `scripts/check-hydration.mjs`:

```js
// Visits every prerendered route on a running preview server and fails on hydration errors.
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { routesFromSitemap } from './prerender-core.mjs';

const base = (process.argv[2] ?? 'http://localhost:4173').replace(/\/$/, '');
const routes = routesFromSitemap(readFileSync('public/sitemap.xml', 'utf8'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
let failures = 0;

for (const route of routes) {
  const problems = [];
  const onConsole = (msg) => {
    const t = msg.text();
    if (/hydrat|did not match|Expected server HTML|Minified React error #4(18|23|25)/i.test(t)) problems.push(t.slice(0, 160));
  };
  page.on('console', onConsole);
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message.slice(0, 160)}`));
  await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const h1 = await page.locator('h1').count();
  page.off('console', onConsole);
  if (problems.length || h1 !== 1) { failures++; console.error('FAIL', route, problems.join(' | '), h1 !== 1 ? `h1 count ${h1}` : ''); }
  else console.log('ok  ', route);
}
await browser.close();
if (failures) { console.error(`${failures} route(s) with hydration problems`); process.exit(1); }
```

- [ ] **Step 12: Build, prerender, check**

```bash
npm run build
ls dist/index.html dist/app.html dist/dokumentu-automatizacija/index.html dist/blog/ai-terminu-vardnica/index.html
grep -o "<title>[^<]*</title>" dist/dokumentu-automatizacija/index.html
```
Expected: all files exist; the title is the page's own, not the homepage's.

```bash
npm run preview -- --port 4173 &
sleep 2
npm run check:hydration http://localhost:4173
```
Expected: every route `ok`. For any FAIL, read the console text: a mismatch names the component; fix the initial state so server and client render the same (same pattern as Header in step 8), rebuild, rerun.

Also check the dev server still works unprerendered (`npm run dev`, open `/`), and that the production build renders the 3D hero on a real browser visit (`?hero=3d` not needed; open http://localhost:4173/ in Chrome, confirm the typewriter appears after about 1.5 s).

- [ ] **Step 13: Lint and unit tests**

```bash
npm run lint && npm test
```
Expected: pass.

- [ ] **Step 14: Commit**

```bash
git add src/lib/lazyPage.tsx src/App.tsx src/main.tsx src/components/Header.tsx index.html scripts/prerender-core.mjs scripts/prerender-core.test.mjs scripts/prerender.mjs scripts/check-hydration.mjs package.json vercel.json
git commit -m "Prerender every sitemap route with Playwright and hydrate without Suspense"
```

---

### Task 11: Vercel preview deployment and 404 behaviour

**Files:**
- Modify: `docs/superpowers/plans/2026-10-15-model-notes.md` (append deploy notes) or create `docs/deploy.md`

**Interfaces:**
- Produces: `docs/deploy.md` with the exact deploy commands; a preview URL for the user.

- [ ] **Step 1: Link the checkout to the Vercel project**

```bash
npx vercel@latest link --yes --scope hozols-projects --project baltai
```
Expected: `.vercel/project.json` created (already gitignored in Task 1).

- [ ] **Step 2: Build with the Vercel CLI locally and deploy a preview**

```bash
npx vercel@latest build
npx vercel@latest deploy --prebuilt
```
Expected: a preview URL printed. `vercel build` runs `npm run build`, which includes the prerender, on this machine, so the Vercel build image never needs Chromium.

- [ ] **Step 3: Verify static routes and the 404 path on the preview**

The project has SSO protection on previews, so use the CLI's authenticated fetch:

```bash
URL=<preview-url>
npx vercel@latest curl "$URL/dokumentu-automatizacija" -s | grep -o "<title>[^<]*</title>"
npx vercel@latest curl "$URL/nekas-te-nav" -s | grep -o "<title>[^<]*</title>"
npx vercel@latest curl "$URL/models/typewriter.glb" -s -o /dev/null -w "%{http_code} %{size_download}\n"
```
Expected: first prints the document-automation title; second prints the shell's default title (from `app.html`), not a page title, and the client then renders the 404 page; third prints `200` and the GLB size. If `vercel curl` is unavailable in this CLI version, open the URLs in Chrome while logged in to Vercel and check the title and the Network tab instead.

- [ ] **Step 4: Write deploy.md**

Create `docs/deploy.md`:

```markdown
# Deploying automatizacijas.lv

Production is the Vercel project `baltai` (team hozols-projects). Builds run
locally because the prerender needs Chromium.

    npm ci
    npx playwright install chromium
    npx vercel build            # preview build, runs vite build + prerender
    npx vercel deploy --prebuilt

For production, from `main` after the preview was approved:

    npx vercel build --prod
    npx vercel deploy --prebuilt --prod

`dist/app.html` is the client-side shell for unknown URLs; every sitemap
route has its own `index.html`.
```

- [ ] **Step 5: Commit and hand the preview URL to the user**

```bash
git add docs/deploy.md
git commit -m "Document the prebuilt Vercel deploy flow"
```
Tell the user the preview URL.

---

### Task 12: Keyword map from DataForSEO

**Files:**
- Create: `docs/seo/keyword-map.md`
- Create: `docs/seo/dfs-raw.json`

**Interfaces:**
- Produces: a table with one row per sitemap route (24 non-blog routes; blog posts get one row each with only title/description): `route | primary keyword | monthly volume (LV) | title | H1 | description`.

- [ ] **Step 1: Load the DFS tools**

ToolSearch: `select:mcp__dfs-mcp__kw_data_google_ads_search_volume,mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas,mcp__dfs-mcp__serp_organic_live_advanced,mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords`.

- [ ] **Step 2: Search volumes for the seed terms**

Call `kw_data_google_ads_search_volume` with `location_name: "Latvia"`, `language_code: "lv"`, keywords:

```
grāmatvedības automatizācija, dokumentu automatizācija, rēķinu apstrāde, automātiska rēķinu apstrāde, AI čatbots, čatbota izstrāde, čatbots mājaslapai, procesu automatizācija, biznesa procesu automatizācija, mākslīgais intelekts uzņēmumiem, AI risinājumi uzņēmumiem, AI automatizācija, datu analīze uzņēmumiem, mājaslapu izstrāde, AI apmācības, AI kursi, automatizācija Latvijā, AI darbinieki, AI aģenti, kas ir mākslīgais intelekts
```

Save the raw response to `docs/seo/dfs-raw.json` under key `volumes`.

- [ ] **Step 3: Keyword ideas for the three core services**

Call `dataforseo_labs_google_keyword_ideas` three times with `location_name: "Latvia"`, `language_code: "lv"`, `limit: 30`, keywords `["grāmatvedības automatizācija"]`, `["dokumentu automatizācija"]`, `["čatbots"]`. Append under `ideas` in the raw file.

- [ ] **Step 4: What the site ranks for today**

Call `dataforseo_labs_google_ranked_keywords` with `target: "automatizacijas.lv"`, `location_name: "Latvia"`, `language_code: "lv"`, `limit: 50`. Append under `ranked`.

- [ ] **Step 5: Top 10 for the three core terms**

Call `serp_organic_live_advanced` with `location_name: "Latvia"`, `language_code: "lv"`, `depth: 10` for each of `grāmatvedības automatizācija`, `dokumentu automatizācija`, `AI čatbots`. Append under `serp`. Note which titles the top results use.

- [ ] **Step 6: Write the keyword map**

Create `docs/seo/keyword-map.md`:

```markdown
# Keyword map, 2026-10-15

Source: DataForSEO, location Latvia, language lv. "no data" means the API
returned no volume; the title was chosen by judgement.

| Route | Primary keyword | Volume/mo | Title (≤60) | H1 | Description (≤155) |
| --- | --- | --- | --- | --- | --- |
| / | ... | ... | ... | ... | ... |
```

Rules for the rows:
- Primary keyword = the highest-volume term from the data whose intent matches the page.
- Title: keyword first, then a plain benefit, then ` | automatizacijas.lv`, within 60 characters.
- H1: sentence case, contains the keyword or its natural inflection, no brand.
- Description: one or two sentences, what the page offers and for whom, within 155 characters, no invented numbers.
- Blog rows: keep the post's existing H1; set title and description only.

Add a "Findings" section under the table: which terms have real volume, which have none, what the top 10 titles look like for the three core terms, and the current ranked keywords.

- [ ] **Step 7: Commit**

```bash
git add docs/seo/keyword-map.md docs/seo/dfs-raw.json
git commit -m "Add DataForSEO keyword map for every route"
```

---

### Task 13: Apply the keyword map to every page

**Files:**
- Modify: every file in `src/pages/` that has a `<Helmet>` (title, description, og:title, og:description, twitter:title, twitter:description) and the `h1` or `PageHero title`
- Modify: translation strings when the H1 or meta comes from `t(...)` (find with `grep -rn "'training.title'\|blog.meta.title\|contact.title" src`)
- Modify: `index.html` default title/description to match the `/` row

**Interfaces:**
- Consumes: `docs/seo/keyword-map.md`.

- [ ] **Step 1: Apply route by route**

For each row: open the page file, set `<title>` and `meta[name=description]`, mirror into `og:title`/`og:description`/`twitter:title`/`twitter:description`, set the h1. Keep the canonical and schema blocks. Where the h1 comes from a translation key, change the Latvian string in the translations file.

- [ ] **Step 2: Structured data gaps**

Service pages already have `Service` schema and breadcrumb schema; blog posts have `BlogPosting` and breadcrumb. Verify with:

```bash
grep -L '"BreadcrumbList"' src/pages/*.tsx
grep -L '"Service"' src/pages/{ChatbotuIzstrade,ProcesuAutomatizacija,MajaslapuIzstrade,DokumentuAutomatizacija,GramatvedibadAutomatizacija,AiPlatformuIzstrade,DatuAnalize,AiDarbinieki}.tsx
```
Expected: the first lists only `Index.tsx`, `NotFound.tsx` (and `Pricing.tsx` if it has none; add one there). The second prints nothing. Add any missing block following the pattern in `src/pages/ChatbotuIzstrade.tsx:35-50`.

- [ ] **Step 3: Verify titles in the prerendered output**

```bash
npm run build
for f in $(find dist -name index.html); do printf "%s\t" "$f"; grep -o "<title>[^<]*</title>" "$f"; done | sort
```
Expected: one line per route, each title unique and matching the map. Then:

```bash
node -e "
const fs=require('fs');const path=require('path');
function walk(d){return fs.readdirSync(d).flatMap(f=>{const p=path.join(d,f);return fs.statSync(p).isDirectory()?walk(p):p.endsWith('index.html')?[p]:[]})}
for(const f of walk('dist')){const h=fs.readFileSync(f,'utf8');const t=(h.match(/<title>([^<]*)<\/title>/)||[])[1]||'';const d=(h.match(/name=\"description\" content=\"([^\"]*)\"/)||[])[1]||'';if(t.length>60||d.length>155)console.log('LONG',f,t.length,d.length)}"
```
Expected: no `LONG` lines (a few characters over on blog posts are acceptable; fix the rest).

- [ ] **Step 4: Hydration check again, lint, tests**

```bash
npm run preview -- --port 4173 & sleep 2
npm run check:hydration http://localhost:4173
npm run lint && npm test
```
Expected: all ok.

- [ ] **Step 5: Commit**

```bash
git add src/pages src/translations index.html
git commit -m "Apply data-backed titles, H1s and descriptions from the keyword map"
```

---

### Task 14: Final measurements and handoff

**Files:**
- Modify: `docs/superpowers/plans/2026-10-15-baseline.md` (add "After" column)

- [ ] **Step 1: Bundle size against the budget**

```bash
npm run build
gzip -c dist/assets/index-*.js | wc -c
ls -l dist/assets/three-*.js dist/assets/TypewriterScene-*.js public/models/typewriter.glb public/images/hero-typewriter.webp
```
Expected: `index-*.js` gzip within 10 KB of the baseline number; the three chunk is separate.

- [ ] **Step 2: Lighthouse after**

```bash
npm run preview -- --port 4173 & sleep 2
CHROME_PATH="$(node -e "console.log(require('playwright').chromium.executablePath())")" \
  npx lighthouse@12 http://localhost:4173/ --form-factor=mobile --screenEmulation.mobile \
  --only-categories=performance,seo --chrome-flags="--headless=new" \
  --output=json --output-path=/tmp/lh-after.json --quiet
node -e "const r=require('/tmp/lh-after.json');console.log('perf',r.categories.performance.score*100,'seo',r.categories.seo.score*100,'lcp',r.audits['largest-contentful-paint'].displayValue)"
```
Expected: performance ≥ 90, SEO ≥ 95, LCP ≤ 2.5 s. If performance is under, the usual causes in this setup are: the fallback image too large (recompress at quality 70), fonts without `font-display: swap` (check `@fontsource` CSS), or the three chunk preloaded by Vite's modulepreload (it should not be, since it is behind a dynamic import; confirm no `<link rel="modulepreload" href="/assets/three-...">` in `dist/index.html`).

- [ ] **Step 3: Full-site screenshots for the user**

```bash
node scripts/shoot.mjs "http://localhost:4173/?hero=3d" /tmp/final-home.png --full
node scripts/shoot.mjs "http://localhost:4173/" /tmp/final-home-mobile.png --mobile --full
node scripts/shoot.mjs "http://localhost:4173/dokumentu-automatizacija" /tmp/final-service.png --full
node scripts/shoot.mjs "http://localhost:4173/?hero=3d" /tmp/final-home-dark.png --dark --full
```
Review all four against DESIGN.md one more time.

- [ ] **Step 4: Record and commit**

Add an "After" column to `docs/superpowers/plans/2026-10-15-baseline.md` with the new numbers and the GLB, image and chunk sizes.

```bash
git add docs/superpowers/plans/2026-10-15-baseline.md
git commit -m "Record post-redesign bundle and Lighthouse numbers"
```

- [ ] **Step 5: Preview deploy for approval**

```bash
npx vercel@latest build && npx vercel@latest deploy --prebuilt
```
Give the user the preview URL, the four screenshots, and the before/after table. Merging to `main` and the production deploy wait for their approval.
