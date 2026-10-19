import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App, { preloadRoute } from './App.tsx';
import { rememberLanding } from './lib/attribution';
import './index.css';

// the first page of the session and its referrer, for form attribution
try {
  rememberLanding(window.sessionStorage, window.location.href, document.referrer);
} catch {
  /* storage blocked */
}

const container = document.getElementById('root')!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

const RELOAD_FLAG = 'bootstrap-retry';

/* A page chunk that fails to load (network blip, stale hashes after a deploy)
   must not leave a static page with an inert header and forms. One reload
   picks up fresh chunks; a second failure falls back to a client render. */
const recover = (error: unknown) => {
  console.error('hydration bootstrap failed', error);
  let retried = false;
  try {
    retried = sessionStorage.getItem(RELOAD_FLAG) === '1';
    if (!retried) sessionStorage.setItem(RELOAD_FLAG, '1');
  } catch {
    /* storage blocked: fall through to the client render */
  }
  if (!retried) {
    window.location.reload();
    return;
  }
  container.replaceChildren();
  createRoot(container).render(app);
};

if (container.hasChildNodes()) {
  preloadRoute(window.location.pathname)
    .then(() => {
      hydrateRoot(container, app);
      try {
        sessionStorage.removeItem(RELOAD_FLAG);
      } catch {
        /* storage blocked */
      }
    })
    .catch(recover);
} else {
  createRoot(container).render(app);
}
