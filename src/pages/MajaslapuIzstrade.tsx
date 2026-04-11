import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe, Zap, ArrowRight, CheckCircle, Code, Smartphone, ShoppingCart, Search, Gauge } from 'lucide-react';

const faqs = [
  {
    question: 'Cik maksā mājas lapas izstrāde?',
    answer: 'Vienkārša biznesa mājas lapa sākas no €800-1,500. Mājas lapa ar pielāgotu dizainu, AI integrāciju un CMS — €2,000-5,000. E-komercijas risinājumi ar pilnu funkcionalitāti — no €3,000. Piedāvājam bezmaksas konsultāciju un detalizētu tāmi.',
  },
  {
    question: 'Cik ilgi aizņem mājaslapas izveide?',
    answer: 'Vienkārša vizītkarte/landing page — 1-2 nedēļas. Biznesa mājas lapa ar vairākām sadaļām — 3-4 nedēļas. E-komercijas veikals vai sarežģītāka web aplikācija — 6-12 nedēļas. Laiks ir atkarīgs no satura sagatavošanas ātruma un funkcionalitātes apjoma.',
  },
  {
    question: 'Kāda ir atšķirība starp parasto un AI mājas lapu?',
    answer: 'AI mājas lapa ietver inteliģentas funkcijas — čatbotu klientu apkalpošanai, personalizētu satura parādīšanu, automātisku SEO optimizāciju un analītiku. Tā ne tikai informē, bet aktīvi palīdz piesaistīt un konvertēt klientus.',
  },
  {
    question: 'Vai jūs nodrošināt mājas lapas uzturēšanu?',
    answer: 'Jā, piedāvājam uzturēšanas plānus sākot no €49/mēnesī, kas ietver drošības atjauninājumus, regulāras rezerves kopijas, veiktspējas monitoringu un mazas satura izmaiņas. Premium plānā iekļauts arī SEO monitorings un mēneša atskaites.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mājaslapu Izstrāde ar AI",
  "description": "Profesionāla mājaslapu un web aplikāciju izstrāde ar AI integrāciju. Modernas, ātras un SEO optimizētas mājas lapas uzņēmumiem Latvijā.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Web Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Mājaslapu Izstrāde", "item": "https://automatizacijas.lv/majaslapu-izstrade" }
  ]
};

const MajaslapuIzstrade = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Mājaslapu Izstrāde ar AI | automatizacijas.lv</title>
        <meta name="description" content="Profesionāla mājaslapu izstrāde ar AI integrāciju Latvijā. Modernas mājas lapas, e-veikali un web aplikācijas. SEO optimizācija, čatboti un analītika. No €800." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/majaslapu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/majaslapu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/majaslapu-izstrade" />
        <meta property="og:title" content="Mājaslapu Izstrāde ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Profesionāla mājaslapu izstrāde ar AI integrāciju Latvijā. Modernas mājas lapas un e-veikali." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mājaslapu Izstrāde ar AI" />
        <meta name="twitter:description" content="Profesionāla mājaslapu izstrāde ar AI integrāciju Latvijā." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Sākums</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Pakalpojumi</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Mājaslapu Izstrāde</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Mājaslapu Izstrāde ar AI Integrāciju
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Izveidojam modernas, ātras un <strong className="text-foreground">SEO optimizētas mājas lapas</strong>,
                kas ne tikai labi izskatās, bet arī aktīvi palīdz piesaistīt klientus. Katram projektam piedāvājam AI
                integrāciju — čatbotus, personalizāciju un inteliģentu analītiku.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Gauge, label: '90+ Lighthouse' },
                  { icon: Smartphone, label: 'Mobilā versija' },
                  { icon: Search, label: 'SEO optimizēta' },
                  { icon: Zap, label: 'AI integrācija' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card/60 text-center">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="px-4 sm:px-6 md:px-8 pb-16">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ko piedāvājam</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Globe, title: 'Biznesa mājas lapas', desc: 'Profesionālas korporatīvās mājas lapas ar modernu dizainu, ātru ielādi un pilnu SEO optimizāciju. Ideāli piemērotas uzņēmumiem, kas vēlas prezentēt savus pakalpojumus tiešsaistē.' },
                    { icon: ShoppingCart, title: 'E-komercijas veikali', desc: 'Pilnvērtīgi interneta veikali ar maksājumu sistēmām, inventāra pārvaldību un pasūtījumu apstrādi. Shopify, WooCommerce vai pilnībā pielāgoti risinājumi.' },
                    { icon: Code, title: 'Web aplikācijas un MVP', desc: 'Pielāgotas web aplikācijas biznesa procesiem — no klientu portāliem līdz iekšējām vadības sistēmām. Ātra MVP izstrāde startupu idejām.' },
                    { icon: Smartphone, title: 'Progresīvās web aplikācijas', desc: 'PWA tehnoloģija nodrošina lietotnes pieredzi tieši pārlūkā — darbojas bezsaistē, saņem push paziņojumus un ielādējas zibenīgi ātri.' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc mājas lapa ar AI?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Parasta mājas lapa ir kā digitāla vizītkarte. Mājas lapa ar AI integrāciju ir kā darbinieks, kas
                  strādā 24/7 — apkalpo klientus, vāc kontaktus un palīdz pārdot. Lūk, ko AI pievieno:
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'AI čatbots, kas atbild uz klientu jautājumiem jebkurā diennakts laikā latviešu valodā',
                    'Personalizēts saturs katram apmeklētājam balstoties uz viņa uzvedību',
                    'Automātiska SEO optimizācija un meta tagu ģenerēšana',
                    'Inteliģenta analītika ar ieteikumiem satura un konversiju uzlabošanai',
                    'Automātiska attēlu optimizācija un ātruma uzlabošana',
                    'Formu ar AI palīdzību — inteliģenta lauku validācija un ieteikumi',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Tehnoloģijas, ko izmantojam</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Izmantojam jaunākās web tehnoloģijas, kas nodrošina ātrumu, drošību un mērogojamību:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel / AWS', 'Shopify / WooCommerce', 'PostgreSQL', 'OpenAI API', 'Stripe Maksājumi'].map((tech, i) => (
                    <div key={i} className="px-4 py-3 rounded-lg border border-border bg-card/60 text-sm font-medium text-foreground text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Biežāk uzdotie jautājumi</h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card/60 overflow-hidden hover:border-primary/20 transition-colors">
                      <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4">
                        <span className="text-sm sm:text-base font-medium text-foreground leading-snug">{faq.question}</span>
                        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Pages */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Saistītie resursi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/kas-ir-maksligais-intelekts" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Kas ir mākslīgais intelekts?</h3>
                    <p className="text-xs text-muted-foreground">Pilns ceļvedis par MI tehnoloģijām</p>
                  </Link>
                  <Link to="/chatbotu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Čatbotu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Inteliģenti čatboti klientu apkalpošanai</p>
                  </Link>
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automatizējiet biznesa procesus ar AI</p>
                  </Link>
                </div>
              </section>

              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Izveidosim jūsu nākamo mājas lapu</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā apspriedīsim jūsu vajadzības un piedāvāsim optimālo risinājumu ar budžetu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Globe className="h-4 w-4 mr-2" />
                      Bezmaksas konsultācija
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 group">
                      Mūsu darbi
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MajaslapuIzstrade;
