// Usage: node scripts/app-e2e.mjs http://localhost:4610
// Theme toggle persistence, deferred bootstrap under slow images, and chunk-failure recovery.
import { chromium } from 'playwright';

const base = (process.argv[2] ?? 'http://localhost:4610').replace(/\/$/, '');
const browser = await chromium.launch();
let failures = 0;
const check = (name, ok) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) failures++; };
const isDark = (page) => page.evaluate(() => document.documentElement.classList.contains('dark-mode'));

// 1. a returning dark user switches to light and the choice survives client-side navigation
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addInitScript(() => { try { localStorage.setItem('theme', 'dark'); } catch {} });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  check('stored dark is applied', await isDark(page));
  await page.getByRole('button', { name: /gaišo režīmu/ }).first().click();
  await page.waitForTimeout(300);
  check('toggle switches to light', !(await isDark(page)));
  check('light is stored', (await page.evaluate(() => localStorage.getItem('theme'))) === 'light');
  await page.getByRole('link', { name: 'Projekti' }).first().click();
  await page.waitForURL(/\/portfolio/);
  await page.waitForTimeout(800);
  check('light survives client navigation', !(await isDark(page)));
  await context.close();
}

// 2. hydration does not wait for a slow hero image
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.route('**/images/hero-typewriter*.webp', async (route) => {
    await new Promise((r) => setTimeout(r, 6000));
    await route.continue();
  });
  const page = await context.newPage();
  const t0 = Date.now();
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  // The cookie banner is rendered by a mount effect, so it exists only once React has hydrated
  // (this context has no consent cookie, and the prerender ran with one).
  const hydrated = await page
    .waitForSelector('aside[aria-labelledby="cookie-banner-title"]', { timeout: 4000 })
    .then(() => true)
    .catch(() => false);
  check(`hydrates while images are still loading (${Date.now() - t0} ms)`, hydrated);
  await context.close();
}

// 3. a failed page chunk recovers instead of leaving a dead page
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  let blocked = 0;
  await context.route('**/assets/Index-*.js', (route) => {
    if (blocked === 0) { blocked++; return route.abort(); }
    return route.continue();
  });
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  const recovered = await page
    .waitForSelector('aside[aria-labelledby="cookie-banner-title"]', { timeout: 8000 })
    .then(() => true)
    .catch(() => false);
  check('page recovers after a failed page chunk', recovered);
  check('h1 still present after recovery', (await page.locator('h1').count()) === 1);
  await context.close();
}

await browser.close();
if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
