import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

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
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="text-center space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold text-foreground tracking-tighter">
                404
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Lapa nav atrasta
              </p>
            </div>

            <div className="pt-4">
              <Button
                onClick={handleGoHome}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Atgriezties uz sākumlapu
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>Mēģiniet pārbaudīt URL adresi vai izmantojiet navigāciju</p>
              <p>Ja problēma joprojām pastāv, sazinieties ar mums</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
