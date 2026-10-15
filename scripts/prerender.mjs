// Runs after `vite build`: renders every sitemap route to dist/<route>/index.html.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { preview } from 'vite';
import { chromium } from 'playwright';
import { routesFromSitemap, checkDocument, stripRuntimeScripts, outputPathFor, scriptSrcs, normalizeStyleAttributes } from './prerender-core.mjs';

const dist = 'dist';
const shellPath = path.join(dist, 'index.html');
const appShellPath = path.join(dist, 'app.html');
if (!existsSync(shellPath)) {
  console.error('dist/index.html missing, run vite build first');
  process.exit(1);
}

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
let rootHtml = null;

for (const route of routes) {
  const url = `${base}${route}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page
    .waitForFunction(() => document.title.length > 0 && document.querySelector('h1') !== null, null, { timeout: 15000 })
    .catch(() => {});
  await page.waitForTimeout(150);
  let html =
    '<!DOCTYPE html>\n' +
    (await page.evaluate(() => {
      // React renders adjacent text children as separate text nodes; serialised HTML merges them.
      // SSR keeps them apart with an empty comment, and hydration skips comments, so do the same.
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
      const pairs = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (n.nextSibling && n.nextSibling.nodeType === Node.TEXT_NODE) pairs.push(n);
      }
      for (const n of pairs) n.parentNode.insertBefore(document.createComment(''), n.nextSibling);
      return document.documentElement.outerHTML;
    }));
  html = normalizeStyleAttributes(stripRuntimeScripts(html, keep));
  const errs = checkDocument(html, route);
  if (errs.length) {
    errors.push(...errs);
    console.error('FAIL', route, errs.join('; '));
    continue;
  }
  const out = outputPathFor(route, dist);
  if (route === '/') {
    // written last: until then dist/index.html stays the pristine shell that the preview
    // server falls back to for every route it has not seen a file for yet
    rootHtml = html;
    console.log('ok  ', route, '->', out, '(deferred)');
    continue;
  }
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log('ok  ', route, '->', out);
}

await browser.close();
await server.close();
if (rootHtml) writeFileSync(shellPath, rootHtml);
if (errors.length) {
  console.error(`\n${errors.length} route(s) failed prerender`);
  process.exit(1);
}
console.log(`\nprerendered ${routes.length} routes`);
