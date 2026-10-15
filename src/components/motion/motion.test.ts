import { describe, it, expect } from 'vitest';
import { splitWords, counterValue, pinnedProgress, formatCount } from './motionPrefs';

describe('splitWords', () => {
  it('splits on spaces and keeps punctuation attached', () => {
    expect(splitWords('Darbi, kas atkārtojas.')).toEqual(['Darbi,', 'kas', 'atkārtojas.']);
  });
  it('collapses extra whitespace and drops empties', () => {
    expect(splitWords('  Ko   mašīna dara ')).toEqual(['Ko', 'mašīna', 'dara']);
  });
});

describe('counterValue', () => {
  it('starts at from and ends at to', () => {
    expect(counterValue(20, 3, 0)).toBe(20);
    expect(counterValue(20, 3, 1)).toBe(3);
  });
  it('eases out: past half way at t=0.5', () => {
    const v = counterValue(0, 100, 0.5);
    expect(v).toBeGreaterThan(50);
    expect(v).toBeLessThan(100);
  });
  it('clamps t outside 0..1', () => {
    expect(counterValue(0, 100, -1)).toBe(0);
    expect(counterValue(0, 100, 2)).toBe(100);
  });
});

describe('formatCount', () => {
  it('rounds to integers and keeps a suffix', () => {
    expect(formatCount(49.6, '+')).toBe('50+');
    expect(formatCount(3.2, '')).toBe('3');
  });
});

describe('pinnedProgress', () => {
  it('is 0 while the wrapper top is at or below the viewport top', () => {
    expect(pinnedProgress(0, 1800, 900)).toBe(0);
    expect(pinnedProgress(200, 1800, 900)).toBe(0);
  });
  it('is 1 when the wrapper bottom meets the viewport bottom', () => {
    expect(pinnedProgress(-900, 1800, 900)).toBe(1);
  });
  it('is 0.5 half way through the scrollable distance', () => {
    expect(pinnedProgress(-450, 1800, 900)).toBe(0.5);
  });
  it('clamps beyond the end', () => {
    expect(pinnedProgress(-2000, 1800, 900)).toBe(1);
  });
});
