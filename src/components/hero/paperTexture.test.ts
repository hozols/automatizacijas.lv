import { describe, it, expect } from 'vitest';
import { layoutLines } from './paperTexture';

describe('layoutLines', () => {
  it('keeps a short line whole', () => {
    expect(layoutLines('Rēķini apstrādāti.', 24)).toEqual(['Rēķini apstrādāti.']);
  });
  it('wraps at word boundaries when over the limit', () => {
    expect(layoutLines('Dokumenti sakārtoti un nosūtīti.', 20)).toEqual(['Dokumenti sakārtoti', 'un nosūtīti.']);
  });
  it('returns one empty line for empty text', () => {
    expect(layoutLines('', 20)).toEqual(['']);
  });
});
