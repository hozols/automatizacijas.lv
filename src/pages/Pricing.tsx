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
        <title>AI Pakalpojumu Konfigurācija | automatizacijas.lv</title>
        <meta name="description" content="AI automatizācijas cenas un pakalpojumu konfigurācija. Čatboti, procesu automatizācija, web izstrāde. Bezmaksas konsultācija."/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/pricing" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/pricing" />
        <meta property="og:title" content="AI Pakalpojumu Cenas | automatizacijas.lv" />
        <meta property="og:description" content="AI automatizācijas pakalpojumu cenas un elastīgi plāni uzņēmumiem Latvijā." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Pakalpojumu Cenas | automatizacijas.lv" />
        <meta name="twitter:description" content="AI automatizācijas pakalpojumu cenas un elastīgi plāni." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Cenas", "item": "https://automatizacijas.lv/pricing" }
          ]
        })}</script>
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