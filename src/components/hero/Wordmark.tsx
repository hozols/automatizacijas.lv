import React from 'react';

/*
  The brand set so large it leaves the viewport on both sides. Decorative:
  the real heading is in the hero cluster. Letter-spacing and colour are
  driven by the hero's scroll progress through CSS custom properties.
*/
export default function Wordmark({ text = 'automatizācija' }: { text?: string }) {
  return (
    <div className="wordmark-frame" aria-hidden="true">
      <div className="wordmark">{text}</div>
    </div>
  );
}
