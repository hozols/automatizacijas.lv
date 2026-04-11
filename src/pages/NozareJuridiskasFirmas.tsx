import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Scale, FileText, Search, Shield, ArrowRight, CheckCircle, Clock, Zap, Users, BookOpen, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: 'Vai AI līgumu analīze ir pietiekami droša konfidenciāliem dokumentiem?',
    answer: 'Pilnīgi noteikti. Mūsu AI sistēmas darbojas uz privātiem serveriem ar augstākā līmeņa šifrēšanu (AES-256). Dati nekad netiek izmantoti modeļu apmācībai un netiek kopīgoti ar trešajām pusēm. Sistēma atbilst GDPR prasībām un advokāta-klienta konfidencialitātes standartiem. Pēc analīzes pabeigšanas dokumentu kopijas var automātiski dzēst. Mēs piedāvājam arī risinājumus, kas pilnībā darbojas jūsu infrastruktūrā bez mākoņa savienojuma.',
  },
  {
    question: 'Cik precīza ir AI juridisko dokumentu analīze?',
    answer: 'Mūsu AI sistēma sasniedz 95-98% precizitāti standarta līgumu klauzulu identificēšanā un riska novērtēšanā. Sistēma ir apmācīta ar Latvijas un ES tiesību aktiem, kā arī tipiskām līgumu formām Baltijas reģionā. Tomēr AI ir paredzēts kā jurista palīgs, nevis aizstājējs — galīgo lēmumu vienmēr pieņem kvalificēts jurists. AI vienkārši padara jurista darbu ātrāku un precīzāku.',
  },
  {
    question: 'Vai AI var strādāt ar dokumentiem latviešu valodā?',
    answer: 'Jā, mūsu sistēmas ir optimizētas darbam ar latviešu valodas juridiskajiem tekstiem. AI saprot Latvijas tiesību terminoloģiju, likumu atsauces un specifiskās juridiskās konstrukcijas. Sistēma darbojas arī ar angļu, krievu un citu ES valodu dokumentiem, kas ir īpaši noderīgi starptautiskiem darījumiem un ES tiesību jautājumiem.',
  },
  {
    question: 'Cik ilgs ir ieviešanas process juridiskajai firmai?',
    answer: 'Pamata līgumu analīzes modulis ir gatavs darbam 2-3 nedēļu laikā. Pilna sistēma ar dokumentu automatizāciju, juridisko izpēti un klientu uzņemšanas čatbotu — 6-8 nedēļas. Ieviešana notiek pakāpeniski, sākot ar vienu moduli un pievienojot citus. Apmācību nodrošinām visiem darbiniekiem, un pirmajā mēnesī ir pieejams pastāvīgs atbalsts.',
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
  "name": "AI Automatizācija Juridiskajām Firmām",
  "description": "AI risinājumi juridiskajām firmām un juristiem — līgumu analīze, dokumentu automatizācija, juridiskā izpēte un klientu uzņemšanas automatizācija.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Legal AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Juridiskās Firmas", "item": "https://automatizacijas.lv/nozares/juridiskas-firmas" }
  ]
};

const NozareJuridiskasFirmas = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Juridiskajām Firmām | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi juridiskajām firmām un juristiem — līgumu analīze, dokumentu automatizācija, juridiskā izpēte un klientu uzņemšanas automatizācija." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/juridiskas-firmas" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/juridiskas-firmas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/juridiskas-firmas" />
        <meta property="og:title" content="AI Automatizācija Juridiskajām Firmām | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi juridiskajām firmām — līgumu analīze, dokumentu automatizācija, juridiskā izpēte." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Juridiskajām Firmām" />
        <meta name="twitter:description" content="AI risinājumi juridiskajām firmām un juristiem Latvijā." />
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
            <span className="text-foreground">Juridiskās Firmas</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Risinājumi Juridiskajām Firmām un Juristiem
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Juridiskā nozare balstās uz precizitāti, rūpīgu analīzi un lielu dokumentu apjomu apstrādi. AI tehnoloģijas
                ļauj juristiem <strong className="text-foreground">automatizēt līgumu analīzi, paātrināt juridisko izpēti,
                standartizēt dokumentu sagatavošanu un uzlabot klientu apkalpošanu</strong> — ļaujot koncentrēties uz
                augstvērtīgu juridisko darbu.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FileText, label: '80% ātrāka līgumu analīze' },
                  { icon: Search, label: '10x ātrāka izpēte' },
                  { icon: Shield, label: 'GDPR atbilstība' },
                  { icon: Clock, label: '60% mazāk rutīnas darba' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Izaicinājumi juridiskajā jomā</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas juridiskā tirgus ir konkurētspējīga, un klientu gaidas nemitīgi aug. Firmas saskaras ar pieaugošu
                  dokumentu apjomu, sarežģītākiem regulatīvajiem prasībām un spiedienu samazināt honorārus, vienlaikus
                  saglabājot augstu pakalpojumu kvalitāti. Darbaspēka trūkums skar arī juridisko nozari — pieredzējušu
                  juristu piesaiste un noturēšana kļūst arvien grūtāka.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Liela daļa juristu darba laika tiek veltīta rutīnas uzdevumiem — līgumu pārskatīšanai, dokumentu
                  sagatavošanai, juridiskās prakses izpētei un administratīvajiem darbiem. Pētījumi rāda, ka līdz pat
                  40% juridiskā darba ir automatizējami ar AI, ļaujot juristiem veltīt vairāk laika stratēģiskai
                  konsultēšanai un sarežģītu juridisko jautājumu risināšanai, kas patiešām prasa cilvēka ekspertīzi.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Līgumu pārskatīšana un analīze aizņem stundas vai pat dienas',
                    'Juridiskās prakses un precedentu izpēte ir laikietilpīga un nepilnīga',
                    'Dokumentu sagatavošana ar copy-paste palielina kļūdu risku',
                    'Klientu uzņemšanas process ir manuāls un nekonsekvents',
                    'Due diligence procesos ir grūti nodrošināt pilnīgu pārklājumu',
                    'Termiņu un uzdevumu pārvaldība prasa pastāvīgu uzmanību',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Līgumu analīze */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Līgumu analīze ar AI</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI līgumu analīze ir revolucionārs rīks juridiskajām firmām. Sistēma sekunžu laikā izanalizē līgumu,
                  identificē galvenās klauzulas, novērtē riskus un salīdzina ar standarta noteikumiem. Tas, kas juristam
                  prasītu vairākas stundas, AI paveic dažās minūtēs ar augstu precizitāti.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sistēma automātiski identificē problemātiskas klauzulas — nestandarta atbildības ierobežojumus,
                  neizdevīgus samaksas noteikumus, trūkstošas konfidencialitātes klauzulas vai neatbilstību regulatīvajām
                  prasībām. Katram identificētam riskam tiek piešķirts riska līmenis un sniegts paskaidrojums, kāpēc
                  klauzula ir potenciāli problemātiska.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Līgumu salīdzināšanas funkcija ļauj automātiski salīdzināt divas līguma versijas, izceļot visas
                  izmaiņas un novērtējot to juridisko nozīmīgumu. Tas ir īpaši noderīgi sarunu procesā, kad līguma
                  projekts tiek mainīts vairākas reizes. AI arī ģenerē līgumu kopsavilkumus vadītājiem, kas nav juristi,
                  saprotamā valodā izskaidrojot galvenos noteikumus un riskus.
                </p>
              </section>

              {/* Dokumentu automatizācija */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Dokumentu automatizācija juristiem</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Juridisko dokumentu sagatavošana ir viena no laikietilpīgākajām aktivitātēm jebkurā firmā. AI dokumentu
                  automatizācija ļauj sekunžu laikā ģenerēt kvalitatīvus juridiskos dokumentus, balstoties uz veidnēm un
                  konkrētā gadījuma datiem.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sistēma darbojas ar pilnu juridisko dokumentu spektru — līgumiem, prasības pieteikumiem, atzinumiem,
                  pilnvarām, protokoliem un korporatīvajiem dokumentiem. Jurists ievada pamatinformāciju, un AI ģenerē
                  gatavu dokumentu, ievērojot firmas stilu, terminoloģiju un formatēšanas standartus.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dokumentu veidņu bibliotēka nepārtraukti papildinās — katrs izveidotais dokuments uzlabo sistēmas izpratni
                  par jūsu firmas specifiku. Versiju kontrole nodrošina pilnu dokumentu vēsturi, un automātiska atsauču
                  pārbaude garantē, ka dokumentos ir norādes uz spēkā esošajiem tiesību aktiem. Uzziniet vairāk par mūsu{' '}
                  <Link to="/dokumentu-automatizacija" className="text-primary hover:underline">dokumentu automatizācijas</Link> risinājumiem.
                </p>
              </section>

              {/* Juridiskā izpēte */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Juridiskā izpēte ar AI</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI juridiskā izpēte pārvērš to, kā juristi meklē un analizē tiesību avotus. Tā vietā, lai manuāli
                  pārlūkotu simtiem dokumentu, jurists uzdod jautājumu dabiskā valodā, un AI sistēma atrod relevantākos
                  tiesību aktus, tiesas spriedumus un juridiskās publikācijas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sistēma saprot juridisko kontekstu un terminoloģiju — tā atšķir, piemēram, "līgumsods" civillietā
                  no "soda" krimināllietā. AI analizē ne tikai teksta sakritību, bet arī juridisko nozīmi, atrodot
                  relevantus precedentus pat tad, ja tie izmanto citu terminoloģiju. Rezultāti tiek sakārtoti pēc
                  relevances, ar kopsavilkumiem un tiešām saitēm uz avotiem. Tas, kas agrāk prasīja dienas, tagad
                  ir pieejams minūtēs. Skatiet arī mūsu{' '}
                  <Link to="/ai-platformu-izstrade" className="text-primary hover:underline">AI platformu izstrādes</Link> pakalpojumus.
                </p>
              </section>

              {/* Due diligence */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Due diligence automatizācija</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Due diligence procesi uzņēmumu iegādes, apvienošanas vai investīciju darījumos prasa analizēt
                  simtiem vai tūkstošiem dokumentu. AI sistēma dramatiski paātrina šo procesu, vienlaikus nodrošinot
                  pilnīgāku pārklājumu nekā manuāla pārskatīšana.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI automātiski klasificē dokumentus pēc kategorijām, izvelk galvenos datus (datumi, summas, puses,
                  saistības), identificē potenciālos riskus un pretrunas starp dokumentiem. Sistēma ģenerē strukturētu
                  due diligence atskaiti ar identificētajiem riskiem, to novērtējumu un rekomendācijām. Īpašu uzmanību
                  pievērš regulatīvās atbilstības jautājumiem, nodokļu saistībām un vides aizsardzības prasībām.
                  Automātiska atskaišu ģenerēšana samazina due diligence procesa ilgumu par 50-70%.
                </p>
              </section>

              {/* Klientu uzņemšana */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Klientu uzņemšanas čatboti</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI čatbots juridiskajai firmai ir pirmais kontaktpunkts ar potenciālajiem klientiem. Čatbots ir pieejams
                  24/7 jūsu mājaslapā, atbild uz vispārīgiem juridiskiem jautājumiem, apkopo informāciju par klienta
                  situāciju un novirza pie atbilstošā jurista.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Klientu uzņemšanas process tiek standartizēts — čatbots uzdod strukturētus jautājumus, lai noskaidrotu
                  lietas būtību, termiņus, iesaistītās puses un dokumentu pieejamību. Visa savāktā informācija tiek
                  automātiski strukturēta un nosūtīta juristam, ietaupot laiku pirmajā konsultācijā. Čatbots arī
                  veic konflikta pārbaudi, salīdzinot jauno klientu ar esošo klientu bāzi. Privātuma aizsardzība ir
                  prioritāte — visi dati tiek šifrēti un glabāti atbilstoši GDPR prasībām. Apskatiet mūsu{' '}
                  <Link to="/chatbotu-izstrade" className="text-primary hover:underline">AI čatbotu izstrādes</Link> pakalpojumus.
                </p>
              </section>

              {/* Rezultāti */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti juridiskajām firmām</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Juridiskās firmas, kas ievieš AI risinājumus, iegūst būtisku konkurences priekšrocību — ātrāku
                  apkalpošanu, zemākas izmaksas un augstāku pakalpojumu kvalitāti.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '80%', label: 'Ātrāka līgumu analīze', desc: 'salīdzinot ar manuālu procesu' },
                    { value: '60%', label: 'Mazāk rutīnas darba', desc: 'vairāk laika stratēģijai' },
                    { value: '10x', label: 'Ātrāka izpēte', desc: 'juridisko avotu meklēšanā' },
                    { value: '50%', label: 'Ātrāks due diligence', desc: 'ar automātisku analīzi' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Piemēram, juridiskā firma ar 15 juristiem ieviesa AI līgumu analīzi un dokumentu automatizāciju.
                  Pirmajā gadā līgumu pārskatīšanas laiks samazinājās par 75%, dokumentu sagatavošana — par 60%,
                  un firma spēja apkalpot par 30% vairāk klientu bez papildu darbinieku piesaistes.
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
                  <Link to="/dokumentu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Dokumentu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automātiska dokumentu apstrāde un digitalizācija</p>
                  </Link>
                  <Link to="/chatbotu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Čatbotu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Inteliģenti čatboti klientu apkalpošanai</p>
                  </Link>
                  <Link to="/ai-platformu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Platformu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Pielāgotas AI platformas juridiskajām vajadzībām</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Modernizējiet savu juridisko praksi ar AI</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu firmas darba procesus un parādīsim, kā AI var paātrināt
                  ikdienas darbu, uzlabot precizitāti un ļaut juristiem koncentrēties uz augstvērtīgu juridisko darbu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Scale className="h-4 w-4 mr-2" />
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

export default NozareJuridiskasFirmas;
