import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="loader-dot h-4 w-4 rounded-full"></div>
        <div className="loader-dot h-4 w-4 rounded-full"></div>
        <div className="loader-dot h-4 w-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;