import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import MenuOverlay from './MenuOverlay';
import { trackCTAClick } from '@/lib/analytics';

/*
  A 56px gallery header: the mark on the left, one text link and one pill on
  the right. Every route lives in the menu overlay and in the footer.
*/
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pāriet uz saturu
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="wrap flex h-14 items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="label cursor-pointer border-0 bg-transparent p-0 text-current hover:underline underline-offset-[0.3em]"
            >
              Izvēlne
            </button>
            <Link
              to="/contact"
              onClick={() => trackCTAClick('bezmaksas_konsultacija', 'header')}
              className="btn btn-solid hidden sm:inline-flex"
            >
              Konsultācija
            </Link>
          </div>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div id="main-content" />
    </>
  );
};

export default Header;
