// Usage: node scripts/capture-hero.mjs http://localhost:8080
import { chromium } from 'playwright';
import sharp from 'sharp';

const base = process.argv[2] ?? 'http://localhost:8080';
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
// consent already given, so the cookie banner cannot overlap the canvas in the element screenshot
await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
const page = await context.newPage();
await page.goto(`${base}/?hero=capture`, { waitUntil: 'networkidle' });
await page.waitForSelector('[data-hero-mode="capture"][data-hero-ready="1"]', { timeout: 30000 });
// strip every CSS background so the element screenshot keeps the canvas alpha
await page.addStyleTag({ content: 'html, body, #root, #root *:not(canvas) { background: transparent !important; }' });
await page.waitForTimeout(800); // let the contact shadow and fonts settle
const png = await page.locator('[data-hero-mode="capture"] canvas').screenshot({ omitBackground: true, type: 'png' });
await browser.close();
await sharp(png).resize(1200, 900, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 82, alphaQuality: 90 }).toFile('public/images/hero-typewriter.webp');
await sharp(png).resize(600, 450, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 80, alphaQuality: 90 }).toFile('public/images/hero-typewriter-600.webp');
console.log('wrote public/images/hero-typewriter.webp and hero-typewriter-600.webp');
