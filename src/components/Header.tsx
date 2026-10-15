import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackCTAClick } from '@/lib/analytics';

const SOLUTIONS_ITEMS = [
  { labelKey: 'nav.ai_solutions', path: '/services' },
  { labelKey: 'nav.chatbots', path: '/chatbotu-izstrade' },
  { labelKey: 'nav.automation', path: '/procesu-automatizacija' },
  { labelKey: 'nav.documents', path: '/dokumentu-automatizacija' },
  { labelKey: 'nav.accounting', path: '/gramatvedibas-automatizacija' },
  { labelKey: 'nav.webdev', path: '/majaslapu-izstrade' },
  { labelKey: 'nav.industries', path: '/nozares' },
];

const NAV_LINKS = [
  { labelKey: 'nav.portfolio', path: '/portfolio' },
  { labelKey: 'nav.pricing', path: '/pricing' },
  { labelKey: 'nav.blog', path: '/blog' },
  { labelKey: 'nav.contact', path: '/contact' },
];

const SOLUTIONS_PATHS = [
  '/services',
  '/chatbotu-izstrade',
  '/procesu-automatizacija',
  '/majaslapu-izstrade',
  '/training',
  '/dokumentu-automatizacija',
  '/gramatvedibas-automatizacija',
  '/ai-platformu-izstrade',
  '/datu-analize',
  '/ai-darbinieki',
];

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Light is the default. Start from it on every render path so prerendered HTML
  // and the client agree; the stored choice is applied after mount.
  const storedTheme = useRef<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    try {
      storedTheme.current = localStorage.getItem('theme');
    } catch {
      storedTheme.current = null;
    }
    if (storedTheme.current === 'dark') setIsDarkMode(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);
    if (!isDarkMode && storedTheme.current === 'dark') return; // first pass, before the stored choice applied
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {
      /* storage blocked */
    }
  }, [isDarkMode]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!solutionsOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setSolutionsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSolutionsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [solutionsOpen]);

  // ignore a trailing slash so /contact/ highlights the same item as /contact
  const activePage = location.pathname.replace(/\/+$/, '') || '/';
  const isSolutionsActive = SOLUTIONS_PATHS.includes(activePage) || activePage.startsWith('/nozares');

  const navLinkClass = (active: boolean) =>
    cn(
      'py-2 font-semibold no-underline border-b-2 transition-colors',
      active ? 'border-primary text-foreground' : 'border-transparent text-foreground hover:border-foreground'
    );

  const themeLabel = isDarkMode ? 'Ieslēgt gaišo režīmu' : 'Ieslēgt tumšo režīmu';

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Pāriet uz saturu
      </a>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="wrap flex items-center justify-between gap-6 h-[4.5rem]">
          <Logo />

          <nav aria-label="Galvenā navigācija" className="hidden lg:flex items-center gap-7">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setSolutionsOpen((open) => !open)}
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                className={cn(navLinkClass(isSolutionsActive), 'inline-flex items-center gap-1')}
              >
                {t('nav.solutions')}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={cn('transition-transform duration-150', solutionsOpen && 'rotate-180')}
                />
              </button>

              {solutionsOpen && (
                <div id="solutions-menu" className="sheet absolute top-full left-0 mt-3 w-72 py-2">
                  {SOLUTIONS_ITEMS.map(({ labelKey, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={cn(
                        'block px-4 py-2.5 no-underline hover:bg-muted',
                        activePage === path ? 'font-bold text-primary' : 'text-foreground'
                      )}
                    >
                      {t(labelKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map(({ labelKey, path }) => (
              <Link key={path} to={path} className={navLinkClass(activePage === path)}>
                {t(labelKey)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsDarkMode((dark) => !dark)}
              aria-label={themeLabel}
              title={themeLabel}
              className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted"
            >
              {isDarkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>

            <Link
              to="/contact"
              onClick={() => trackCTAClick('bezmaksas_konsultacija', 'header')}
              className="btn btn-solid hidden md:inline-flex min-h-[2.75rem] py-2 px-4 text-base"
            >
              Pieteikt konsultāciju
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Galvenā navigācija"
            className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="wrap py-4">
              <p className="text-sm font-semibold text-muted-foreground pt-2 pb-1">{t('nav.solutions')}</p>
              {SOLUTIONS_ITEMS.map(({ labelKey, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    'block py-2.5 no-underline border-b border-border',
                    activePage === path ? 'font-bold text-primary' : 'text-foreground'
                  )}
                >
                  {t(labelKey)}
                </Link>
              ))}

              <div className="pt-4">
                {NAV_LINKS.map(({ labelKey, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className={cn(
                      'block py-2.5 font-display font-extrabold text-3xl leading-tight no-underline',
                      activePage === path ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {t(labelKey)}
                  </Link>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsDarkMode((dark) => !dark)}
                className="mt-4 inline-flex items-center gap-2 py-2.5 font-semibold text-foreground"
              >
                {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                {themeLabel}
              </button>
            </div>
          </nav>
        )}
      </header>
      <div id="main-content" />
    </>
  );
};

export default Header;
