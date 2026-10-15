# automatizacijas.lv v2: "Birojs kopš 1514. gada"

Date: 2026-10-15
Branch: `redesign-2026` (on top of commit `be41cd0`)
Status: approved in conversation (imagery: yes, motion: cinematic, serif: Instrument Serif)
Supersedes the visual sections of `2026-10-15-interactive-3d-hero-and-seo-design.md`;
the prerender, SEO and 3D pipeline sections of that spec still stand.

## Goal

Make the site feel world class: a gallery about office work, with monumental
type, hard light/dark rooms, old-master paintings of clerks and merchants as
atmosphere, and a 3D typewriter that the scroll moves through the first room.
Clean and minimal stays; boring goes.

## Reference

`/Users/hermanisozols/Downloads/DESIGN.md` ("Structured", Renaissance gallery
on putty paper). We borrow its palette, type contrast, section rhythm, pill
buttons, circular vignettes, hexagon indicators, hairlines, full-bleed
paintings and the cropped wordmark. We do not borrow its content or its
"no menu" rule literally (we have 44 routes to reach).

## Out of scope

New pages, new copy beyond what the sections need, English, 3D outside the
hero, blog content.

## 1. Tokens

| Token | Value | Use |
| --- | --- | --- |
| putty `--background` | #C4C3B6 | page canvas, light rooms |
| bone `--card` | #E7E5E4 | cards, sheets, the elevated light surface |
| chalk `--chalk` | #EBEBEB | footer |
| vellum `--border` | #DFDCD5 | hairlines on light rooms |
| graphite `--muted-foreground` | #595855 | muted text on light rooms |
| ink `--ink`, `--foreground`, `--primary` | #000000 | dark rooms, text, the pill button |
| paper `--ink-foreground` | #FFFFFF | text on dark rooms |
| ash `--ash` | #808080 | image placeholders only |

No other colour anywhere. No gradients, no shadows, no blur. Radius: cards
9px, pill buttons 28.8px, links 2px. The dark-mode toggle is removed: the
page is light and dark by section, not by preference.

Type: **Instrument Serif** (display, 400, italic available) for everything
24px and up; **Manrope** for everything 26px and below. Scale (clamp, desktop
max):

| Role | Size | Line height | Tracking |
| --- | --- | --- | --- |
| display (wordmark) | 22vw, max 374px | 0.84 | -0.035em |
| heading-lg (section) | clamp(44px, 7vw, 94px) | 0.9 | -0.02em |
| heading (page h1) | clamp(40px, 5.5vw, 72px) | 0.95 | -0.015em |
| subheading | 22px serif | 1.2 | 0 |
| body | 16px / 15px Manrope | 1.5 | 0 |
| label | 12px Manrope 500 uppercase | 1.25 | 0.08em |
| micro | 9px Manrope uppercase | 1.25 | 0.12em |

Sentence case in copy; labels uppercase.

## 2. Rooms

Sections are full-bleed rooms with hard cuts, alternating putty and ink.
Content sits in a 12-column grid with 24px gutters and no max-width below
1600px. Vertical rhythm: 96px between rooms on desktop, 60px on mobile.

## 3. Header and navigation

Header: 56px row, transparent over the room beneath. Left: monogram "a."
drawn as a 32px circled serif "a" in a 1.5px stroke. Right: text link
"Izvēlne" and a pill "Konsultācija". "Izvēlne" opens a full-screen ink
overlay: the main routes as Instrument Serif links at heading-lg, industries
and blog as Manrope lists, close with a circled ×. The overlay is a
`<dialog>`, focus-trapped, closed by Escape. The footer keeps every route as
a plain link list so the prerendered HTML links everything.

## 4. Homepage, room by room

### 4.1 Hero (putty, pinned on desktop)

Top cluster, centered, Manrope label "AI automatizācija birojam", serif line
at heading "Darbi, kas atkārtojas, izdarīti paši.", a stat pair
"Kleen1 · 20 min → 3 min par līgumu", the pill "Pieteikt konsultāciju".
Lower half: the wordmark "automatizācija" at display size, cropped at both
viewport edges, ink on putty. The 3D typewriter stands on the wordmark's
baseline, centered, larger than before (about 60vw wide on desktop), typing
its lines; pointer parallax as today.

Scroll sequence (desktop ≥ 1024px, no reduced motion): the hero wrapper is
200vh tall and the stage is sticky. Progress 0→1 drives: camera dolly back
and 90° yaw of the machine (it ends seen from the side), the wordmark
letter-spacing opening from -0.035em to 0.08em while it fades to graphite,
the putty background crossfading to ink in the last 30%, so the machine is
seen as a black-room exhibit for a moment before the next room begins.
Progress is read with `motion`'s `useScroll` on the wrapper and passed to the
scene through a ref each frame; no React state per frame.

Mobile and reduced motion: no pin, wordmark at 22vw, static hero image
(fallback WebP), everything in its final state.

### 4.2 Ink room: "Ko mašīna dara pati" (services)

Heading-lg in paper, centered. Three circular vignettes (240px desktop) in a
row: a tax collector at his table (van Hemessen, *The Calling of Saint
Matthew*, Met 436643) captioned "Rēķini", a scholar writing (Clouet,
*Guillaume Budé*, Met 435914) captioned "Līgumi", a woman with a letter
(ter Borch, *Curiosity*, Met 435714) captioned "Atbildes". Captions in
subheading serif, three hexagon outlines under each. Below, the six services
as hairline rows in paper on ink; each row's title reveals word by word.
Hovering a row swaps the matching vignette's image to the row's painting and
the caption to the service name.

### 4.3 Painting panel (full bleed)

David, *Antoine Laurent Lavoisier and Marie Anne Lavoisier* (Met 436106)
edge to edge, 100vh, slow parallax (the image travels 12% slower than the
page). Centered: a notched black card (420px, corners cut 24px at 45°) with
the Kleen1 case: label "Gadījums", serif "No 20 minūtēm līdz 3 par katru
līgumu", a counter that counts 20→3 when the card enters the viewport, micro
label "SCROLL" bottom left. Painting credit micro-label bottom right.

### 4.4 Putty room: "Paveiktie darbi"

Heading-lg left. Three cases as hairline rows: client, what was built, the
number in serif at heading size counting up on reveal (50+ templates, 5 h a
week, 20 → 3 min). Two quotes in serif italic with Manrope attribution.

### 4.5 Ink room: "Kā tas notiek" (process)

Four steps on one hairline that draws from left to right as the room enters;
each step has a hexagon that fills in sequence, a serif number, a Manrope
title and text.

### 4.6 Putty room: clients and FAQ

A serif marquee of client names (slow, pauses on hover, reduced motion:
static wrapped list). Then the FAQ as hairline `<details>` rows, serif
questions.

### 4.7 CTA room (ink) and footer (chalk)

Ink: heading-lg "Pieteikt bezmaksas konsultāciju", one pill in paper on ink.
Footer on chalk: four columns of plain links, painting credits line
"Gleznas: The Metropolitan Museum of Art, Open Access (CC0)".

## 5. Inner pages

`PageHero` becomes a putty room with the page h1 at heading, lede in Manrope,
and on service and industry pages a 200px circular vignette on the right
(painting per page from the credits table). `Section` tones map to putty
(default) and ink; "sheet" becomes bone. Section titles reveal; hairline
lists draw their top rule. Nothing else changes in the page components'
API, so the 44 routes keep rendering.

## 6. Motion system

Library: `motion` (v14, `motion/react`). Primitives in `src/components/motion/`:

- `Reveal` wraps a heading; splits text into words, each word clipped and
  translated up 100% until in view, 40ms stagger, 700ms ease-out. Once.
- `Hairline` a 1px rule that scales X 0→1 on in view, 900ms.
- `Counter` animates a number from→to on in view, 1.2 s, tabular figures.
- `Parallax` moves children by a factor of scroll progress of their room.
- `Marquee` CSS keyframe loop, duplicated content, pause on hover.
- `usePinnedProgress` returns 0..1 for a sticky wrapper.

All primitives render their final state when `prefers-reduced-motion:
reduce` or when `navigator.webdriver` is true (prerender captures final
states, so the static HTML is complete). Motion never changes layout after
reveal (no height animations), so hydration sees the same tree.

## 7. Imagery pipeline

`scripts/fetch-paintings.mjs` reads `docs/paintings.json` (Met object ID,
slug, crop focus), downloads the Met primary image, writes
`public/paintings/<slug>-1600.webp` (full bleed, quality 78) and
`public/paintings/<slug>-800.webp` (square, cropped at the focus point) and
regenerates `docs/paintings.md` with title, artist, date, object ID and the
CC0 note. Images are committed. All candidates are Met Open Access
(`isPublicDomain: true`).

## 8. Performance and SEO

Budgets from the previous spec stand: mobile Lighthouse performance ≥ 90,
SEO ≥ 95. Paintings are lazy except the panel's, which loads when within one
viewport. `motion` adds about 30 KB gzip and loads with the app, not before
first paint. The hero scroll sequence runs only on desktop. Prerender,
titles, descriptions and structured data are unchanged.

## 9. Testing

- Unit: word splitting for `Reveal`, `Counter` easing endpoints,
  `usePinnedProgress` maths, paintings manifest validation.
- e2e: reduced motion shows final states (counter at target, hairlines at
  full width, all words visible); hero progress reaches 1 at the end of the
  pinned wrapper and the scene receives it; menu overlay opens, traps focus,
  closes on Escape; paintings respond 200 with `image/webp`.
- Existing: hydration 44/44, hero e2e, app e2e (theme test replaced by the
  menu test), Lighthouse before/after.
