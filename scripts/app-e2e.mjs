// Usage: node scripts/app-e2e.mjs http://localhost:4610
// Menu overlay keyboard behaviour, deferred bootstrap under slow images, and chunk-failure recovery.
import { chromium } from 'playwright';

const base = (process.argv[2] ?? 'http://localhost:4610').replace(/\/$/, '');
const browser = await chromium.launch();
let failures = 0;
const check = (name, ok) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) failures++; };
const isDark = (page) => page.evaluate(() => document.documentElement.classList.contains('dark-mode'));

// 1. the menu overlay opens, traps focus, closes on Escape, and returns focus to the trigger
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const trigger = page.getByRole('button', { name: 'Izvēlne' });
  await trigger.click();
  const dialog = page.locator('dialog[open]');
  check('menu opens as a modal dialog', (await dialog.count()) === 1);
  let inside = true;
  for (let i = 0; i < 20; i++) {
    await page.keyboard.press('Tab');
    inside = inside && (await page.evaluate(() => !!document.activeElement?.closest('dialog[open]')));
  }
  check('Tab stays inside the menu', inside);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  check('Escape closes the menu', (await page.locator('dialog[open]').count()) === 0);
  check('focus returns to the trigger', await page.evaluate(() => document.activeElement?.textContent?.trim() === 'Izvēlne'));
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
