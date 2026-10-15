# automatizacijas.lv: interactive 3D hero and SEO prerender

Date: 2026-10-15
Branch: `redesign-2026` (baseline commit `cd09266`)
Status: approved in conversation, awaiting written review

## Goal

Make the site feel interactive and crafted without the generated-SaaS look,
and make every page readable by search engines without JavaScript.

Three outcomes:

1. The homepage hero has a 3D typewriter that types the value proposition.
2. The rest of the homepage follows DESIGN.md, with two meaningful
   interactions and nothing decorative.
3. Every route in the sitemap ships as prerendered HTML with data-backed
   title, H1 and description.

## What the user said, and what is assumed

Said: interactive, stylish, 3D animation or models (Meshy if needed), DFS for
SEO if needed, clear, no slop, good SEO. Build on the redesign-2026
paper/ink system. One 3D scene in the hero. A stylized physical object made
with Meshy. The object is a typewriter.

Assumed: "no slop" means no ambient motion, no particles, no glow, no
gradients, and no 3D outside the hero. Mobile users get a still image, not a
WebGL scene. Latvian is the only language.

## Out of scope

New pages, blog content expansion, 3D on other pages, an English version,
changes to the lead form backend, redesign of the `ui/` shadcn primitives.

## 1. Design system amendment

DESIGN.md stays in force. Rule 6 is rewritten:

> 6. Motion is allowed only when it answers a user action (hover, click,
>    scroll position) or shows the thing the nearby text describes. Hover
>    changes colour or sweeps the highlighter. No background particles,
>    glow, blur, shimmer, pulse, hover-lift, scale-on-hover or entrance
>    animations. The hero typewriter is the one scene that moves on its own.

`prefers-reduced-motion: reduce` turns every allowed motion into its final
state, including the typewriter (still image with the full line typed).

## 2. Hero

### Layout

`.wrap` container, 12-column grid at `lg` and up. Left 6 columns: `h1`
(`display-1`), lede, `btn btn-solid` "Pieteikt bezmaksas konsultāciju",
`btn btn-line` "Skatīt paveiktos darbus", and the "bez maksas un bez
saistībām" line. Right 6 columns: the scene, aspect ratio 4:3, no border, no
sheet. Below `lg` the scene stacks under the text at full width.

The existing `ProcessSheet` component leaves the hero. It is kept in the
repo only if another page uses it; otherwise deleted.

### Scene content

A mechanical typewriter in navy enamel (ink token `#1B2440`), cream keys
(paper token), carmine ribbon spools (primary token), sitting on a paper
sheet. A second paper sheet is rolled into the platen; text appears on it.

Lighting: one key light upper left, one fill, one rim, all plain
`directionalLight`/`ambientLight`. No HDR environment file. Contact shadow
under the machine on the paper (drei `ContactShadows`, low resolution).
Background transparent so the page `bg-background` shows through.

### Behaviour

- **Typing.** On mount (after the chunk loads and the canvas is visible) the
  machine types, letter by letter at 55 to 85 ms per character with slight
  jitter, one line from this rotating list:
  `Rēķini apstrādāti.`, `Dokumenti sakārtoti.`, `Atbildes nosūtītas.`,
  `Līgumi sagatavoti.` After the line is complete it waits 2.4 s, the
  carriage returns (platen paper scrolls up one line), and the next line
  types. The text lives on a canvas texture on the platen sheet, in Sofia
  Sans at a size that reads at the hero's rendered size.
- **Keystroke feedback.** Each character nudges the whole machine 0.6 mm
  down on Y and back over 90 ms, and the carriage group moves one character
  width along X. The carriage is a separate group only if the Meshy mesh
  can be split cleanly; otherwise only the paper moves and the machine
  nudges.
- **Pointer parallax.** Pointer position over the hero rotates the scene up
  to 8° on Y and 4° on X, eased (lerp 0.08 per frame). No orbit controls, no
  zoom.
- **Click.** Clicking the canvas finishes the current line immediately and
  starts the next one. Cursor is `pointer` over the machine.
- **Pause.** `IntersectionObserver` pauses the render loop when the hero is
  out of view. Tab hidden pauses it too (r3f `frameloop="demand"` with
  explicit invalidation while typing).

### Loading and fallbacks

- The hero text is the LCP element. The 3D chunk (`three`, r3f, drei,
  loader, GLB) is loaded with `React.lazy` + dynamic import after
  `requestIdleCallback` or 1.5 s, whichever comes first, and only on
  viewports ≥ 768 px without `prefers-reduced-motion` and with WebGL2.
- Until the canvas renders its first frame, and in every fallback case, an
  `<img>` shows a WebP render of the same scene with the line
  `Rēķini apstrādāti.` typed, `alt="Rakstāmmašīna, kas raksta: rēķini
  apstrādāti"`, explicit width/height, `fetchpriority="low"`. The canvas is
  absolutely positioned over the image and fades in over 300 ms. No layout
  shift.
- WebGL context loss shows the image again.

### Files

```
src/components/hero/HeroSection.tsx        layout, lazy gate, fallback image
src/components/hero/TypewriterScene.tsx    Canvas, lights, shadows, parallax
src/components/hero/Typewriter.tsx         GLB mesh, nudge, carriage
src/components/hero/PlatenSheet.tsx        canvas texture, typing state
src/components/hero/useTypingLoop.ts       timing, lines, click handling
src/components/hero/useHeroGate.ts         viewport, reduced motion, WebGL, idle
public/models/typewriter.glb               optimised model
public/images/hero-typewriter.webp         fallback render, 1200×900
```

`HeroSection.tsx` replaces `src/components/HeroSection.tsx`.

## 3. 3D asset pipeline

1. **Generate.** Meshy text-to-3d, `ai_model: meshy-7.1`, preview stage
   (20 credits), then refine with texture (10 credits). Prompt describes a
   single vintage mechanical typewriter, clean stylized surfaces, navy
   enamel body, cream round keys, no text or logos, no paper, no base.
   Target formats: glb. If the preview geometry is poor, one more preview
   is allowed (20 credits). Budget cap: 60 credits. Balance at spec time:
   843.
2. **Review.** Render the GLB in the dev scene and screenshot it. Reject if
   keys are a blob, if the silhouette is not obviously a typewriter at 300 px
   wide, or if it reads as a generic render. One retry.
3. **Palette.** If Meshy's texture does not match the tokens, override the
   material in code: `MeshStandardMaterial` with `color` from the tokens,
   `roughness 0.55`, `metalness 0.1`, keeping the normal map if present.
   Prefer this over a retexture task.
4. **Optimise** with `@gltf-transform/cli`: `dedup`, `prune`, `weld`,
   `quantize`, `meshopt` compression, textures resized to 1024 px WebP.
   Target under 1.5 MB on disk. Record the before/after sizes in the plan.
5. **Fallback image.** Screenshot the final scene at 1200×900 with Playwright
   against the dev server, export WebP quality 82.
6. **Dependencies added:** `three`, `@react-three/fiber`,
   `@react-three/drei`, `@types/three` (dev), `@gltf-transform/cli` (dev).
   Vite `manualChunks` puts `three` and r3f in their own chunk so the main
   bundle does not grow.

## 4. Rest of the homepage

Section order stays as in the baseline `Index.tsx`: Hero, Clients, Services,
Cases, Why, Industries, Process, LeadForm, FAQ, Footer.

Audit each `Home*` component against DESIGN.md and fix violations found.
Known from reading: `HomeProcess` uses a 4-column grid with big numbers;
numbers are allowed because it is a real sequence, but the grid becomes the
`Steps` pattern (ruled rows) on narrow screens.

Two interactions, both scroll or hover driven:

- **Process progress.** In `HomeProcess`, a 2 px rule above the steps fills
  with the marker token as the section scrolls through the viewport
  (`IntersectionObserver` + `scroll` with rAF, or CSS `animation-timeline:
  scroll()` with the JS version as fallback). Reduced motion: fully filled.
- **Service hover sweep.** `HomeServices` rows keep the existing highlighter
  sweep on hover. No change beyond verifying it works with keyboard focus.

No counters, no cards, no icons.

## 5. SEO

### Prerender

A build step renders every route to static HTML.

- `scripts/prerender.ts` (run by `npm run build` after `vite build`):
  starts `vite preview` on a free port, launches Playwright Chromium, visits
  every `<loc>` in `public/sitemap.xml` plus `/404`, waits for
  `networkidle` and for `document.title` to be set by Helmet, strips
  analytics `<script>` tags that were injected at runtime (they stay in
  `index.html`), and writes `dist/<route>/index.html`. The root route
  overwrites `dist/index.html`.
- Routes are read from the sitemap so new pages are picked up when the
  sitemap is updated. The script fails the build if any route renders
  without a `<title>`, a `meta[name=description]`, or an `<h1>`.
- `src/main.tsx` switches to `hydrateRoot` when `#root` has children,
  otherwise `createRoot`. Hydration warnings in dev are treated as bugs and
  fixed (known risks: `LanguageContext` default, theme class, cookie banner
  initial state, `Suspense` boundaries; the prerendered output must be the
  fully resolved page).
- The 3D canvas never renders during prerender (the gate checks
  `navigator.webdriver` as well), so the static HTML contains the fallback
  `<img>`.
- `vercel.json` keeps the SPA rewrite; static files win before rewrites, so
  `/dokumentu-automatizacija/index.html` is served directly. Verify with
  `curl` on the preview deployment.
- Playwright is not in `package.json` today. `playwright` (the library, not
  `@playwright/test`) becomes a devDependency. The Vercel `installCommand`
  becomes `npm ci && npx playwright install chromium --with-deps` so the
  build can prerender. If the Vercel build image refuses the browser
  install, the fallback is to prerender locally and commit nothing extra:
  the build runs the prerender only when `PRERENDER=1`, and the Vercel
  deploy is done from the CLI with `--prebuilt`.

### Keyword map from data

Use the DFS MCP (`kw_data_google_ads_search_volume`,
`dataforseo_labs_google_keyword_ideas`, `serp_organic_live_advanced` with
location Latvia, language Latvian) to get volume and the current top 10 for
the seed terms below, then write `docs/seo/keyword-map.md` with one row per
route: primary keyword, monthly volume, title (≤ 60 chars), H1, description
(≤ 155 chars). Apply the map to each page's `Helmet` and `h1`.

Seed terms: grāmatvedības automatizācija, dokumentu automatizācija, rēķinu
apstrāde, AI čatbots, čatbota izstrāde, procesu automatizācija, mākslīgais
intelekts uzņēmumiem, AI risinājumi uzņēmumiem, datu analīze uzņēmumiem,
mājaslapu izstrāde, AI apmācības, automatizācija Latvijā.

Do not invent numbers. If DFS returns no data for a term, the row says so
and the title is chosen by judgement.

### Structured data

Keep Organization and FAQPage. Add `Service` (with `provider` →
Organization, `areaServed` LV) to the 8 service pages, `BreadcrumbList` to
every page that shows `Breadcrumbs`, `Article` to blog posts. All emitted via
Helmet so prerender captures them.

### Budget

Homepage on mobile: Lighthouse Performance ≥ 90, SEO ≥ 95, LCP ≤ 2.5 s. The
3D chunk must not be in the critical path. Main bundle must not grow by more
than 10 KB gzip.

## 6. Error handling

- GLB fails to load: stay on the fallback image, log once, no retry loop.
- WebGL context lost: unmount the canvas, show the image.
- Prerender route fails: build fails with the route name and the missing
  element.
- DFS unavailable: keyword map rows are marked "no data", work continues.
- Meshy task fails or times out: check `meshy_list_tasks` before creating
  another so credits are not double spent.

## 7. Testing

- `npm run build` and `npm run lint` pass.
- `npm run build` output includes `dist/<route>/index.html` for every
  sitemap route; a check script greps each for `<title>`, `description`,
  `<h1>`.
- Playwright screenshots of the homepage at 1440×900 and 390×844, light and
  dark, with and without `prefers-reduced-motion`. Reviewed by eye against
  DESIGN.md.
- Manual: typing runs, click skips, parallax follows the pointer, scene
  pauses off-screen, image shows on mobile.
- Lighthouse on the production preview URL before and after, numbers
  recorded in the plan.

## 8. Rollout

All work on `redesign-2026`. Deploy previews from that branch for review.
Merge to `main` only when the user approves the preview. Production deploys
are currently done from the CLI, so the final step is a documented
`vercel --prod` from `main`.

## Amendment, 2026-10-15 (after Task 7)

The user redirected fonts and colours toward siamezi.lv. Decisions, approved
in conversation:

- Dark is the default theme: night navy ground `#0B1220`, bone text `#F1EEE4`,
  amber accent `#E0A458` for actions, links and the highlighter. The paper
  theme survives as `.light-mode`.
- Type: Newsreader (serif, 500) for display headings, Manrope for text.
- The typewriter keeps its Meshy texture (navy, cream keys, carmine spools) and
  gets a bone rim light and an amber fill so it separates from the ground. The
  platen sheet is always bone paper with navy ink, in every theme.
- Everything else in this spec stands. DESIGN.md is updated to match.
