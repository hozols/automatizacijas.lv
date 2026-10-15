import React from 'react';

/* The system's secondary shape: a 12px hexagon outline, stroke in the current colour. */
export default function Hex({ filled = false, size = 12, className = '' }: { filled?: boolean; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`inline-block ${className}`}
      style={{ transition: 'fill 0.3s ease' }}
    >
      <polygon
        points="6,0.75 10.55,3.375 10.55,8.625 6,11.25 1.45,8.625 1.45,3.375"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
