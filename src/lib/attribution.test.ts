import { describe, expect, it } from 'vitest';
import { deriveAttribution, offerFromSearch, rememberLanding, getAttribution } from './attribution';

const memory = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

describe('deriveAttribution', () => {
  it('reads utm parameters first', () => {
    const a = deriveAttribution('https://automatizacijas.lv/blog/e-rekini-latvija?utm_source=linkedin&utm_medium=social&utm_campaign=erekini', 'https://www.linkedin.com/');
    expect(a).toEqual({ landing_page: '/blog/e-rekini-latvija', source: 'linkedin', medium: 'social', campaign: 'erekini', referrer_host: 'www.linkedin.com' });
  });
  it('treats a search engine referrer as organic', () => {
    const a = deriveAttribution('https://automatizacijas.lv/kas-ir-maksligais-intelekts', 'https://www.google.com/');
    expect(a.source).toBe('google');
    expect(a.medium).toBe('organic');
    expect(a.landing_page).toBe('/kas-ir-maksligais-intelekts');
  });
  it('treats another site as referral and no referrer as direct', () => {
    expect(deriveAttribution('https://automatizacijas.lv/', 'https://lvportals.lv/x').medium).toBe('referral');
    expect(deriveAttribution('https://automatizacijas.lv/', '')).toEqual({ landing_page: '/', source: 'direct', medium: 'none', campaign: '', referrer_host: '' });
  });
});

describe('rememberLanding', () => {
  it('stores the first page of the session and keeps it on later pages', () => {
    const s = memory();
    rememberLanding(s, 'https://automatizacijas.lv/blog/e-rekini-latvija', 'https://www.google.com/');
    rememberLanding(s, 'https://automatizacijas.lv/contact?offer=e-rekini', 'https://automatizacijas.lv/blog/e-rekini-latvija');
    expect(getAttribution(s)).toMatchObject({ landing_page: '/blog/e-rekini-latvija', source: 'google', medium: 'organic' });
  });
  it('returns direct when storage is empty or broken', () => {
    expect(getAttribution({ getItem: () => { throw new Error('blocked'); }, setItem: () => {} })).toMatchObject({ source: 'direct' });
  });
});

describe('offerFromSearch', () => {
  it('keeps a plain slug and drops anything else', () => {
    expect(offerFromSearch('?offer=e-rekini')).toBe('e-rekini');
    expect(offerFromSearch('?offer=<script>')).toBe('');
    expect(offerFromSearch('')).toBe('');
    expect(offerFromSearch('?offer=' + 'a'.repeat(80))).toHaveLength(40);
  });
});
