import React from 'react';
import { Link } from 'react-router-dom';

/* The brand mark: a circled serif "a" with the name as a small label beside it. */
const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link
      to="/"
      aria-label="automatizacijas.lv, uz sākumlapu"
      className={`inline-flex items-center gap-3 text-current no-underline ${className}`}
    >
      <span className="monogram" aria-hidden="true">
        a
      </span>
      <span className="label hidden sm:inline">automatizācijas.lv</span>
    </Link>
  );
};

export default Logo;
