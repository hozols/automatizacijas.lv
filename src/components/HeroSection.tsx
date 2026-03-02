import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>

      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-glow"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/30 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce-subtle animate-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary/20 rounded-full animate-bounce-subtle animate-delay-400"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-bounce-subtle animate-delay-600"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-muted text-primary hover-glow animate-fade-in-up">
            <span className="flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-primary animate-pulse"></span>
            <Sparkles className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-primary animate-pulse-glow" />
            {t('hero.badge')}
            <Loader className="h-2.5 sm:h-3 w-2.5 sm:w-3 animate-spin text-primary" />
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-foreground animate-fade-in-up animate-delay-200 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          AI automatizācija <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-primary to-primary bg-clip-text">{t('hero.title.highlight')}</span> uzņēmumiem
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-400 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 items-center animate-fade-in-up animate-delay-600">
          <Button
            variant="default"
            className="btn-magnetic hover-glow bg-primary text-primary-foreground text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 transition-all duration-200 min-h-[40px] sm:min-h-[48px] group w-full sm:w-auto"
            onClick={() => { trackCTAClick('bezmaksas_konsultacija', 'hero'); navigate('/contact'); }}
          >
            <Zap className="h-3.5 sm:h-4 w-3.5 sm:h-4 mr-1.5 sm:mr-2 group-hover:animate-pulse" />
            {t('hero.cta.demo')}
          </Button>
        </div>

        <div className="pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground animate-fade-in-up animate-delay-800">{t("hero.trial")}</div>
      </div>

      {/* Hero Video */}
      <div
        className="w-full max-w-5xl mt-8 sm:mt-12 z-10 animate-fade-in-up animate-delay-1000 cursor-pointer group"
        onClick={() => { trackCTAClick('hero_video', 'hero'); navigate('/contact'); }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { trackCTAClick('hero_video', 'hero'); navigate('/contact'); } }}
      >
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-border/50 group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block"
          >
            <source src="/videos/hero-ad.webm" type="video/webm" />
            <source src="/videos/hero-ad.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
