import { useCallback, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { HERO_LINES, createTypingState, skip, tick, visibleText, type TypingState } from './typingMachine';

export interface TypingLoop {
  text: string;
  chars: number;
  phase: TypingState['phase'];
  /* 1 right after a keystroke, decays to 0 over ~90 ms; read in useFrame */
  strike: React.MutableRefObject<number>;
  skipLine: () => void;
}

const STRIKE_MS = 90;

export function useTypingLoop(staticLine: boolean): TypingLoop {
  const stateRef = useRef<TypingState>(createTypingState(HERO_LINES, performance.now(), { complete: staticLine }));
  const strike = useRef(0);
  const [snapshot, setSnapshot] = useState(() => ({
    text: visibleText(stateRef.current),
    chars: stateRef.current.chars,
    phase: stateRef.current.phase,
  }));

  useFrame((_, delta) => {
    if (strike.current > 0) strike.current = Math.max(0, strike.current - (delta * 1000) / STRIKE_MS);
    if (staticLine) return;
    const next = tick(stateRef.current, performance.now());
    if (next === stateRef.current) return;
    if (next.phase === 'typing' && next.chars > stateRef.current.chars) strike.current = 1;
    stateRef.current = next;
    setSnapshot({ text: visibleText(next), chars: next.chars, phase: next.phase });
  });

  const skipLine = useCallback(() => {
    if (staticLine) return;
    const next = skip(stateRef.current, performance.now());
    if (next === stateRef.current) return;
    stateRef.current = next;
    setSnapshot({ text: visibleText(next), chars: next.chars, phase: next.phase });
  }, [staticLine]);

  return { ...snapshot, strike, skipLine };
}
