import { lazyPage } from "@/lib/lazyPage";
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
import MobileStickyBar from "./components/MobileStickyBar";

const Index = lazyPage(() => import("./pages/Index"));
const Contact = lazyPage(() => import("./pages/Contact"));
const NotFound = lazyPage(() => import("./pages/NotFound"));
const Services = lazyPage(() => import("./pages/Services"));
const Portfolio = lazyPage(() => import("./pages/Portfolio"));
const Training = lazyPage(() => import("./pages/Training"));
const Pricing = lazyPage(() => import("./pages/Pricing"));
const Blog = lazyPage(() => import("./pages/Blog"));
const BlogPost = lazyPage(() => import("./pages/BlogPost"));
const KasIrMaksligaisIntelekts = lazyPage(() => import("./pages/KasIrMaksligaisIntelekts"));
const ChatbotuIzstrade = lazyPage(() => import("./pages/ChatbotuIzstrade"));
const ProcesuAutomatizacija = lazyPage(() => import("./pages/ProcesuAutomatizacija"));
const MajaslapuIzstrade = lazyPage(() => import("./pages/MajaslapuIzstrade"));
const Privacy = lazyPage(() => import("./pages/Privacy"));

// New service pages
const DokumentuAutomatizacija = lazyPage(() => import("./pages/DokumentuAutomatizacija"));
const GramatvedibadAutomatizacija = lazyPage(() => import("./pages/GramatvedibadAutomatizacija"));
const AiPlatformuIzstrade = lazyPage(() => import("./pages/AiPlatformuIzstrade"));
const DatuAnalize = lazyPage(() => import("./pages/DatuAnalize"));
const AiDarbinieki = lazyPage(() => import("./pages/AiDarbinieki"));

// Industry pages
const Nozares = lazyPage(() => import("./pages/Nozares"));
const NozareGramatvediba = lazyPage(() => import("./pages/NozareGramatvediba"));
const NozareEkomercija = lazyPage(() => import("./pages/NozareEkomercija"));
const NozareRazosana = lazyPage(() => import("./pages/NozareRazosana"));
const NozareLogistika = lazyPage(() => import("./pages/NozareLogistika"));
const NozareJuridiskasFirmas = lazyPage(() => import("./pages/NozareJuridiskasFirmas"));

const routeTable: { pattern: RegExp; page: { preload: () => Promise<void> } }[] = [
  { pattern: /^\/$/, page: Index },
  { pattern: /^\/services$/, page: Services },
  { pattern: /^\/portfolio$/, page: Portfolio },
  { pattern: /^\/training$/, page: Training },
  { pattern: /^\/pricing$/, page: Pricing },
  { pattern: /^\/blog$/, page: Blog },
  { pattern: /^\/blog\/[^/]+$/, page: BlogPost },
  { pattern: /^\/contact$/, page: Contact },
  { pattern: /^\/kas-ir-maksligais-intelekts$/, page: KasIrMaksligaisIntelekts },
  { pattern: /^\/chatbotu-izstrade$/, page: ChatbotuIzstrade },
  { pattern: /^\/procesu-automatizacija$/, page: ProcesuAutomatizacija },
  { pattern: /^\/majaslapu-izstrade$/, page: MajaslapuIzstrade },
  { pattern: /^\/privacy$/, page: Privacy },
  { pattern: /^\/dokumentu-automatizacija$/, page: DokumentuAutomatizacija },
  { pattern: /^\/gramatvedibas-automatizacija$/, page: GramatvedibadAutomatizacija },
  { pattern: /^\/ai-platformu-izstrade$/, page: AiPlatformuIzstrade },
  { pattern: /^\/datu-analize$/, page: DatuAnalize },
  { pattern: /^\/ai-darbinieki$/, page: AiDarbinieki },
  { pattern: /^\/nozares$/, page: Nozares },
  { pattern: /^\/nozares\/gramatvediba-un-finanses$/, page: NozareGramatvediba },
  { pattern: /^\/nozares\/e-komercija$/, page: NozareEkomercija },
  { pattern: /^\/nozares\/razosana$/, page: NozareRazosana },
  { pattern: /^\/nozares\/logistika$/, page: NozareLogistika },
  { pattern: /^\/nozares\/juridiskas-firmas$/, page: NozareJuridiskasFirmas },
];

/* Loads the page module for a pathname so hydration can render it synchronously. */
export function preloadRoute(pathname: string): Promise<void> {
  const clean = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const hit = routeTable.find((r) => r.pattern.test(clean));
  return (hit ? hit.page : NotFound).preload();
}

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
