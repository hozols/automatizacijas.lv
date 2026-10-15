import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCookies } from '@/contexts/CookieContext';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    hasAcceptedCookies,
    acceptAllCookies,
    rejectAllCookies,
    openModal
  } = useCookies();

  useEffect(() => {
    // Check if user has already made a choice
    if (!hasAcceptedCookies) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasAcceptedCookies]);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    rejectAllCookies();
    setIsVisible(false);
  };

  const handleCustomize = () => {
    openModal();
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;


  return (
    <aside
      aria-labelledby="cookie-banner-title"
      className={cn(
        // z-50 keeps it above the mobile consultation bar (z-40) until the visitor has chosen.
        'sheet fixed z-50 bottom-0 left-0 right-0 md:bottom-4 md:left-4 md:right-auto md:max-w-[44rem]',
        'max-md:rounded-none max-md:border-x-0 p-5 sm:p-6'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="cookie-banner-title" className="m-0 font-sans text-lg font-bold leading-snug">
          Sīkdatņu politika
        </h2>
        <button
          type="button"
          onClick={handleClose}
          aria-label="Aizvērt sīkdatņu paziņojumu"
          className="-mt-1 -mr-1 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-2 mb-0 text-[0.9375rem] leading-normal">
        Mēs izmantojam sīkdatnes, lai analizētu tīmekļa vietnes trafiku, personalizētu saturu un reklāmas,
        kā arī sniegtu sociālo mediju funkcijas. Jūs varat izvēlēties, kuras sīkdatnes pieļaut.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="button" onClick={handleAcceptAll} className="btn btn-solid min-h-[2.75rem] py-2">
          Pieņemt visas
        </button>
        <button type="button" onClick={handleAcceptEssential} className="btn btn-line min-h-[2.75rem] py-2">
          Tikai būtiskās
        </button>
        <button
          type="button"
          onClick={handleCustomize}
          className="link px-0 py-2 bg-transparent border-0 cursor-pointer font-semibold"
        >
          Pielāgot
        </button>
      </div>

      <p className="mt-4 mb-0 pt-3 border-t border-border text-sm text-muted-foreground">
        Izmantojot mūsu vietni, jūs piekrītat mūsu{' '}
        <a href="/privacy" className="link">privātuma politikai</a>
        {' '}un{' '}
        <a href="/cookies" className="link">sīkdatņu politikai</a>.
      </p>
    </aside>
  );
};

export default CookieBanner;
