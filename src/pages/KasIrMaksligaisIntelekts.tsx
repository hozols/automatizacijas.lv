import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Zap, Bot, BarChart3, FileText, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Vai mākslīgais intelekts var aizstāt cilvēkus darbā?',
    answer: 'MI neaizstāj cilvēkus — tas papildina viņu darbu. MI pārņem atkārtojošos, rutīnas uzdevumus, ļaujot darbiniekiem fokusēties uz radošāku, stratēģiskāku darbu. Piemēram, MI var apstrādāt rēķinus un e-pastus, bet biznesa lēmumus joprojām pieņem cilvēki.',
  },
  {
    question: 'Cik drošs ir mākslīgais intelekts biznesa datos?',
    answer: 'Mūsdienu MI risinājumi izmanto šifrēšanu, piekļuves kontroli un datu anonimizāciju. Izvēloties MI pakalpojumu sniedzēju, pārliecinieties, ka tas atbilst GDPR prasībām un piedāvā datu apstrādi ES robežās. Mēs automatizacijas.lv vienmēr nodrošinām datu drošību visaugstākajā līmenī.',
  },
  {
    question: 'Kādi ir populārākie MI rīki Latvijā?',
    answer: 'Latvijā populārākie MI rīki ir ChatGPT (teksta ģenerēšana un analīze), Google Gemini (meklēšana un datu apstrāde), Microsoft Copilot (Office integrācija), kā arī specializēti čatboti un automatizācijas risinājumi. Arvien populārāki kļūst arī MI rīki, kas strādā latviešu valodā.',
  },
  {
    question: 'Kā sākt izmantot mākslīgo intelektu savā uzņēmumā?',
    answer: 'Sāciet ar vienkāršiem soļiem: 1) Identificējiet atkārtojošos procesus, kas aizņem daudz laika. 2) Izmēģiniet bezmaksas MI rīkus kā ChatGPT vai Google Gemini. 3) Konsultējieties ar MI speciālistiem par automatizācijas iespējām. 4) Sāciet ar vienu nelielu projektu un paplašiniet pakāpeniski.',
  },
  {
    question: 'Cik maksā mākslīgā intelekta ieviešana uzņēmumā?',
    answer: 'MI risinājumu cenas variē no bezmaksas rīkiem (ChatGPT, Google Gemini) līdz pielāgotiem biznesa risinājumiem sākot no €299/mēnesī. Sarežģītāki projekti kā pielāgoti čatboti vai datu analīzes sistēmas var maksāt €1,000-€10,000+ atkarībā no apjoma. Piedāvājam bezmaksas konsultāciju, lai novērtētu jūsu vajadzības.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kas ir mākslīgais intelekts? Pilnīgs ceļvedis 2026. gadam",
  "description": "Uzziniet, kas ir mākslīgais intelekts, kā tas darbojas un kā to izmantot biznesā Latvijā. Praktisks ceļvedis ar piemēriem.",
  "author": {
    "@type": "Organization",
    "name": "automatizacijas.lv",
    "url": "https://automatizacijas.lv"
  },
  "publisher": {
    "@type": "Organization",
    "name": "automatizacijas.lv",
    "url": "https://automatizacijas.lv",
    "logo": {
      "@type": "ImageObject",
      "url": "https://automatizacijas.lv/favicon.svg"
    }
  },
  "datePublished": "2026-02-17",
  "dateModified": "2026-02-17",
  "mainEntityOfPage": "https://automatizacijas.lv/kas-ir-maksligais-intelekts",
  "inLanguage": "lv"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Kas ir mākslīgais intelekts", "item": "https://automatizacijas.lv/kas-ir-maksligais-intelekts" }
  ]
};

const KasIrMaksligaisIntelekts = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Kas ir Mākslīgais Intelekts? Ceļvedis 2026 | automatizacijas.lv</title>
        <meta name="description" content="Kas ir mākslīgais intelekts (MI) un kā to izmantot biznesā? Uzziniet par AI veidiem, praktiskiem pielietojumiem Latvijā, populārākajiem rīkiem un MI nākotni. Pilnīgs ceļvedis." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/kas-ir-maksligais-intelekts" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://automatizacijas.lv/kas-ir-maksligais-intelekts" />
        <meta property="og:title" content="Kas ir Mākslīgais Intelekts? Pilnīgs Ceļvedis" />
        <meta property="og:description" content="Uzziniet, kas ir mākslīgais intelekts, kā tas darbojas un kā to izmantot biznesā Latvijā." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kas ir Mākslīgais Intelekts? Pilnīgs Ceļvedis" />
        <meta name="twitter:description" content="Uzziniet, kas ir mākslīgais intelekts, kā tas darbojas un kā to izmantot biznesā Latvijā." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {/* Breadcrumb */}
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Sākums</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Kas ir mākslīgais intelekts</span>
          </nav>

          {/* Hero */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Kas ir mākslīgais intelekts? Pilnīgs ceļvedis 2026. gadam
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Mākslīgais intelekts (MI) jeb <strong className="text-foreground">artificial intelligence (AI)</strong> ir
                datorzinātnes nozare, kas veido sistēmas, kuras spēj veikt uzdevumus, kam tradicionāli nepieciešama
                cilvēka intelektuālā spēja — mācīties, analizēt, lemt un komunicēt. Šajā ceļvedī uzzināsiet,
                kā MI darbojas, kādi ir tā galvenie veidi un kā to praktiski izmantot biznesā Latvijā.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="px-4 sm:px-6 md:px-8 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card/60">
                <h2 className="text-lg font-semibold mb-3">Saturs</h2>
                <ol className="space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
                  <li><a href="#kas-ir-mi" className="hover:text-primary transition-colors">Kas ir mākslīgais intelekts vienkāršiem vārdiem</a></li>
                  <li><a href="#mi-veidi" className="hover:text-primary transition-colors">Mākslīgā intelekta veidi</a></li>
                  <li><a href="#ka-darbojas" className="hover:text-primary transition-colors">Kā mākslīgais intelekts darbojas</a></li>
                  <li><a href="#mi-biznesam" className="hover:text-primary transition-colors">Mākslīgais intelekts biznesā — praktiski piemēri</a></li>
                  <li><a href="#mi-latvija" className="hover:text-primary transition-colors">Mākslīgais intelekts Latvijā</a></li>
                  <li><a href="#mi-riki" className="hover:text-primary transition-colors">Populārākie MI rīki 2026. gadā</a></li>
                  <li><a href="#nakotne" className="hover:text-primary transition-colors">MI nākotne un tendences</a></li>
                  <li><a href="#buj" className="hover:text-primary transition-colors">Biežāk uzdotie jautājumi</a></li>
                </ol>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="px-4 sm:px-6 md:px-8 pb-16">
            <div className="max-w-4xl mx-auto prose-custom space-y-12">

              {/* Section 1 */}
              <section id="kas-ir-mi">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Kas ir mākslīgais intelekts vienkāršiem vārdiem
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Iedomājieties datoru, kas var mācīties no pieredzes — tāpat kā cilvēks. Mākslīgais intelekts ir tehnoloģija,
                  kas ļauj datorprogrammām atpazīt rakstus datos, saprast cilvēku valodu, pieņemt lēmumus un pat radīt
                  jaunu saturu. Atšķirībā no parastām programmām, kas seko stingriem noteikumiem, MI sistēmas var pielāgoties
                  jaunām situācijām un uzlabot savu veiktspēju laika gaitā.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Piemēram, kad jūs lietojat <strong className="text-foreground">ChatGPT</strong> vai <strong className="text-foreground">Google Gemini</strong>,
                  jūs sazināties ar mākslīgā intelekta sistēmu, kas ir apmācīta uz miljardiem tekstu un var saprast kontekstu,
                  atbildēt uz jautājumiem un pat rakstīt kodu vai tulkot no latviešu valodas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mūsdienās MI ir visur — no jūsu telefona balss asistenta līdz Netflix ieteikumiem, no banku krāpšanas
                  atklāšanas sistēmām līdz autonomiem automobiļiem. Tomēr biznesa kontekstā MI vislielāko vērtību rada,
                  automatizējot ikdienas procesus un palīdzot pieņemt labākus lēmumus.
                </p>
              </section>

              {/* Section 2 */}
              <section id="mi-veidi">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Mākslīgā intelekta veidi
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mākslīgo intelektu iedala vairākos tipos atkarībā no tā spējām un pielietojuma:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-2">Šaurais MI (Narrow AI)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Vislielākā daļa mūsdienu MI sistēmu. Specializēts konkrētu uzdevumu veikšanai — piemēram, attēlu atpazīšana,
                      teksta ģenerēšana vai čatboti. ChatGPT, Siri un Google Translate ir šaurā MI piemēri. Tas nevar domāt kā cilvēks,
                      bet savā jomā pārspēj cilvēkus ātrumā un precizitātē.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-2">Vispārējais MI (AGI)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hipotētiska sistēma, kas spētu veikt jebkuru intelektuālu uzdevumu tāpat kā cilvēks. Pagaidām tas
                      nepastāv, bet ir aktīvs pētniecības mērķis. AGI spētu mācīties jaunas jomas bez specifiskas apmācības
                      un pielāgoties pilnīgi jaunām situācijām.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-2">Ģeneratīvais MI</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      MI, kas rada jaunu saturu — tekstus, attēlus, mūziku, video un kodu. Šis ir visstraujāk augošais MI virziens.
                      Piemēri: ChatGPT (teksti), DALL-E un Midjourney (attēli), Suno (mūzika), GitHub Copilot (kods).
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-2">Mašīnmācīšanās (ML)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      MI apakšnozare, kur sistēma mācās no datiem bez tiešas programmēšanas. Piemēram, e-pasta surogātpasta filtrs
                      mācās atpazīt nevēlamus ziņojumus, analizējot tūkstošiem piemēru. Jo vairāk datu — jo precīzākas prognozes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="ka-darbojas">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Kā mākslīgais intelekts darbojas
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MI darbības pamatā ir <strong className="text-foreground">neironu tīkli</strong> — matemātiski modeļi,
                  kas imitē cilvēka smadzeņu darbības principus. Vienkāršots process izskatās šādi:
                </p>
                <ol className="space-y-3 mb-6">
                  {[
                    { title: 'Datu vākšana', desc: 'MI sistēma saņem miljonus piemēru — tekstus, attēlus, skaitļus vai citus datus.' },
                    { title: 'Apmācība', desc: 'Sistēma analizē šos piemērus un atrod likumsakarības — kādi vārdi parasti seko citiem, kā izskatās kaķis fotogrāfijā utt.' },
                    { title: 'Modelis', desc: 'Rezultātā rodas modelis — matemātiska formula, kas var veikt prognozes par jauniem, iepriekš neredzētiem datiem.' },
                    { title: 'Izmantošana', desc: 'Modelis saņem jaunu ievadi (piemēram, jūsu jautājumu) un ģenerē atbildi, balstoties uz to, ko iemācījies apmācības laikā.' },
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                      <div>
                        <strong className="text-foreground">{step.title}:</strong>{' '}
                        <span className="text-muted-foreground">{step.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-muted-foreground leading-relaxed">
                  Lieli valodas modeļi kā GPT-4 vai Gemini ir apmācīti uz terabaitiem teksta datu, ieskaitot grāmatām,
                  tīmekļa lapām un zinātniskiem rakstiem. Tieši tāpēc tie var saprast kontekstu un atbildēt latviski —
                  jo apmācības datos ir arī latviešu valodas teksti.
                </p>
              </section>

              {/* Section 4 */}
              <section id="mi-biznesam">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Mākslīgais intelekts biznesā — praktiski piemēri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MI nav tikai lielo korporāciju tehnoloģija. Arvien vairāk mazo un vidējo uzņēmumu Latvijā sāk
                  izmantot MI, lai ietaupītu laiku un palielinātu ieņēmumus. Šeit ir konkrēti piemēri:
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    { icon: Bot, title: 'AI čatboti klientu apkalpošanai', desc: 'Čatbots uz jūsu mājaslapas var atbildēt uz klientu jautājumiem 24/7 latviešu valodā. Tas samazina atbildes laiku no stundām uz sekundēm un atbrīvo darbinieku laiku sarežģītākiem uzdevumiem. Mūsu klienti ar čatbotiem apkalpo līdz 85% standarta pieprasījumu automātiski.', link: '/chatbotu-izstrade' },
                    { icon: Zap, title: 'Procesu automatizācija', desc: 'No rēķinu izrakstīšanas līdz e-pastu apstrādei — MI var automatizēt desmitiem ikdienas procesu. Piemēram, sistēma var automātiski ģenerēt līgumus pēc sapulces, kategorizēt ienākošos e-pastus vai atgādināt par neapmaksātiem rēķiniem.', link: '/procesu-automatizacija' },
                    { icon: BarChart3, title: 'Datu analīze un prognozes', desc: 'MI analizē pārdošanas datus, klientu uzvedību un tirgus tendences, lai prognozētu pieprasījumu un optimizētu krājumus. Tas palīdz pieņemt labākus biznesa lēmumus, balstoties uz faktiem, nevis intuīciju.' },
                    { icon: FileText, title: 'Dokumentu apstrāde', desc: 'MI var automātiski lasīt un kategorizēt dokumentus, izvilkt svarīgu informāciju no līgumiem, rēķiniem vai pieteikumiem. Tas ietaupa desmitiem stundu mēnesī un samazina cilvēciskās kļūdas.' },
                    { icon: Lightbulb, title: 'Satura ģenerēšana un mārketings', desc: 'MI palīdz radīt mārketinga saturu — no sociālo mediju ierakstiem līdz epastu kampaņām. Tas var pielāgot ziņojumus katram klientu segmentam, palielinot konversijas un iesaisti.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        {'link' in item && item.link && (
                          <Link to={item.link} className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-2 font-medium">
                            Uzzināt vairāk <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>Mūsu pieredze:</strong> automatizacijas.lv komanda ir palīdzējusi Latvijas uzņēmumiem ieviest AI
                    risinājumus, kas ietaupa vidēji 15-25 stundas nedēļā katram darbiniekam. Mēs piedāvājam{' '}
                    <Link to="/contact" className="text-primary hover:underline">bezmaksas konsultāciju</Link>,
                    lai novērtētu, kā MI var palīdzēt tieši jūsu biznesam.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="mi-latvija">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Mākslīgais intelekts Latvijā
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvija aktīvi iekļaujas Eiropas MI attīstībā. Galvenie virzieni:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Eiropas Savienības MI regulējums (AI Act) nosaka drošus MI izmantošanas standartus visām dalībvalstīm, ieskaitot Latviju',
                    'Latvijas Mākslīgā intelekta stratēģija paredz MI ieviešanu valsts pārvaldē un izglītībā',
                    'LIAA un Rīgas Tehniskā universitāte atbalsta MI startapus un pētniecību',
                    'Arvien vairāk Latvijas uzņēmumu sāk izmantot MI rīkus ikdienas darbā — no grāmatvedības līdz klientu apkalpošanai',
                    'MI rīki kā ChatGPT un Google Gemini arvien labāk darbojas latviešu valodā, padarot tehnoloģiju pieejamāku',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Lai gan Latvija ir neliela valsts, MI piedāvā iespēju konkurēt globālā mērogā. Uzņēmumi, kas ievieš
                  MI agri, iegūst ievērojamu konkurences priekšrocību — gan vietējā, gan starptautiskā tirgū.
                </p>
              </section>

              {/* Section 6 */}
              <section id="mi-riki">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Populārākie MI rīki 2026. gadā
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Šeit ir MI rīki, kurus varat sākt lietot jau šodien — daudzi no tiem ir bezmaksas vai piedāvā
                  bezmaksas plānu:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold text-foreground">Rīks</th>
                        <th className="text-left p-3 font-semibold text-foreground">Pielietojums</th>
                        <th className="text-left p-3 font-semibold text-foreground">Latviešu valoda</th>
                        <th className="text-left p-3 font-semibold text-foreground">Cena</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        ['ChatGPT (OpenAI)', 'Teksti, analīze, kods, tulkošana', 'Jā, laba', 'Bezmaksas / $20/mēn'],
                        ['Google Gemini', 'Meklēšana, analīze, teksti', 'Jā, laba', 'Bezmaksas / $20/mēn'],
                        ['Microsoft Copilot', 'Office integrācija, e-pasti, dokumenti', 'Jā', '$30/mēn'],
                        ['Claude (Anthropic)', 'Teksti, analīze, sarežģīti uzdevumi', 'Jā, vidēja', 'Bezmaksas / $20/mēn'],
                        ['Midjourney / DALL-E', 'Attēlu ģenerēšana', 'Pamata', '$10-30/mēn'],
                        ['Zapier + AI', 'Procesu automatizācija', 'Nē', '$20-50/mēn'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50">
                          {row.map((cell, j) => (
                            <td key={j} className="p-3">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7 */}
              <section id="nakotne">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  MI nākotne un tendences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mākslīgais intelekts attīstās ātrāk nekā jebkad iepriekš. Galvenās tendences 2026. gadā un tālāk:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'MI aģenti', desc: 'Sistēmas, kas var patstāvīgi veikt sarežģītus uzdevumus — no ceļojumu plānošanas līdz projektu vadībai. MI vairs ne tikai atbild uz jautājumiem, bet arī rīkojas.' },
                    { title: 'Multimodālie modeļi', desc: 'MI, kas vienlaicīgi saprot tekstu, attēlus, audio un video. Piemēram, varat parādīt foto no rēķina, un MI to automātiski apstrādās.' },
                    { title: 'MI personalizācija', desc: 'Katrs uzņēmums varēs izveidot savu MI, kas apmācīts uz viņu specifiskajiem datiem un procesiem — ne tikai vispārīgs čatbots, bet jūsu biznesa eksperts.' },
                    { title: 'Regulējums un ētika', desc: 'ES AI Act un citi regulējumi veido drošu vidi MI attīstībai. Uzņēmumiem jāseko līdzi jaunajām prasībām MI datu apstrādē un caurspīdīgumā.' },
                  ].map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{item.title}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              <section id="buj">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Biežāk uzdotie jautājumi par mākslīgo intelektu
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card/60 overflow-hidden transition-all duration-300 hover:border-primary/20">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4"
                      >
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

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Gatavi ieviest MI savā biznesā?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Mēs palīdzēsim izvēlēties piemērotāko MI risinājumu jūsu uzņēmumam — no čatbotiem līdz pilnai procesu automatizācijai.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Zap className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      Bezmaksas konsultācija
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 group">
                      Mūsu pakalpojumi
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

export default KasIrMaksligaisIntelekts;
