import React from 'react';

interface Props {
  items: string[];
  className?: string;
  /* seconds for one loop */
  duration?: number;
}

/*
  A slow ticker. The content is doubled so the loop is seamless; CSS does the
  motion, pauses on hover, and stops under prefers-reduced-motion (then the
  list simply wraps).
*/
export default function Marquee({ items, className = '', duration = 40 }: Props) {
  const row = (ariaHidden: boolean) => (
    <ul className="marquee-row m-0 flex list-none gap-x-12 p-0" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="display whitespace-nowrap text-[clamp(1.5rem,2.5vw,2rem)]">
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee ${className}`} style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}>
      <div className="marquee-track flex gap-x-12">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
