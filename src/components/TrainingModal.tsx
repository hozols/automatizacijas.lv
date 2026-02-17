import React from 'react';
import { X, ArrowRight, MessageCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  training: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    type: 'courses' | 'seminars' | 'topic';
    features?: string[];
  };
}

const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose, training }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleContactClick = () => {
    onClose();
    navigate('/contact');
  };

  const getQuestionText = () => {
    switch (training.type) {
      case 'courses':
        return 'Vai vēlaties uzzināt vairāk par AI kursiem?';
      case 'seminars':
        return 'Vai vēlaties organizēt AI semināru savai komandai?';
      case 'topic':
        return 'Vai vēlaties uzzināt vairāk par AI automatizāciju?';
      default:
        return 'Vai vēlaties uzzināt vairāk par AI?';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
              {training.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{training.title}</h2>
              <p className="text-sm text-muted-foreground">{training.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Aizvērt logu"
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              {training.description}
            </p>
            
            {training.features && (
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Galvenās iezīmes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {training.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Additional Info */}
          <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium text-foreground">Kā sākt?</h4>
                <p className="text-sm text-muted-foreground">
                  Sazinieties ar mums, lai uzzinātu vairāk par mūsu apmācību programmām un izvēlētos sev piemēroto variantu.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/50 bg-muted/20">
          <div className="text-sm text-muted-foreground">
            {getQuestionText()}
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

export default TrainingModal; 