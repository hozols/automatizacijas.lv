import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Zap, Clock, Users, ArrowRight, CheckCircle, Shield, Cpu, Database, Globe } from 'lucide-react';

const faqs = [
  {
    question: 'Cik ilgi aizņem pielāgotas AI platformas izstrāde?',
    answer: 'Tas ir atkarīgs no projekta sarežģītības. Vienkāršs MVP (minimāli dzīvotspējīgs produkts) var būt gatavs 4 nedēļās. Pilnvērtīga platforma ar visām integrācijām un pielāgotiem ML modeļiem parasti aizņem 2-4 mēnešus. Sākam ar detalizētu konsultāciju, lai noteiktu precīzus termiņus jūsu projektam.',
  },
  {
    question: 'Kādas tehnoloģijas izmantojat AI platformu izstrādē?',
    answer: 'Strādājam ar vadošajām AI tehnoloģijām — Python, TensorFlow, PyTorch, OpenAI API, LangChain, vektoru datubāzēm (Pinecone, Weaviate) un mākoņplatformām (AWS, Google Cloud, Azure). Tehnoloģiju izvēle tiek pielāgota katram projektam, ņemot vērā jūsu specifiskās vajadzības un mērogojamības prasības.',
  },
  {
    question: 'Vai varu integrēt AI platformu ar savām esošajām sistēmām?',
    answer: 'Jā, mēs specializējamies tieši AI integrācijā ar esošajām biznesa sistēmām. Neatkarīgi no tā, vai tas ir ERP, CRM, grāmatvedības programmatūra vai e-komercijas platforma — mēs nodrošinām netraucētu datu apmaiņu caur API un automatizācijas risinājumiem.',
  },
  {
    question: 'Kāpēc izvēlēties pielāgotu platformu, nevis gatavu SaaS risinājumu?',
    answer: 'Pielāgota platforma nodrošina pilnu kontroli pār datiem, funkcionalitāti un mērogojamību. Jums nav jāmaksā pieaugošas abonēšanas maksas, nav atkarība no trešo pušu ierobežojumiem, un risinājums ir precīzi pielāgots jūsu biznesa procesiem. Ilgtermiņā tas bieži vien ir izdevīgāk nekā gatavi produkti.',
  },
  {
    question: 'Vai nodrošināt atbalstu pēc platformas palaišanas?',
    answer: 'Pilnīgi noteikti. Piedāvājam dažādus atbalsta plānus — no pamata uzturēšanas līdz pilnam tehniskajam atbalstam ar garantētu reakcijas laiku. Tas ietver kļūdu labošanu, veiktspējas monitoringu, regulārus atjauninājumus un nepārtrauktu optimizāciju.',
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
  "name": "AI Platformu Izstrāde",
  "description": "Pielāgotu AI platformu un risinājumu izstrāde uzņēmumiem. No idejas līdz gatavam produktam — AI čatboti, datu platformas, automatizācijas sistēmas.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Platform Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Platformu Izstrāde", "item": "https://automatizacijas.lv/ai-platformu-izstrade" }
  ]
};

const AiPlatformuIzstrade = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Platformu Izstrāde Uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="Pielāgotu AI platformu un risinājumu izstrāde jūsu uzņēmumam. No idejas līdz gatavam produktam — AI čatboti, datu platformas, automatizācijas sistēmas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/ai-platformu-izstrade" />
        <meta property="og:title" content="AI Platformu Izstrāde Uzņēmumiem | automatizacijas.lv" />
        <meta property="og:description" content="Pielāgotu AI platformu un risinājumu izstrāde jūsu uzņēmumam. AI čatboti, datu platformas, automatizācijas sistēmas." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Platformu Izstrāde Uzņēmumiem" />
        <meta name="twitter:description" content="Pielāgotu AI platformu un risinājumu izstrāde jūsu uzņēmumam." />
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
            <span className="text-foreground">AI Platformu Izstrāde</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Platformu un Risinājumu Izstrāde
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Izstrādājam <strong className="text-foreground">pielāgotas AI platformas</strong>, kas risina jūsu uzņēmuma unikālās vajadzības.
                No idejas līdz pilnvērtīgam produktam — čatboti, datu analīzes rīki, automatizācijas sistēmas un custom ML modeļi,
                kas strādā tieši tā, kā jūsu biznesam nepieciešams.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Cpu, label: '50+ izstrādāti projekti' },
                  { icon: Clock, label: 'No idejas līdz MVP 4 nedēļās' },
                  { icon: Shield, label: 'Pilns atbalsts' },
                  { icon: Globe, label: 'Mērogojami risinājumi' },
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
              {/* Ko mēs izstrādājam */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ko mēs izstrādājam</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu komanda specializējas dažādu AI risinājumu izstrādē, kas palīdz uzņēmumiem automatizēt procesus,
                  analizēt datus un uzlabot klientu pieredzi. Katrs projekts tiek pielāgots jūsu specifiskajām biznesa vajadzībām.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Code,
                      title: 'AI čatbotu platformas',
                      desc: 'Inteliģentas sarunu platformas ar dabīgās valodas apstrādi, daudzvalodu atbalstu un integrāciju ar jūsu biznesa sistēmām. Čatboti, kas saprot kontekstu un mācās no katras sarunas.',
                      link: '/chatbotu-izstrade',
                    },
                    {
                      icon: Database,
                      title: 'Datu analīzes un BI platformas',
                      desc: 'Pielāgotas datu analīzes sistēmas ar mākslīgā intelekta iespējām. Automātiska datu apstrāde, vizualizācija, prognožu modeļi un reāllaika monitoringa paneļi jūsu biznesa lēmumiem.',
                      link: '/datu-analize',
                    },
                    {
                      icon: Zap,
                      title: 'Automatizācijas sistēmas',
                      desc: 'End-to-end biznesa procesu automatizācija ar AI. No dokumentu apstrādes un klasifikācijas līdz pilnīgi automatizētām darba plūsmām, kas savieno vairākas sistēmas vienotā ekosistēmā.',
                      link: '/procesu-automatizacija',
                    },
                    {
                      icon: Globe,
                      title: 'AI integrācijas ar esošajām sistēmām',
                      desc: 'Savienojam AI iespējas ar jūsu pašreizējo infrastruktūru — ERP, CRM, grāmatvedības un e-komercijas sistēmām. Bez nepieciešamības mainīt esošos procesus vai rīkus.',
                    },
                    {
                      icon: Cpu,
                      title: 'Custom ML modeļu izstrāde',
                      desc: 'Pielāgotu mašīnmācīšanās modeļu apmācība un ieviešana. Attēlu atpazīšana, teksta klasifikācija, prognožu modeļi un anomāliju noteikšana — viss pielāgots jūsu datiem un specifiskajiem uzdevumiem.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                      {item.link && (
                        <Link to={item.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                          Uzzināt vairāk <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Tehnoloģijas */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Tehnoloģijas, ar kurām strādājam</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Izmantojam vadošās nozares tehnoloģijas, lai nodrošinātu jūsu AI platformas veiktspēju, drošību un mērogojamību.
                  Tehnoloģiju izvēle tiek pielāgota katram projektam, ņemot vērā jūsu specifiskos mērķus un infrastruktūras prasības.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Python & Frameworks', items: ['Python', 'FastAPI', 'Flask', 'Django'] },
                    { title: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'] },
                    { title: 'LLM & NLP', items: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Anthropic API'] },
                    { title: 'Vektoru datubāzes', items: ['Pinecone', 'Weaviate', 'ChromaDB', 'Qdrant'] },
                    { title: 'Mākoņplatformas', items: ['AWS', 'Google Cloud', 'Azure', 'Vercel'] },
                    { title: 'Datu apstrāde', items: ['PostgreSQL', 'Redis', 'Apache Kafka', 'Elasticsearch'] },
                  ].map((category, i) => (
                    <div key={i} className="p-4 rounded-lg border border-border bg-card/60">
                      <h3 className="font-semibold text-foreground text-sm mb-3">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, j) => (
                          <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Izstrādes process */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Izstrādes process</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu izstrādes process ir strukturēts un caurskatāms. Katrā posmā jūs esat informēts par progresu
                  un varat sniegt atgriezenisko saiti, lai nodrošinātu, ka gala rezultāts precīzi atbilst jūsu vajadzībām.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Konsultācija un vajadzību analīze',
                      desc: 'Sākam ar bezmaksas konsultāciju, kurā izpētām jūsu biznesa procesus, identificējam automatizācijas iespējas un definējam projekta mērķus. Rezultāts — detalizēts projekta apraksts ar skaidriem kritērijiem un termiņiem.',
                    },
                    {
                      step: '2',
                      title: 'Arhitektūras projektēšana',
                      desc: 'Projektējam platformas arhitektūru, izvēlamies optimālās tehnoloģijas un plānojam integrācijas ar jūsu esošajām sistēmām. Izveidojam detalizētu tehnisko specifikāciju un prototipus.',
                    },
                    {
                      step: '3',
                      title: 'MVP izstrāde',
                      desc: 'Izstrādājam minimāli dzīvotspējīgu produktu (MVP) ar pamata funkcionalitāti. Tas ļauj ātri validēt ideju un sākt iegūt reālu lietotāju atgriezenisko saiti jau 4 nedēļu laikā.',
                    },
                    {
                      step: '4',
                      title: 'Iteratīvā izstrāde',
                      desc: 'Balstoties uz MVP rezultātiem, iteratīvi paplašinām funkcionalitāti. Katru nedēļu piegādājam jaunas iespējas, testējam un optimizējam, pamatojoties uz reāliem lietošanas datiem.',
                    },
                    {
                      step: '5',
                      title: 'Testēšana un palaišana',
                      desc: 'Veicam rūpīgu testēšanu — veiktspējas, drošības un lietojamības testus. Nodrošinām raitu pāreju uz produkcijas vidi ar minimālu ietekmi uz jūsu biznesa procesiem.',
                    },
                    {
                      step: '6',
                      title: 'Atbalsts un nepārtraukta optimizācija',
                      desc: 'Pēc palaišanas nodrošinām pilnu tehnisko atbalstu, monitoringu un regulārus atjauninājumus. Nepārtraukti optimizējam AI modeļus un platformas veiktspēju, lai tā augtu kopā ar jūsu biznesu.',
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

              {/* Kāpēc pielāgots risinājums */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc pielāgots risinājums, nevis gatavs produkts?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gatavi SaaS risinājumi var šķist pievilcīgi to ātrās ieviešanas dēļ, taču ilgtermiņā pielāgota platforma
                  bieži vien ir izdevīgāka un efektīvāka. Lūk, galvenās atšķirības:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Pielāgota AI platforma
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Pilna kontrole pār datiem un funkcionalitāti',
                        'Nav ikmēneša abonēšanas maksu trešajām pusēm',
                        'Precīzi pielāgota jūsu biznesa procesiem',
                        'Neierobežota mērogojamība',
                        'Pilna intelektuālā īpašuma kontrole',
                        'Integrācija ar jebkuru sistēmu',
                        'Neatkarība no ārēju pakalpojumu sniedzēju lēmumiem',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      Gatavs SaaS produkts
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Ierobežotas pielāgošanas iespējas',
                        'Pieaugošas ikmēneša izmaksas, augot lietotāju skaitam',
                        'Standarta funkcionalitāte visiem klientiem',
                        'Ierobežota mērogojamība un veiktspēja',
                        'Dati glabājas trešās puses serveros',
                        'Ierobežotas integrācijas iespējas',
                        'Atkarība no pakalpojuma sniedzēja nākotnes lēmumiem',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="h-4 w-4 flex-shrink-0 text-muted-foreground mt-0.5 text-center">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Protams, gatavi risinājumi var būt piemēroti vienkāršiem uzdevumiem vai ātrai prototipēšanai.
                  Mēs palīdzēsim izvērtēt, kurš ceļš ir labākais tieši jūsu situācijai —{' '}
                  <Link to="/contact" className="text-primary hover:underline">sazinieties ar mums</Link> bezmaksas konsultācijai.
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
                  <Link to="/chatbotu-izstrade" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">AI Čatbotu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">Inteliģenti čatboti klientu apkalpošanai</p>
                  </Link>
                  <Link to="/datu-analize" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Datu Analīze</h3>
                    <p className="text-xs text-muted-foreground">AI datu analīzes un BI risinājumi</p>
                  </Link>
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Biznesa procesu automatizācija ar AI</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Izveidosim AI platformu jūsu biznesam</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā izvērtēsim jūsu vajadzības, ieteiktu optimālās tehnoloģijas un sagatavosim detalizētu projekta plānu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <Cpu className="h-4 w-4 mr-2" />
                      Bezmaksas konsultācija
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 group">
                      Visi pakalpojumi
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

export default AiPlatformuIzstrade;
