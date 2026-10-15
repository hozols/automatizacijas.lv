import React, { useEffect, useRef, useState } from 'react';
import { isStaticMotion, splitWords } from './motionPrefs';

interface Props {
  text: string;
  /* the element to render, defaults to span so it can sit inside any heading */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /* ms between words */
  stagger?: number;
}

/*
  Word-by-word reveal: every word is clipped and slides up into place when
  the element enters the viewport. Once. Static mode shows the words at rest.
  The markup is identical in both modes, so prerendered HTML hydrates cleanly.
*/
export default function Reveal({ text, as = 'span', className = '', stagger = 40 }: Props) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  const words = splitWords(text);

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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${on ? 'is-on' : ''} ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="reveal-word" aria-hidden="true">
          <span className="reveal-inner" style={{ transitionDelay: `${i * stagger}ms` }}>
            {w}
          </span>{' '}
        </span>
      ))}
    </Tag>
  );
}
