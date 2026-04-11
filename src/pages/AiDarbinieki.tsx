import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Bot, Zap, Clock, Users, ArrowRight, CheckCircle, Shield, MessageSquare, FileText, TrendingUp } from 'lucide-react';

const faqs = [
  {
    question: 'Vai AI darbinieks var pilnībā aizstāt cilvēku?',
    answer: 'AI darbinieks nav domāts, lai aizstātu cilvēkus, bet gan lai papildinātu komandu. Viņš pārņem rutīnas uzdevumus — datu ievadi, klientu atbildes, atskaišu ģenerēšanu — ļaujot jūsu darbiniekiem koncentrēties uz stratēģiskiem un radošiem darbiem. Rezultātā komanda strādā efektīvāk un ar augstāku apmierinātību.',
  },
  {
    question: 'Cik ātri AI darbinieks sāk strādāt?',
    answer: 'Pamata AI darbinieks ir gatavs darbam 1-2 nedēļu laikā. Sarežģītāki risinājumi ar vairākām integrācijām un pielāgotu loģiku prasa 3-5 nedēļas. Pēc ieviešanas AI darbinieks sāk mācīties no reāliem datiem un kļūst efektīvāks ar katru dienu.',
  },
  {
    question: 'Vai AI darbinieks strādā ar latviešu valodu?',
    answer: 'Jā, mūsu AI darbinieki pilnībā atbalsta latviešu valodu — gan teksta apstrādē, gan klientu saziņā, gan dokumentu analīzē. Tie spēj strādāt arī daudzvalodu vidē, automātiski pārslēdzoties starp latviešu, angļu un krievu valodām.',
  },
  {
    question: 'Kādi dati ir nepieciešami AI darbinieka apmācībai?',
    answer: 'Atkarībā no AI darbinieka tipa var būt nepieciešami klientu jautājumu paraugi, produktu katalogi, iekšējās procedūras vai vēsturiskie dati. Mēs palīdzam sagatavot un strukturēt datus, un viss process notiek pilnībā atbilstoši GDPR prasībām.',
  },
  {
    question: 'Cik maksā AI darbinieka ieviešana?',
    answer: 'Cenas sākas no €199/mēnesī par vienu AI darbinieku ar pamata funkcionalitāti. Pielāgoti risinājumi ar vairākām integrācijām sākas no €499/mēnesī. Piedāvājam bezmaksas konsultāciju, kurā novērtēsim jūsu vajadzības un sagatavosim precīzu piedāvājumu.',
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
  "name": "AI Darbinieki Uzņēmumiem",
  "description": "Gatavi izmantošanai AI darbinieki biznesa procesiem — klientu apkalpošana, satura veidošana, datu apstrāde. Strādā 24/7 bez kļūdām.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Workers and Agents"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Darbinieki", "item": "https://automatizacijas.lv/ai-darbinieki" }
  ]
};

const AiDarbinieki = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Darbinieki Jūsu Uzņēmumam | automatizacijas.lv</title>
        <meta name="description" content="Gatavi izmantošanai AI darbinieki biznesa procesiem — klientu apkalpošana, satura veidošana, datu apstrāde. Strādā 24/7 bez kļūdām." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/ai-darbinieki" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/ai-darbinieki" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/ai-darbinieki" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/ai-darbinieki" />
        <meta property="og:title" content="AI Darbinieki Jūsu Uzņēmumam | automatizacijas.lv" />
        <meta property="og:description" content="Gatavi izmantošanai AI darbinieki biznesa procesiem. Strādā 24/7 bez kļūdām." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Darbinieki Jūsu Uzņēmumam" />
        <meta name="twitter:description" content="Gatavi izmantošanai AI darbinieki biznesa procesiem. Strādā 24/7 bez kļūdām." />
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
            <span className="text-foreground">AI Darbinieki</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Darbinieki — Virtuālie Komandas Biedri Jūsu Biznesam
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Iedomājieties komandas biedru, kas <strong className="text-foreground">strādā 24/7 bez pārtraukumiem</strong>, nekad
                nepieļauj kļūdas rutīnas uzdevumos un spēj vienlaicīgi apkalpot desmitiem klientu. AI darbinieki nav nākotne — tie ir
                šodienas risinājums, kas jau palīdz Latvijas uzņēmumiem strādāt efektīvāk un gudrāk.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: '24/7 pieejamība' },
                  { icon: Zap, label: '10x produktivitāte' },
                  { icon: TrendingUp, label: 'No €199/mēn' },
                  { icon: Shield, label: 'Bez kļūdām' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kas ir AI darbinieki?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI darbinieki ir mākslīgā intelekta aģenti, kas veic konkrētus biznesa uzdevumus autonomi vai ar minimālu cilvēka iesaisti.
                  Atšķirībā no vienkāršiem automatizācijas rīkiem, AI darbinieki saprot kontekstu, mācās no pieredzes un spēj pieņemt lēmumus
                  sarežģītās situācijās.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Iedomājieties darbinieku, kas nekad neaizmirst nosūtīt atgādinājumu, vienmēr precīzi apstrādā datus un spēj vienlaicīgi
                  vadīt simtiem sarunu ar klientiem — tieši to piedāvā AI darbinieki. Tie integrējas jūsu esošajās sistēmās un sāk
                  radīt vērtību jau no pirmās darba dienas.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Veic rutīnas uzdevumus 10x ātrāk nekā cilvēks',
                    'Strādā bez pārtraukumiem — 24 stundas diennaktī, 365 dienas gadā',
                    'Nepieļauj kļūdas atkārtojamos procesos',
                    'Mācās un uzlabojas ar katru izpildītu uzdevumu',
                    'Integrējas ar jūsu esošajām sistēmām un rīkiem',
                    'Mērogojams — viens AI darbinieks var aizstāt veselu nodaļu',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI darbinieku veidi</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Katram biznesa procesam — savs AI darbinieks. Mēs palīdzam identificēt jomas, kur AI darbinieki radīs
                  vislielāko ietekmi, un ieviešam risinājumus, kas pielāgoti tieši jūsu uzņēmuma vajadzībām.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: 'Klientu apkalpošanas AI darbinieks',
                      desc: 'Atbild uz klientu jautājumiem jebkurā laikā, risina standarta problēmas, novirza sarežģītus pieprasījumus pie speciālistiem. Saprot latviešu valodu un spēj vadīt dabīgas sarunas ar augstu apmierinātības līmeni.',
                    },
                    {
                      icon: FileText,
                      title: 'Satura veidošanas AI darbinieks',
                      desc: 'Raksta un rediģē tekstus — sociālo tīklu ierakstus, e-pasta kampaņas, produktu aprakstus un emuāra rakstus. Saglabā jūsu zīmola toni un stilistiku, veidojot konsekventu komunikāciju visos kanālos.',
                    },
                    {
                      icon: Zap,
                      title: 'Datu apstrādes AI darbinieks',
                      desc: 'Apstrādā, analizē un strukturē liela apjoma datus. Veido atskaites, identificē tendences un sagatavo ieskatus lēmumu pieņemšanai. Darbu, kas cilvēkam aizņemtu stundas, AI darbinieks paveic minūtēs.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Pārdošanas AI darbinieks',
                      desc: 'Kvalificē potenciālos klientus, personalizē piedāvājumus un uztur kontaktu ar esošajiem klientiem. Analizē pirkumu vēsturi un iesaka optimālo pārdošanas stratēģiju katram klientam.',
                    },
                    {
                      icon: Users,
                      title: 'Administratīvais AI darbinieks',
                      desc: 'Pārvalda kalendārus, organizē sapulces, apstrādā e-pastus un veic dokumentu pārvaldību. Automatizē ikdienas administratīvos uzdevumus, atbrīvojot jūsu laiku stratēģiskam darbam.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā AI darbinieki integrējas jūsu komandā</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI darbinieka ieviešana nav sarežģīts vai ilgstošs process. Mēs esam izstrādājuši pārbaudītu pieeju, kas ļauj
                  sākt gūt rezultātus jau dažu nedēļu laikā.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Procesu audits un plānošana',
                      desc: 'Analizējam jūsu esošos biznesa procesus, identificējam rutīnas uzdevumus un novērtējam, kur AI darbinieki radīs vislielāko ietekmi. Izveidojam detalizētu ieviešanas plānu.',
                    },
                    {
                      step: '2',
                      title: 'AI darbinieka konfigurācija',
                      desc: 'Apmācām AI darbinieku uz jūsu specifiskajiem datiem, definējam darbības scenārijus un integrējam ar jūsu izmantotajām sistēmām — CRM, e-pastu, mājas lapu vai citiem rīkiem.',
                    },
                    {
                      step: '3',
                      title: 'Testēšana un pielāgošana',
                      desc: 'Testējam AI darbinieku reālos scenārijos, pielāgojam atbildes un uzvedību, un nodrošinām, ka tas strādā precīzi un atbilstoši jūsu biznesa standartiem.',
                    },
                    {
                      step: '4',
                      title: 'Palaišana un nepārtraukta optimizācija',
                      desc: 'Palaidam AI darbinieku produkcijā, uzraugām veiktspēju un nepārtraukti uzlabojam tā efektivitāti, balstoties uz reāliem datiem un atgriezenisko saiti.',
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

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Priekšrocības salīdzinājumā ar tradicionālo pieeju</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI darbinieki fundamentāli maina to, kā uzņēmumi pārvalda rutīnas uzdevumus. Salīdziniet tradicionālo pieeju ar AI darbinieku ieviešanu.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-3">Tradicionālā pieeja</h3>
                    <div className="space-y-2">
                      {[
                        'Ierobežots darba laiks (8h dienā)',
                        'Cilvēciskās kļūdas rutīnas uzdevumos',
                        'Lēna mērogošana — jaunu darbinieku apmācība',
                        'Augstas personāla izmaksas',
                        'Nevienmērīga kvalitāte atkarībā no noslogojuma',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                          <span className="text-muted-foreground/50">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 rounded-lg border border-primary/20 bg-primary/5">
                    <h3 className="font-semibold text-foreground mb-3">AI darbinieki</h3>
                    <div className="space-y-2">
                      {[
                        'Strādā 24/7 bez pārtraukumiem',
                        'Konsekventa precizitāte katrā uzdevumā',
                        'Tūlītēja mērogošana — pievienojiet jaunus uzdevumus minūtēs',
                        'Fiksētas un prognozējamas izmaksas',
                        'Vienmērīgi augsta kvalitāte neatkarīgi no apjoma',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Saistītie pakalpojumi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/chatbotu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Čatbotu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Inteliģenti čatboti klientu apkalpošanai</p>
                  </Link>
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Automatizējiet biznesa procesus ar AI</p>
                  </Link>
                  <Link to="/ai-platformu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Platformu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Pielāgotas AI platformas jūsu biznesam</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Pievienojiet AI darbinieku savai komandai</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā novērtēsim jūsu procesus un parādīsim, kā AI darbinieks var uzlabot jūsu uzņēmuma efektivitāti.
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

export default AiDarbinieki;
