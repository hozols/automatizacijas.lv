import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogPortal } from '@/components/ui/dialog';
import { CheckList } from '@/components/page';

export interface TrainingItem {
  title: string;
  subtitle: string;
  description: string;
  type: 'courses' | 'seminars' | 'topic';
  features?: string[];
}

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  training: TrainingItem;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose, training }) => {
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
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPortal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/60" />
        <DialogPrimitive.Content className="sheet fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2">
          {/* Header */}
          <div className="flex items-start justify-between gap-6 p-6 border-b border-border">
            <div>
              <DialogPrimitive.Title className="display-3 m-0">{training.title}</DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 mb-0 text-muted-foreground">
                {training.subtitle}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close
              aria-label="Aizvērt logu"
              className="shrink-0 p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <p className="m-0 leading-relaxed">{training.description}</p>

            {training.features && (
              <div>
                <h3 className="m-0 mb-3 text-lg font-bold">Galvenās iezīmes</h3>
                <CheckList items={training.features} />
              </div>
            )}

            {/* Additional Info */}
            <div>
              <h3 className="m-0 text-lg font-bold">Kā sākt?</h3>
              <p className="mt-1.5 mb-0 text-muted-foreground">
                Sazinieties ar mums, lai uzzinātu vairāk par mūsu apmācību programmām un izvēlētos sev piemēroto variantu.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 p-6 border-t border-border sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 text-muted-foreground">{getQuestionText()}</p>
            <button type="button" onClick={handleContactClick} className="btn btn-solid shrink-0">
              Sazināties ar mums
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default TrainingModal;
