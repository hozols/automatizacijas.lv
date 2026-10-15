/*
  Every route ships as prerendered HTML, so the page must paint before any of
  the app's JavaScript is evaluated. The entry stays tiny and loads the real
  app after the first paint; hydration follows a moment later.
*/
const start = () => import('./bootstrap');

if (document.readyState === 'complete') {
  requestAnimationFrame(() => requestAnimationFrame(start));
} else {
  window.addEventListener('load', () => requestAnimationFrame(start), { once: true });
}
