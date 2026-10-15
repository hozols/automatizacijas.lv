import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '@/components/Services';
import PageTransition from '@/components/PageTransition';
import { PageShell } from '@/components/page';

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI pakalpojumi uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="Čatboti, procesu un dokumentu automatizācija, datu analīze, AI platformas un mājaslapas. Viss, ko būvējam, un kam tas der."/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/services" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/services" />
        <meta property="og:title" content="AI pakalpojumi uzņēmumiem | automatizacijas.lv" />
        <meta property="og:description" content="Čatboti, procesu un dokumentu automatizācija, datu analīze, AI platformas un mājaslapas. Viss, ko būvējam, un kam tas der." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI pakalpojumi uzņēmumiem" />
        <meta name="twitter:description" content="Čatboti, procesu un dokumentu automatizācija, datu analīze, AI platformas un mājaslapas. Viss, ko būvējam, un kam tas der." />
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