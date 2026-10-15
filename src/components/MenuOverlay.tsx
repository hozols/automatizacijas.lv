import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

/*
  The full-screen menu: an ink room over everything. A native <dialog> gives
  the focus trap, Escape, and focus return to the button that opened it.
*/

export const MAIN_ROUTES = [
  { to: '/services', label: 'Pakalpojumi' },
  { to: '/nozares', label: 'Nozares' },
  { to: '/portfolio', label: 'Paveiktie darbi' },
  { to: '/pricing', label: 'Cenas' },
  { to: '/blog', label: 'Blogs' },
  { to: '/contact', label: 'Kontakti' },
];

export const SERVICE_ROUTES = [
  { to: '/chatbotu-izstrade', label: 'AI čatboti' },
  { to: '/procesu-automatizacija', label: 'Procesu automatizācija' },
  { to: '/dokumentu-automatizacija', label: 'Dokumentu automatizācija' },
  { to: '/gramatvedibas-automatizacija', label: 'Grāmatvedības automatizācija' },
  { to: '/ai-platformu-izstrade', label: 'AI platformu izstrāde' },
  { to: '/datu-analize', label: 'Datu analīze' },
  { to: '/ai-darbinieki', label: 'AI darbinieki' },
  { to: '/majaslapu-izstrade', label: 'Mājaslapu izstrāde' },
];

export const INDUSTRY_ROUTES = [
  { to: '/nozares/gramatvediba-un-finanses', label: 'Grāmatvedība un finanses' },
  { to: '/nozares/e-komercija', label: 'E-komercija' },
  { to: '/nozares/razosana', label: 'Ražošana' },
  { to: '/nozares/logistika', label: 'Loģistika' },
  { to: '/nozares/juridiskas-firmas', label: 'Juridiskās firmas' },
];

export const MORE_ROUTES = [
  { to: '/training', label: 'Apmācības' },
  { to: '/kas-ir-maksligais-intelekts', label: 'Kas ir mākslīgais intelekts' },
  { to: '/privacy', label: 'Privātuma politika' },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ open, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const location = useLocation();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // a navigation closes the menu
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const linkClass = 'no-underline text-current hover:underline underline-offset-[0.2em] decoration-1';

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label="Izvēlne"
      className="menu-overlay band-ink m-0 h-full max-h-none w-full max-w-none p-0 backdrop:bg-transparent"
    >
      <div className="wrap flex h-full flex-col py-5">
        <div className="flex items-center justify-between">
          <span className="label text-smoke">Izvēlne</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Aizvērt izvēlni"
            className="scroll-prompt-box cursor-pointer bg-transparent text-current hover:bg-white/10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" />
            </svg>
          </button>
        </div>

        <div className="mt-10 grid flex-1 content-start gap-10 lg:mt-16 lg:grid-cols-12">
          <nav aria-label="Galvenā navigācija" className="lg:col-span-7">
            <ul className="m-0 list-none p-0">
              {MAIN_ROUTES.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className={`display-1 block py-1 ${linkClass}`}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <nav aria-label="Pakalpojumi">
              <p className="label m-0 mb-4 text-smoke">Pakalpojumi</p>
              <ul className="m-0 list-none space-y-2 p-0 text-[0.9375rem]">
                {SERVICE_ROUTES.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className={linkClass}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Nozares un citas lapas">
              <p className="label m-0 mb-4 text-smoke">Nozares</p>
              <ul className="m-0 list-none space-y-2 p-0 text-[0.9375rem]">
                {INDUSTRY_ROUTES.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className={linkClass}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="label m-0 mb-4 mt-8 text-smoke">Vēl</p>
              <ul className="m-0 list-none space-y-2 p-0 text-[0.9375rem]">
                {MORE_ROUTES.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className={linkClass}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-rule pt-5">
          <p className="m-0 text-[0.9375rem]">
            <a href="tel:+37120015830" className={linkClass}>
              +371 20 015 830
            </a>
            <span className="mx-3 text-smoke">/</span>
            <a href="mailto:info@automatizacijas.lv" className={linkClass}>
              info@automatizacijas.lv
            </a>
          </p>
          <Link
            to="/contact"
            onClick={() => trackCTAClick('bezmaksas_konsultacija', 'menu')}
            className="btn btn-solid"
          >
            Pieteikt konsultāciju
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default MenuOverlay;
