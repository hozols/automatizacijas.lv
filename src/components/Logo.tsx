import React from 'react';
import { Link } from 'react-router-dom';

/* The brand mark: a small square in the current colour with an "a" reversed out, the name beside it. */
const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link
      to="/"
      aria-label="automatizacijas.lv, uz sākumlapu"
      className={`inline-flex items-center gap-3 text-current no-underline ${className}`}
    >
      <span className="logo-mark" aria-hidden="true">
        <span>a</span>
      </span>
      <span className="hidden text-[1rem] font-medium tracking-tight sm:inline">automatizacijas.lv</span>
    </Link>
  );
};

export default Logo;
