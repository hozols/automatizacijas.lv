
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, DollarSign, Sun, Moon, MessageCircle, Home, Briefcase, LayoutDashboard, ChevronDown, Bot, Globe, GraduationCap, BookOpen, MessageSquare, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const SOLUTIONS_ITEMS = [
  { id: 'services', icon: Bot, labelKey: 'nav.ai_solutions', path: '/services' },
  { id: 'chatbots', icon: MessageSquare, labelKey: 'nav.chatbots', path: '/chatbotu-izstrade' },
  { id: 'automation', icon: Zap, labelKey: 'nav.automation', path: '/procesu-automatizacija' },
  { id: 'webdev', icon: Globe, labelKey: 'nav.webdev', path: '/majaslapu-izstrade' },
  { id: 'training', icon: GraduationCap, labelKey: 'nav.training', path: '/training' },
];

const NAV_SECTIONS = [
  { id: '/', icon: Home, labelKey: 'nav.home', path: '/' },
  { id: 'solutions', icon: LayoutDashboard, labelKey: 'nav.solutions', path: null, hasDropdown: true },
  { id: 'portfolio', icon: Briefcase, labelKey: 'nav.portfolio', path: '/portfolio' },
  { id: 'pricing', icon: DollarSign, labelKey: 'nav.pricing', path: '/pricing' },
  { id: 'blog', icon: BookOpen, labelKey: 'nav.blog', path: '/blog' },
  { id: 'contact', icon: MessageCircle, labelKey: 'nav.contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const tabletDropdownRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  const { t } = useLanguage();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDesktop = desktopDropdownRef.current?.contains(target);
      const isInsideTablet = tabletDropdownRef.current?.contains(target);
      if (!isInsideDesktop && !isInsideTablet) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activePage = location.pathname;
  const isSolutionsActive = ['/services', '/chatbotu-izstrade', '/procesu-automatizacija', '/majaslapu-izstrade', '/training'].includes(activePage);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setMobileSolutionsOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-50 pt-2 sm:pt-4 md:pt-6 lg:pt-8 px-2 sm:px-3 md:px-4">
      <div className="w-full max-w-7xl mx-auto py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="p-2 sm:p-3">
          <Logo />
        </div>

        <button
          className="md:hidden p-2 sm:p-3 rounded-xl sm:rounded-2xl text-muted-foreground hover:text-foreground transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg transition-all duration-300 flex gap-1">
            {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path, hasDropdown }) => {
              if (hasDropdown) {
                return (
                  <div key={id} className="relative" ref={desktopDropdownRef}>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className={cn(
                        "px-3 lg:px-4 py-2 rounded-full transition-all duration-300 relative group text-sm lg:text-base flex items-center justify-center",
                        isSolutionsActive
                          ? 'text-accent-foreground bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <Icon size={16} className="mr-1.5 group-hover:animate-pulse flex-shrink-0" />
                      <span className="whitespace-nowrap">{t(labelKey)}</span>
                      <ChevronDown size={14} className={cn("ml-1 transition-transform duration-200", solutionsOpen && "rotate-180")} />
                    </button>

                    {solutionsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl backdrop-blur-md bg-background/95 border border-border shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {SOLUTIONS_ITEMS.map(({ id: subId, icon: SubIcon, labelKey: subLabelKey, path: subPath }) => (
                          <Link
                            key={subId}
                            to={subPath}
                            onClick={() => setSolutionsOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200",
                              activePage === subPath
                                ? 'text-accent-foreground bg-accent/50'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            )}
                          >
                            <SubIcon size={16} className="flex-shrink-0" />
                            <span>{t(subLabelKey)}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={id}
                  to={path!}
                  className={cn(
                    "px-3 lg:px-4 py-2 rounded-full transition-all duration-300 relative group text-sm lg:text-base flex items-center justify-center",
                    activePage === path
                      ? 'text-accent-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Icon size={16} className="mr-1.5 group-hover:animate-pulse flex-shrink-0" />
                  <span className="whitespace-nowrap">{t(labelKey)}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Tablet Navigation - Simplified */}
        <nav className="hidden md:flex lg:hidden items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg transition-all duration-300 flex gap-1">
            {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path, hasDropdown }) => {
              if (hasDropdown) {
                return (
                  <div key={id} className="relative" ref={tabletDropdownRef}>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className={cn(
                        "px-2 py-2 rounded-full transition-all duration-300 relative group text-xs flex items-center justify-center",
                        isSolutionsActive
                          ? 'text-accent-foreground bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                      title={t(labelKey)}
                    >
                      <Icon size={14} className="group-hover:animate-pulse flex-shrink-0" />
                      <ChevronDown size={10} className={cn("ml-0.5 transition-transform duration-200", solutionsOpen && "rotate-180")} />
                    </button>

                    {solutionsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl backdrop-blur-md bg-background/95 border border-border shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {SOLUTIONS_ITEMS.map(({ id: subId, icon: SubIcon, labelKey: subLabelKey, path: subPath }) => (
                          <Link
                            key={subId}
                            to={subPath}
                            onClick={() => setSolutionsOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200",
                              activePage === subPath
                                ? 'text-accent-foreground bg-accent/50'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            )}
                          >
                            <SubIcon size={14} className="flex-shrink-0" />
                            <span>{t(subLabelKey)}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={id}
                  to={path!}
                  className={cn(
                    "px-2 py-2 rounded-full transition-all duration-300 relative group text-xs flex items-center justify-center",
                    activePage === path
                      ? 'text-accent-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  title={t(labelKey)}
                >
                  <Icon size={14} className="group-hover:animate-pulse flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-2 sm:left-4 right-2 sm:right-4 bg-background/95 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-6 border border-border rounded-xl sm:rounded-2xl shadow-lg z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1 sm:gap-2">
              {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path, hasDropdown }) => {
                if (hasDropdown) {
                  return (
                    <div key={id}>
                      <button
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className={cn(
                          "w-full px-3 py-2.5 text-sm sm:text-base rounded-lg sm:rounded-md transition-all duration-300 flex items-center justify-between",
                          isSolutionsActive
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                      >
                        <span className="flex items-center">
                          <Icon size={16} className="mr-2.5 sm:mr-3 flex-shrink-0" />
                          <span className="whitespace-nowrap">{t(labelKey)}</span>
                        </span>
                        <ChevronDown size={16} className={cn("transition-transform duration-200", mobileSolutionsOpen && "rotate-180")} />
                      </button>

                      {mobileSolutionsOpen && (
                        <div className="ml-6 mt-1 mb-1 flex flex-col gap-1 border-l-2 border-border/50 pl-3">
                          {SOLUTIONS_ITEMS.map(({ id: subId, icon: SubIcon, labelKey: subLabelKey, path: subPath }) => (
                            <Link
                              key={subId}
                              to={subPath}
                              className={cn(
                                "px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center",
                                activePage === subPath
                                  ? 'bg-accent/50 text-accent-foreground'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                              )}
                              onClick={handleMobileNavClick}
                            >
                              <SubIcon size={14} className="mr-2.5 flex-shrink-0" />
                              <span>{t(subLabelKey)}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={id}
                    to={path!}
                    className={cn(
                      "px-3 py-2.5 text-sm sm:text-base rounded-lg sm:rounded-md transition-all duration-300 flex items-center",
                      activePage === path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    onClick={handleMobileNavClick}
                  >
                    <Icon size={16} className="mr-2.5 sm:mr-3 flex-shrink-0" />
                    <span className="whitespace-nowrap">{t(labelKey)}</span>
                  </Link>
                );
              })}

              <div className="flex items-center justify-between px-3 py-2.5 border-t border-border pt-3 sm:pt-4 mt-2">
                <span className="text-sm sm:text-base text-muted-foreground">{t('nav.theme')}</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={cn(isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
                  <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
                  <Sun size={16} className={cn(!isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-background/80 border border-border">
            <Moon size={18} className={cn(isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
            <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
            <Sun size={18} className={cn(!isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
          </div>
        </div>

        {/* Tablet Controls */}
        <div className="hidden md:flex lg:hidden items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full px-2 py-1.5 bg-background/80 border border-border">
            <Moon size={16} className={cn(isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
            <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary scale-90" />
            <Sun size={16} className={cn(!isDarkMode ? 'text-primary' : 'text-muted-foreground')} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
