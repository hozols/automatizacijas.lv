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
import MobileStickyBar from "./components/MobileStickyBar";

const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Training = lazy(() => import("./pages/Training"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const KasIrMaksligaisIntelekts = lazy(() => import("./pages/KasIrMaksligaisIntelekts"));
const ChatbotuIzstrade = lazy(() => import("./pages/ChatbotuIzstrade"));
const ProcesuAutomatizacija = lazy(() => import("./pages/ProcesuAutomatizacija"));
const MajaslapuIzstrade = lazy(() => import("./pages/MajaslapuIzstrade"));
const Privacy = lazy(() => import("./pages/Privacy"));

// New service pages
const DokumentuAutomatizacija = lazy(() => import("./pages/DokumentuAutomatizacija"));
const GramatvedibadAutomatizacija = lazy(() => import("./pages/GramatvedibadAutomatizacija"));
const AiPlatformuIzstrade = lazy(() => import("./pages/AiPlatformuIzstrade"));
const DatuAnalize = lazy(() => import("./pages/DatuAnalize"));
const AiDarbinieki = lazy(() => import("./pages/AiDarbinieki"));

// Industry pages
const Nozares = lazy(() => import("./pages/Nozares"));
const NozareGramatvediba = lazy(() => import("./pages/NozareGramatvediba"));
const NozareEkomercija = lazy(() => import("./pages/NozareEkomercija"));
const NozareRazosana = lazy(() => import("./pages/NozareRazosana"));
const NozareLogistika = lazy(() => import("./pages/NozareLogistika"));
const NozareJuridiskasFirmas = lazy(() => import("./pages/NozareJuridiskasFirmas"));

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
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/kas-ir-maksligais-intelekts" element={<KasIrMaksligaisIntelekts />} />
                  <Route path="/chatbotu-izstrade" element={<ChatbotuIzstrade />} />
                  <Route path="/procesu-automatizacija" element={<ProcesuAutomatizacija />} />
                  <Route path="/majaslapu-izstrade" element={<MajaslapuIzstrade />} />
                  <Route path="/privacy" element={<Privacy />} />
                  {/* New service pages */}
                  <Route path="/dokumentu-automatizacija" element={<DokumentuAutomatizacija />} />
                  <Route path="/gramatvedibas-automatizacija" element={<GramatvedibadAutomatizacija />} />
                  <Route path="/ai-platformu-izstrade" element={<AiPlatformuIzstrade />} />
                  <Route path="/datu-analize" element={<DatuAnalize />} />
                  <Route path="/ai-darbinieki" element={<AiDarbinieki />} />
                  {/* Industry pages */}
                  <Route path="/nozares" element={<Nozares />} />
                  <Route path="/nozares/gramatvediba-un-finanses" element={<NozareGramatvediba />} />
                  <Route path="/nozares/e-komercija" element={<NozareEkomercija />} />
                  <Route path="/nozares/razosana" element={<NozareRazosana />} />
                  <Route path="/nozares/logistika" element={<NozareLogistika />} />
                  <Route path="/nozares/juridiskas-firmas" element={<NozareJuridiskasFirmas />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <CookieBanner />
              <CookieSettingsModal />
              <MobileStickyBar />
            </Router>
          </TooltipProvider>
        </PricingProvider>
      </CookieProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
