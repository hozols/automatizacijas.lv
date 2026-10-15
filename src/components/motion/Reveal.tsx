import React, { useEffect, useRef } from 'react';
import { isStaticMotion, splitWords } from './motionPrefs';
import { armOnEnter } from './armOnEnter';

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
  the element enters the viewport. Once. The `is-on` class is owned by the
  DOM, never by React state: the prerender captures it in its final state,
  and a live browser arms only the elements still below the fold, so a
  direct load animates exactly like a client-side navigation.
*/
export default function Reveal({ text, as = 'span', className = '', stagger = 40 }: Props) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const words = splitWords(text);

  useEffect(() => armOnEnter(ref.current, isStaticMotion(), 0.2), []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} suppressHydrationWarning>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="reveal-word">
            <span className="reveal-inner" style={{ transitionDelay: `${i * stagger}ms` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
