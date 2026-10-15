import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link
      to="/"
      aria-label="automatizacijas.lv, uz sākumlapu"
      className={`font-display font-extrabold text-[1.75rem] leading-none text-foreground no-underline ${className}`}
    >
      <span className="mark">automatizacijas</span>.lv
    </Link>
  );
};

export default Logo;
