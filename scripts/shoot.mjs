// Usage: node scripts/shoot.mjs <url> <out.png> [--mobile] [--dark] [--reduced] [--full]
import { chromium } from 'playwright';

const [url, out, ...flags] = process.argv.slice(2);
if (!url || !out) {
  console.error('usage: shoot.mjs <url> <out.png> [--mobile] [--dark] [--reduced] [--full]');
  process.exit(2);
}
const has = (f) => flags.includes(f);
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: has('--mobile') ? { width: 390, height: 844 } : { width: 1440, height: 900 },
  deviceScaleFactor: has('--mobile') ? 2 : 1,
  colorScheme: has('--dark') ? 'dark' : 'light',
  reducedMotion: has('--reduced') ? 'reduce' : 'no-preference',
});
const page = await context.newPage();
if (has('--dark')) {
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
}
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: out, fullPage: has('--full') });
await browser.close();
console.log('wrote', out);
