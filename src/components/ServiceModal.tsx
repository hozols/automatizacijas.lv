import React from 'react';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    status: string;
    statusColor: string;
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleContactClick = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
              {service.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Aizvērt logu"
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${service.statusColor}`}></div>
              <span className="text-sm font-medium text-foreground">{service.status}</span>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Galvenās funkcijas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>24/7 pieejamība</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Automatizācija</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Analītika</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Integrācija</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/20">
          <div className="text-sm text-muted-foreground">
            Gatavi sākt projektu?
          </div>
          <Button 
            onClick={handleContactClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
          >
            <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
            Sazināties ar mums
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal; 