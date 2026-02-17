import React, { useState, useEffect } from 'react';
import { X, Shield, Settings, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookies } from '@/contexts/CookieContext';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-md"></div>
      
      {/* Cookie Banner */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Sīkdatņu politika
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mēs izmantojam sīkdatnes, lai uzlabotu jūsu pieredzi
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              aria-label="Aizvērt sīkdatņu paziņojumu"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mēs izmantojam sīkdatnes, lai analizētu tīmekļa vietnes trafiku, personalizētu saturu un reklāmas, 
              kā arī sniegtu sociālo mediju funkcijas. Jūs varat izvēlēties, kuras sīkdatnes pieļaut.
            </p>

            {/* Cookie Categories */}
            {isExpanded && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Būtiskās sīkdatnes</h4>
                      <p className="text-xs text-muted-foreground">Nepieciešamas vietnes darbībai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Vienmēr ieslēgtas</span>
                    <div className="w-8 h-4 bg-primary rounded-full flex items-center justify-end p-0.5">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-4 w-4 text-blue-500" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Funkcionālās sīkdatnes</h4>
                      <p className="text-xs text-muted-foreground">Uzlabo lietošanas pieredzi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Ieslēgtas</span>
                    <div className="w-8 h-4 bg-primary rounded-full flex items-center justify-end p-0.5">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Info className="h-4 w-4 text-orange-500" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Analītiskās sīkdatnes</h4>
                      <p className="text-xs text-muted-foreground">Palīdz analizēt vietnes trafiku</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Ieslēgtas</span>
                    <div className="w-8 h-4 bg-primary rounded-full flex items-center justify-end p-0.5">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={handleAcceptAll}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group flex-1 sm:flex-none"
              >
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Pieņemt visas
              </Button>
              
              <Button
                onClick={handleAcceptEssential}
                variant="outline"
                className="border-border/50 hover:bg-muted/50 transition-all duration-200 flex-1 sm:flex-none"
              >
                <Shield className="h-4 w-4 mr-2" />
                Tikai būtiskās
              </Button>
              
              <Button
                onClick={handleCustomize}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex-1 sm:flex-none"
              >
                <Settings className="h-4 w-4 mr-2" />
                {isExpanded ? 'Sakļaut' : 'Pielāgot'}
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center">
                Izmantojot mūsu vietni, jūs piekrītat mūsu{' '}
                <a href="/privacy" className="text-primary hover:underline">privātuma politikai</a>
                {' '}un{' '}
                <a href="/cookies" className="text-primary hover:underline">sīkdatņu politikai</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 