import { useEffect, useState } from 'react';
import { decideHeroMode, readHeroEnv, type HeroMode } from './heroMode';

const IDLE_FALLBACK_MS = 1500;

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void) => number;
  cancelIdleCallback?: (id: number) => void;
};

/*
  Always 'image' on the first render so prerendered HTML and the client
  agree. After hydration, waits for idle (or 1.5 s) and switches to '3d'
  when the environment allows. Reacts to reduced-motion changes.
*/
export function useHeroMode(): HeroMode {
  const [mode, setMode] = useState<HeroMode>('image');

  useEffect(() => {
    let cancelled = false;
    const apply = () => {
      if (!cancelled) setMode(decideHeroMode(readHeroEnv()));
    };
    const first = decideHeroMode(readHeroEnv());
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const w = window as IdleWindow;
    if (first === 'capture') {
      apply();
    } else if (first === '3d') {
      if (w.requestIdleCallback) idleId = w.requestIdleCallback(apply);
      timeoutId = window.setTimeout(apply, IDLE_FALLBACK_MS);
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', apply);
    return () => {
      cancelled = true;
      mq.removeEventListener('change', apply);
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return mode;
}
