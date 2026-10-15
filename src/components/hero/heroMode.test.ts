import { describe, it, expect } from 'vitest';
import { decideHeroMode, type HeroEnv } from './heroMode';

const ok: HeroEnv = { width: 1440, reducedMotion: false, webgl2: true, webdriver: false, override: null };

describe('decideHeroMode', () => {
  it('renders 3d on a capable desktop', () => {
    expect(decideHeroMode(ok)).toBe('3d');
  });
  it('falls back to image below 768px', () => {
    expect(decideHeroMode({ ...ok, width: 767 })).toBe('image');
  });
  it('falls back to image with reduced motion', () => {
    expect(decideHeroMode({ ...ok, reducedMotion: true })).toBe('image');
  });
  it('falls back to image without WebGL2', () => {
    expect(decideHeroMode({ ...ok, webgl2: false })).toBe('image');
  });
  it('falls back to image under automation (prerender)', () => {
    expect(decideHeroMode({ ...ok, webdriver: true })).toBe('image');
  });
  it('override 3d wins over automation and width', () => {
    expect(decideHeroMode({ ...ok, webdriver: true, width: 320, override: '3d' })).toBe('3d');
  });
  it('override capture returns capture', () => {
    expect(decideHeroMode({ ...ok, webdriver: true, override: 'capture' })).toBe('capture');
  });
  it('override cannot beat missing WebGL2', () => {
    expect(decideHeroMode({ ...ok, webgl2: false, override: '3d' })).toBe('image');
  });
});
