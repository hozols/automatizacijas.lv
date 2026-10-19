/*
  Where a visitor came from and where they landed, kept for the whole
  session so a form submission can say which page earned it. Nothing is
  sent anywhere until a form is submitted (and GA only with consent).
*/

export interface Attribution {
  landing_page: string;
  source: string;
  medium: string;
  campaign: string;
  referrer_host: string;
}

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const KEY = 'attribution';
const SEARCH_ENGINES: Record<string, string> = {
  google: 'google',
  bing: 'bing',
  duckduckgo: 'duckduckgo',
  yandex: 'yandex',
  seznam: 'seznam',
  yahoo: 'yahoo',
  ecosia: 'ecosia',
};

const DIRECT: Attribution = { landing_page: '/', source: 'direct', medium: 'none', campaign: '', referrer_host: '' };

const host = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};

export function deriveAttribution(url: string, referrer: string): Attribution {
  let landing = '/';
  let params = new URLSearchParams();
  try {
    const u = new URL(url);
    landing = u.pathname || '/';
    params = u.searchParams;
  } catch {
    /* keep defaults */
  }
  const referrerHost = host(referrer);
  const utmSource = params.get('utm_source')?.trim();
  if (utmSource) {
    return {
      landing_page: landing,
      source: utmSource.slice(0, 60),
      medium: (params.get('utm_medium') ?? '').trim().slice(0, 60),
      campaign: (params.get('utm_campaign') ?? '').trim().slice(0, 60),
      referrer_host: referrerHost,
    };
  }
  if (!referrerHost) return { ...DIRECT, landing_page: landing };
  const engine = Object.keys(SEARCH_ENGINES).find((e) => referrerHost === e + '.com' || referrerHost.includes('.' + e + '.') || referrerHost.endsWith('.' + e + '.com') || referrerHost.startsWith(e + '.'));
  if (engine) return { landing_page: landing, source: SEARCH_ENGINES[engine], medium: 'organic', campaign: '', referrer_host: referrerHost };
  return { landing_page: landing, source: referrerHost.replace(/^www\./, ''), medium: 'referral', campaign: '', referrer_host: referrerHost };
}

/* Call once per page load; only the first page of the session is kept. */
export function rememberLanding(storage: StorageLike, url: string, referrer: string): Attribution {
  try {
    const existing = storage.getItem(KEY);
    if (existing) return JSON.parse(existing) as Attribution;
    // a referrer from our own site means this is not the first page (storage was cleared or blocked)
    const a = deriveAttribution(url, host(referrer) === host(url) ? '' : referrer);
    storage.setItem(KEY, JSON.stringify(a));
    return a;
  } catch {
    return deriveAttribution(url, referrer);
  }
}

export function getAttribution(storage: StorageLike): Attribution {
  try {
    const raw = storage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Attribution;
  } catch {
    /* blocked or malformed */
  }
  return { ...DIRECT };
}

/* The offer a page sent the visitor to the form with: ?offer=e-rekini. Letters, digits and hyphens only. */
export function offerFromSearch(search: string): string {
  try {
    const v = new URLSearchParams(search).get('offer') ?? '';
    return /^[a-z0-9-]+$/i.test(v) ? v.slice(0, 40).toLowerCase() : '';
  } catch {
    return '';
  }
}

export const browserAttribution = (): Attribution =>
  typeof window === 'undefined' ? { ...DIRECT } : getAttribution(window.sessionStorage);
