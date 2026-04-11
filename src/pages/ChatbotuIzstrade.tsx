import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Bot, Zap, Clock, Users, MessageSquare, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const faqs = [
  {
    question: 'Cik ilgi aizņem AI čatbota izstrāde?',
    answer: 'Pamata čatbots ar biežāk uzdotajiem jautājumiem ir gatavs 1-2 nedēļās. Sarežģītāks čatbots ar CRM integrāciju, daudzvalodu atbalstu un pielāgotu loģiku — 3-6 nedēļas. Sākam ar jūsu vajadzību analīzi un izveidojam detalizētu projekta plānu.',
  },
  {
    question: 'Vai čatbots var strādāt latviešu valodā?',
    answer: 'Jā, mūsu čatboti pilnībā atbalsta latviešu valodu. Izmantojam jaunākos valodas modeļus, kas nodrošina dabīgu komunikāciju latviski. Čatbots var arī automātiski pārslēgties starp valodām — piemēram, latviešu, angļu un krievu.',
  },
  {
    question: 'Cik maksā AI čatbota izstrāde?',
    answer: 'Cenas sākas no €299/mēnesī par pamata čatbotu. Pielāgoti risinājumi ar integrācijām un papildu funkcijām sākas no €699/mēnesī. Piedāvājam bezmaksas konsultāciju un detalizētu tāmi pirms projekta uzsākšanas.',
  },
  {
    question: 'Vai čatbots var integrēties ar manu esošo sistēmu?',
    answer: 'Jā, mūsu čatboti integrējas ar populārākajām platformām — Shopify, WordPress, WooCommerce, CRM sistēmām (HubSpot, Pipedrive), e-pasta sistēmām un citiem rīkiem. Izmantojam API integrācijas, lai nodrošinātu netraucētu datu plūsmu.',
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
  "name": "AI Čatbotu Izstrāde",
  "description": "Profesionāla AI čatbotu izstrāde uzņēmumiem Latvijā. Inteliģenti čatboti klientu apkalpošanai, pārdošanas automatizācijai un iekšējai komunikācijai.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Chatbot Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Čatbotu Izstrāde", "item": "https://automatizacijas.lv/chatbotu-izstrade" }
  ]
};

const ChatbotuIzstrade = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Čatbotu Izstrāde Latvijā | automatizacijas.lv</title>
        <meta name="description" content="AI čatbotu izstrāde uzņēmumiem Latvijā. Inteliģenti čatboti latviešu valodā 24/7 klientu apkalpošanai. Integrācija ar CRM, e-veikalu un citām sistēmām. No €299/mēn." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/chatbotu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/chatbotu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/chatbotu-izstrade" />
        <meta property="og:title" content="AI Čatbotu Izstrāde Latvijā | automatizacijas.lv" />
        <meta property="og:description" content="Inteliģenti AI čatboti klientu apkalpošanai latviešu valodā. 24/7 atbalsts, CRM integrācija." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Čatbotu Izstrāde Latvijā" />
        <meta name="twitter:description" content="Inteliģenti AI čatboti klientu apkalpošanai latviešu valodā." />
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
            <span className="text-foreground">AI Čatbotu Izstrāde</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Čatbotu Izstrāde Uzņēmumiem Latvijā
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Izveidojam inteliģentus AI čatbotus, kas apkalpo jūsu klientus <strong className="text-foreground">24/7 latviešu valodā</strong>.
                Mūsu čatboti atbild uz jautājumiem, palīdz ar produktu izvēli, pieņem pasūtījumus un novirza sarežģītākus pieprasījumus pie speciālistiem —
                viss pilnīgi automātiski.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: '24/7 pieejams' },
                  { icon: MessageSquare, label: 'Latviešu valodā' },
                  { icon: Users, label: '85% auto-atbildes' },
                  { icon: Shield, label: 'GDPR atbilstīgs' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc AI čatbots jūsu biznesam?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tradicionāli klientu apkalpošana prasa daudz darbinieku laika un resursu. AI čatbots to fundamentāli maina —
                  tas nekad nepieprasa brīvdienas, nekļūst noguris un spēj vienlaicīgi apkalpot simtiem klientu.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Samazina klientu atbildes laiku no stundām uz sekundēm',
                    'Ietaupa līdz 60% no klientu apkalpošanas izmaksām',
                    'Palielina klientu apmierinātību par 40-70%',
                    'Uztver un kvalificē potenciālos klientus (leads) automātiski',
                    'Integrējas ar jūsu esošo CRM, e-veikalu vai mājas lapu',
                    'Mācās no katras sarunas un kļūst gudrāks laika gaitā',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Čatbotu veidi, ko piedāvājam</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Klientu atbalsta čatbots', desc: 'Atbild uz biežāk uzdotajiem jautājumiem, palīdz ar problēmu risināšanu un novirza pie speciālistiem ja nepieciešams. Ideāls e-veikaliem un pakalpojumu uzņēmumiem.' },
                    { title: 'Pārdošanas čatbots', desc: 'Kvalificē potenciālos klientus, iesaka produktus un palīdz ar pirkuma procesu. Palielina konversijas un vidējo pasūtījuma vērtību.' },
                    { title: 'Iekšējais AI asistents', desc: 'Palīdz darbiniekiem atrast informāciju, atbildēt uz procedūru jautājumiem un automatizēt rutīnas uzdevumus. Ietaupa komandas laiku katru dienu.' },
                    { title: 'Daudzvalodu čatbots', desc: 'Automātiski atpazīst klienta valodu un atbild latviski, angliski vai krieviski. Ideāls uzņēmumiem ar starptautiskajiem klientiem.' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā notiek čatbota izstrāde?</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Konsultācija un analīze', desc: 'Izpētām jūsu biznesa vajadzības, klientu tipiskos jautājumus un esošos procesus. Definējam čatbota mērķus un funkcionalitāti.' },
                    { step: '2', title: 'Dizains un apmācība', desc: 'Veidojam sarunu scenārijus, apmācām MI modeli uz jūsu specifisko saturu un integrējam ar nepieciešamajām sistēmām.' },
                    { step: '3', title: 'Testēšana un palaišana', desc: 'Rūpīgi testējam čatbotu ar reāliem scenārijiem, veicam korekcijas un palaidam produkcijā.' },
                    { step: '4', title: 'Uzturēšana un optimizācija', desc: 'Nepārtraukti uzraugām čatbota veiktspēju, analizējam sarunas un uzlabojam atbildes kvalitāti.' },
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

              {/* FAQ */}
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
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automatizējiet biznesa procesus ar AI</p>
                  </Link>
                  <Link to="/majaslapu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Mājaslapu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Modernas mājas lapas ar AI integrāciju</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Izveidosim čatbotu jūsu biznesam</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā novērtēsim jūsu vajadzības un piedāvāsim optimālo risinājumu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Bot className="h-4 w-4 mr-2" />
                      Bezmaksas konsultācija
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

export default ChatbotuIzstrade;
