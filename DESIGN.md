# automatizacijas.lv design system

Museum-quality darkroom meets technical blueprint. White, black and a ladder
of greys do 95% of the work; four muted earth tones are surface washes.
Headings are weight 400 and large, a mono face carries labels, cards are
flat. The page rhythm is dark hero → black void → white surface. It must not
look like a generated SaaS template.

Reference: `docs/superpowers/specs/2026-10-16-scale-restyle-design.md` and
the source tokens in `docs/design/scale-reference/`.

## Tokens (src/index.css, tailwind.config.ts)

| Name | Value | Use |
| --- | --- | --- |
| canvas `bg-background` | #FFFFFF | page background, `.sheet` on ink |
| obsidian `text-foreground`, `.band-ink` | #000000 | text, dark bands, header, footer |
| soft mist `bg-card`, `.sheet` | #F2F2F2 | elevated card, section band |
| pale stone `bg-secondary`, `.band-stone` | #EAEAEA | rhythm break, selection |
| bone `bg-muted`, `border-border`, `.hairline` | #E5E5E5 | nested card, dividers, the hover sweep |
| graphite `text-muted-foreground` | #575757 | secondary text |
| smoke `text-smoke` | #929292 | quiet text on dark, labels on dark, ticker, placeholders |
| charcoal `bg-primary`, `.btn-solid`, `.case-card` | #212121 | filled button, the card on a photograph |
| silhouette `border-input` | #C7C7C7 | outlines, fields, `.btn-line` |
| sand `bg-sand`, `.panel-sand` | #A8927C | accent wash, obsidian text |
| forest `bg-forest`, `.panel-forest` | #193A29 | accent wash, white text |
| iris `bg-iris`, `.panel-iris` | #79648C | accent wash, white text |
| slate `bg-slate`, `.panel-slate` | #839CB2 | accent wash, obsidian text |

On ink: `text-ink-foreground` white, `text-ink-muted` white 70%,
`border-ink-rule` #292929. No gradients. The only shadow is
`--shadow-subtle`, and every Tailwind `shadow-*` maps to it. Accents are
surfaces, never text on white. There is no dark-mode toggle: the page is
light and dark by band.

## Type

**Inter Variable** (self-hosted, preloaded, weights 400 and 500) for
everything; **JetBrains Mono Variable** for labels.

| Class | Size | Weight | Tracking |
| --- | --- | --- | --- |
| `.display-1` (h1, menu links) | clamp(2.5rem, 5vw, 4rem) | 400 | -0.01em |
| `.display-2` (h2) | clamp(2rem, 3.2vw, 2.5rem) | 400 | -0.01em |
| `.display-3` (card and row titles) | 1.5rem | 500 | -0.01em |
| `.display` (big numbers) | inherits | 400 | -0.01em |
| `.wordmark` (hero floor) | clamp(3.5rem, 9vw, 7.25rem) | 400 | opens on scroll |
| body | 1rem | 400 | 0 |
| `.lede` | 1.25rem, graphite | 400 | -0.01em |
| `.caption` | 0.875rem | 400 | 0.025em |
| `.label`, `.micro` (mono, uppercase) | 0.6875rem | 400 | 0.05em |
| `.mono` (sentence case) | 0.8125rem | 400 | -0.01em |

Never 600 or heavier outside `src/components/ui`; `src/styles.test.ts`
fails the build on `font-bold` and `font-semibold`. Sentence case in copy;
labels uppercase. No italics.

## Shapes and layout

1. One container, `.wrap`, 1280px with a 16px gutter at phone width.
   Content sits on a 12-column grid: heading in 4 or 5 columns, content in
   the rest.
2. Bands (`.band`) are full bleed with 64–96px of vertical padding and hard
   cuts: white, soft mist, ink, or an accent wash.
3. Radii: 8px buttons, tags and fields; 12px nested cards and images; 16px
   cards; 24px panels. Nothing below 8px on a component.
4. `.sheet` is the flat card: soft mist on white, white on ink, 2rem
   padding, no border, no shadow. Cards are for cases, testimonials,
   forms and price tables; lists are hairline rows (`RuledList`,
   `CheckList`, `Steps`, `Faq`).
5. `.panel` is an editorial colour field (one accent, 24px radius, generous
   padding). Not a card.
6. Buttons: `.btn.btn-solid` (charcoal, one per view; white on ink) and
   `.btn.btn-line` (silhouette outline). Text links: `.link`, underline
   only. No arrows in buttons.
7. Imagery: Met Open Access paintings only (`docs/paintings.md`), always
   desaturated: `.vignette` (12px square) or `.painting-img` (full bleed,
   darkened, the one photograph-like surface per page). Credit every one.
8. Icons: mono-stroke only. The chevron in an outlined 40px square
   (`.scroll-prompt-box`), the hex (`Hex`), the menu close. The mark is
   `.logo-mark`: a 24px square with an "a" reversed out.

## Motion (src/components/motion)

Motion answers scrolling or hovering, or shows the thing the copy
describes. `Reveal` (words slide up once), `Hairline` (draws left to
right), `Counter` (counts to the number), `Parallax` (a painting sits
deeper than the page), `Marquee` (the slow ticker), the hero's pinned scroll
sequence and the typewriter are the whole vocabulary. No particles, glow,
shimmer, pulse, hover-lift or scale on cards. Every primitive renders its
final state under `prefers-reduced-motion` and in the prerender, and never
changes layout after it runs.

## Copy

Plain verbs, concrete nouns, sentence case. Say what the thing does. Button
text says what happens. No invented numbers, clients or results. No em
dashes, no emoji, no "Uzzināt vairāk".
