
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" aria-label="Home page">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
          <div className="h-4 w-4 rounded-sm bg-primary-foreground"></div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
