import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const PricingPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācijas Cenas un Plāni | automatizacijas.lv</title>
        <meta name="description" content="AI automatizācijas cenas sākot no €299/mēn. Elastīgi plāni čatbotiem, procesu automatizācijai un datu analīzei. Bezmaksas konsultācija un individuāla tāme."/>
        <link rel="canonical" href="https://automatizacijas.lv/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/pricing" />
        <meta property="og:title" content="AI Pakalpojumu Cenas | automatizacijas.lv" />
        <meta property="og:description" content="AI automatizācijas pakalpojumu cenas un elastīgi plāni uzņēmumiem Latvijā." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Pakalpojumu Cenas | automatizacijas.lv" />
        <meta name="twitter:description" content="AI automatizācijas pakalpojumu cenas un elastīgi plāni." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Pricing />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PricingPage;