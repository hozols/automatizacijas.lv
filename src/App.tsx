import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieProvider } from "@/contexts/CookieContext";
import { PricingProvider } from "@/contexts/PricingContext";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import CookieSettingsModal from "./components/CookieSettingsModal";
import Loader from "./components/Loader";

const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Training = lazy(() => import("./pages/Training"));
const Pricing = lazy(() => import("./pages/Pricing"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CookieProvider>
        <PricingProvider>
          <TooltipProvider>
            <Router>
              <ScrollToTop />
              <Toaster />
              <Sonner />
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <CookieBanner />
              <CookieSettingsModal />
            </Router>
          </TooltipProvider>
        </PricingProvider>
      </CookieProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
