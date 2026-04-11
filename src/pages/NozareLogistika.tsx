import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Truck, MapPin, Package, BarChart3, ArrowRight, CheckCircle, Clock, Zap, Shield, FileText, Warehouse } from 'lucide-react';

const faqs = [
  {
    question: 'Cik ātri AI maršrutu optimizācija sāk dot rezultātus?',
    answer: 'Pirmie rezultāti ir redzami jau pirmajā nedēļā pēc ieviešanas. AI sistēma analizē jūsu vēsturiskos maršrutu datus, piegādes adreses un transportlīdzekļu parametrus, lai izveidotu optimālus maršrutus. Parasti degvielas ietaupījums ir 10-20% jau pirmajā mēnesī. Sistēma turpina mācīties un uzlabojas ar katru dienu, ņemot vērā satiksmes modeļus, sezonālās izmaiņas un klientu specifiskās prasības.',
  },
  {
    question: 'Vai AI var integrēties ar mūsu esošo TMS sistēmu?',
    answer: 'Jā, mūsu AI risinājumi ir izstrādāti ar atvērtu API arhitektūru un integrējas ar populārākajām TMS (Transport Management System) platformām, kā arī ERP sistēmām. Mēs nodrošinām integrāciju ar SAP, Oracle, 1C un citām Latvijā izplatītām sistēmām. Integrācijas process parasti aizņem 2-4 nedēļas, un datu apmaiņa notiek reāllaikā.',
  },
  {
    question: 'Kā AI palīdz ar starptautisko loģistiku un muitas dokumentiem?',
    answer: 'AI automatizē muitas deklarāciju sagatavošanu, pārbauda preču kodus (HS kodus), aprēķina muitas nodokļus un nodrošina atbilstību ES un trešo valstu regulējumam. Sistēma automātiski aizpilda CMR pavadzīmes, TIR karnetes un citus starptautiskās pārvadāšanas dokumentus. Tas samazina kļūdu skaitu par 90% un dokumentu sagatavošanas laiku par 80%.',
  },
  {
    question: 'Vai AI pieprasījuma prognozēšana darbojas sezonālā biznesā?',
    answer: 'Pilnīgi noteikti. AI ir īpaši spēcīgs tieši sezonālu svārstību prognozēšanā. Sistēma analizē vēsturiskos datus vairāku gadu griezumā, identificē sezonālās tendences, svētku periodu ietekmi un pat laika apstākļu korelācijas ar pieprasījumu. Latvijas loģistikas uzņēmumiem tas ir īpaši svarīgi, ņemot vērā izteiktās sezonālās svārstības transporta nozarē.',
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
  "name": "AI Automatizācija Loģistikai",
  "description": "AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, automatizēta dokumentācija un noliktavu pārvaldība.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Logistics AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Loģistika", "item": "https://automatizacijas.lv/nozares/logistika" }
  ]
};

const NozareLogistika = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Loģistikai | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, automatizēta dokumentācija un noliktavu pārvaldība." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/logistika" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/logistika" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/logistika" />
        <meta property="og:title" content="AI Automatizācija Loģistikai | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, dokumentācija." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Loģistikai" />
        <meta name="twitter:description" content="AI risinājumi loģistikas uzņēmumiem Latvijā." />
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
            <span className="text-foreground">Loģistika</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Risinājumi Loģistikas Uzņēmumiem
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Loģistikas nozare Latvijā ir stratēģiski svarīga, taču saskaras ar pieaugošām izmaksām, sarežģītākiem piegādes tīkliem
                un klientu gaidām pēc ātrākas piegādes. AI tehnoloģijas ļauj <strong className="text-foreground">optimizēt maršrutus,
                automatizēt dokumentāciju, prognozēt pieprasījumu un pārvaldīt noliktavas</strong> — padarot jūsu loģistikas
                operācijas ātrākas, lētākas un precīzākas.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: MapPin, label: '-20% degvielas izmaksas' },
                  { icon: Clock, label: '80% ātrāka dokumentācija' },
                  { icon: Package, label: '99.5% piegādes precizitāte' },
                  { icon: Shield, label: 'Pilna izsekojamība' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Loģistikas izaicinājumi Latvijā</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvija atrodas stratēģiski izdevīgā ģeogrāfiskā pozīcijā starp Rietumeiropu un Austrumeiropu, padarot loģistiku
                  par vienu no valsts ekonomikas stūrakmeņiem. Tomēr nozare saskaras ar nopietniem izaicinājumiem — degvielas cenu
                  svārstības, autovadītāju trūkums, pieaugošas klientu gaidas pēc ātrākas un precīzākas piegādes, kā arī
                  sarežģītāki starptautiskās tirdzniecības regulējumi pēc Brexit un ģeopolitiskām pārmaiņām.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Daudzi Latvijas loģistikas uzņēmumi joprojām izmanto manuālus procesus maršrutu plānošanā, dokumentu sagatavošanā
                  un krājumu pārvaldībā. Dispečeri plāno maršrutus, balstoties uz pieredzi, nevis datiem. CMR pavadzīmes un
                  muitas dokumenti tiek aizpildīti manuāli ar augstu kļūdu risku. Noliktavās preču izvietojums nav optimizēts,
                  un pieprasījuma prognozes balstās uz intuīciju. AI tehnoloģijas piedāvā konkrētus risinājumus katrai no šīm problēmām.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Neoptimāli maršruti rada lieku degvielas patēriņu un kavē piegādes',
                    'Manuāla CMR, pavadzīmju un muitas dokumentu sagatavošana ir lēna un kļūdaina',
                    'Sūtījumu izsekošana prasa pastāvīgu manuālu uzraudzību un komunikāciju',
                    'Noliktavu pārvaldība bez datu analīzes rada neefektīvu telpu izmantošanu',
                    'Pieprasījuma svārstības pārsteidz un rada vai nu resursu trūkumu, vai dīkstāvi',
                    'Autovadītāju darba laika uzskaite un atbilstība regulējumam prasa daudz administratīvā darba',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Maršrutu optimizācija */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Maršrutu optimizācija ar AI</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI maršrutu optimizācija ir viens no visspēcīgākajiem rīkiem loģistikas uzņēmumiem. Sistēma analizē simtiem
                  mainīgo lielumu — piegādes adreses, laika logus, transportlīdzekļu kapacitāti, ceļu stāvokli, satiksmes
                  intensitāti un pat laika apstākļu prognozes — lai izveidotu optimālu maršrutu katram transportlīdzeklim.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Atšķirībā no tradicionālās plānošanas, kur dispečers izveido maršrutu, balstoties uz pieredzi, AI spēj
                  vienlaicīgi optimizēt simtus maršrutu ar desmitiem ierobežojumu. Sistēma ņem vērā katra autovadītāja darba
                  laika ierobežojumus, transportlīdzekļa kravas kapacitāti un degvielas efektivitāti. Rezultāts — par 15-25%
                  mazāks nobrauktais attālums, ātrākas piegādes un apmierinātāki klienti.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Reāllaika pielāgošanās ir vēl viens būtisks ieguvums. Ja ceļā notiek negadījums vai klients maina piegādes
                  laiku, AI sistēma sekunžu laikā pārrēķina visus ietekmētos maršrutus un piedāvā optimālu alternatīvu.
                  Dispečers saņem jauno plānu automātiski, un autovadītāja navigācija tiek atjaunināta reāllaikā.
                </p>
              </section>

              {/* Sūtījumu izsekošana */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Sūtījumu izsekošana</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Moderna sūtījumu izsekošana ar AI pārsniedz vienkāršu GPS pozīcijas noteikšanu. AI sistēma apvieno datus no
                  GPS sensoriem, temperatūras un mitruma sensoriem, kravnesības datiem un autovadītāja statusa informācijas,
                  lai sniegtu pilnīgu priekšstatu par katru sūtījumu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sistēma proaktīvi brīdina par iespējamām kavēšanām — ja transportlīdzeklis iestrēgst sastrēgumā vai
                  autovadītājs tuvojas darba laika limitam, AI automātiski informē gan dispečeru, gan klientu par sagaidāmo
                  kavēšanos un piedāvā alternatīvus risinājumus. Klienti var izsekot savus sūtījumus reāllaikā caur
                  pašapkalpošanās portālu, kas samazina zvanu centram par 60%. Automātiski tiek ģenerēti piegādes
                  apstiprinājumi ar fotofiksāciju un parakstu.
                </p>
              </section>

              {/* Dokumentu automatizācija */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Dokumentu automatizācija loģistikā</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Loģistikas dokumentācija — CMR pavadzīmes, muitas deklarācijas, rēķini, piegādes apstiprinājumi — ir viena
                  no laikietilpīgākajām un kļūdainākajām jomām. AI automatizē visu dokumentu ciklu no izveides līdz arhivēšanai.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CMR pavadzīmju automatizācija ir īpaši vērtīga starptautiskiem pārvadātājiem. AI sistēma automātiski aizpilda
                  CMR, balstoties uz pasūtījuma datiem, pārbauda informācijas pareizību un ģenerē dokumentu vairākās valodās.
                  Muitas deklarācijas tiek sagatavotas automātiski, ar pareizu preču klasifikāciju un nodokļu aprēķinu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rēķinu automatizācija samazina maksājumu kavēšanos. AI sistēma automātiski izveido rēķinus pēc piegādes
                  apstiprināšanas, salīdzina tos ar līguma cenām un nosūta klientam. Neatbilstību gadījumā sistēma brīdina
                  grāmatvedību pirms rēķina nosūtīšanas. Uzziniet vairāk par mūsu{' '}
                  <Link to="/dokumentu-automatizacija" className="text-primary hover:underline">dokumentu automatizācijas</Link> risinājumiem.
                </p>
              </section>

              {/* Noliktavu pārvaldība */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Noliktavu pārvaldība</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI noliktavu pārvaldības sistēma optimizē visu noliktavas darbību — no preču izvietojuma līdz komplektēšanas
                  maršrutiem. Sistēma analizē preču aprites ātrumu, izmērus, svaru un savstarpējo saistību, lai noteiktu
                  optimālu vietu katrai precei noliktavā.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Biežāk pieprasītās preces tiek izvietotas tuvāk izdošanas zonai, savukārt preces, kas bieži tiek pasūtītas
                  kopā, tiek novietotas blakus. AI optimizē arī komplektēšanas maršrutus — tā vietā, lai darbinieks ietu
                  pa noliktavu haotiski, sistēma izveido optimālu ceļu, kas minimizē pārvietošanās laiku. Rezultāts —
                  par 30-40% ātrāka pasūtījumu komplektēšana un par 25% efektīvāka noliktavas telpas izmantošana. Skatiet arī
                  mūsu{' '}
                  <Link to="/procesu-automatizacija" className="text-primary hover:underline">procesu automatizācijas</Link> pakalpojumus.
                </p>
              </section>

              {/* Pieprasījuma prognozēšana */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Pieprasījuma prognozēšana</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI pieprasījuma prognozēšana ļauj loģistikas uzņēmumiem sagatavoties nākotnei, nevis tikai reaģēt uz
                  pašreizējo situāciju. Sistēma analizē vēsturiskos pārvadājumu datus, sezonālās tendences, ekonomiskos
                  rādītājus, e-komercijas tendences un pat laika apstākļu prognozes, lai precīzi prognozētu pieprasījumu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Piemēram, sistēma var prognozēt, ka nākamajā mēnesī pieprasījums pēc kravas pārvadājumiem Rīga-Viļņa
                  virzienā pieaugs par 15% sezonālo faktoru dēļ, ļaujot uzņēmumam laicīgi piesaistīt papildu transportu
                  un autovadītājus. Ilgtermiņa prognozes palīdz plānot autoparku — kad iegādāties jaunus transportlīdzekļus
                  un kad nolietotus norakstīt. Precīzas prognozes samazina gan dīkstāves izmaksas, gan virsstundu izdevumus.
                  Apskatiet mūsu{' '}
                  <Link to="/datu-analize" className="text-primary hover:underline">datu analīzes</Link> pakalpojumus detalizētākām prognozēm.
                </p>
              </section>

              {/* Rezultāti */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti loģistikas uzņēmumiem</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Loģistikas uzņēmumi, kas ievieš AI risinājumus, redz ievērojamus uzlabojumus efektivitātē un izmaksu samazinājumā.
                  Šeit ir tipiski rezultāti no mūsu ieviešanas projektiem Latvijā un Baltijā.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '20%', label: 'Mazāk degvielas', desc: 'ar maršrutu optimizāciju' },
                    { value: '80%', label: 'Ātrāka dokumentācija', desc: 'CMR un muitas dokumenti' },
                    { value: '35%', label: 'Ātrāka komplektēšana', desc: 'noliktavu operācijās' },
                    { value: '60%', label: 'Mazāk zvanu', desc: 'ar pašapkalpošanās portālu' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Piemēram, starptautisks pārvadājumu uzņēmums ar 30 transportlīdzekļiem ieviesa AI maršrutu optimizāciju un
                  dokumentu automatizāciju. Pirmajā gadā degvielas izmaksas samazinājās par 18%, dokumentu apstrādes laiks —
                  par 75%, un klientu apmierinātības rādītājs pieauga par 25 punktiem.
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
                  <Link to="/datu-analize" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Datu Analīze</h3>
                    <p className="text-xs text-muted-foreground">Loģistikas datu analīze un prognozēšana</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Optimizējiet savu loģistiku ar AI</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu loģistikas procesus un parādīsim, kur AI var dot vislielāko
                  ietaupījumu un efektivitātes pieaugumu jūsu uzņēmumam.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Truck className="h-4 w-4 mr-2" />
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

export default NozareLogistika;
