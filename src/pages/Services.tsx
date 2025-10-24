import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Pakalpojumi | automatizacijas.lv</title>
        <meta name="description" content="Mēs piedāvājam plašu AI pakalpojumu klāstu, ieskaitot čatbotus, procesu automatizāciju, datu analīzi un citus risinājumus."/>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <Services />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;