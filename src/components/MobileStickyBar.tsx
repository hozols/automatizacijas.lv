import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

const MobileStickyBar = () => {
  const location = useLocation();

  // Don't show on contact page (already has form)
  if (location.pathname === '/contact') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-bottom">
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
      >
        <Zap className="h-4 w-4" />
        Pieteikties konsultācijai
      </Link>
    </div>
  );
};

export default MobileStickyBar;
