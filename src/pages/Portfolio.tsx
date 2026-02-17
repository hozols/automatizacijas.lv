import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import PortfolioShowcase from '@/components/PortfolioCarousel';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI Projekti un Paveiktie Darbi | automatizacijas.lv</title>
        <meta name="description" content="AI automatizācijas projekti un paveiktie darbi Latvijas uzņēmumiem. Čatboti, procesu automatizācija un datu analīzes risinājumi. Reāli rezultāti."/>
        <link rel="canonical" href="https://automatizacijas.lv/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/portfolio" />
        <meta property="og:title" content="AI Projektu Portfolio | automatizacijas.lv" />
        <meta property="og:description" content="Apskatiet mūsu AI automatizācijas projektus un paveiktos darbus Latvijas uzņēmumiem." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Projektu Portfolio | automatizacijas.lv" />
        <meta name="twitter:description" content="Apskatiet mūsu AI automatizācijas projektus un paveiktos darbus." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <PortfolioShowcase />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;