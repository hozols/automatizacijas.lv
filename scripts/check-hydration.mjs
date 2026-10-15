// Visits every prerendered route on a running preview server and fails on hydration errors.
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { routesFromSitemap } from './prerender-core.mjs';

const base = (process.argv[2] ?? 'http://localhost:4173').replace(/\/$/, '');
const routes = routesFromSitemap(readFileSync('public/sitemap.xml', 'utf8'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
let failures = 0;

for (const route of routes) {
  const problems = [];
  const onConsole = (msg) => {
    const t = msg.text();
    if (/hydrat|did not match|Expected server HTML|Minified React error #4(18|23|25)/i.test(t)) problems.push(t.slice(0, 160));
  };
  const onError = (e) => problems.push(`pageerror: ${e.message.slice(0, 160)}`);
  page.on('console', onConsole);
  page.on('pageerror', onError);
  // trailing slash: vite preview only maps "/x/" to x/index.html; "/x" falls back to the SPA shell.
  // Vercel serves x/index.html for both forms.
  const url = route === '/' ? `${base}/` : `${base}${route}/`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const h1 = await page.locator('h1').count();
  page.off('console', onConsole);
  page.off('pageerror', onError);
  if (problems.length || h1 !== 1) {
    failures++;
    console.error('FAIL', route, problems.join(' | '), h1 !== 1 ? `h1 count ${h1}` : '');
  } else {
    console.log('ok  ', route);
  }
}
await browser.close();
if (failures) {
  console.error(`${failures} route(s) with hydration problems`);
  process.exit(1);
}
