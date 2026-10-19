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

// 4. motion on a direct production load: below-fold reveals are armed, then play on scroll
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/?motion=on`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  const armed = await page.evaluate(() => {
    const below = [...document.querySelectorAll('.reveal, .hairline-draw')].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    return { count: below.length, on: below.filter((el) => el.classList.contains('is-on')).length };
  });
  check(`below-fold reveals start armed (${armed.on}/${armed.count} already on)`, armed.count > 5 && armed.on === 0);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= H; y += 300) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(900);
  const played = await page.evaluate(() => {
    const all = [...document.querySelectorAll('.reveal, .hairline-draw')];
    return { count: all.length, on: all.filter((el) => el.classList.contains('is-on')).length };
  });
  check(`reveals play after scrolling (${played.on}/${played.count})`, played.count > 0 && played.on === played.count);
  await context.close();
}

// 5. reduced motion: every primitive rests in its final state without scrolling
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  const rest = await page.evaluate(() => {
    const inner = [...document.querySelectorAll('.reveal-inner')].map((el) => getComputedStyle(el).transform);
    const lines = [...document.querySelectorAll('.hairline-draw')].map((el) => getComputedStyle(el).transform);
    const counters = [...document.querySelectorAll('.tabular-nums')].map((el) => el.textContent.trim());
    return { words: inner.length, wordsAtRest: inner.filter((t) => t === 'none' || t === 'matrix(1, 0, 0, 1, 0, 0)').length, lines: lines.length, linesAtRest: lines.filter((t) => t === 'none' || t === 'matrix(1, 0, 0, 1, 0, 0)').length, counters };
  });
  check(`reduced motion: all ${rest.words} words at rest`, rest.words > 0 && rest.wordsAtRest === rest.words);
  check(`reduced motion: all ${rest.lines} hairlines at rest`, rest.lines > 0 && rest.linesAtRest === rest.lines);
  check(`reduced motion: counters at target (${rest.counters.join(', ')})`, rest.counters.includes('3 min') && rest.counters.includes('50+') && rest.counters.includes('5 h'));
  await context.close();
}

// 6. a deep link into the cases room still ends with the counters at their targets
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/?motion=on#cases`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  const counters = await page.evaluate(() => [...document.querySelectorAll('#cases .tabular-nums')].map((el) => el.textContent.trim()));
  check(`#cases deep link: counters reach targets (${counters.join(', ')})`, counters.includes('3 min') && counters.includes('50+') && counters.includes('5 h'));
  await context.close();
}

// 7. a missing object still leaves an ash square of the same size
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  await context.route('**/objects/invoices-*.webp', (route) => route.fulfill({ status: 404, body: 'gone' }));
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  const sizes = await page.evaluate(() => [...document.querySelectorAll('.vignette')].slice(0, 3).map((el) => Math.round(el.getBoundingClientRect().width)));
  const bg = await page.evaluate(() => getComputedStyle(document.querySelector('.vignette')).backgroundColor);
  check(`missing object keeps the square size (${sizes.join('/')})`, sizes.length === 3 && sizes.every((w) => w === sizes[0] && w > 100));
  check(`missing object shows the ash placeholder (${bg})`, bg === 'rgb(145, 145, 145)');
  await context.close();
}

// 8. object renders are served as WebP and the models as GLB
{
  const page = await browser.newPage();
  let ok = true;
  for (const f of ['invoices-800.webp', 'desk-lamp-wide-1600.webp', 'contract-400.webp']) {
    const res = await page.request.get(`${base}/objects/${f}`);
    ok = ok && res.status() === 200 && (res.headers()['content-type'] || '').includes('image/webp');
  }
  const glb = await page.request.get(`${base}/objects/telephone.glb`);
  check('object renders respond 200 image/webp and the GLB is served', ok && glb.status() === 200);
  await page.close();
}

// 8b. on a desktop with motion the three service vignettes become live wireframes over their stills
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelector('.vignette')?.scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(4000);
  const live = await page.evaluate(() => [...document.querySelectorAll('[data-object-live="1"] canvas')].length);
  check(`three live object wireframes on desktop (${live})`, live === 3);
  await context.close();
}

// 9. the hero room does not change height after hydration (no 100vh jump)
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${base}/?motion=on`, { waitUntil: 'domcontentloaded' });
  const before = await page.evaluate(() => document.querySelector('.hero-wrap')?.offsetHeight ?? 0);
  await page.waitForTimeout(3500);
  const after = await page.evaluate(() => document.querySelector('.hero-wrap')?.offsetHeight ?? 0);
  check(`hero height stable across hydration (${before} -> ${after})`, before > 0 && before === after);
  await context.close();
}

// 10. resizing below 1024px after the sequence returns the hero to its resting state (cluster visible)
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(600);
  await page.setViewportSize({ width: 900, height: 900 });
  await page.waitForTimeout(600);
  const state = await page.evaluate(() => ({ bg: getComputedStyle(document.querySelector('.hero-stage')).backgroundColor, opacity: getComputedStyle(document.querySelector('.hero-cluster')).opacity }));
  check(`narrow after sequence: room stays obsidian (${state.bg}) and the cluster is visible again (${state.opacity})`, state.bg === 'rgb(0, 0, 0)' && Number(state.opacity) > 0.9);
  await context.close();
}

// 11. while the cluster is faded out it cannot take keyboard focus
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/?hero=3d`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(600);
  const focusable = await page.evaluate(() => {
    const a = document.querySelector('.hero-cluster a');
    a.focus();
    return document.activeElement === a;
  });
  check('faded hero buttons are not focusable', !focusable);
  await context.close();
}

// 12. outlined buttons and links stay visible on every dark room (hero, menu, training CTA, forest process)
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  const white = 'rgb(255, 255, 255)';
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  const hero = await page.evaluate(() => getComputedStyle(document.querySelector('.hero-cluster .btn-line')).color);
  await page.click('header button[aria-haspopup="dialog"]');
  await page.waitForTimeout(300);
  const menu = await page.evaluate(() => getComputedStyle(document.querySelector('dialog[open] .btn-solid')).backgroundColor);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const forest = await page.evaluate(() => getComputedStyle(document.querySelector('.bg-forest a.link')).color);
  await page.hover('.bg-forest a.link');
  await page.waitForTimeout(200);
  const forestHover = await page.evaluate(() => getComputedStyle(document.querySelector('.bg-forest a.link')).color);
  await page.goto(`${base}/training/`, { waitUntil: 'networkidle' });
  const training = await page.evaluate(() => getComputedStyle(document.querySelector('.band-action .btn-line')).color);
  check(`hero outlined button is white (${hero})`, hero === white);
  check(`menu solid button is white (${menu})`, menu === white);
  check(`forest room link is white (${forest})`, forest === white);
  check(`forest room link stays light on hover (${forestHover})`, forestHover !== 'rgb(87, 87, 87)');
  check(`training outlined button is white (${training})`, training === white);
  await context.close();
}

// 13. a submission from an offer page carries the offer and the session's landing page (intercepted, never sent)
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies([{ name: 'cookies-accepted', value: 'true', url: base }]);
  const page = await context.newPage();
  let body = '';
  await context.route('**/formspree.io/**', async (route) => {
    body = route.request().postData() ?? '';
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });
  await page.goto(`${base}/blog/e-rekini-latvija/`, { waitUntil: 'networkidle' });
  await page.click('a[href="/contact?offer=e-rekini"]');
  await page.waitForSelector('#name');
  await page.fill('#name', 'E2E tests');
  await page.fill('#email', 'e2e@example.com');
  await page.selectOption('#service', 'workers');
  await page.fill('#message', 'Testa ziņa no app-e2e, nekur netiek sūtīta.');
  await page.check('#gdprConsent');
  await page.click('form button[type="submit"]');
  await page.waitForTimeout(1500);
  check(`offer page submission carries offer and landing page (${body.includes('name="offer"') && body.includes('e-rekini')}/${body.includes('/blog/e-rekini-latvija')})`, body.includes('name="offer"') && body.includes('e-rekini') && body.includes('/blog/e-rekini-latvija'));
  await context.close();
}

await browser.close();
if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
