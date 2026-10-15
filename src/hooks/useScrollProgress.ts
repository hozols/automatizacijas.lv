import { useEffect, useRef, useState } from 'react';

/*
  Progress of an element through the viewport: 0 when its top reaches the
  viewport bottom, 1 when its bottom reaches 40% of the viewport height.
*/
export function scrollProgress(top: number, height: number, viewportH: number): number {
  const start = viewportH; // top at viewport bottom
  const end = viewportH * 0.4 - height; // bottom at 40% of viewport
  const raw = (start - top) / (start - end);
  return Math.min(1, Math.max(0, raw));
}

export function useScrollProgress<T extends HTMLElement>(): [React.RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      setProgress(scrollProgress(r.top, r.height, window.innerHeight));
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
  }, []);

  return [ref, progress];
}
