
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, DollarSign, Sun, Moon, MessageCircle, Home, Briefcase, GraduationCap, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_SECTIONS = [
  { id: '/', icon: Home, labelKey: 'nav.home', path: '/' },
  { id: 'services', icon: LayoutDashboard, labelKey: 'nav.solutions', path: '/services' },
  { id: 'portfolio', icon: Briefcase, labelKey: 'nav.portfolio', path: '/portfolio' },
  { id: 'training', icon: GraduationCap, labelKey: 'nav.training', path: '/training' },
  { id: 'pricing', icon: DollarSign, labelKey: 'nav.pricing', path: '/pricing' },
  { id: 'contact', icon: MessageCircle, labelKey: 'nav.contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false; // Default to light mode
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

  // Apply light theme by default on mount if no theme is saved
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const activePage = location.pathname;

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path }) => (
              <Link
                key={id}
                to={path}
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
            ))}
          </div>
        </nav>

        {/* Tablet Navigation - Simplified */}
        <nav className="hidden md:flex lg:hidden items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg transition-all duration-300 flex gap-1">
            {NAV_SECTIONS.slice(0, 4).map(({ id, icon: Icon, labelKey, path }) => (
              <Link
                key={id}
                to={path}
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
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-2 sm:left-4 right-2 sm:right-4 bg-background/95 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-6 border border-border rounded-xl sm:rounded-2xl shadow-lg z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3 sm:gap-4">
              {NAV_SECTIONS.map(({ id, icon: Icon, labelKey, path }) => (
                <Link
                  key={id}
                  to={path}
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
              ))}
              
              <div className="flex items-center justify-between px-3 py-2.5 border-t border-border pt-3 sm:pt-4">
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
