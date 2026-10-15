import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SHOW_AFTER_PX = 600;

const MobileStickyBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Page tops already show a consultation button; the bar takes over once that has scrolled away.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // The contact page already has the form on screen.
  if (location.pathname === '/contact' || !visible) return null;

  return (
    <div className="band-ink fixed bottom-0 left-0 right-0 z-40 border-t border-ink-rule px-4 pt-3 safe-area-bottom md:hidden">
      <Link to="/contact" className="btn btn-solid w-full min-h-[3rem]">
        Pieteikties konsultācijai
      </Link>
    </div>
  );
};

export default MobileStickyBar;
