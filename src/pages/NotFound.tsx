import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Search, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">
          Sula Labs
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-px bg-muted-foreground"></div>
            <ArrowRight className="w-3 h-3" />
          </div>
          
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            <Menu className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* 404 Error */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold text-foreground tracking-tighter">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Lapa nav atrasta
            </p>
          </div>

          {/* Call to Action Button */}
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

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Mēģiniet pārbaudīt URL adresi vai izmantojiet navigāciju</p>
            <p>Ja problēma joprojām pastāv, sazinieties ar mums</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Sula Labs © {new Date().getFullYear()}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {location.pathname}
        </div>
      </footer>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;
