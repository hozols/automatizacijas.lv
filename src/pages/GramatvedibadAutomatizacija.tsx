import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Calculator, Zap, Clock, Users, FileText, ArrowRight, CheckCircle, Shield, BarChart3 } from 'lucide-react';

const faqs = [
  {
    question: 'Cik droša ir automatizētā grāmatvedības sistēma?',
    answer: 'Mūsu risinājumi izmanto bankas līmeņa šifrēšanu (AES-256) un atbilst GDPR prasībām. Visi dati tiek glabāti ES serveros, un piekļuve ir ierobežota ar daudzlīmeņu autentifikāciju. Regulāri veicam drošības auditus un sistēmas atjauninājumus, lai nodrošinātu maksimālu datu aizsardzību.',
  },
  {
    question: 'Vai automatizācija aizstās grāmatvedi?',
    answer: 'Nē — automatizācija neaizstāj grāmatvedi, bet gan atbrīvo viņu no rutīnas darbiem. AI pārņem manuālo datu ievadi, saskaņošanu un atskaišu ģenerēšanu, bet grāmatvedis var koncentrēties uz stratēģiskiem lēmumiem, konsultēšanu un sarežģītu situāciju risināšanu. Rezultātā grāmatvedis kļūst produktīvāks un var apkalpot vairāk klientu.',
  },
  {
    question: 'Cik ilgi aizņem ieviešana?',
    answer: 'Pamata automatizācija (rēķinu apstrāde, bankas izrakstu saskaņošana) ir ieviešama 2-4 nedēļās. Pilna grāmatvedības automatizācija ar VID EDS integrāciju, nodokļu aprēķiniem un gada pārskatu sagatavošanu — 6-10 nedēļas. Ieviešana notiek pakāpeniski, lai netraucētu ikdienas darbu.',
  },
  {
    question: 'Vai sistēma ir saderīga ar VID EDS?',
    answer: 'Jā, mūsu risinājums pilnībā integrējas ar VID Elektroniskās deklarēšanas sistēmu. Automātiski ģenerējam un iesniedzam PVN deklarācijas, gada pārskatus un citus nepieciešamos dokumentus. Sistēma vienmēr atbilst aktuālajām VID prasībām un tiek regulāri atjaunināta.',
  },
  {
    question: 'Kādas grāmatvedības sistēmas tiek atbalstītas?',
    answer: 'Mūsu risinājums integrējas ar visām populārākajām Latvijas grāmatvedības sistēmām — 1C, Tildes Jumis, Horizon, Zalktis, kā arī starptautiskajām platformām. Ja jūsu sistēma nav sarakstā, varam izstrādāt pielāgotu integrāciju pēc individuāla projekta.',
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
  "name": "Grāmatvedības Automatizācija ar AI",
  "description": "AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini. Samaziniet manuālo darbu par 70%.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Accounting Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Grāmatvedības Automatizācija", "item": "https://automatizacijas.lv/gramatvedibas-automatizacija" }
  ]
};

const GramatvedibadAutomatizacija = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Grāmatvedības Automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini. Samaziniet manuālo darbu par 70%." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <meta property="og:title" content="Grāmatvedības Automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grāmatvedības Automatizācija ar AI" />
        <meta name="twitter:description" content="AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini." />
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
            <span className="text-foreground">Grāmatvedības Automatizācija</span>
          </nav>

          {/* Hero */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Grāmatvedības Automatizācija ar Mākslīgo Intelektu
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Pārveidojiet savu grāmatvedības praksi ar AI tehnoloģijām. Automatizējiet <strong className="text-foreground">rēķinu apstrādi, PVN deklarācijas, bankas izrakstu saskaņošanu</strong> un
                desmitiem citu ikdienas uzdevumu. Mūsu risinājumi ir pilnībā pielāgoti Latvijas normatīvajiem aktiem un integrējas ar VID EDS sistēmu,
                ļaujot jūsu grāmatvedības komandai koncentrēties uz to, kas patiešām svarīgs — stratēģisku finanšu konsultēšanu un biznesa izaugsmes atbalstu.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Zap, label: '70% mazāk manuālā darba' },
                  { icon: Shield, label: '99.9% precizitāte' },
                  { icon: Calculator, label: 'No €249/mēn' },
                  { icon: FileText, label: 'VID EDS saderīgs' },
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

              {/* Section 1: Kāpēc automatizēt */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc automatizēt grāmatvedību?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas grāmatveži ikdienā saskaras ar milzīgu manuālā darba apjomu. VID atskaišu sagatavošana, PVN deklarāciju aizpildīšana,
                  gada pārskatu kompilēšana, bankas izrakstu pārbaude un datu ievade dažādās sistēmās — tas viss prasa stundām ilgu, monotonu darbu,
                  kurā vienmēr pastāv cilvēciskas kļūdas risks. Katru mēnesi grāmatvedis pavada aptuveni 15-25 stundas tikai manuālai datu ievadei un
                  pārbaudei — laiku, ko varētu veltīt stratēģiskam darbam.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Situāciju sarežģī arī pastāvīgas izmaiņas Latvijas nodokļu likumdošanā. Jauni MK noteikumi, VID prasību izmaiņas, PVN likmju
                  korekcijas — grāmatvedim jāseko līdzi visam un manuāli jāatjaunina aprēķini. Ar AI automatizāciju šīs izmaiņas tiek ieviestas
                  automātiski, samazinot kļūdu risku un nodrošinot pastāvīgu atbilstību normatīvajiem aktiem.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Grāmatvedības biroji ar 3-10 darbiniekiem bieži vien nevar atļauties pieņemt jaunus klientus, jo esošais darba apjoms jau ir
                  maksimāls. Automatizācija atrisina šo problēmu — tā ļauj apkalpot par 40-60% vairāk klientu ar tādu pašu komandas lielumu,
                  vienlaikus uzlabojot pakalpojuma kvalitāti un samazinot kļūdu skaitu.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'VID atskaišu sagatavošana aizņem stundas manuālā darba katru mēnesi',
                    'PVN deklarāciju aizpildīšanā bieži rodas cilvēciskas kļūdas',
                    'Gada pārskatu kompilēšana prasa nedēļām ilgu intensīvu darbu',
                    'Manuāla datu ievade no rēķiniem un bankas izrakstiem ir laikietilpīga',
                    'Debitoru un kreditoru atlikumu saskaņošana prasa pastāvīgu uzmanību',
                    'Algu aprēķini ar mainīgiem nodokļu parametriem rada kļūdu risku',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2: Procesi, ko AI automatizē */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Grāmatvedības procesi, ko AI automatizē</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi aptver visus galvenos grāmatvedības procesus — no ikdienas rēķinu apstrādes līdz sarežģītiem nodokļu
                  aprēķiniem un gada pārskatiem. Katrs modulis darbojas gan patstāvīgi, gan kā daļa no integrētas sistēmas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Rēķinu apstrāde un grāmatošana',
                      desc: 'AI automātiski nolasa ienākošos un izejošos rēķinus (arī skenētus PDF un fotoattēlus), klasificē tos pēc izmaksu kategorijām, piešķir pareizos grāmatvedības kontus un izveido grāmatojumus. Sistēma atpazīst piegādātājus, summas, PVN likmes un datumu — precizitāte pārsniedz 99%. Vidēji viens rēķins tiek apstrādāts 3 sekundēs, salīdzinot ar 3-5 minūtēm manuāli.',
                    },
                    {
                      title: 'Bankas izrakstu saskaņošana',
                      desc: 'Automātiska bankas darījumu saskaņošana ar grāmatvedības ierakstiem. AI analizē darījumu aprakstus, summas un datumu sakritības, lai atrastu atbilstošos rēķinus un maksājumus. Neatbilstības tiek automātiski atzīmētas pārskatīšanai. Process, kas agrāk prasīja stundas, tagad notiek dažās minūtēs.',
                    },
                    {
                      title: 'PVN un nodokļu aprēķini',
                      desc: 'Automātiski aprēķina priekšnodokli un maksājamo PVN, ģenerē PVN deklarāciju atbilstoši aktuālajām VID prasībām un sagatavo to iesniegšanai EDS sistēmā. Sistēma ņem vērā visas PVN likmes (21%, 12%, 5%, 0%), reverso PVN un darījumus ar ES partneriem.',
                    },
                    {
                      title: 'Gada pārskatu sagatavošana',
                      desc: 'AI apkopo gada datus, ģenerē bilanci, peļņas vai zaudējumu aprēķinu un naudas plūsmas pārskatu. Automātiski pārbauda datu konsekvenci starp atskaišu sadaļām un piedāvā korekcijas. Gada pārskata sagatavošanas laiks samazinās no nedēļām līdz dienām.',
                    },
                    {
                      title: 'Debitoru un kreditoru pārvaldība',
                      desc: 'Automātiska debitoru un kreditoru atlikumu uzskaite, atgādinājumu sūtīšana par kavētiem maksājumiem, naudas plūsmas prognozēšana un risku analīze. AI identificē klientus ar paaugstinātu kavējuma risku un iesaka preventīvas darbības, piemēram, avansa pieprasīšanu.',
                    },
                    {
                      title: 'Algu aprēķins un HR dokumenti',
                      desc: 'Pilns algu aprēķina cikls — no darba laika uzskaites līdz algu lapām un nodokļu pārskatiem. Automātiski aprēķina IIN, VSAOI, slimības naudas un atvaļinājuma uzkrājumus atbilstoši aktuālajiem Latvijas likumdošanas parametriem. Ģenerē darba līgumus, rīkojumus un citus HR dokumentus.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Integrācija ar sistēmām */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Integrācija ar Latvijas grāmatvedības sistēmām</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi ir izstrādāti, lai netraucēti integrētos ar populārākajām Latvijas grāmatvedības programmām un valsts sistēmām.
                  Jums nav jāmaina sava esošā grāmatvedības sistēma — mēs pielāgojam automatizāciju jūsu pašreizējai infrastruktūrai. Integrācija
                  nodrošina divvirzienu datu apmaiņu, kas nozīmē, ka AI sistēma var gan lasīt, gan rakstīt datus jūsu grāmatvedības programmā.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      title: '1C Grāmatvedība',
                      desc: 'Pilna integrācija ar 1C platformu — automātiska dokumentu importēšana, grāmatojumu veidošana un atskaišu ģenerēšana tieši 1C vidē.',
                    },
                    {
                      title: 'Tildes Jumis',
                      desc: 'Savienojums ar Tildes Jumis grāmatvedības un noliktavas moduli. Automātiska rēķinu un maksājumu datu sinhronizācija.',
                    },
                    {
                      title: 'Horizon',
                      desc: 'Integrācija ar Horizon grāmatvedības sistēmu, ieskaitot algu moduli, pamatlīdzekļu uzskaiti un finanšu atskaites.',
                    },
                    {
                      title: 'Zalktis',
                      desc: 'Savienojums ar Zalktis grāmatvedības programmu — automātiska datu importēšana un eksportēšana standartizētos formātos.',
                    },
                    {
                      title: 'VID EDS sistēma',
                      desc: 'Tieša integrācija ar VID Elektroniskās deklarēšanas sistēmu — automātiska PVN deklarāciju, gada pārskatu un citu atskaišu iesniegšana.',
                    },
                    {
                      title: 'Banku API',
                      desc: 'Automātiska izrakstu ielāde no Latvijas bankām (Swedbank, SEB, Citadele, Luminor) caur PSD2 atvērtās bankas API.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-lg border border-border bg-card/60">
                      <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ja jūs izmantojat citu grāmatvedības sistēmu, kas nav sarakstā, sazinieties ar mums — mēs varam izstrādāt pielāgotu integrāciju
                  jūsu specifiskajām vajadzībām. Mūsu komandai ir pieredze ar desmitiem dažādu grāmatvedības platformu un ERP sistēmu.
                </p>
              </section>

              {/* Section 4: Ieviešanas process */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā norit ieviešana</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ieviešanas process ir strukturēts četros posmos, lai nodrošinātu netraucētu pāreju un minimālu ietekmi uz jūsu ikdienas darbu.
                  Katru posmu mēs realizējam ciešā sadarbībā ar jūsu grāmatvedības komandu.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Audits un vajadzību analīze',
                      desc: 'Detalizēti izanalizējam jūsu pašreizējos grāmatvedības procesus, identificējam laikietilpīgākos manuālos uzdevumus un novērtējam automatizācijas potenciālu. Pārskatām izmantotās sistēmas, dokumentu apjomus un specifiskās prasības. Rezultātā izveidojam personalizētu automatizācijas ceļa karti ar skaidriem termiņiem un sagaidāmajiem ieguvumiem.',
                    },
                    {
                      step: '2',
                      title: 'Sistēmas konfigurēšana un integrācija',
                      desc: 'Konfigurējam AI sistēmu atbilstoši jūsu kontu plānam, grāmatvedības politikām un specifiskajām prasībām. Ieviešam integrācijas ar jūsu grāmatvedības programmu, bankas kontiem un VID EDS. Apmācām AI modeli uz jūsu vēsturiskajiem datiem, lai tas iemācītos jūsu specifiskos grāmatošanas paradumus un klasifikācijas.',
                    },
                    {
                      step: '3',
                      title: 'Testēšana un paralēlā darbība',
                      desc: 'Sistēma darbojas paralēli jūsu esošajiem procesiem 2-4 nedēļas. Salīdzinām AI rezultātus ar manuāli sagatavotajiem datiem, lai pārliecinātos par precizitāti. Jūsu komanda iepazīstas ar jauno sistēmu un sniedz atgriezenisko saiti, ko izmantojam korekcijām. Šajā posmā visi AI apstrādātie dokumenti tiek pārbaudīti manuāli.',
                    },
                    {
                      step: '4',
                      title: 'Palaišana un pastāvīgs atbalsts',
                      desc: 'Pēc veiksmīgas testēšanas sistēma tiek pilnībā aktivizēta. Nodrošinām pastāvīgu tehnisko atbalstu, regulārus sistēmas atjauninājumus un veiktspējas monitoringu. Katru mēnesi saņemat detalizētu atskaiti par automatizācijas rezultātiem — apstrādāto dokumentu skaitu, ietaupīto laiku un precizitātes rādītājiem.',
                    },
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

              {/* Section 5: Case study */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Piemērs: Kā grāmatvedības birojs ietaupīja 25 stundas nedēļā</h2>
                <div className="p-6 rounded-lg border border-border bg-card/60 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Izaicinājums</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Grāmatvedības birojs ar 6 darbiniekiem apkalpoja 85 klientus — mazos un vidējos uzņēmumus Rīgā un Pierīgā. Katru mēnesi
                      komanda apstrādāja aptuveni 3200 rēķinus, saskaņoja 12 bankas kontus un sagatavoja PVN deklarācijas visiem klientiem.
                      Manuālais darbs aizņēma tik daudz laika, ka birojs bija spiests atteikt jaunus klientus, un darbiniekiem regulāri nācās
                      strādāt virsstundas, īpaši gada pārskata sezonā.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Risinājums</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ieviesām trīs automatizācijas moduļus: AI rēķinu apstrādi ar automātisku grāmatošanu, bankas izrakstu saskaņošanu un
                      PVN deklarāciju automātisku sagatavošanu. Sistēmu integrējām ar biroja esošo 1C grāmatvedības programmu un VID EDS.
                      Apmācījām AI modeli uz biroja vēsturiskajiem datiem — 18 mēnešu grāmatojumiem un klasifikācijām.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rezultāti</h3>
                    <div className="space-y-2">
                      {[
                        'Rēķinu apstrādes laiks samazinājās par 85% — no 4 minūtēm uz 35 sekundēm vidēji',
                        'Bankas saskaņošana tagad aizņem 15 minūtes mēnesī (iepriekš — 8 stundas)',
                        'PVN deklarāciju sagatavošana pilnībā automatizēta — grāmatvedis tikai pārskata un apstiprina',
                        'Kopējais ietaupītais laiks: 25 stundas nedēļā (100+ stundas mēnesī)',
                        'Birojs pieņēma 30 jaunus klientus bez papildu darbinieku pieņemšanas',
                        'Kļūdu skaits samazinājās par 94% — no vidēji 12 kļūdām mēnesī uz mazāk nekā 1',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Investīcijas atdeve</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Automatizācijas mēneša maksa bija €489. Ietaupītais darbinieku laiks (100+ stundas) vērtībā pārsniedza €2500 mēnesī.
                      Papildu ieņēmumi no 30 jaunajiem klientiem — aptuveni €4500 mēnesī. Kopējā investīcijas atdeve: vairāk nekā 14x
                      pirmajā gadā. Sistēma sevi atmaksāja jau pirmajā mēnesī.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: FAQ */}
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
                  <Link to="/dokumentu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Dokumentu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automatizējiet dokumentu apstrādi ar AI</p>
                  </Link>
                  <Link to="/nozares/gramatvediba-un-finanses" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Grāmatvedība un Finanses</h3>
                    <p className="text-xs text-muted-foreground">AI risinājumi finanšu nozarei</p>
                  </Link>
                  <Link to="/datu-analize" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Datu Analīze</h3>
                    <p className="text-xs text-muted-foreground">Inteliģenta datu analīze un vizualizācija</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Automatizējiet savu grāmatvedību jau šodien</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā novērtēsim jūsu grāmatvedības procesus un parādīsim, kā AI var ietaupīt līdz 70% jūsu komandas laika.
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

export default GramatvedibadAutomatizacija;
