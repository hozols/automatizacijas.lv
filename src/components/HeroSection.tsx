import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Sparkles, Zap, Bot, MessageSquare, Zap as ZapIcon, FileText, BarChart3, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 'workers',
      title: t('services.workers.title'),
      subtitle: t('services.workers.subtitle'),
      description: t('services.workers.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-primary"></div>,
      status: 'Aktīvs',
      statusColor: 'bg-green-500',
      iconColor: 'bg-primary/20',
      iconBg: 'bg-primary'
    },
    {
      id: 'chatbots',
      title: t('services.chatbots.title'),
      subtitle: t('services.chatbots.subtitle'),
      description: t('services.chatbots.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-primary"></div>,
      status: 'Aktīvs',
      statusColor: 'bg-green-500',
      iconColor: 'bg-primary/20',
      iconBg: 'bg-primary'
    },
    {
      id: 'automation',
      title: t('services.automation.title'),
      subtitle: t('services.automation.subtitle'),
      description: t('services.automation.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-green-500"></div>,
      status: 'Izstrādē',
      statusColor: 'bg-yellow-500',
      iconColor: 'bg-green-500/20',
      iconBg: 'bg-green-500'
    },
    {
      id: 'documents',
      title: t('services.documents.title'),
      subtitle: t('services.documents.subtitle'),
      description: t('services.documents.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-purple-500"></div>,
      status: 'Aktīvs',
      statusColor: 'bg-green-500',
      iconColor: 'bg-purple-500/20',
      iconBg: 'bg-purple-500'
    },
    {
      id: 'intelligence',
      title: t('services.intelligence.title'),
      subtitle: t('services.intelligence.subtitle'),
      description: t('services.intelligence.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-cyan-500"></div>,
      status: 'Aktīvs',
      statusColor: 'bg-green-500',
      iconColor: 'bg-cyan-500/20',
      iconBg: 'bg-cyan-500'
    },
    {
      id: 'custom',
      title: t('services.custom.title'),
      subtitle: t('services.custom.subtitle'),
      description: t('services.custom.description'),
      icon: <div className="h-4 w-4 rounded-sm bg-orange-500"></div>,
      status: 'Pieejams',
      statusColor: 'bg-primary',
      iconColor: 'bg-orange-500/20',
      iconBg: 'bg-orange-500'
    }
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
            onClick={() => navigate('/contact')}
          >
            <Zap className="h-3.5 sm:h-4 w-3.5 sm:h-4 mr-1.5 sm:mr-2 group-hover:animate-pulse" />
            {t('hero.cta.demo')}
          </Button>
        </div>
        
        <div className="pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground animate-fade-in-up animate-delay-800">{t("hero.trial")}</div>
      </div>
      
      {/* Service Showcase integrated in hero section with glassmorphic effect */}
      <div className="w-full max-w-7xl mt-8 sm:mt-12 z-10 animate-fade-in-up animate-delay-1000">
        <div className="cosmic-glow relative rounded-lg sm:rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg hover-lift">
          {/* Showcase Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="h-6 sm:h-8 w-6 sm:w-8 rounded-md bg-primary/20 flex items-center justify-center">
                  <div className="h-2 sm:h-3 w-2 sm:w-3 rounded-sm bg-primary"></div>
                </div>
                <span className="text-sm sm:text-base text-foreground font-medium">{t('hero.showcase.title')}</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">6 {t('hero.showcase.services')}</span>
                </div>
              </div>
            </div>
            
            {/* Service Showcase Content */}
            <div className="flex h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
              {/* Service Categories Sidebar */}
              <div className="w-48 sm:w-56 md:w-64 border-r border-border p-3 sm:p-4 space-y-3 sm:space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Pakalpojumi</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md bg-primary/10 text-primary border border-primary/20">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-sm bg-primary"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.nav.workers')}</span>
                      <div className="ml-auto h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">3</div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-sm bg-primary/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.nav.chatbots')}</span>
                      <div className="ml-auto h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">2</div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-sm bg-green-500/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.nav.automation')}</span>
                      <div className="ml-auto h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">1</div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-sm bg-purple-500/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.nav.analytics')}</span>
                      <div className="ml-auto h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">2</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-3 sm:pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Kategorijas</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-orange-500/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.categories.automation')}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-cyan-500/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.categories.intelligence')}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-muted-foreground hover:bg-muted/50 cursor-pointer">
                      <div className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-pink-500/60"></div>
                      <span className="text-xs sm:text-sm">{t('hero.showcase.categories.support')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content - Service Showcase */}
              <div className="flex-1 p-3 sm:p-4 bg-background overflow-hidden">
                {/* Services Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="text-sm sm:text-base font-medium text-foreground">{t('services.workers.title')}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">Aktīvs</span>
                  </div>
                </div>
                
                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                  {services.map((service, index) => (
                    <div 
                      key={service.id}
                      onClick={() => handleServiceClick(service)}
                      className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer hover-lift hover-glow group animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-8 w-8 rounded-md ${service.iconColor} flex items-center justify-center`}>
                          <div className={`h-4 w-4 rounded-sm ${service.iconBg}`}></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{service.title}</h4>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2 group-hover:text-foreground transition-colors">{service.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className={`h-2 w-2 rounded-full ${service.statusColor}`}></div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{service.status}</span>
                        </div>
                        <span className={`text-xs ${service.iconBg} font-medium group-hover:scale-110 transition-transform`}>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default HeroSection;