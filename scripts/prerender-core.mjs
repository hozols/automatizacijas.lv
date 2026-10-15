import path from 'node:path';

export function routesFromSitemap(xml) {
  const routes = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const unique = [...new Set(routes.map((r) => (r !== '/' && r.endsWith('/') ? r.slice(0, -1) : r)))];
  unique.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
  return unique;
}

export function checkDocument(html, route) {
  const errors = [];
  if (!/<title[^>]*>[^<]+<\/title>/.test(html)) errors.push(`${route}: missing <title>`);
  if (
    !/<meta[^>]+name="description"[^>]+content="[^"]+"/.test(html) &&
    !/<meta[^>]+content="[^"]+"[^>]+name="description"/.test(html)
  ) {
    errors.push(`${route}: missing meta description`);
  }
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length === 0) errors.push(`${route}: missing <h1>`);
  if (h1s.length > 1) errors.push(`${route}: expected exactly one h1, found ${h1s.length}`);
  return errors;
}

const RUNTIME_HOSTS = ['www.googletagmanager.com', 'www.google-analytics.com', 'www.clarity.ms'];

export function stripRuntimeScripts(html, keepSrcs) {
  return html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>\s*<\/script>/g, (tag, src) => {
    const host = (() => {
      try {
        return new URL(src).host;
      } catch {
        return '';
      }
    })();
    if (RUNTIME_HOSTS.includes(host) && !keepSrcs.has(src)) return '';
    return tag;
  });
}

export function outputPathFor(route, distDir) {
  return route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

export function scriptSrcs(html) {
  return new Set([...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]));
}

/*
  Browsers serialise style attributes as "name: value;" while React expects
  "name:value" joined by ";" during hydration. A mismatch is only a warning,
  but React prints a single hydration warning per page, so it hides real ones.
*/
export function normalizeStyleAttributes(html) {
  return html.replace(/ style="([^"]*)"/g, (_, value) => {
    const decls = value
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const i = d.indexOf(':');
        return i === -1 ? d : `${d.slice(0, i).trim()}:${d.slice(i + 1).trim()}`;
      });
    return ` style="${decls.join(';')}"`;
  });
}
