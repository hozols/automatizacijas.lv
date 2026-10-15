// Usage: node scripts/hero-e2e.mjs http://localhost:8080
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:8080';
const browser = await chromium.launch();
let failures = 0;
const check = (name, ok) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) failures++; };

// 1. automation without override gets the image
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  check('webdriver -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  await page.close();
}

// 2. override renders 3d and becomes ready; context loss falls back to image
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hero-mode="3d"][data-hero-ready="1"]', { timeout: 30000 });
  check('3d override -> ready', true);
  await page.evaluate(() => {
    const c = document.querySelector('[data-hero-mode="3d"] canvas');
    const gl = c.getContext('webgl2');
    gl.getExtension('WEBGL_lose_context').loseContext();
  });
  await page.waitForTimeout(500);
  check('context loss -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  check('no canvas after context loss', (await page.locator('[data-hero-mode] canvas').count()) === 0);
  await page.close();
}

// 3. reduced motion switched on after load unmounts the scene, on the same page
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hero-mode="3d"][data-hero-ready="1"]', { timeout: 30000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(500);
  check('reduced motion -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  check('no canvas after reduced motion', (await page.locator('[data-hero-mode] canvas').count()) === 0);
  await page.close();
}

// 3b. narrowing the viewport below 768px after load unmounts the scene
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hero-mode="3d"][data-hero-ready="1"]', { timeout: 30000 });
  await page.setViewportSize({ width: 600, height: 900 });
  await page.waitForTimeout(500);
  check('narrow viewport -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  await page.close();
}

// 4. a missing model falls back to the image instead of crashing the page
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.route('**/models/typewriter.glb', (route) => route.fulfill({ status: 404, body: 'gone' }));
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  check('missing GLB -> image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  check('missing GLB keeps the h1', (await page.locator('h1').count()) === 1);
  await page.close();
}

// 5. mobile viewport gets the image
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const img = page.locator('[data-hero-mode] img');
  check('mobile shows image with alt', ((await img.getAttribute('alt')) ?? '').length > 10);
  check('mobile stays in image mode', (await page.getAttribute('[data-hero-mode]', 'data-hero-mode')) === 'image');
  await page.close();
}

await browser.close();
if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
