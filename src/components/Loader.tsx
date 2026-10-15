import React from 'react';

const Loader = () => {
  return (
    <div role="status" className="flex items-center justify-center h-screen text-muted-foreground">
      <span className="sr-only">Ielādē</span>
      <span className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default Loader;
