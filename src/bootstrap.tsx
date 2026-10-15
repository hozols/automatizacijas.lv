import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App, { preloadRoute } from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  preloadRoute(window.location.pathname).then(() => hydrateRoot(container, app));
} else {
  createRoot(container).render(app);
}
