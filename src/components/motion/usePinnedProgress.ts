import { useEffect, useRef } from 'react';
import { isStaticMotion, pinnedProgress } from './motionPrefs';

export interface PinnedProgress {
  /* 0..1, updated every scroll frame without React renders */
  current: number;
}

/*
  Scroll progress through a tall wrapper whose child is sticky. The value
  lives in a ref so a canvas or a style can read it every frame. `onUpdate`
  runs on every scroll frame; `onChange` only when the tenth changes.
*/
export function usePinnedProgress<T extends HTMLElement>(
  enabled: boolean,
  onChange?: (tenth: number) => void,
  onUpdate?: (progress: number) => void,
): [React.RefObject<T>, PinnedProgress] {
  const ref = useRef<T>(null);
  const progress = useRef<PinnedProgress>({ current: 0 }).current;
  const lastTenth = useRef(-1);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || isStaticMotion()) {
      progress.current = 0;
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      progress.current = pinnedProgress(r.top, r.height, window.innerHeight);
      onUpdate?.(progress.current);
      const tenth = Math.round(progress.current * 10) / 10;
      if (tenth !== lastTenth.current) {
        lastTenth.current = tenth;
        onChange?.(tenth);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, onChange, onUpdate, progress]);

  return [ref, progress];
}
