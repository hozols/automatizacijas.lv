import { describe, it, expect } from 'vitest';
import { searchTitle, trimDescription } from './seo';

describe('searchTitle', () => {
  it('adds the brand suffix when the total stays within 60 characters', () => {
    expect(searchTitle('Paveiktie AI projekti')).toBe('Paveiktie AI projekti | automatizacijas.lv');
  });
  it('omits the brand suffix when it would exceed 60 characters', () => {
    const base = 'ChatGPT latviski: kas tas ir un kā to lietot (2026)';
    expect(searchTitle(base)).toBe(base);
  });
});

describe('trimDescription', () => {
  it('keeps short descriptions whole', () => {
    expect(trimDescription('Īss apraksts.')).toBe('Īss apraksts.');
  });
  it('cuts at a sentence boundary when one exists past 80 characters', () => {
    const text = 'Pirmais teikums ir pietiekami garš, lai pārsniegtu astoņdesmit rakstzīmes bez problēmām. Otrais teikums turpinās vēl un vēl, lai kopā būtu vairāk par simt piecdesmit pieci.';
    expect(trimDescription(text)).toBe('Pirmais teikums ir pietiekami garš, lai pārsniegtu astoņdesmit rakstzīmes bez problēmām.');
  });
  it('otherwise cuts at a word boundary and ends with a full stop', () => {
    const text = 'vārds '.repeat(40).trim();
    const out = trimDescription(text);
    expect(out.length).toBeLessThanOrEqual(155);
    expect(out.endsWith('.')).toBe(true);
    expect(out).not.toMatch(/vār\.$/);
  });
});
