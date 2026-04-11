import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, BarChart3, Zap, Clock, Users, ArrowRight, CheckCircle, TrendingUp, Target, PieChart } from 'lucide-react';

const faqs = [
  {
    question: 'Kādus datus var analizēt ar AI?',
    answer: 'AI var analizēt praktiski jebkāda veida strukturētus un nestrukturētus datus — pārdošanas datus, klientu uzvedību, finanšu rādītājus, mārketinga kampaņu rezultātus, inventāra datus, darbinieku produktivitāti un daudz ko citu. Sistēma spēj apstrādāt datus no dažādiem avotiem vienlaicīgi.',
  },
  {
    question: 'Cik ilgi aizņem datu analīzes sistēmas ieviešana?',
    answer: 'Pamata dashbordu un atskaišu ieviešana aizņem 2-4 nedēļas. Pilna biznesa inteliģences platforma ar prognozēšanas iespējām parasti tiek ieviesta 6-10 nedēļu laikā. Pirmās automātiskās atskaites jūs saņemsiet jau pirmajā nedēļā.',
  },
  {
    question: 'Vai man ir nepieciešams datu analītiķis komandā?',
    answer: 'Nē — mūsu AI vadītā sistēma ir projektēta tā, lai to varētu izmantot jebkurš darbinieks bez tehniskām zināšanām. Dashbordi ir intuitīvi, atskaites tiek ģenerētas automātiski, un sistēma pati izceļ svarīgākos ieskatus un anomālijas.',
  },
  {
    question: 'Kā nodrošināt datu drošību?',
    answer: 'Mēs izmantojam industrijas standarta šifrēšanu (AES-256), datu piekļuves kontroli ar lomu sistēmu un regulārus drošības auditus. Visi dati tiek glabāti ES serveros saskaņā ar GDPR prasībām. Jūsu dati nekad netiek izmantoti citu klientu modeļu apmācībai.',
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
  "name": "Datu Analīze un Biznesa Inteliģence ar AI",
  "description": "AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija. Pieņemiet lēmumus ar datiem.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Data Analytics and Business Intelligence"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Datu Analīze", "item": "https://automatizacijas.lv/datu-analize" }
  ]
};

const DatuAnalize = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Datu Analīze un BI ar AI | automatizacijas.lv</title>
        <meta name="description" content="AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija. Pieņemiet lēmumus ar datiem." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/datu-analize" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/datu-analize" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/datu-analize" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/datu-analize" />
        <meta property="og:title" content="Datu Analīze un BI ar AI | automatizacijas.lv" />
        <meta property="og:description" content="AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datu Analīze un BI ar AI" />
        <meta name="twitter:description" content="AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze un prognozēšana." />
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
            <span className="text-foreground">Datu Analīze</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Datu Analīze un Biznesa Inteliģence ar AI
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Pārvērtiet savus biznesa datus par vērtīgiem ieskatiem un gudrākiem lēmumiem. Mūsu AI vadītā analītika
                apstrādā miljoniem datu punktu sekundēs, automātiski atklājot tendences, anomālijas un iespējas,
                ko <strong className="text-foreground">cilvēka acs vienkārši nepamanītu</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: TrendingUp, value: '3x', label: 'Ātrāki lēmumi' },
                  { icon: Clock, value: '24/7', label: 'Reāllaika dati' },
                  { icon: BarChart3, value: '€349', label: 'No €349/mēn' },
                  { icon: PieChart, value: '100%', label: 'Pielāgotas atskaites' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card/60 text-center">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-foreground">{item.value}</span>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="px-4 sm:px-6 md:px-8 pb-16">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc AI vadīta datu analīze?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lielākā daļa uzņēmumu saskaras ar vieniem un tiem pašiem izaicinājumiem — atskaišu sagatavošana aizņem stundas vai pat dienas,
                  dati ir izkaisīti pa dažādām sistēmām, un lēmumi tiek pieņemti uz intuīcijas, nevis faktu pamata.
                  Tikmēr konkurenti, kas izmanto datu analīzi, pieņem labākus lēmumus ātrāk.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Clock, text: 'Lēna atskaišu sagatavošana — darbinieki pavada stundas, manuāli apkopojot datus no dažādām sistēmām, lai izveidotu vienu atskaiti.' },
                    { icon: Target, text: 'Cilvēciskās kļūdas — manuāla datu apstrāde neizbēgami noved pie kļūdām, kas var maksāt tūkstošiem eiro nepareizu lēmumu dēļ.' },
                    { icon: Zap, text: 'Novēloti lēmumi — kad atskaite ir gatava, dati jau ir novecojuši. Tirgus situācija ir mainījusies, un iespēja ir zaudēta.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 rounded-lg border border-border bg-card/60">
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  AI vadīta datu analīze atrisina visas šīs problēmas vienlaicīgi. Sistēma automātiski apkopo datus no visām jūsu biznesa sistēmām,
                  analizē tos reāllaikā un pasniedz gatavus ieskatus saprotamā vizuālā formātā — bez jebkādas manuālas iejaukšanās.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ko mēs piedāvājam</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: BarChart3,
                      title: 'Automātiskas atskaites un dashbordi',
                      desc: 'Izveidojam interaktīvus dashbordus, kas atjaunojas reāllaikā. Ikdienas, iknedēļas un ikmēneša atskaites tiek ģenerētas un nosūtītas automātiski — jums tikai jāatver un jāizlasa. Katrs dashbords tiek pielāgots jūsu biznesa vajadzībām un lomai uzņēmumā.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Tendenču analīze un prognozēšana',
                      desc: 'AI algoritmi analizē vēsturiskos datus, identificē tendences un ģenerē prognozes par nākotnes rādītājiem. Prognozējiet pārdošanas apjomus, pieprasījuma svārstības, sezonālās tendences un potenciālos riskus pirms tie kļūst par problēmām.',
                    },
                    {
                      icon: Users,
                      title: 'Klientu uzvedības analīze',
                      desc: 'Izprotiet savus klientus dziļāk — kuri segmenti ir visrentablākie, kas ietekmē pirkuma lēmumu, kāpēc klienti aiziet un kā palielināt klientu mūža vērtību. AI atklāj slēptus modeļus, ko tradicionāla analīze nespēj.',
                    },
                    {
                      icon: PieChart,
                      title: 'Finanšu datu analīze',
                      desc: 'Automatizēta finanšu atskaišu sagatavošana, naudas plūsmas prognozēšana, izmaksu optimizācijas ieteikumi un budžeta izpildes monitorings. Integrējam ar jūsu grāmatvedības sistēmu, lai dati vienmēr būtu aktuāli.',
                    },
                    {
                      icon: Target,
                      title: 'Pārdošanas un mārketinga analītika',
                      desc: 'Sekojiet līdzi kampaņu ROI, konversijas rādītājiem, klientu piesaistes izmaksām un pārdošanas piltuves efektivitātei. AI automātiski identificē labākos kanālus un sniedz rekomendācijas budžeta pārdalei.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Integrācijas ar biznesa sistēmām</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Datu analīze ir efektīva tikai tad, kad tā aptver visus jūsu biznesa datus. Tāpēc mēs nodrošinām nevainojamu integrāciju
                  ar visām populārākajām biznesa sistēmām — dati tiek sinhronizēti automātiski, un jūs redzat pilnu ainu vienā vietā.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'CRM sistēmas', desc: 'Salesforce, HubSpot, Pipedrive un citas CRM platformas — klientu dati, darījumu vēsture un pārdošanas pipeline vienā skatā.' },
                    { title: 'ERP sistēmas', desc: 'SAP, Microsoft Dynamics, 1C un citas ERP — ražošanas, loģistikas un resursu dati integrēti ar analītiku.' },
                    { title: 'E-komercijas platformas', desc: 'Shopify, WooCommerce, Magento — pārdošanas dati, klientu uzvedība un produktu veiktspēja reāllaikā.' },
                    { title: 'Grāmatvedības sistēmas', desc: 'Jumis, Horizon, Tildes un citas sistēmas — finanšu dati automātiski integrēti ar biznesa analītiku.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 rounded-lg border border-border bg-card/60">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Jūsu sistēma nav sarakstā? Mēs varam integrēt praktiski jebkuru sistēmu, kurai ir API vai datu eksporta iespēja.{' '}
                  <Link to="/contact" className="text-primary hover:underline">Sazinieties ar mums</Link>, lai uzzinātu vairāk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā sākt ar datu analīzi</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Datu audits un mērķu noteikšana', desc: 'Izanalizējam jūsu esošos datu avotus, identificējam galvenās biznesa metrikas un nosakām, kādi ieskati jums ir visvērtīgākie. Kopā definējam KPI un vēlamos rezultātus.' },
                    { step: '2', title: 'Datu integrācija un sagatavošana', desc: 'Savienojam jūsu biznesa sistēmas, izveidojam datu plūsmas un nodrošinām datu kvalitāti. Šajā posmā arī notiek datu tīrīšana un standartizācija.' },
                    { step: '3', title: 'Dashbordu izveide un AI konfigurācija', desc: 'Izveidojam pielāgotus dashbordus un atskaites, konfigurējam AI analīzes modeļus un iestatām automātiskos brīdinājumus par svarīgām datu izmaiņām.' },
                    { step: '4', title: 'Apmācība un optimizācija', desc: 'Apmācām jūsu komandu sistēmas lietošanā, optimizējam dashbordus pēc pirmajām lietošanas nedēļām un paplašinām analīzi, kad sistēma ir iedzīvojusies.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-lg border border-border bg-card/60">
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Saistītie pakalpojumi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/ai-platformu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Platformu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Pielāgotas AI platformas jūsu biznesam</p>
                  </Link>
                  <Link to="/gramatvedibas-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Grāmatvedības Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Finanšu procesu automatizācija ar AI</p>
                  </Link>
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Biznesa procesu automatizācija ar MI</p>
                  </Link>
                </div>
              </section>

              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Sāciet pieņemt lēmumus ar datiem</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Pieteikties bezmaksas datu audits — noskaidrosim, kā AI analītika var uzlabot jūsu biznesa rezultātus.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <BarChart3 className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      Bezmaksas datu audits
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 group">
                      Apskatīt cenas
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

export default DatuAnalize;
