# automatizacijas.lv design system

The site sells office automation to Latvian business owners, accountants and
office managers. The look is quiet and editorial: warm off-white paper, one
near-black ink for text, buttons and links, thin ruled lines, a serif for
headlines and a plain sans for everything else. No accent colour. It must
not look like a generated SaaS template.

## Tokens (src/index.css, tailwind.config.ts)

| Name | Value | Use |
| --- | --- | --- |
| paper `bg-background` | #F6F5F0 | page ground |
| sheet `bg-card` | #FFFFFF | documents, forms, menus |
| ink `text-foreground`, `bg-primary`, `band-ink` | #151719 | text, buttons, links, dark bands, footer |
| rule `border-border` | #E3E0D8 | ruled lines |
| highlighter `bg-marker`, `.mark`, `.sweep` | #EDE6D2 | a pale underline on hover or on what is done |

Dark mode is the `.dark-mode` class on `<html>`: the same system inverted
(off-white on near-black). Every token has a value in both, so use tokens and
never hard-coded colours (`blue-500`, `#fff`, `gray-400`).

Type: Newsreader (serif, weight 500, optical size 72) for `h1`/`h2` (classes
`display-1`, `display-2`, `display-3`), Manrope for everything else. `h3` and
smaller are the text face at 600. Sentence case in new copy. No letter-spacing
tweaks beyond the -0.01em the display face carries.

## Layout rules

1. Left aligned. No `text-center` section headers, no `mx-auto` text blocks.
2. One container: `.wrap`. Sections are full-width bands; the content grid is
   12 columns: heading in 4 or 5, content in the rest.
3. Lists are ruled rows (`RuledList`, `CheckList`), not grids of cards.
   A bordered box is allowed only for a thing that is really a sheet: a form,
   a document, a menu, a dialog, a price table. Use the `.sheet` class.
4. Numbers only on real sequences (`Steps`).
5. Icons: none as decoration. Allowed only inside controls where they carry
   meaning (menu, close, theme, external link, chevron in a select).
6. Motion is allowed only when it answers a user action (hover, click,
   scroll position) or shows the thing the nearby text describes. Hover
   changes colour or sweeps the highlighter. No background particles,
   glow, blur, shimmer, pulse, hover-lift, scale-on-hover or entrance
   animations. The hero typewriter is the one scene that moves on its own.
   `prefers-reduced-motion: reduce` turns every allowed motion into its
   final state.
7. Radius: `rounded-md` at most (4px). No `rounded-full` pills or badges.
8. Buttons: `btn btn-solid` (main action), `btn btn-line` (secondary). Text
   links: `link`. No arrows or icons in button or link text.
9. One closing `CtaBand` per page, directly above the footer.
10. Form fields: `field` + `field-label` classes, on a `.sheet`.

## Avoid (these are what made the old site look generated)

Pill badges above headings, uppercase tracked labels, a single coloured word in
a headline, stat cards with icon + big number, identical icon cards in a 3-col
grid, "Uzzināt vairāk →", middle-dot separated meta strings, em dashes in copy,
emoji.

## Components (src/components/page/index.tsx)

`PageShell`, `Breadcrumbs`, `PageHero` (title, lede, facts[]), `Section`
(title, intro, tone: paper | sheet | ink), `Prose`, `CheckList`, `RuledList`
(items with title, desc, aside, to; columns 1 | 2), `Steps`, `Faq`, `CtaBand`.
Reference page: `src/pages/ChatbotuIzstrade.tsx`. Reference for bespoke
sections: the `Home*.tsx` components.

Alternate `Section` tones paper / sheet down the page so bands are visible.

## Copy

Plain verbs, concrete nouns, sentence case. Say what the thing does. Button
text says what happens. Do not invent numbers, clients or results.
