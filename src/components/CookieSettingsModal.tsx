import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useCookies } from '@/contexts/CookieContext';

const CookieSettingsModal: React.FC = () => {
  const {
    preferences,
    updatePreferences,
    isModalOpen,
    closeModal,
    acceptAllCookies,
    rejectAllCookies
  } = useCookies();

  const cookieTypes = [
    {
      key: 'necessary' as const,
      title: 'Nepieciešamās sīkdatnes',
      description: 'Šīs sīkdatnes ir nepieciešamas, lai mājaslapa darbotos pareizi. Tās nevar izslēgt.',
      disabled: true,
    },
    {
      key: 'functional' as const,
      title: 'Funkcionālās sīkdatnes',
      description: 'Šīs sīkdatnes ļauj mājaslapai atcerēties jūsu izvēles un sniegt uzlabotas funkcionalitātes.',
      disabled: false,
    },
    {
      key: 'analytics' as const,
      title: 'Analītikas sīkdatnes',
      description: 'Šīs sīkdatnes palīdz mums saprast, kā mājaslapa tiek izmantota, lai mēs varētu to uzlabot.',
      disabled: false,
    },
    {
      key: 'marketing' as const,
      title: 'Mārketinga sīkdatnes',
      description: 'Šīs sīkdatnes tiek izmantotas, lai jums parādītu personalizētu reklāmu un saturu.',
      disabled: false,
    },
  ];

  const handleSavePreferences = () => {
    closeModal();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="sheet bg-card max-w-2xl max-h-[90vh] overflow-y-auto gap-0 p-6 sm:p-10 sm:rounded-md">
        <DialogHeader className="space-y-0 text-left pr-8">
          <DialogTitle className="m-0 font-display font-medium text-[length:clamp(1.9rem,3vw,2.6rem)] leading-[1.02] tracking-normal">Sīkdatņu iestatījumi</DialogTitle>
          <DialogDescription asChild className="mt-4 space-y-2 text-base">
            <div>
              <p className="m-0">
                Mēs izmantojam sīkdatnes, lai uzlabotu jūsu pieredzi mājaslapā.
                Jūs varat izvēlēties, kuras sīkdatnes atļaut.
              </p>
              <p className="m-0">
                <strong className="text-foreground">Nepieciešamās sīkdatnes</strong> vienmēr ir ieslēgtas,
                jo tās ir nepieciešamas mājaslapas darbībai.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* Cookie type settings */}
        <ul className="list-none p-0 m-0 mt-8 border-t-2 border-foreground">
          {cookieTypes.map((cookieType) => (
            <li
              key={cookieType.key}
              className="flex items-start justify-between gap-6 py-4 border-b border-border"
            >
              <div>
                <label htmlFor={cookieType.key} className="font-medium cursor-pointer">
                  {cookieType.title}
                </label>
                {cookieType.disabled && (
                  <span className="ml-2 text-[0.9375rem] text-muted-foreground">Obligāti</span>
                )}
                <p id={`${cookieType.key}-desc`} className="mt-1 mb-0 text-[0.9375rem] text-muted-foreground">
                  {cookieType.description}
                </p>
              </div>
              <Switch
                id={cookieType.key}
                aria-describedby={`${cookieType.key}-desc`}
                checked={preferences[cookieType.key]}
                onCheckedChange={(checked) =>
                  updatePreferences({ [cookieType.key]: checked })
                }
                disabled={cookieType.disabled}
                className="mt-1"
              />
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button type="button" onClick={handleSavePreferences} className="btn btn-solid">
            Saglabāt iestatījumus
          </button>
          <button type="button" onClick={acceptAllCookies} className="btn btn-line">
            Pieņemt visas
          </button>
          <button type="button" onClick={rejectAllCookies} className="btn btn-line">
            Noraidīt visas
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p className="m-0">
            Jūsu iestatījumi tiks saglabāti uz 1 gadu.
            Jūs varat mainīt šos iestatījumus jebkurā laikā.
          </p>
          <p className="m-0">
            Lai uzzinātu vairāk par to, kā mēs izmantojam sīkdatnes,
            lūdzu, lasiet mūsu{' '}
            <a href="/privacy" className="link">
              Privātuma politiku
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;
