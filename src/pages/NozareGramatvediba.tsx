import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Calculator, FileText, BarChart3, Shield, ArrowRight, CheckCircle, Clock, Zap, Plug } from 'lucide-react';

const faqs = [
  {
    question: 'Vai AI var aizstāt grāmatvedi?',
    answer: 'Nē, AI neaizstāj grāmatvedi — tas ir instruments, kas padara grāmatveža darbu efektīvāku. AI pārņem rutīnas uzdevumus kā datu ievadi, rēķinu apstrādi un atskaišu sagatavošanu, ļaujot grāmatvedim fokusēties uz analītiku, konsultēšanu un stratēģiskiem lēmumiem. Grāmatveža profesionālais spriedums un klienta izpratne paliek neaizstājama.',
  },
  {
    question: 'Kā AI nodrošina atbilstību VID prasībām?',
    answer: 'Mūsu AI risinājumi ir konfigurēti atbilstoši Latvijas nodokļu likumdošanai un VID prasībām. Sistēma automātiski pārbauda PVN likmes, reģistrācijas numurus pret VID datubāzi, aprēķina nodokļu summas un sagatavo atskaites VID formātos. Regulāri atjauninām sistēmu, kad mainās likumdošana.',
  },
  {
    question: 'Ar kādām grāmatvedības programmām integrējas AI?',
    answer: 'Mūsu risinājumi integrējas ar visām populārākajām Latvijā lietotajām grāmatvedības programmām — Tildes Jumis, 1C, Horizon, Zalktis. Tāpat atbalstām starptautiskās platformas kā QuickBooks, Xero un SAP. Integrācija notiek caur API vai failu importu/eksportu.',
  },
  {
    question: 'Cik ilgā laikā atmaksājas ieguldījums AI grāmatvedībā?',
    answer: 'Tipiski mūsu klienti redz ROI 3-6 mēnešu laikā. Grāmatvedības birojs ar 5 grāmatvežiem un 200+ klientiem parasti ietaupa 30-40 stundas mēnesī uz rutīnas uzdevumiem. Tas atbilst aptuveni viena darbinieka algai, kamēr AI risinājuma izmaksas ir ievērojami zemākas.',
  },
  {
    question: 'Vai mani klientu dati ir drošībā?',
    answer: 'Pilnīgi. Visi dati tiek šifrēti gan pārsūtīšanas, gan glabāšanas laikā. Dati tiek apstrādāti ES teritorijā atbilstoši GDPR. Piekļuves kontrole nodrošina, ka katrs grāmatvedis redz tikai savu klientu datus. Regulāri drošības auditi un datu dublējumkopijas garantē jūsu informācijas aizsardzību.',
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
  "name": "AI Automatizācija Grāmatvedībai un Finansēm",
  "description": "AI risinājumi grāmatvedības birojiem, finanšu uzņēmumiem un nodaļām. Rēķinu apstrāde, atskaites, nodokļi — viss automatizēts.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Accounting AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Grāmatvedība un Finanses", "item": "https://automatizacijas.lv/nozares/gramatvediba-un-finanses" }
  ]
};

const NozareGramatvediba = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Grāmatvedībai un Finansēm | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi grāmatvedības birojiem, finanšu uzņēmumiem un nodaļām. Rēķinu apstrāde, atskaites, nodokļi — viss automatizēts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <meta property="og:title" content="AI Automatizācija Grāmatvedībai un Finansēm | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi grāmatvedības birojiem, finanšu uzņēmumiem un nodaļām. Rēķinu apstrāde, atskaites, nodokļi — viss automatizēts." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Grāmatvedībai un Finansēm" />
        <meta name="twitter:description" content="AI risinājumi grāmatvedības birojiem un finanšu uzņēmumiem Latvijā." />
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
            <span className="text-foreground">Grāmatvedība un Finanses</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Automatizācija Grāmatvedības un Finanšu Nozarei
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Grāmatvedības nozare Latvijā piedzīvo fundamentālas pārmaiņas. AI tehnoloģijas ļauj automatizēt <strong className="text-foreground">rēķinu apstrādi,
                nodokļu aprēķinus, atskaišu sagatavošanu un klientu dokumentu pārvaldību</strong> — atbrīvojot grāmatvežu laiku
                konsultēšanai un stratēģiskiem uzdevumiem, kas rada vislielāko vērtību.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: 'Līdz 70% laika ietaupījums' },
                  { icon: CheckCircle, label: 'VID atbilstība' },
                  { icon: Zap, label: 'ROI 3-6 mēnešos' },
                  { icon: Shield, label: 'GDPR un datu drošība' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Izaicinājumi grāmatvedībā</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas grāmatvedības nozare saskaras ar pieaugošu spiedienu — klientu skaits aug, likumdošana mainās, un klienti
                  sagaida ātrāku un precīzāku servisu. Tajā pašā laikā grāmatvežu trūkums darba tirgū nozīmē, ka biroji nevar vienkārši
                  pieņemt papildu darbiniekus. Šī situācija rada vairākus būtiskus izaicinājumus.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Grāmatvedības biroji Latvijā apkalpo vidēji 30-80 klientus, un katram klientam ir desmitiem dokumentu mēnesī.
                  Rēķini no piegādātājiem, bankas izraksti, algu aprēķini, PVN deklarācijas — viss prasa manuālu apstrādi. Sezonas
                  laikā — gada pārskatu un deklarāciju periodā — slodze var trīskāršoties, radot milzīgu stresu un kļūdu risku.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Manuāla rēķinu ievade grāmatvedības programmā — vidēji 3-5 minūtes katram rēķinam',
                    'Regulāras izmaiņas VID prasībās un nodokļu likmēs prasa pastāvīgu uzmanību',
                    'Klientu dokumentu šķirošana un klasificēšana aizņem līdz 25% darba laika',
                    'Kļūdas datu ievadē rada neatbilstības deklarācijās un papildu labošanas darbu',
                    'Grāmatvedības speciālistu trūkums darba tirgū apgrūtina biroja mērogošanu',
                    'Sezonālās slodzes (gada pārskati, deklarācijas) rada stresa un virsstundu periodus',
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI risinājumi finanšu sektoram</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi grāmatvedībai aptver visus galvenos procesus — no dokumentu saņemšanas līdz atskaišu
                  iesniegšanai. Katrs risinājums ir pielāgots Latvijas grāmatvedības specifikai un normatīvajām prasībām.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: FileText,
                      title: 'Automātiska rēķinu apstrāde',
                      desc: 'AI nolasa rēķinus no PDF, e-pasta pielikumiem vai skenētiem dokumentiem. Automātiski izvelk piegādātāja datus, summas, PVN likmi, pozīcijas un maksājuma termiņu. Dati nonāk grāmatvedības programmā bez manuālas ievades — samazinot apstrādes laiku no 5 minūtēm uz 30 sekundēm.',
                    },
                    {
                      icon: BarChart3,
                      title: 'Nodokļu aprēķini un deklarācijas',
                      desc: 'AI automātiski aprēķina PVN, IIN un citus nodokļus, balstoties uz grāmatvedības datiem. Sistēma sagatavo deklarāciju melnrakstus VID formātos, pārbauda datu konsekvenci un brīdina par iespējamām kļūdām pirms iesniegšanas.',
                    },
                    {
                      icon: Calculator,
                      title: 'Atskaišu ģenerēšana',
                      desc: 'Automātiska finanšu atskaišu, peļņas vai zaudējumu aprēķinu, bilances un naudas plūsmas pārskatu sagatavošana. AI apkopo datus no dažādiem avotiem un ģenerē strukturētas atskaites vadības lēmumu pieņemšanai un klientu informēšanai.',
                    },
                    {
                      icon: Shield,
                      title: 'Klientu dokumentu pārvaldība',
                      desc: 'Centralizēta klientu dokumentu glabāšana ar automātisku klasifikāciju un meklēšanu. AI sakārto dokumentus pa klientiem, periodiem un veidiem. Termiņu kontrole brīdina par tuvojošos deklarāciju termiņiem un līgumu beigām.',
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
              </section>

              {/* Integrācija ar Latvijas sistēmām */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Integrācija ar Latvijas sistēmām</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi nevainojami integrējas ar Latvijā populārākajām grāmatvedības programmām un valsts sistēmām.
                  Datu apmaiņa notiek automātiski, nodrošinot nepārtrauktu informācijas plūsmu bez manuālas iejaukšanās.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'Tildes Jumis', desc: 'Pilna integrācija ar rēķinu un atskaišu moduli' },
                    { name: '1C Grāmatvedība', desc: 'Automātisks dokumentu imports un eksports' },
                    { name: 'Horizon ERP', desc: 'Datu sinhronizācija ar ERP sistēmu' },
                    { name: 'VID EDS', desc: 'Deklarāciju sagatavošana un datu pārbaude' },
                    { name: 'Banku sistēmas', desc: 'Automātiska izrakstu importēšana un salīdzināšana' },
                    { name: 'E-rēķini', desc: 'E-rēķinu saņemšana un apstrāde Peppol formātā' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-lg border border-border bg-card/60">
                      <div className="flex items-center gap-2 mb-1">
                        <Plug className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Uzziniet vairāk par mūsu{' '}
                  <Link to="/gramatvedibas-automatizacija" className="text-primary hover:underline">grāmatvedības automatizācijas pakalpojumu</Link>{' '}
                  un{' '}
                  <Link to="/dokumentu-automatizacija" className="text-primary hover:underline">dokumentu automatizācijas risinājumiem</Link>.
                </p>
              </section>

              {/* Rezultāti un ROI */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti un ROI</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Grāmatvedības biroji, kas ievieš AI automatizāciju, redz būtiskus uzlabojumus jau pirmajos mēnešos.
                  Šeit ir tipiski rezultāti no mūsu klientu pieredzes Latvijā.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '70%', label: 'Laika ietaupījums', desc: 'rutīnas uzdevumos' },
                    { value: '3-6', label: 'Mēneši līdz ROI', desc: 'investīcijas atgūšanai' },
                    { value: '2x', label: 'Vairāk klientu', desc: 'bez papildu darbiniekiem' },
                    { value: '95%', label: 'Mazāk kļūdu', desc: 'datu ievadē un aprēķinos' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Piemēram, grāmatvedības birojs ar 4 darbiniekiem un 60 klientiem ieviesa mūsu rēķinu automatizācijas risinājumu.
                  Pirms ieviešanas katrs grāmatvedis pavadīja aptuveni 2 stundas dienā, manuāli ievadot rēķinus. Pēc AI ieviešanas
                  šis laiks samazinājās līdz 20 minūtēm — atbrīvojot 7 stundas dienā visam birojam. Tas ļāva uzņemt 15 jaunus klientus
                  bez papildu darbinieku pieņemšanas.
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
                  <Link to="/gramatvedibas-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Grāmatvedības Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Pilna grāmatvedības procesu automatizācija ar AI</p>
                  </Link>
                  <Link to="/dokumentu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Dokumentu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automātiska dokumentu apstrāde un digitalizācija</p>
                  </Link>
                  <Link to="/datu-analize" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Datu Analīze</h3>
                    <p className="text-xs text-muted-foreground">Finanšu datu analīze un prognozēšana ar AI</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Automatizējiet grāmatvedības procesus ar AI</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu grāmatvedības procesus un parādīsim, kā AI var ietaupīt laiku,
                  samazināt kļūdas un ļaut jums apkalpot vairāk klientu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Calculator className="h-4 w-4 mr-2" />
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

export default NozareGramatvediba;
