# Gallery Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the site's visual and motion layer as a gallery about office work: putty/ink rooms, Instrument Serif display type, old-master paintings, motion primitives, and a scroll-driven 3D hero.

**Architecture:** Tokens and fonts change in `src/index.css` and `tailwind.config.ts` (every page follows). A small motion library in `src/components/motion/` built on `motion/react` provides Reveal, Hairline, Counter, Parallax, Marquee and pinned-scroll progress, all rendering final states under reduced motion or automation. The homepage sections are rewritten room by room; the hero keeps its scene components and gains a scroll-driven camera. Paintings come from the Met Open Access API through a fetch script and a manifest.

**Tech Stack:** React 18, Vite, Tailwind, `motion` 14, `@fontsource/instrument-serif`, existing three/r3f hero, Playwright, Vitest, sharp.

**Spec:** docs/superpowers/specs/2026-10-15-gallery-redesign-design.md

## Global Constraints

- Branch `redesign-2026`. Commit per task with the attribution trailer used so far.
- Palette only from the spec's token table; no gradients, shadows, blur. Radius 9px cards, 28.8px pills, 2px links.
- Instrument Serif at 24px and up, Manrope at 26px and below.
- Every motion primitive renders its final state when `prefers-reduced-motion: reduce` or `navigator.webdriver` is true.
- Prerender (`npm run build`) must keep producing 44 routes with title, description and exactly one h1; `npm run check:hydration` stays 44/44.
- Mobile Lighthouse homepage: performance ≥ 90, SEO ≥ 95 at the end.
- Paintings: Met Open Access only, `isPublicDomain: true`, credited in `docs/paintings.md` and the footer.

## Review Focus

1. Scroll sequence with a short viewport (laptop at 700px tall): the sticky stage must never overlap the next room. Test in Task 5 e2e at 1280×700.
2. Menu overlay with keyboard only: Tab stays inside, Escape closes, focus returns to the trigger. Test in Task 1 e2e.
3. Counter when the room is already in view on load (prerendered page opened mid-scroll): must still reach its target. Test in Task 3 unit (`counterValue(t)` endpoints) and Task 7 e2e (deep link `#cases`).
4. Painting images missing (404): the vignette shows the ash placeholder, no layout shift. Test in Task 2 e2e.
5. Hero on a 1024px desktop with reduced motion: no pin, wordmark visible, image fallback. Covered by hero e2e reduced-motion check plus a 1024-wide run in Task 5.

---

### Task 1: Tokens, fonts, header with menu overlay, footer, no dark mode

**Files:** Modify `src/index.css`, `tailwind.config.ts`, `index.html`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Logo.tsx`, `DESIGN.md`; Create `src/components/MenuOverlay.tsx`; Modify `scripts/app-e2e.mjs` (replace the theme test with a menu test).

- [ ] Install `@fontsource/instrument-serif`; import `400.css` and `400-italic.css` in `src/index.css`; drop the Newsreader import.
- [ ] Replace `:root` tokens with the spec table (HSL triplets for Tailwind: putty `60 10% 74%`, bone `30 6% 90%`, chalk `0 0% 92%`, vellum `40 14% 86%`, graphite `48 2% 34%`, ink `0 0% 0%`, paper `0 0% 100%`). Delete the `.dark-mode` block, `.light-mode` remnants, the theme inline script in `index.html`, and the toggle in `Header.tsx`. Add `--chalk`, `--ash`.
- [ ] Type classes: `.display` (Instrument Serif, lh 0.84, tracking -0.035em), `.display-1` → heading (clamp 40..72px), `.display-2` → heading-lg (clamp 44..94px), `.display-3` → subheading 22px serif; `.label` (12px Manrope 500 uppercase 0.08em), `.micro` (9px uppercase 0.12em). Buttons: `.btn` becomes the pill (radius 28.8px, padding 9px 17px, 12px Manrope 500); `.btn-solid` ink on paper, `.btn-line` 1px ink outline, on ink rooms inverted via `.band-ink`. `.sheet` radius 9px, bone, hairline border, no shadow.
- [ ] Header: 56px, monogram (`Logo.tsx` draws a 32px circle with a serif "a"), right side "Izvēlne" text link + pill "Konsultācija". `MenuOverlay.tsx`: `<dialog>` full screen on ink, routes as `.display-2` links, industries and blog as Manrope lists, close button, Escape closes, focus trap via `dialog` + `inert` on `#root` siblings is not available, so trap with a keydown handler cycling the first/last focusable.
- [ ] Footer on chalk: four link columns (Pakalpojumi, Nozares, Uzņēmums, Blogs) with every route, credits line for the paintings, no icons.
- [ ] `scripts/app-e2e.mjs`: replace test 1 with: open menu via the "Izvēlne" button, Tab 20 times stays inside the dialog, Escape closes it, focus is back on the trigger.
- [ ] Verify: `npm run build` 44 routes; screenshots home + one service page at 1440 and 390; `npm run app:e2e`; commit `Gallery tokens, Instrument Serif, menu overlay, chalk footer, no dark mode`.

### Task 2: Paintings pipeline

**Files:** Create `docs/paintings.json`, `scripts/fetch-paintings.mjs`, `scripts/paintings-core.mjs` (+ test), `docs/paintings.md`, `public/paintings/*.webp`; Modify `package.json`.

- [ ] `docs/paintings.json`: entries `{ slug, metObjectId, focus: { x, y }, use }` for: `tax-collector` 436643, `scholar-writing` 435914, `letter` 435714, `lavoisier` 436106, `merchant-hals` 436620, `merchant-van-dyck` 436253, `magdalen-letter` 904343.
- [ ] `paintings-core.mjs`: `validateManifest(json)` (unique slugs, numeric ids, focus 0..1) and `creditLine(obj)` → "Artist, *Title*, date. The Met, Open Access (CC0), object N." Tests RED→GREEN.
- [ ] `fetch-paintings.mjs`: for each entry GET `/public/collection/v1/objects/:id`, assert `isPublicDomain`, download `primaryImage` to the scratchpad, write `-1600.webp` (max width 1600, q78) and `-800.webp` (square crop around focus, q80) with sharp, regenerate `docs/paintings.md`. `npm run paintings`.
- [ ] e2e (in `scripts/app-e2e.mjs`): a vignette with its image route aborted keeps its size and shows the ash background.
- [ ] Verify sizes (< 250 KB each 1600, < 80 KB each 800); commit `Add Met Open Access paintings pipeline and assets`.

### Task 3: Motion primitives

**Files:** Create `src/components/motion/{Reveal,Hairline,Counter,Parallax,Marquee}.tsx`, `src/components/motion/usePinnedProgress.ts`, `src/components/motion/motionPrefs.ts`, `src/components/motion/motion.test.ts`; Modify `package.json` (`motion`).

- [ ] `motionPrefs.ts`: `isStaticMotion()` (reduced motion or webdriver) and `splitWords(text)`; `counterValue(from, to, t)` with ease-out cubic; `pinnedProgress(top, height, viewportH)` → 0..1. Tests RED→GREEN for all four.
- [ ] Components as in spec §6 using `motion/react` (`useInView`, `useScroll`, `useTransform`, `animate`). Static mode renders final values with no `motion` elements.
- [ ] Verify with a temporary dev page? No: verify in Task 4/5 where they are used. Unit tests green; commit `Add motion primitives`.

### Task 4: Hero rebuild with scroll sequence

**Files:** Modify `src/components/hero/HeroSection.tsx`, `TypewriterScene.tsx`, `Typewriter.tsx`; Create `src/components/hero/Wordmark.tsx`, `src/components/hero/useHeroScroll.ts`; Modify `scripts/hero-e2e.mjs`, `scripts/capture-hero.mjs` (capture at the new scale).

- [ ] Layout per spec §4.1: top cluster, wordmark (`Wordmark.tsx`, `.display`, `white-space: nowrap`, centered, overflow visible, `aria-hidden` with the real h1 in the cluster), stage 60vw wide.
- [ ] `useHeroScroll`: a ref `{ progress: number }` updated by `useScroll` on the 200vh wrapper (desktop, non-static only); `TypewriterScene` reads it in `useFrame` to set camera z (4.4→7.5), rig yaw (-0.35→1.2), and emits `data-hero-progress` on the wrapper each 0.1 step for tests.
- [ ] Wordmark tracking and colour and the room background bound to the same progress through `useTransform`.
- [ ] Mobile/static: wrapper is `auto` height, no sticky, image fallback.
- [ ] e2e: scroll to the end of the wrapper at 1440×900 and 1280×700, `data-hero-progress` reaches `1.0`, the next room's top is below the stage; reduced motion at 1024: no sticky, image mode.
- [ ] Re-capture the fallback image; commit `Hero: wordmark, scroll-driven typewriter sequence`.

### Task 5: Homepage rooms

**Files:** Rewrite `src/components/HomeServices.tsx` (ink room with vignettes), create `src/components/HomePainting.tsx` (panel + notched card), rewrite `HomeCases.tsx`, `HomeProcess.tsx`, `HomeClients.tsx` (marquee), `HomeFAQ.tsx`, `HomeWhy.tsx` (fold into cases or keep as a short putty room), `HomeLeadForm.tsx` → CTA room; Modify `src/pages/Index.tsx` order.

- [ ] Build each room per spec §4.2–4.7 with the motion primitives. Vignette hover swaps image and caption (state in HomeServices). Notched card via `clip-path: polygon(...)`.
- [ ] Verify: screenshots at 1440 full page and 390 full page, reduced-motion full page (all final states), `npm run build`, hydration 44/44; commit `Homepage rooms: services vignettes, painting panel, cases, process, clients, FAQ, CTA`.

### Task 6: Inner pages

**Files:** Modify `src/components/page/index.tsx` (PageHero vignette prop, Section tones, Reveal on titles, Hairline on lists), each service/industry page passes its painting slug.

- [ ] Add `vignette?: string` to `PageHero`; map tones putty/bone/ink; wrap titles in `Reveal`; `RuledList`/`Steps` top rule becomes `Hairline`.
- [ ] Pass vignette slugs on the 8 service and 5 industry pages (reuse the 7 paintings).
- [ ] Verify every route renders: screenshot 6 representative pages; `npm run build`; commit `Inner pages: gallery hero with vignette, room tones, reveals`.

### Task 7: Verification and preview

- [ ] `npm test`, `npm run lint`, `npm run build`, `npm run check:hydration`, `npm run hero:e2e`, `npm run app:e2e`.
- [ ] Lighthouse mobile on a gzip static server; fix regressions (paintings lazy, motion chunk after paint).
- [ ] Update `DESIGN.md` to the gallery system; `docs/superpowers/plans/2026-10-15-baseline.md` gets a v2 row.
- [ ] `npx vercel@latest build --yes --target preview && npx vercel@latest deploy --prebuilt --yes`; report the URL with screenshots and a short screen recording of the hero (Playwright video → `/tmp/hero.webm`).
