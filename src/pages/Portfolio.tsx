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
        <title>Mūsu Portfolio | automatizacijas.lv</title>
        <meta name="description" content="Apskatiet mūsu paveiktos darbus un projektus AI jomā. Uzziniet, kā mēs esam palīdzējuši citiem uzņēmumiem sasniegt savus mērķus."/>
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