# Scale restyle: design

Date: 2026-10-16. Supersedes the look defined in
`2026-10-15-gallery-redesign-design.md`; keeps its structure, motion and
content. Reference material the user supplied is in
`docs/design/scale-reference/` (DESIGN.md, tokens.json, variables.css,
theme.css). Where this spec and the reference disagree, the reference wins
for tokens and this spec wins for how they are applied to this site.

## Intent

The user asked to remake the site "in this style": a museum-quality darkroom
gallery meets technical blueprint. White, black and a ladder of greys do
95% of the work; four muted earth tones are categorical surface washes.
Headings are weight 400 and large; a mono face carries labels. Cards are
flat, 16px radius, no shadow, 32px padding. The page rhythm is dark hero
→ black void → white product surface.

Everything that is not visual stays: routes, copy, SEO, the 3D typewriter
hero with its pinned scroll sequence, the motion primitives, prerender and
hydration, the Met paintings (now in a documentary register), analytics.

## Type

Aeonik is proprietary. The reference names Inter as the substitute, so:

- `Inter Variable` (self-hosted from `@fontsource-variable/inter`, latin +
  latin-ext woff2 copied to `public/fonts/`, preloaded in `index.html`,
  `font-display: swap`, a size-adjusted Arial fallback face). Weights 400,
  500 only. 600 is never used for text; the reference uses it only for
  capitalised link microcopy, which this site does not have.
- `JetBrains Mono Variable` (`@fontsource-variable/jetbrains-mono`, imported
  as CSS, not preloaded) for `.label`, `.micro`, `.mono`.
- Instrument Serif and Manrope are removed (files, `@font-face`, the
  dependency, the Tailwind `display` family).

| Class | Size | Weight | Line | Tracking |
| --- | --- | --- | --- | --- |
| `.display-1` (h1) | clamp(2.5rem, 5vw, 4rem) | 400 | 1.05 | -0.01em |
| `.display-2` (h2) | clamp(2rem, 3.2vw, 2.5rem) | 400 | 1.15 | -0.01em |
| `.display-3` (card and row titles) | 1.5rem | 500 | 1.3 | -0.01em |
| `.display` (big numbers) | inherits size | 400 | 1.05 | -0.01em |
| `.wordmark` | clamp(3.5rem, 9vw, 7.25rem) | 400 | 1 | -0.01em → +0.06em on scroll |
| body | 1rem | 400 | 1.5 | 0 |
| `.lede` | 1.25rem | 400 | 1.5 | -0.01em, graphite |
| `.caption` | 0.875rem | 400 | 1.5 | 0.025em |
| `.label`, `.micro` | 0.6875rem mono, uppercase | 400 | 1 | 0.05em |
| `.mono` | 0.8125rem mono | 400 | 1.2 | -0.01em |

`h1, h2` default to the Inter display settings; `h3, h4` are 500.

## Colour

Tokens (HSL triplets in `:root`, Tailwind names in brackets):

| Token | Hex | Use |
| --- | --- | --- |
| `--background` (bg-background) | #ffffff | canvas |
| `--foreground` | #000000 | text, obsidian |
| `--card` (bg-card, `.sheet` on white) | #f2f2f2 | soft mist: elevated card, section band |
| `--secondary` | #eaeaea | pale stone: rhythm break |
| `--muted` | #e5e5e5 | bone: nested card, icon wash |
| `--muted-foreground` | #575757 | graphite: secondary text |
| `--smoke` (text-smoke) | #929292 | quiet text on dark, ticker |
| `--primary` (bg-primary, `.btn-solid`) | #212121 | charcoal: filled button |
| `--border` (`.hairline`) | #e5e5e5 | dividers |
| `--input` | #c7c7c7 | silhouette: outlines, outlined buttons, fields |
| `--ink`, `--ink-foreground` | #000000 / #ffffff | dark bands |
| `--ink-muted` | white 70% (0 0% 70%) | secondary text on dark |
| `--ink-rule` | #292929 | dividers on dark |
| `--sand` (bg-sand) | #a8927c | accent wash, obsidian text |
| `--forest` (bg-forest) | #193a29 | accent wash, white text |
| `--iris` (bg-iris) | #79648c | accent wash, white text |
| `--slate` (bg-slate) | #839cb2 | accent wash, obsidian text |
| `--ash` | #929292 | image placeholder |
| `--marker` | #e5e5e5 | the hover sweep under row titles |

No gradients. The only shadow is `--shadow-subtle`
(`0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`), mapped to every
Tailwind `shadow-*` so legacy classes cannot float anything. Accents are
never text on white. `theme-color` is `#000000`.

## Shapes and layout

- `--radius: 16px` (cards). Tailwind: `rounded-sm/md/lg` 8px, `xl` 12px,
  `2xl` 16px, `3xl` 24px. Buttons and tags 8px, nested cards 12px, feature
  panels 24px. No radius below 8px on a component. Circles only for the
  10px check bullet.
- `.wrap`: max-width 80rem (1280px), gutter clamp(1rem, 2.5vw, 2rem).
- `.band`: padding-block clamp(4rem, 7vw, 6rem). Card padding 2rem. Element
  gap 1rem.
- `.btn`: 8px radius, padding 0.875rem 1.25rem, min-height 3rem, Inter 400
  1rem, -0.01em. `.btn-solid` charcoal/white, hover obsidian; inside
  `.band-ink` white/black, hover soft mist. `.btn-line` 1px silhouette
  border, foreground text, hover soft mist; inside `.band-ink` border white
  30%, white text, hover white 10%.
- `.sheet`: flat card. Soft mist on white, white on ink, 16px radius, no
  border, no shadow.
- `.panel`: accent surface. 24px radius, padding clamp(2rem, 5vw, 5rem),
  modifiers `.panel-sand`, `.panel-forest`, `.panel-iris`, `.panel-slate`
  set background and text colour. Not a card: no border, no shadow.
- `.hairline`: 1px `--border`; `--ink-rule` inside `.band-ink`.
- `.vignette`: square, 12px radius, `filter: grayscale(1)`, hover scale
  stays. `.painting-img`: grayscale + brightness .55 (the darkened
  documentary photograph of the reference hero).
- `.case-card` (replaces `.notched-card`): charcoal, 16px radius, 2rem
  padding, white text.
- `.field`: white, 1px silhouette border, 8px radius, padding 0.75rem 1rem,
  focus border obsidian. `.field-label`: 0.875rem, 500.
- `.scroll-prompt`: `.mono` text + 40px square, 1px border, 8px radius,
  down chevron. Anchored bottom-right of the hero.
- Logo: a 1.5rem square (8px radius) in the current text colour with the
  letter "a" reversed out, plus "automatizācijas.lv" at 1rem 500. No
  monogram circle.
- Icons: mono-stroke only (the chevron, the hex, the menu close).

## Rooms

Header: obsidian, 56px, white text, `.band-ink` so the pill inverts.
Menu overlay: unchanged ink room; main links `.display-1`, columns labelled
in mono. Footer: obsidian, padding-top clamp(5rem, 8vw, 7.5rem), mono column
headers, smoke links that turn white on hover, credit line in `.caption`.

Homepage order unchanged. Tones:

1. Hero: obsidian throughout (no putty → ink mix). White headline, mono
   label in smoke, stat in ink-muted, white solid + outlined buttons. The
   wordmark sits on the floor in white and opens its tracking on scroll;
   its colour goes white → smoke. The scroll prompt sits bottom-right and
   fades with the cluster. Lighting gets a stronger rim so the machine
   reads on black.
2. HomeServices: black void. Mono labels, heading, three 12px-radius
   grayscale vignettes with mono captions and hex dots, six hairline rows.
3. HomePainting: darkened grayscale Lavoisier, `.case-card` centred, credit
   in `.micro` at white 60%.
4. HomeCases: white. Three flat soft-mist cards (number `.display` 4rem,
   client `.display-3`, note graphite `.caption`); quotes as two soft-mist
   cards.
5. HomeWhy: a `.panel.panel-sand` inside the wrap.
6. HomeIndustries: white, hairline rows.
7. HomeProcess: `.band` with `bg-forest text-white`; steps keep the hex
   and a `.display` number; rules at white 15%.
8. HomeClients: Inter 400 2rem smoke ticker between bone rules.
9. HomeLeadForm: ink band, form in a white `.sheet`.
10. HomeFAQ: white.

Inner pages: `PageHero` title `.display-1`, vignette as the 12px grayscale
square; `Section` tone `sheet` is a soft-mist band, `ink` is black;
`CtaBand` ink. Lists stay ruled rows. Every `font-bold`/`font-semibold` in
`src/pages` and `src/components` (not `ui/`) becomes `font-medium`.

## Motion

Unchanged vocabulary: Reveal, Hairline, Counter, Parallax, Marquee, the
hero sequence, the typewriter. The hero's `--p-ink` variable and the
colour-mix background go away; the stage is black from the first frame.

## Verification

- `src/styles.test.ts` (vitest, node): reads `src/index.css`,
  `tailwind.config.ts`, `index.html`, `public/fonts` and the page sources
  and asserts the tokens, fonts, radii, the absence of the serif, of
  `font-bold`/`font-semibold` outside `ui/`, and of the removed classes.
- `scripts/app-e2e.mjs`: placeholder colour becomes `rgb(146, 146, 146)`;
  check 10 asserts the cluster is visible again (the room is always
  black).
- Existing gates stay green: `npm test`, `npm run lint`, `npm run build`,
  `check:hydration` 44/44, `hero:e2e` 20/20, `app:e2e` 19/19, Lighthouse
  mobile perf ≥ 89, SEO 100, CLS 0.
- Screenshots desktop/mobile sent to the user; preview deployed from the
  CLI.
