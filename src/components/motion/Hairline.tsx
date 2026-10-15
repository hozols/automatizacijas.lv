import React, { useEffect, useRef, useState } from 'react';
import { isStaticMotion } from './motionPrefs';

interface Props {
  className?: string;
  /* ms */
  duration?: number;
  delay?: number;
}

/* A 1px rule that draws itself from left to right when it enters the viewport. */
export default function Hairline({ className = '', duration = 900, delay = 0 }: Props) {
  const ref = useRef<HTMLHRElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (isStaticMotion()) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <hr
      ref={ref}
      className={`hairline hairline-draw ${on ? 'is-on' : ''} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    />
  );
}
