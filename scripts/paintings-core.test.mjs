import { describe, it, expect } from 'vitest';
import { validateManifest, creditLine, outputNames } from './paintings-core.mjs';

const good = [
  { slug: 'tax-collector', metObjectId: 436643, focus: { x: 0.5, y: 0.4 }, use: 'vignette' },
  { slug: 'lavoisier', metObjectId: 436106, focus: { x: 0.5, y: 0.5 }, use: 'panel' },
];

describe('validateManifest', () => {
  it('accepts a well-formed manifest', () => {
    expect(validateManifest(good)).toEqual([]);
  });
  it('reports duplicate slugs, non-numeric ids and focus out of range', () => {
    const bad = [
      { slug: 'a', metObjectId: 'x', focus: { x: 1.5, y: 0 }, use: 'vignette' },
      { slug: 'a', metObjectId: 2, focus: { x: 0, y: 0 }, use: 'vignette' },
    ];
    const errs = validateManifest(bad).join(' ');
    expect(errs).toMatch(/duplicate slug/);
    expect(errs).toMatch(/metObjectId/);
    expect(errs).toMatch(/focus/);
  });
});

describe('creditLine', () => {
  it('formats artist, title, date and the CC0 note', () => {
    expect(
      creditLine({ artistDisplayName: 'Jan Sanders van Hemessen', title: 'The Calling of Saint Matthew', objectDate: 'early 17th century', objectID: 436643 }),
    ).toBe('Jan Sanders van Hemessen, *The Calling of Saint Matthew*, early 17th century. The Metropolitan Museum of Art, Open Access (CC0), object 436643.');
  });
  it('omits an unknown artist gracefully', () => {
    expect(creditLine({ artistDisplayName: '', title: 'Book Cover', objectDate: '', objectID: 1 })).toBe(
      'Unknown artist, *Book Cover*. The Metropolitan Museum of Art, Open Access (CC0), object 1.',
    );
  });
});

describe('outputNames', () => {
  it('derives the two WebP paths from the slug', () => {
    expect(outputNames('lavoisier', 'public/paintings')).toEqual({
      wide: 'public/paintings/lavoisier-1600.webp',
      square: 'public/paintings/lavoisier-800.webp',
    });
  });
});
