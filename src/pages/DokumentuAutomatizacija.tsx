import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText, Zap, Clock, Shield, ArrowRight, CheckCircle, BarChart3, Plug, ScanLine, Mail } from 'lucide-react';

const faqs = [
  {
    question: 'Cik ilgi aizņem dokumentu automatizācijas ieviešana?',
    answer: 'Pamata rēķinu digitalizācijas risinājums ir gatavs 2-3 nedēļās. Pilna dokumentu apstrādes sistēma ar vairāku dokumentu tipu atpazīšanu, integrācijām un pielāgotu loģiku — 4-8 nedēļas. Sākam ar jūsu esošo procesu auditu un izveidojam detalizētu ieviešanas plānu.',
  },
  {
    question: 'Vai sistēma spēj apstrādāt dokumentus latviešu valodā?',
    answer: 'Jā, mūsu AI risinājumi pilnībā atbalsta latviešu valodu. Sistēma atpazīst un apstrādā dokumentus latviešu, angļu un krievu valodā, ieskaitot jaukta satura dokumentus. OCR tehnoloģija ir optimizēta latviešu alfabēta specifiskajiem burtiem.',
  },
  {
    question: 'Cik droša ir dokumentu apstrāde?',
    answer: 'Mēs ievērojam stingrus datu drošības standartus. Visi dokumenti tiek apstrādāti šifrētā vidē, dati tiek glabāti ES teritorijā atbilstoši GDPR prasībām. Piekļuves kontrole nodrošina, ka tikai autorizēti lietotāji var skatīt sensitīvus dokumentus.',
  },
  {
    question: 'Vai dokumentu automatizācija integrējas ar mūsu grāmatvedības programmu?',
    answer: 'Jā, mūsu risinājumi integrējas ar populārākajām Latvijā lietotajām sistēmām — 1C, Horizon, Tildes Jumis, kā arī ar starptautiskām platformām. Integrācija nodrošina automātisku datu pārnesi bez manuālas ievades.',
  },
  {
    question: 'Kāda ir minimālā dokumentu apjoma prasība?',
    answer: 'Nav minimālā apjoma prasību. Mūsu risinājumi ir izdevīgi jau sākot no 50 dokumentiem mēnesī. Sistēma ir elastīga un mērogojama — tā aug kopā ar jūsu uzņēmumu bez papildu ieviešanas izmaksām.',
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
  "name": "Dokumentu Automatizācija ar AI",
  "description": "Automātiska dokumentu apstrāde, rēķinu digitalizācija, līgumu analīze un datu izvilkšana ar AI. Ietaupiet līdz 80% laika dokumentu apstrādē.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Document Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Dokumentu Automatizācija", "item": "https://automatizacijas.lv/dokumentu-automatizacija" }
  ]
};

const DokumentuAutomatizacija = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Dokumentu Automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="Automātiska dokumentu apstrāde, rēķinu digitalizācija, līgumu analīze un datu izvilkšana ar AI. Ietaupiet līdz 80% laika. No €199/mēn." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/dokumentu-automatizacija" />
        <meta property="og:title" content="Dokumentu Automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Automātiska dokumentu apstrāde, rēķinu digitalizācija, līgumu analīze un datu izvilkšana ar AI. Ietaupiet līdz 80% laika." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dokumentu Automatizācija ar AI" />
        <meta name="twitter:description" content="Automātiska dokumentu apstrāde, rēķinu digitalizācija un datu izvilkšana ar AI." />
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
            <span className="text-foreground">Dokumentu Automatizācija</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Dokumentu Automatizācija Uzņēmumiem Latvijā
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Pārvēršam jūsu dokumentu apstrādi no laikietilpīga manuāla procesa par <strong className="text-foreground">pilnībā automatizētu sistēmu</strong>.
                Mūsu AI risinājumi apstrādā rēķinus, līgumus, grāmatvedības dokumentus un e-pastus — izvilkjot datus, klasificējot informāciju
                un integrējot to jūsu esošajās sistēmās bez cilvēka iejaukšanās.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: 'Līdz 80% laika ietaupījums' },
                  { icon: CheckCircle, label: '99.5% precizitāte' },
                  { icon: Zap, label: 'No €199/mēn' },
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

              {/* Kāpēc automatizēt */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc automatizēt dokumentu apstrādi?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas uzņēmumi katru dienu saskaras ar simtiem dokumentu — rēķini no piegādātājiem, līgumi ar klientiem, grāmatvedības atskaites,
                  e-pasti ar pielikumiem. Manuāla šo dokumentu apstrāde ir ne tikai lēna, bet arī dārga un kļūdām pakļauta. Darbinieki pavada stundas,
                  pārrakstot datus no vienas sistēmas uz citu, meklējot pareizos dokumentus un labojot ievades kļūdas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pētījumi rāda, ka darbinieki vidēji pavada 20-30% sava darba laika, meklējot un apstrādājot dokumentus. Tas nozīmē, ka
                  uzņēmums ar 10 biroja darbiniekiem zaudē aptuveni 2-3 pilnas darba vietas tikai dokumentu apstrādei. AI dokumentu automatizācija
                  šo laiku samazina par 80%, ļaujot darbiniekiem fokusēties uz vērtīgākiem uzdevumiem.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Manuāla datu ievade aizņem līdz 30% darbinieku laika',
                    'Cilvēciskās kļūdas datu ievadē sasniedz 1-5% — AI samazina līdz 0.5%',
                    'Dokumentu meklēšana un šķirošana kavē biznesa procesus',
                    'Lēna rēķinu apstrāde rada kavējumus maksājumos un attiecībās ar partneriem',
                    'Neatbilstīga dokumentu glabāšana apdraud GDPR prasību ievērošanu',
                    'Mērogošana ar manuāliem procesiem prasa jaunus darbiniekus',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ko mēs automatizējam */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ko mēs automatizējam</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi aptver plašu dokumentu apstrādes spektru — no vienkāršas rēķinu digitalizācijas līdz sarežģītai
                  līgumu analīzei un automātiskai datu maršrutēšanai. Katrs risinājums tiek pielāgots jūsu uzņēmuma specifiskajām vajadzībām.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: ScanLine,
                      title: 'Rēķinu apstrāde un digitalizācija',
                      desc: 'Automātiska rēķinu nolasīšana no PDF, e-pasta pielikumiem vai skenētiem dokumentiem. AI izvilks piegādātāja nosaukumu, reģistrācijas numuru, rēķina summu, PVN, pozīcijas un maksājuma termiņu. Dati automātiski nonāk jūsu grāmatvedības sistēmā.',
                    },
                    {
                      icon: FileText,
                      title: 'Līgumu analīze un datu izvilkšana',
                      desc: 'AI analizē līgumu saturu, identificē galvenos noteikumus, termiņus, summas un pušu informāciju. Sistēma brīdina par termiņu tuvošanos un palīdz uzturēt līgumu reģistru ar automātisku klasifikāciju.',
                    },
                    {
                      icon: BarChart3,
                      title: 'Grāmatvedības dokumentu automatizācija',
                      desc: 'Automātiska dokumentu sagatavošana, klasifikācija un grāmatošana. Sistēma atpazīst dokumentu tipus, piešķir pareizos kontus un sagatavo ierakstus grāmatvedības programmā. Integrācija ar 1C, Horizon un Tildes Jumis.',
                    },
                    {
                      icon: Mail,
                      title: 'E-pastu klasifikācija un maršrutēšana',
                      desc: 'AI automātiski analizē ienākošos e-pastus, klasificē tos pēc satura un steidzamības, izvelk pielikumus un novirza pie atbildīgajiem darbiniekiem. Pieprasījumi, sūdzības un rēķini tiek apstrādāti automātiski.',
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
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Atskaišu ģenerēšana</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automātiska atskaišu sagatavošana no dažādiem datu avotiem. Sistēma apkopo informāciju no dokumentiem,
                    e-pastiem un datubāzēm, ģenerējot strukturētas atskaites vadības lēmumu pieņemšanai. Periodiskie pārskati
                    tiek izveidoti un nosūtīti automātiski — ikmēneša finanšu kopsavilkumi, piegādātāju analīze un izdevumu atskaites.
                  </p>
                </div>
              </section>

              {/* Kā tas strādā */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā tas strādā</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu dokumentu automatizācijas process ir vienkāršs un caurspīdīgs. Četros soļos jūsu dokumentu plūsma kļūst
                  pilnībā automatizēta, samazinot manuālo darbu līdz minimumam.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Dokumentu uztveršana',
                      desc: 'Sistēma automātiski uztver dokumentus no visiem kanāliem — e-pasta pielikumi, augšupielādēti faili, skenēti dokumenti, API integrācijas. Neatkarīgi no formāta (PDF, Word, Excel, attēli), AI tos atpazīst un sagatavo apstrādei.',
                    },
                    {
                      step: '2',
                      title: 'AI analīze un datu izvilkšana',
                      desc: 'Mākslīgais intelekts analizē katra dokumenta saturu, izmantojot OCR un dabīgās valodas apstrādi. Sistēma atpazīst dokumenta tipu, izvelk strukturētus datus — nosaukumus, summas, datumus, adreses — un pārbauda to pareizību.',
                    },
                    {
                      step: '3',
                      title: 'Validācija un klasifikācija',
                      desc: 'Izvilktie dati tiek automātiski validēti pret biznesa noteikumiem — vai summas sakrīt, vai piegādātājs ir reģistrēts, vai termiņi ir korekti. Dokumenti tiek klasificēti un novirzīti atbilstošajā darba plūsmā.',
                    },
                    {
                      step: '4',
                      title: 'Integrācija un arhivēšana',
                      desc: 'Apstrādātie dati automātiski nonāk jūsu grāmatvedības sistēmā, CRM vai citā mērķa platformā. Oriģinālie dokumenti tiek droši arhivēti ar pilnu meklēšanas iespēju un atbilstību GDPR prasībām.',
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

              {/* Integrācijas */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Integrācijas</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu risinājumi nevainojami integrējas ar Latvijā populārākajām biznesa sistēmām. Datu apmaiņa notiek automātiski,
                  bez manuālas iejaukšanās, nodrošinot nepārtrauktu informācijas plūsmu starp sistēmām.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: '1C Grāmatvedība', desc: 'Automātiska rēķinu un dokumentu importēšana' },
                    { name: 'Horizon', desc: 'Datu sinhronizācija ar ERP sistēmu' },
                    { name: 'Tildes Jumis', desc: 'Grāmatvedības dokumentu automatizācija' },
                    { name: 'E-pasta sistēmas', desc: 'Gmail, Outlook, Exchange integrācija' },
                    { name: 'Google Drive / OneDrive', desc: 'Mākoņa dokumentu automātiska apstrāde' },
                    { name: 'API integrācijas', desc: 'Pielāgotas integrācijas ar jebkuru sistēmu' },
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
              </section>

              {/* Rezultāti skaitļos */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti skaitļos</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu klienti jau pirmajos mēnešos novēro būtiskus uzlabojumus dokumentu apstrādes ātrumā, precizitātē un izmaksās.
                  Šeit ir tipiski rezultāti, ko sasniedz uzņēmumi pēc dokumentu automatizācijas ieviešanas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '80%', label: 'Laika ietaupījums', desc: 'dokumentu apstrādē' },
                    { value: '99.5%', label: 'Datu precizitāte', desc: 'pret manuālajiem 95-98%' },
                    { value: '3x', label: 'Ātrāka apstrāde', desc: 'rēķinu un dokumentu cikls' },
                    { value: '60%', label: 'Izmaksu samazinājums', desc: 'dokumentu pārvaldībā' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Piemēram, uzņēmums ar 500 ienākošajiem rēķiniem mēnesī, kur katrs rēķins manuāli prasa 5 minūtes apstrādei,
                  pavada aptuveni 42 stundas mēnesī tikai rēķinu ievadei. Ar mūsu AI risinājumu šis laiks samazinās līdz 8 stundām,
                  atbrīvojot 34 darba stundas mēnesī produktīvākam darbam. Apskatiet mūsu{' '}
                  <Link to="/pricing" className="text-primary hover:underline">cenu lapā</Link> pieejamos plānus.
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
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Biznesa procesu optimizācija un automatizācija</p>
                  </Link>
                  <Link to="/ai-platformu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Platformu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Pielāgotas AI platformas jūsu uzņēmumam</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Automatizējiet dokumentu apstrādi jau šodien</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu dokumentu plūsmu un parādīsim, cik daudz laika un resursu varat ietaupīt ar AI automatizāciju.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <FileText className="h-4 w-4 mr-2" />
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

export default DokumentuAutomatizacija;
