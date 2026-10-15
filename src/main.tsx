/*
  Every route ships as prerendered HTML, so the page must paint before any of
  the app's JavaScript is evaluated. The entry stays tiny and loads the real
  app right after the first paint; it does not wait for images, so the page
  becomes interactive within a moment even on a slow connection.
*/
const BOOTSTRAP_CAP_MS = 1500;
let started = false;
const start = () => {
  if (started) return;
  started = true;
  import('./bootstrap').catch((error) => {
    console.error('app bootstrap failed', error);
  });
};
const afterPaint = () => requestAnimationFrame(() => requestAnimationFrame(start));

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterPaint, { once: true });
} else {
  afterPaint();
}
window.setTimeout(start, BOOTSTRAP_CAP_MS);
