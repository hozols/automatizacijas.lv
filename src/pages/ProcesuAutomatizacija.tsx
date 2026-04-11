import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Zap, ArrowRight, CheckCircle, FileText, Mail, BarChart3, Settings, Clock, TrendingUp } from 'lucide-react';

const faqs = [
  {
    question: 'Ko nozīmē procesu automatizācija ar AI?',
    answer: 'Procesu automatizācija ar AI nozīmē izmantot mākslīgo intelektu, lai aizstātu manuālas, atkārtojošas darbības ar automatizētām sistēmām. Atšķirībā no vienkāršas automatizācijas, AI sistēmas var pieņemt lēmumus, pielāgoties mainīgiem apstākļiem un mācīties no pieredzes.',
  },
  {
    question: 'Kādus biznesa procesus var automatizēt?',
    answer: 'Praktiski jebkuru atkārtojošos procesu — e-pastu apstrādi un atbildēšanu, rēķinu izrakstīšanu, dokumentu ģenerēšanu, datu ievadi, klientu uzņemšanu, atskaišu veidošanu, inventāra pārvaldību, sociālo mediju publicēšanu un daudz ko citu.',
  },
  {
    question: 'Cik ātri var redzēt rezultātus pēc automatizācijas ieviešanas?',
    answer: 'Pirmie rezultāti ir redzami jau pirmajā nedēļā — ietaupītais laiks un samazinātas kļūdas. Pilnu ROI (ieguldījumu atdevi) mūsu klienti parasti sasniedz 3-6 mēnešu laikā, ar vidējo izmaksu samazinājumu 40-60%.',
  },
  {
    question: 'Vai automatizācija aizstās manus darbiniekus?',
    answer: 'Nē — automatizācija atbrīvo darbiniekus no rutīnas uzdevumiem, ļaujot viņiem fokusēties uz vērtīgāku darbu. Piemēram, grāmatvedim vairs nav jāievada dati manuāli, bet var veltīt laiku finanšu analīzei un konsultēšanai.',
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
  "name": "Biznesa Procesu Automatizācija ar AI",
  "description": "Biznesa procesu automatizācija ar mākslīgo intelektu. Samaziniet manuālo darbu līdz 80% un ietaupiet laiku ar inteliģento automatizāciju.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Business Process Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Procesu Automatizācija", "item": "https://automatizacijas.lv/procesu-automatizacija" }
  ]
};

const ProcesuAutomatizacija = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Procesu Automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="Biznesa procesu automatizācija ar AI Latvijā. Samaziniet manuālo darbu līdz 80%, ietaupiet laiku un naudu. E-pastu, dokumentu automatizācija." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/procesu-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/procesu-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/procesu-automatizacija" />
        <meta property="og:title" content="Procesu Automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Biznesa procesu automatizācija ar mākslīgo intelektu. Samaziniet manuālo darbu līdz 80%." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Procesu Automatizācija ar AI" />
        <meta name="twitter:description" content="Biznesa procesu automatizācija ar mākslīgo intelektu Latvijā." />
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
            <span className="text-foreground">Procesu Automatizācija</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Biznesa Procesu Automatizācija ar Mākslīgo Intelektu
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Automatizējam jūsu biznesa procesus ar AI — no e-pastu apstrādes līdz pilnai darba plūsmu vadībai.
                Mūsu klienti <strong className="text-foreground">ietaupa vidēji 15-25 stundas nedēļā</strong> katram darbiniekam
                un samazina operacionālās izmaksas par 40-60%.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: TrendingUp, value: '-80%', label: 'Mazāk manuāla darba' },
                  { icon: Clock, value: '15-25h', label: 'Ietaupītas nedēļā' },
                  { icon: Zap, value: '3-6 mēn.', label: 'ROI periods' },
                  { icon: Settings, value: '99.9%', label: 'Precizitāte' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Procesus, ko automatizējam</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, title: 'E-pastu apstrāde un atbildēšana', desc: 'AI automātiski kategorizē ienākošos e-pastus, sagatavo atbilžu melnrakstus un novirza ziņojumus pie atbildīgajām personām. Steidzami pieprasījumi tiek atzīmēti un apstrādāti prioritāri.' },
                    { icon: FileText, title: 'Dokumentu ģenerēšana un apstrāde', desc: 'Automātiska līgumu, piedāvājumu, atskaišu un rēķinu ģenerēšana. AI aizpilda veidnes ar datiem no jūsu sistēmām un nodrošina konsekventu formatējumu un precizitāti.' },
                    { icon: BarChart3, title: 'Datu apkopošana un atskaites', desc: 'AI apkopo datus no dažādām sistēmām, izveido automātiskas atskaites un brīdina par nozīmīgām izmaiņām. Vairs nav vajadzīga stundu ilga manuāla datu apstrāde.' },
                    { icon: Settings, title: 'Darba plūsmu automatizācija', desc: 'No klienta pieprasījuma līdz gala rezultātam — automatizējam visu ķēdi. Piemēram: klients aizpilda formu → sistēma izveido uzdevumu → piešķir darbiniekam → nosūta apstiprinājumu klientam.' },
                    { icon: Zap, title: 'CRM un pārdošanas automatizācija', desc: 'Automātiska līdu kvalificēšana, follow-up e-pasti, tikšanās plānošana un pārdošanas piltuves pārvaldība. AI palīdz pārdošanas komandai fokusēties uz perspektīvākajiem klientiem.' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā mēs strādājam</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Procesu audits', desc: 'Kartējam jūsu esošos biznesa procesus, identificējam šaurās vietas un noteicam, kur automatizācija dos vislielāko atdevi.' },
                    { step: '2', title: 'Risinājuma projektēšana', desc: 'Izstrādājam automatizācijas arhitektūru — kādas sistēmas tiks integrētas, kādi procesi automatizēti un kādus KPI sekosim.' },
                    { step: '3', title: 'Ieviešana un testēšana', desc: 'Pakāpeniski ievietojam automatizāciju, testējam ar reāliem datiem un pārliecināmies, ka viss darbojas pareizi.' },
                    { step: '4', title: 'Optimizācija un paplašināšana', desc: 'Monitorējam rezultātus, optimizējam procesus un paplašinām automatizāciju uz jaunām jomām, kad esošā ir nostabilizējusies.' },
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
                  <Link to="/majaslapu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Mājaslapu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Modernas mājas lapas ar AI integrāciju</p>
                  </Link>
                </div>
              </section>

              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Automatizēsim jūsu biznesa procesus</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Sāksim ar bezmaksas procesu auditu — identificēsim, kur automatizācija dos vislielāko atdevi.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Zap className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      Bezmaksas procesu audits
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

export default ProcesuAutomatizacija;
