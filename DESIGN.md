# automatizacijas.lv design system

The site is a gallery about office work. Old-master paintings of clerks,
merchants and letter writers show how the work was done for five hundred
years; a 3D typewriter and the copy show what the machine does now. The look
is "Renaissance gallery on putty paper": a warm gray canvas, hard cuts into
black rooms, monumental serif type, hairlines, circles and hexagons. It must
not look like a generated SaaS template.

Reference: `docs/superpowers/specs/2026-10-15-gallery-redesign-design.md`.

## Tokens (src/index.css, tailwind.config.ts)

| Name | Value | Use |
| --- | --- | --- |
| putty `bg-background` | #C4C3B6 | page canvas, light rooms |
| bone `bg-card`, `.sheet` | #E7E5E4 | cards, sheets, the elevated light surface |
| chalk `.band-chalk` | #EBEBEB | footer |
| vellum `border-border`, `.hairline` | #DFDCD5 | hairlines on light rooms |
| graphite `text-muted-foreground` | #595855 | muted text |
| ink `text-foreground`, `bg-primary`, `.band-ink` | #000000 | dark rooms, text, the pill button |
| paper `text-ink-foreground` | #FFFFFF | text on dark rooms |
| ash `bg-ash` | #808080 | image placeholders only |

No other colour. No gradients, shadows or blur. There is no dark-mode
toggle: the page is light and dark by room.

Type: **Instrument Serif** (400, italic available) for everything 24px and
up: `.wordmark` (22vw, cropped at the viewport), `.display-2` (section
titles), `.display-1` (page h1), `.display-3` (captions, subheadings,
quotes). **Manrope** for everything 26px and below: body 16px, `.label`
(12px, 500, uppercase, 0.08em), `.micro` (9px uppercase). Sentence case in
copy; labels uppercase. Never set body text in the serif.

## Rooms and layout

1. Sections are full-bleed rooms with hard cuts, alternating putty and ink;
   bone is the elevated light surface for sheets and one room per page.
2. One container, `.wrap`, capped at 1600px. Content sits on a 12-column
   grid: heading in 4 or 5 columns, content in the rest, or centered in an
   ink room.
3. Lists are hairline rows (`RuledList`, `CheckList`, `Steps`, `Faq`), never
   grids of cards. A `.sheet` (bone, hairline, 9px) is for a form, a
   document, a menu, a price table.
4. Numbers only on real sequences; the serif sets them large.
5. Shapes: circles for imagery (`.vignette`), hexagons for indicators
   (`Hex`), pills for buttons (`.btn`, 28.8px), 9px corners on sheets, 2px
   on links, the notched black card for the one floating object.
6. Icons: none as decoration. Only the monogram, the menu close, the hex,
   the chevron in a select.
7. Buttons: `.btn.btn-solid` (ink pill, one per view), `.btn.btn-line`
   (hairline pill). Text links: `.link`, underline only. No arrows.
8. Imagery: Met Open Access paintings only (`docs/paintings.md`), as
   circular vignettes or one full-bleed panel per page, credited. No stock
   photography, no illustration.

## Motion (src/components/motion)

Motion answers scrolling or hovering, or shows the thing the copy
describes. `Reveal` (words slide up once), `Hairline` (draws left to
right), `Counter` (counts to the number), `Parallax` (a painting sits
deeper than the page), `Marquee` (the slow serif ticker), the hero's pinned
scroll sequence and the typewriter are the whole vocabulary. No particles,
glow, shimmer, pulse, hover-lift or scale on cards. Every primitive renders
its final state under `prefers-reduced-motion` and in the prerender, and
never changes layout after it runs.

## Copy

Plain verbs, concrete nouns, sentence case. Say what the thing does. Button
text says what happens. No invented numbers, clients or results. No em
dashes, no emoji, no "Uzzināt vairāk".
