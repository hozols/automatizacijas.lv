import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from '@/components/PageTransition';
import { PageShell, RuledList } from '@/components/page';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>404 - Lapa nav atrasta | automatizacijas.lv</title>
        <meta name="description" content="Diemžēl šī lapa nav atrasta. Atgriezieties uz sākumlapu vai izmantojiet navigāciju." />
        <meta name="robots" content="noindex, follow" />
        <link rel="alternate" hreflang="lv" href={`https://automatizacijas.lv${location.pathname}`} />
      </Helmet>
      <PageShell>
        <section className="wrap py-16 lg:py-24">
          <h1 className="display-1 m-0">404</h1>
          <p className="display-3 mt-4 mb-0">Lapa nav atrasta</p>

          <div className="mt-8 space-y-2 text-lg text-muted-foreground max-w-[40em]">
            <p className="m-0">Mēģiniet pārbaudīt URL adresi vai izmantojiet navigāciju</p>
            <p className="m-0">Ja problēma joprojām pastāv, sazinieties ar mums</p>
          </div>

          <div className="mt-10">
            <button type="button" onClick={handleGoHome} className="btn btn-solid">
              Atgriezties uz sākumlapu
            </button>
          </div>

          <div className="mt-12 lg:mt-16 max-w-[48rem]">
            <RuledList
              items={[
                { to: '/services', title: 'AI Risinājumi' },
                { to: '/nozares', title: 'Nozares' },
                { to: '/pricing', title: 'Cenas' },
                { to: '/blog', title: 'Blogs' },
                { to: '/contact', title: 'Kontakti' },
              ]}
            />
          </div>
        </section>
      </PageShell>
    </PageTransition>
  );
};

export default NotFound;
