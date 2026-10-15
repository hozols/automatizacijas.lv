import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '@/contexts/CookieContext';
import { INDUSTRY_ROUTES, MAIN_ROUTES, MORE_ROUTES, SERVICE_ROUTES } from './MenuOverlay';

/* The obsidian footer: every route as a plain link, credits, nothing decorative. */
const footerLink = 'text-smoke no-underline transition-colors hover:text-ink-foreground';

const Column = ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
  <nav aria-label={title}>
    <p className="label m-0 mb-5 text-smoke">{title}</p>
    <ul className="m-0 list-none space-y-2.5 p-0 text-[0.9375rem]">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className={footerLink}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useCookies();

  return (
    <footer className="band-ink pb-24 md:pb-0">
      <div className="wrap pb-10 pt-[clamp(5rem,8vw,7.5rem)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="display block text-[clamp(1.5rem,2.5vw,2rem)] text-current no-underline">
              automatizācijas.lv
            </Link>
            <p className="m-0 mt-5 max-w-[24em] text-ink-muted">
              AI automatizācija uzņēmumiem Latvijā. Rīga.
            </p>
            <p className="m-0 mt-6 text-[0.9375rem] leading-loose">
              <a href="tel:+37120015830" className={footerLink}>
                +371 20 015 830
              </a>
              <br />
              <a href="mailto:info@automatizacijas.lv" className={footerLink}>
                info@automatizacijas.lv
              </a>
              <br />
              <a
                href="https://www.linkedin.com/company/sula-labs-io/"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <Column title="Pakalpojumi" links={SERVICE_ROUTES} />
            <Column title="Nozares" links={INDUSTRY_ROUTES} />
            <Column title="Uzņēmums" links={[...MAIN_ROUTES.filter((r) => r.to !== '/services' && r.to !== '/nozares'), ...MORE_ROUTES]} />
          </div>
        </div>

        <hr className="hairline mt-16" />
        <div className="caption flex flex-col gap-3 pt-6 text-smoke sm:flex-row sm:items-center sm:justify-between">
          <span>
            {`© ${currentYear} automatizācijas.lv. Gleznas: The Metropolitan Museum of Art, Open Access (CC0).`}
          </span>
          <button type="button" onClick={openModal} className={`${footerLink} cursor-pointer border-0 bg-transparent p-0 text-left`}>
            Sīkdatņu iestatījumi
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
