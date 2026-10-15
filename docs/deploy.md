# Deploying automatizacijas.lv

Production is the Vercel project `baltai` (team hozols-projects). Builds run
locally because the prerender step needs Chromium.

    npm ci
    npx playwright install chromium
    npx vercel@latest build            # preview build: vite build + prerender
    npx vercel@latest deploy --prebuilt

For production, from `main` after the preview was approved:

    npx vercel@latest build --prod
    npx vercel@latest deploy --prebuilt --prod

What the build produces:

- `dist/<route>/index.html` for every route in `public/sitemap.xml`, with the
  page's own title, description, h1 and structured data in the HTML.
- `dist/index.html` is the prerendered homepage.
- `dist/app.html` is the untouched client shell; `vercel.json` rewrites every
  unknown URL to it so the 404 page renders client-side.

Checks worth running before a production deploy:

    npm test                              # unit tests
    npm run lint
    npx vite preview --port 4610 --strictPort &
    npm run check:hydration http://localhost:4610   # every route hydrates cleanly
    npm run hero:e2e http://localhost:4610          # hero fallbacks

Local `vite preview` only maps `/x/` (trailing slash) to `x/index.html`;
Vercel serves it for `/x` as well.
