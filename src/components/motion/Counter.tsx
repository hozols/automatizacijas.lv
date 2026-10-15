import React, { useEffect, useRef, useState } from 'react';
import { counterValue, formatCount, isStaticMotion } from './motionPrefs';

interface Props {
  from: number;
  to: number;
  suffix?: string;
  /* ms */
  duration?: number;
  className?: string;
}

/*
  Counts from one number to another when it enters the viewport. Renders the
  target in static mode and in the prerendered HTML; the animation starts
  from `from` only once the element is on screen in a live browser.
*/
export default function Counter({ from, to, suffix = '', duration = 1200, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    if (isStaticMotion()) return;
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = (now - t0) / duration;
        setValue(counterValue(from, to, t));
        if (t < 1) requestAnimationFrame(tick);
      };
      setValue(from);
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatCount(value, suffix)}
    </span>
  );
}
