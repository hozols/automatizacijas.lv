import React from 'react';
import Logo from './Logo';
import {
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Github,
  ArrowRight,
  Shield,
  FileText,
  Settings,
  Mail,
  Phone
} from 'lucide-react';
import { useCookies } from '@/contexts/CookieContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useCookies();

  return (
    <footer className="w-full bg-gradient-to-br from-background via-card/80 to-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="hover-scale transition-transform duration-200">
                <Logo />
              </div>
              <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                Moderna AI automatizācija uzņēmumiem, kas novērtē efektivitāti, precizitāti un rezultātus. Mēs palīdzam jūsu biznesam augt ar jaunākajām AI tehnoloģijām.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@automatizacijas.lv</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+371 20 015 830</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Rīga, Latvija</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Pakalpojumi</h3>
              <div className="space-y-3">
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    AI Darbinieki
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Čatboti
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Automatizācija
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Dokumentu apstrāde
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Biznesa inteliģence
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Individuāli risinājumi
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Web izstrāde
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    E-komercija
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
                <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <span className="flex items-center gap-2">
                    Mobilās aplikācijas
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Uzņēmums</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Par mums</a>
                <a href="/portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Projekti</a>
                <a href="/training" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Apmācības</a>
                <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Kontakti</a>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-border/30">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sekojiet mums:</span>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/sula-labs-io/" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-border/30 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <span className="text-sm text-muted-foreground">
                © {currentYear} AI Automatizācija. Visas tiesības aizsargātas.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button 
                onClick={openModal}
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group"
              >
                <Settings className="h-3 w-3 group-hover:scale-110 transition-transform" />
                <span>Sīkdatnes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;