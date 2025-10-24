
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>automatizacijas.lv | AI Risinājumi Jūsu Biznesam | Mākslīgā Intelekta Automatizācija Latvijā</title>
        <meta name="description" content="Profesionāli AI automatizācijas risinājumi uzņēmumiem Latvijā. Mākslīgā intelekta čatboti, datu analīze, procesu automatizācija un AI darbinieki. Palīdzam jūsu biznesam augt ar modernām AI tehnoloģijām." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            <HeroSection />
            <Features />
            <Testimonials />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
