import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '@/contexts/CookieContext';

const serviceLinks = [
  { to: '/services', label: 'AI risinājumi' },
  { to: '/chatbotu-izstrade', label: 'AI čatboti' },
  { to: '/procesu-automatizacija', label: 'Procesu automatizācija' },
  { to: '/dokumentu-automatizacija', label: 'Dokumentu automatizācija' },
  { to: '/gramatvedibas-automatizacija', label: 'Grāmatvedības automatizācija' },
  { to: '/ai-platformu-izstrade', label: 'AI platformu izstrāde' },
  { to: '/majaslapu-izstrade', label: 'Mājaslapu izstrāde' },
  { to: '/nozares', label: 'Nozares' },
];

const companyLinks = [
  { to: '/portfolio', label: 'Projekti' },
  { to: '/pricing', label: 'Cenas' },
  { to: '/blog', label: 'Blogs' },
  { to: '/contact', label: 'Kontakti' },
  { to: '/privacy', label: 'Privātuma politika' },
];

const footerLink = 'text-ink-muted no-underline hover:text-ink-foreground hover:underline underline-offset-4';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useCookies();

  return (
    <footer className="band-ink pb-24 md:pb-0">
      <div className="wrap pt-14 lg:pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Link to="/" className="display-2 block no-underline text-ink-foreground">
              automatizacijas.lv
            </Link>
            <p className="mt-5 mb-0 text-ink-muted max-w-[26em]">
              AI automatizācija uzņēmumiem Latvijā. Atrodamies Rīgā.
            </p>
            <p className="mt-6 mb-0 text-lg leading-loose">
              <a href="tel:+37120015830" className="text-ink-foreground font-bold underline underline-offset-4">
                +371 20 015 830
              </a>
              <br />
              <a href="mailto:info@automatizacijas.lv" className="text-ink-foreground font-bold underline underline-offset-4">
                info@automatizacijas.lv
              </a>
            </p>
          </div>

          <nav aria-label="Pakalpojumi" className="lg:col-span-3">
            <h3 className="m-0 mb-4 text-base font-bold">Pakalpojumi</h3>
            <ul className="list-none p-0 m-0 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Uzņēmums" className="lg:col-span-3">
            <h3 className="m-0 mb-4 text-base font-bold">Uzņēmums</h3>
            <ul className="list-none p-0 m-0 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/company/sula-labs-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-ink-muted text-[0.9375rem]">
          <span>© {currentYear} automatizacijas.lv. Visas tiesības aizsargātas.</span>
          <button type="button" onClick={openModal} className={`${footerLink} text-left`}>
            Sīkdatņu iestatījumi
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
