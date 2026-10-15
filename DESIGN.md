# automatizacijas.lv design system

The site sells office automation to Latvian business owners, accountants and
office managers. The look comes from their world: paper forms, ruled lines,
navy ink, a highlighter. It must not look like a generated SaaS template.

## Tokens (src/index.css, tailwind.config.ts)

| Name | Value | Use |
| --- | --- | --- |
| paper `bg-background` | #EEF0F2 | page ground |
| sheet `bg-card` | #FFFFFF | documents, forms, menus, alternate bands |
| ink `text-foreground`, `band-ink` | #1B2440 | text, dark bands, footer |
| carmine `text-primary`, `bg-primary` | #9E2B35 | actions and links only |
| highlighter `bg-marker`, `.mark`, `.sweep` | #F4DC5A | marks what is done or hovered |
| rule `border-border` | #C9CED8 | ruled lines |

Dark mode is the `.dark-mode` class on `<html>`; every token has a dark value,
so use tokens and never hard-coded colours (`blue-500`, `#fff`, `gray-400`).

Type: Sofia Sans Extra Condensed 800 for `h1`/`h2` (classes `display-1`,
`display-2`, `display-3`), Sofia Sans for everything else. `h3` and smaller are
the text face in bold. Sentence case in new copy. No letter-spacing tweaks.

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
6. No gradients, glows, blur, glass, floating particles, shimmer, pulse,
   hover-lift, scale-on-hover, entrance animations. Hover changes colour or
   sweeps the highlighter, nothing moves.
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
