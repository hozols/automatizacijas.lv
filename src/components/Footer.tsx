import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '@/contexts/CookieContext';
import { INDUSTRY_ROUTES, MAIN_ROUTES, MORE_ROUTES, SERVICE_ROUTES } from './MenuOverlay';

/* The chalk footer: every route as a plain link, credits, nothing decorative. */
const footerLink = 'text-current no-underline hover:underline underline-offset-4 decoration-1';

const Column = ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
  <nav aria-label={title}>
    <p className="label m-0 mb-4 text-muted-foreground">{title}</p>
    <ul className="m-0 list-none space-y-2 p-0 text-[0.9375rem]">
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
    <footer className="band-chalk pb-24 md:pb-0">
      <div className="wrap pb-10 pt-14 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="display-2 block text-current no-underline">
              automatizācijas.lv
            </Link>
            <p className="m-0 mt-5 max-w-[24em] text-muted-foreground">
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

        <hr className="hairline mt-14" />
        <div className="flex flex-col gap-3 pt-5 text-[0.8125rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
