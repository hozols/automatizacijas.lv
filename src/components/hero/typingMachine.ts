/*
  Pure state machine for the hero typewriter. No DOM, no timers: the scene
  calls tick(state, now) every frame and compares identity to know whether
  a key was struck.
*/

export const HERO_LINES: readonly string[] = [
  'Rēķini apstrādāti.',
  'Dokumenti sakārtoti.',
  'Atbildes nosūtītas.',
  'Līgumi sagatavoti.',
].map((l) => l.normalize('NFC'));

export type Phase = 'typing' | 'hold' | 'return';

export interface TypingState {
  lines: readonly string[];
  line: number;
  chars: number;
  phase: Phase;
  nextAt: number;
}

export const HOLD_MS = 2400;
export const RETURN_MS = 450;
export const START_DELAY_MS = 400;
const MIN_CHAR_MS = 55;
const JITTER_MS = 30;

export function charDelay(rand: () => number = Math.random): number {
  return MIN_CHAR_MS + rand() * JITTER_MS;
}

export function createTypingState(
  lines: readonly string[],
  now: number,
  opts?: { complete?: boolean },
): TypingState {
  if (opts?.complete) {
    return { lines, line: 0, chars: [...lines[0]].length, phase: 'hold', nextAt: now + HOLD_MS };
  }
  return { lines, line: 0, chars: 0, phase: 'typing', nextAt: now + START_DELAY_MS };
}

function lineChars(state: TypingState): string[] {
  return [...state.lines[state.line]];
}

export function tick(state: TypingState, now: number, rand: () => number = Math.random): TypingState {
  if (now < state.nextAt) return state;
  switch (state.phase) {
    case 'typing': {
      const chars = state.chars + 1;
      if (chars >= lineChars(state).length) {
        return { ...state, chars: lineChars(state).length, phase: 'hold', nextAt: now + HOLD_MS };
      }
      return { ...state, chars, nextAt: now + charDelay(rand) };
    }
    case 'hold':
      return { ...state, phase: 'return', nextAt: now + RETURN_MS };
    case 'return': {
      const line = (state.line + 1) % state.lines.length;
      return { ...state, line, chars: 0, phase: 'typing', nextAt: now + charDelay(rand) };
    }
  }
}

export function skip(state: TypingState, now: number): TypingState {
  if (state.phase === 'return') return state;
  return { ...state, chars: lineChars(state).length, phase: 'return', nextAt: now + RETURN_MS };
}

export function visibleText(state: TypingState): string {
  return lineChars(state).slice(0, state.chars).join('');
}
