import React, { useEffect, useRef } from 'react';
import { isStaticMotion } from './motionPrefs';
import { armOnEnter } from './armOnEnter';

interface Props {
  className?: string;
  /* ms */
  duration?: number;
  delay?: number;
}

/* A 1px rule that draws itself from left to right when it enters the viewport. */
export default function Hairline({ className = '', duration = 900, delay = 0 }: Props) {
  const ref = useRef<HTMLHRElement>(null);
  useEffect(() => armOnEnter(ref.current, isStaticMotion(), 0.5), []);
  return (
    <hr
      ref={ref}
      className={`hairline hairline-draw ${className}`}
      suppressHydrationWarning
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    />
  );
}
