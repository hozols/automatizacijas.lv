import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '@/components/Services';
import PageTransition from '@/components/PageTransition';
import { PageShell } from '@/components/page';

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI Pakalpojumi Uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="AI čatboti, procesu automatizācija, datu analīze un AI darbinieki uzņēmumiem Latvijā. Uzlabojiet efektivitāti ar AI. Bezmaksas konsultācija."/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/services" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/services" />
        <meta property="og:title" content="AI Pakalpojumi | automatizacijas.lv" />
        <meta property="og:description" content="Profesionāli AI pakalpojumi uzņēmumiem Latvijā: AI čatboti, procesu automatizācija, datu analīze un pielāgoti risinājumi." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Pakalpojumi | automatizacijas.lv" />
        <meta name="twitter:description" content="Profesionāli AI pakalpojumi uzņēmumiem Latvijā: čatboti, automatizācija, datu analīze." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Services />
      </PageShell>
    </PageTransition>
  );
};

export default ServicesPage;