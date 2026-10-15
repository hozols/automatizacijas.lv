import React, { useEffect, useRef } from 'react';
import { isStaticMotion } from './motionPrefs';

interface Props {
  children: React.ReactNode;
  /* fraction of the scroll distance the child lags behind, 0.12 = travels 12% slower */
  factor?: number;
  className?: string;
}

/*
  Moves its child against the scroll so it appears to sit deeper than the
  page. The child must be taller than its frame by the travel it needs.
*/
export default function Parallax({ children, factor = 0.12, className = '' }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isStaticMotion()) return;
    const f = frame.current;
    const el = inner.current;
    if (!f || !el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = f.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the frame is just below the viewport, +1 when just above
      const rel = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      el.style.transform = `translate3d(0, ${(-rel * factor * r.height).toFixed(1)}px, 0)`;
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
  }, [factor]);

  return (
    <div ref={frame} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
