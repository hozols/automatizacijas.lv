import { describe, it, expect } from 'vitest';
import { scrollProgress } from './useScrollProgress';

describe('scrollProgress', () => {
  it('is 0 when the section top is still below the viewport bottom', () => {
    expect(scrollProgress(900, 600, 800)).toBe(0);
  });
  it('is 1 once the section bottom has passed 40% of the viewport height', () => {
    expect(scrollProgress(-600 + 320, 600, 800)).toBe(1);
  });
  it('is in between while scrolling through', () => {
    const p = scrollProgress(400, 600, 800);
    expect(p).toBeGreaterThan(0);
    expect(p).toBeLessThan(1);
  });
  it('clamps', () => {
    expect(scrollProgress(5000, 600, 800)).toBe(0);
    expect(scrollProgress(-5000, 600, 800)).toBe(1);
  });
});
