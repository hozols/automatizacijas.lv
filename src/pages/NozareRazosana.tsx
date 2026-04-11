import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Factory, Wrench, Eye, BarChart3, ArrowRight, CheckCircle, Clock, Zap, Shield, FileText, Settings } from 'lucide-react';

const faqs = [
  {
    question: 'Vai AI kvalitātes kontrole var aizstāt vizuālo pārbaudi?',
    answer: 'AI datorredze veic vizuālo pārbaudi ātrāk un precīzāk nekā cilvēks — tā spēj atklāt defektus, kas nav redzami ar neapbruņotu aci. Tomēr sākotnēji iesakām paralēlu darbību, kur AI un cilvēks strādā kopā, pakāpeniski palielinot AI autonomiju, kad sistēma ir pierādījusi savu precizitāti jūsu specifiskajos apstākļos.',
  },
  {
    question: 'Cik daudz datu ir vajadzīgi prediktīvās apkopes ieviešanai?',
    answer: 'Ideālā gadījumā — vismaz 6-12 mēnešu vēsturiskie dati par iekārtu darbību un apkopes gadījumiem. Tomēr mēs varam sākt arī ar mazāku datu apjomu, izmantojot nozares etalonu modeļus un pakāpeniski pielāgojot tos jūsu iekārtu specifikai. Jo ilgāk sistēma darbojas, jo precīzākas kļūst prognozes.',
  },
  {
    question: 'Kā AI palīdz piegādes ķēžu optimizācijā?',
    answer: 'AI analizē vēsturiskos pieprasījuma datus, sezonālās svārstības, piegādātāju veiktspēju un ārējos faktorus (piemēram, izejvielu cenas). Balstoties uz to, sistēma prognozē nepieciešamo materiālu apjomu, optimālo pasūtīšanas laiku un identificē riskus piegādes ķēdē pirms tie rada problēmas.',
  },
  {
    question: 'Vai AI risinājumi darbojas ar vecākām iekārtām?',
    answer: 'Jā, mūsu risinājumi ir pielāgojami dažāda vecuma iekārtām. Vecākām iekārtām uzstādām IoT sensorus, kas nodrošina nepieciešamos datus. Jaunākām iekārtām bieži jau ir iebūvēti sensori, un mēs vienkārši integrējam esošos datu avotus. Katrs risinājums tiek pielāgots jūsu ražotnes specifikai.',
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
  "name": "AI Automatizācija Ražošanas Uzņēmumiem",
  "description": "AI risinājumi ražošanas nozarei — kvalitātes kontrole, prediktīvā apkope, piegādes ķēžu optimizācija, ražošanas plānošana un dokumentu pārvaldība.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Manufacturing AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Ražošana", "item": "https://automatizacijas.lv/nozares/razosana" }
  ]
};

const NozareRazosana = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Ražošanas Uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi ražošanas uzņēmumiem Latvijā. Kvalitātes kontrole, prediktīvā apkope, piegādes ķēžu optimizācija un ražošanas plānošana." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/razosana" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/razosana" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/razosana" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/razosana" />
        <meta property="og:title" content="AI Automatizācija Ražošanas Uzņēmumiem | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi ražošanas nozarei — kvalitātes kontrole, prediktīvā apkope, ražošanas optimizācija." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Ražošanas Uzņēmumiem" />
        <meta name="twitter:description" content="AI risinājumi ražošanas nozarei Latvijā." />
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
            <Link to="/nozares" className="hover:text-primary transition-colors">Nozares</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Ražošana</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Automatizācija Ražošanas Nozarei Latvijā
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Latvijas ražošanas uzņēmumi saskaras ar augošu konkurenci, darbaspēka trūkumu un prasību pēc augstākas kvalitātes.
                AI tehnoloģijas ļauj <strong className="text-foreground">automatizēt kvalitātes kontroli, prognozēt iekārtu apkopi,
                optimizēt piegādes ķēdes un uzlabot ražošanas plānošanu</strong> — padarot jūsu ražotni gudrāku un efektīvāku.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Eye, label: '99.8% defektu atklāšana' },
                  { icon: Wrench, label: '-40% neplānotas dīkstāves' },
                  { icon: Zap, label: '+20% ražošanas efektivitāte' },
                  { icon: Shield, label: 'ISO atbilstība' },
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

              {/* Izaicinājumi */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ražošanas nozares izaicinājumi</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas ražošanas sektors ir viens no ekonomikas stūrakmeņiem, tomēr tas saskaras ar nopietniem izaicinājumiem.
                  Darbaspēka trūkums, augošās enerģijas un izejvielu izmaksas, un starptautiskā konkurence spiež uzņēmumus
                  meklēt jaunus efektivitātes avotus. AI tehnoloģijas piedāvā konkrētus risinājumus šīm problēmām.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ražošanas uzņēmumiem Latvijā bieži ir ierobežoti resursi digitālajai transformācijai, un daudzi procesi joprojām
                  balstās uz pieredzējušu darbinieku zināšanām un manuālu pārbaudi. Kad šie darbinieki aiziet pensijā, zināšanas
                  pazūd. AI ļauj šīs zināšanas digitalizēt un padarīt pieejamas visai organizācijai.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Manuāla kvalitātes kontrole ir lēna un atkarīga no darbinieka pieredzes',
                    'Neplānotas iekārtu dīkstāves rada tiešus finansiālus zaudējumus',
                    'Piegādes ķēžu traucējumi kavē ražošanu un palielina izmaksas',
                    'Ražošanas plānošana bez precīziem datiem rada neefektivitāti',
                    'Dokumentu pārvaldība (kvalitātes sertifikāti, specifikācijas) ir haotiska',
                    'Enerģijas patēriņa optimizācija prasa detalizētu datu analīzi',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI risinājumi */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI risinājumi ražošanai</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi ražošanas nozarei aptver visu ražošanas ciklu — no izejvielu piegādes līdz gatavās
                  produkcijas kvalitātes kontrolei. Sistēmas ir pielāgotas Latvijas ražošanas uzņēmumu specifikai un mērogam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Eye,
                      title: 'Kvalitātes kontrole ar datorredzi',
                      desc: 'AI datorredzes sistēma reāllaikā pārbauda produktu kvalitāti ražošanas līnijā. Atklāj defektus, izmēru novirzes un virsmas bojājumus ar 99.8% precizitāti — daudz augstāku nekā manuālā pārbaude. Sistēma mācās no katras pārbaudes un kļūst arvien precīzāka.',
                    },
                    {
                      icon: Wrench,
                      title: 'Prediktīvā apkope',
                      desc: 'AI analizē iekārtu sensoru datus (vibrācija, temperatūra, skaņa, enerģijas patēriņš) un prognozē iespējamos bojājumus pirms tie notiek. Sistēma brīdina par nepieciešamo apkopi 2-4 nedēļas iepriekš, ļaujot plānot remontu bez ražošanas pārtraukuma.',
                    },
                    {
                      icon: BarChart3,
                      title: 'Piegādes ķēžu optimizācija',
                      desc: 'AI prognozē izejvielu pieprasījumu, analizē piegādātāju veiktspēju un identificē riskus piegādes ķēdē. Automātiski iesaka optimālos pasūtīšanas apjomus un laiku, samazinot gan noliktavas izmaksas, gan deficīta risku.',
                    },
                    {
                      icon: Settings,
                      title: 'Ražošanas plānošana',
                      desc: 'AI optimizē ražošanas grafiku, ņemot vērā pasūtījumus, iekārtu pieejamību, darbinieku grafikus un materiālu krājumus. Sistēma automātiski pielāgojas izmaiņām un piedāvā optimālu plānu, kas maksimizē iekārtu noslodzi un minimizē pārslēgšanos.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-5 rounded-lg border border-border bg-card/60">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Dokumentu pārvaldība ražošanā</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automātiska ražošanas dokumentācijas pārvaldība — kvalitātes sertifikāti, materiālu specifikācijas,
                    darba instrukcijas un atskaites. AI klasificē un organizē dokumentus, nodrošina versiju kontroli
                    un brīdina par sertifikātu derīguma termiņiem. Atbilstība ISO standartiem un audita prasībām.
                  </p>
                </div>
              </section>

              {/* Rezultāti */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti ražošanas uzņēmumiem</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ražošanas uzņēmumi, kas ievieš AI risinājumus, redz būtiskus uzlabojumus efektivitātē, kvalitātē un izmaksās.
                  Šeit ir tipiski rezultāti no mūsu ieviešanas projektiem.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '40%', label: 'Mazāk dīkstāves', desc: 'ar prediktīvo apkopi' },
                    { value: '99.8%', label: 'Defektu atklāšana', desc: 'ar datorredzes kontroli' },
                    { value: '20%', label: 'Efektivitātes pieaugums', desc: 'ražošanas procesā' },
                    { value: '25%', label: 'Izmaksu samazinājums', desc: 'piegādes ķēdē' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Piemēram, metālapstrādes uzņēmums ar 50 darbiniekiem ieviesa AI kvalitātes kontroles sistēmu un prediktīvo
                  apkopi. Pirmajā gadā defektu skaits samazinājās par 85%, neplānotās dīkstāves — par 40%, un kopējā
                  ražošanas efektivitāte pieauga par 18%. Apskatiet mūsu{' '}
                  <Link to="/procesu-automatizacija" className="text-primary hover:underline">procesu automatizācijas</Link>{' '}
                  un{' '}
                  <Link to="/dokumentu-automatizacija" className="text-primary hover:underline">dokumentu automatizācijas</Link> risinājumus.
                </p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Saistītie pakalpojumi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Biznesa procesu optimizācija un automatizācija</p>
                  </Link>
                  <Link to="/dokumentu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Dokumentu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automātiska dokumentu apstrāde un digitalizācija</p>
                  </Link>
                  <Link to="/ai-platformu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Platformu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Pielāgotas AI platformas ražošanas vajadzībām</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Padariet savu ražotni gudrāku ar AI</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu ražošanas procesus un parādīsim, kur AI var dot vislielāko
                  efektivitātes pieaugumu un izmaksu samazinājumu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Factory className="h-4 w-4 mr-2" />
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

export default NozareRazosana;
