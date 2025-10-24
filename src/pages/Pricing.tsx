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
        <title>Cenas | automatizacijas.lv</title>
        <meta name="description" content="Apskatiet mūsu pakalpojumu cenas un izvēlieties sev piemērotāko risinājumu. Piedāvājam elastīgus cenu plānus."/>
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