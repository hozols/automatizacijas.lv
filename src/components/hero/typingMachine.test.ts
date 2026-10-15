import { describe, it, expect } from 'vitest';
import {
  createTypingState, tick, skip, visibleText, HOLD_MS, RETURN_MS, START_DELAY_MS, HERO_LINES,
} from './typingMachine';

const lines = ['Rēķini apstrādāti.', 'Līgumi sagatavoti.'];
const fixed = () => 0.5; // charDelay = 55 + 0.5*30 = 70 ms

describe('typingMachine', () => {
  it('starts empty, waits START_DELAY_MS, then types one character per delay', () => {
    let s = createTypingState(lines, 1000, undefined);
    expect(visibleText(s)).toBe('');
    expect(tick(s, 1000, fixed)).toBe(s);                 // first key is due at 1000 + START_DELAY_MS
    expect(tick(s, 1000 + START_DELAY_MS - 1, fixed)).toBe(s);
    s = tick(s, 1000 + START_DELAY_MS, fixed);            // nextAt becomes +70
    expect(visibleText(s)).toBe('R');
    s = tick(s, 1000 + START_DELAY_MS + 70, fixed);
    expect(visibleText(s)).toBe('Rē');
    s = tick(s, 1000 + START_DELAY_MS + 140, fixed);
    expect(visibleText(s)).toBe('Rēķ');
  });

  it('holds after the line, then returns, then starts the next line', () => {
    let s = createTypingState(lines, 0, undefined);
    let now = 0;
    while (s.phase === 'typing') { now += 70; s = tick(s, now, fixed); }
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('hold');
    expect(tick(s, now + HOLD_MS - 1, fixed)).toBe(s);
    s = tick(s, now + HOLD_MS, fixed);
    expect(s.phase).toBe('return');
    s = tick(s, now + HOLD_MS + RETURN_MS, fixed);
    expect(s.phase).toBe('typing');
    expect(s.line).toBe(1);
    expect(visibleText(s)).toBe('');
  });

  it('wraps to the first line after the last', () => {
    let s = createTypingState(lines, 0, { complete: true });
    s = { ...s, line: 1, chars: lines[1].length, phase: 'hold', nextAt: 0 };
    s = tick(s, 0, fixed);           // -> return
    s = tick(s, RETURN_MS, fixed);   // -> typing line 0
    expect(s.line).toBe(0);
  });

  it('skip finishes the line and goes straight to return', () => {
    let s = createTypingState(lines, 0, undefined);
    s = tick(s, 70, fixed);
    s = skip(s, 100);
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('return');
    expect(s.nextAt).toBe(100 + RETURN_MS);
  });

  it('skip during return is a no-op', () => {
    let s = createTypingState(lines, 0, { complete: true });
    s = { ...s, phase: 'return', nextAt: 500 };
    expect(skip(s, 100)).toBe(s);
  });

  it('complete option starts with the first line fully typed and held', () => {
    const s = createTypingState(lines, 0, { complete: true });
    expect(visibleText(s)).toBe(lines[0]);
    expect(s.phase).toBe('hold');
  });

  it('HERO_LINES are NFC and end with a full stop', () => {
    for (const l of HERO_LINES) {
      expect(l.normalize('NFC')).toBe(l);
      expect(l.endsWith('.')).toBe(true);
    }
  });
});
