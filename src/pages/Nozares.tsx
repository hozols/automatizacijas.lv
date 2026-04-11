import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, ShoppingCart, Factory, Truck, Scale } from 'lucide-react';

const industries = [
  {
    icon: Calculator,
    title: 'Grāmatvedība un Finanses',
    description: 'AI automatizācija grāmatvedības birojiem un finanšu nodaļām — rēķinu apstrāde, atskaišu ģenerēšana, nodokļu aprēķini un VID atbilstība. Samaziniet manuālo darbu par 70% un minimizējiet kļūdu risku.',
    link: '/nozares/gramatvediba-un-finanses',
  },
  {
    icon: ShoppingCart,
    title: 'E-komercija',
    description: 'Automatizēti AI chatboti klientu apkalpošanai, pasūtījumu apstrāde, krājumu pārvaldība, personalizētas rekomendācijas un pamesto grozu atgūšana. Palieliniet konversiju un samaziniet atbalsta izmaksas.',
    link: '/nozares/e-komercija',
  },
  {
    icon: Factory,
    title: 'Ražošana',
    description: 'Kvalitātes kontrole ar datorredzi, prediktīvā apkope, piegādes ķēžu optimizācija un ražošanas plānošana ar AI. Samaziniet dīkstāves un palieliniet ražošanas efektivitāti.',
    link: '/nozares/razosana',
  },
  {
    icon: Truck,
    title: 'Loģistika',
    description: 'Maršrutu optimizācija, sūtījumu izsekošana, automatizēta CMR un pavadzīmju apstrāde, noliktavas pārvaldība un pieprasījuma prognozēšana. Samaziniet loģistikas izmaksas par līdz 30%.',
    link: '/nozares/logistika',
  },
  {
    icon: Scale,
    title: 'Juridiskās Firmas',
    description: 'Līgumu analīze, juridisko dokumentu automatizācija, tiesību aktu izpēte, due diligence automatizācija un klientu uzņemšanas chatboti. Ietaupiet juristu laiku sarežģītākam darbam.',
    link: '/nozares/juridiskas-firmas',
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automatizācija pa Nozarēm",
  "description": "AI un automatizācijas risinājumi dažādām nozarēm Latvijā — grāmatvedība, e-komercija, ražošana, loģistika, juridiskās firmas.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Industry AI Automation"
};

const Nozares = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija pa Nozarēm | automatizacijas.lv</title>
        <meta name="description" content="AI automatizācijas risinājumi dažādām nozarēm Latvijā — grāmatvedība, e-komercija, ražošana, loģistika, juridiskās firmas. Noskaidrojiet, kā AI var palīdzēt tieši jūsu nozarē." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares" />
        <meta property="og:title" content="AI Automatizācija pa Nozarēm | automatizacijas.lv" />
        <meta property="og:description" content="AI automatizācijas risinājumi dažādām nozarēm Latvijā — grāmatvedība, e-komercija, ražošana, loģistika, juridiskās firmas." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija pa Nozarēm" />
        <meta name="twitter:description" content="AI automatizācijas risinājumi dažādām nozarēm Latvijā." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Sākums</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Nozares</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Automatizācija pa Nozarēm
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Katra nozare saskaras ar unikāliem izaicinājumiem, un AI risinājumi ir visefektīvākie, kad tie ir pielāgoti konkrētās
                nozares specifikai. Mēs piedāvājam <strong className="text-foreground">specializētus automatizācijas risinājumus</strong>,
                kas risina tieši jūsu nozares sāpīgākos punktus — no grāmatvedības rēķinu apstrādes līdz juridisko dokumentu analīzei.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Latvijas uzņēmumi dažādās nozarēs jau izmanto mūsu AI risinājumus, lai samazinātu manuālo darbu, paātrinātu procesus
                un uzlabotu klientu apkalpošanu. Neatkarīgi no tā, vai esat grāmatvedības birojs ar 5 darbiniekiem vai ražošanas
                uzņēmums ar 200 darbiniekiem — mūsu risinājumi ir mērogojami un pielāgojami jūsu vajadzībām.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Izvēlieties savu nozari, lai uzzinātu, kādi konkrēti AI automatizācijas risinājumi ir pieejami un kādus rezultātus
                jūs varat sagaidīt. Katrai nozarei esam sagatavojuši detalizētu aprakstu ar reāliem piemēriem, ROI aprēķiniem
                un ieviešanas soļiem.
              </p>
            </div>
          </section>

          <article className="px-4 sm:px-6 md:px-8 pb-16">
            <div className="max-w-4xl mx-auto space-y-12">

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Nozares, kurām piedāvājam AI risinājumus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {industries.map((industry, i) => (
                    <Link
                      key={i}
                      to={industry.link}
                      className="p-6 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <industry.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{industry.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                        Uzzināt vairāk
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kāpēc nozares specifika ir svarīga</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Universāli automatizācijas risinājumi bieži nespēj pilnvērtīgi risināt konkrētas nozares problēmas. Grāmatvedības
                  birojam ir vajadzīga precīza VID prasību ievērošana un integrācija ar Latvijas grāmatvedības programmām. E-komercijas
                  uzņēmumam ir kritiski svarīga ātra klientu apkalpošana un personalizētas rekomendācijas. Ražošanas uzņēmumam —
                  prediktīvā apkope un kvalitātes kontrole.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tieši tāpēc mēs piedāvājam nozarei specifiskus risinājumus, kas jau no pirmās dienas ir pielāgoti jūsu biznesa
                  procesiem, regulatīvajām prasībām un nozares standartiem. Tas nozīmē ātrāku ieviešanu, augstāku ROI un mazāku
                  risku.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mūsu komanda ir strādājusi ar desmitiem uzņēmumu dažādās nozarēs, un šī pieredze ļauj mums piedāvāt
                  praktiski pārbaudītus risinājumus, nevis teorētiskas koncepcijas. Katrs risinājums ir balstīts uz reāliem
                  biznesa gadījumiem un mērāmiem rezultātiem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Kā mēs strādājam ar nozarēm</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Neatkarīgi no nozares, mūsu pieeja vienmēr sākas ar jūsu biznesa procesu izpratni. Mēs neuzspiedīsim
                  tehnoloģiju — mēs atradīsim veidus, kā AI var atrisināt jūsu konkrētās problēmas.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Nozares audits',
                      desc: 'Analizējam jūsu nozares specifiskos procesus, identificējam automatizācijas iespējas un novērtējam potenciālo ietaupījumu. Salīdzinām ar nozares standartiem un labākajām praksēm.',
                    },
                    {
                      step: '2',
                      title: 'Risinājuma projektēšana',
                      desc: 'Izveidojam pielāgotu AI risinājumu, kas ievēro jūsu nozares regulatīvās prasības, integrējas ar nozarē lietotajām sistēmām un risina tieši jūsu sāpīgākos punktus.',
                    },
                    {
                      step: '3',
                      title: 'Ieviešana un apmācība',
                      desc: 'Pakāpeniski ieviesam risinājumu, sākot ar vienu procesu. Apmācām jūsu komandu un nodrošinām, ka sistēma darbojas nevainojami jūsu ikdienas darbā.',
                    },
                    {
                      step: '4',
                      title: 'Optimizācija un atbalsts',
                      desc: 'Nepārtraukti uzlabojam risinājumu, balstoties uz reālajiem datiem un jūsu atgriezenisko saiti. Nodrošinām tehnisko atbalstu un sistēmas uzturēšanu.',
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

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Neatrodat savu nozari sarakstā?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Mūsu AI risinājumi ir pielāgojami jebkurai nozarei. Sazinieties ar mums, un mēs izstrādāsim automatizācijas
                  risinājumu tieši jūsu biznesa vajadzībām — bezmaksas konsultācija bez saistībām.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      Bezmaksas konsultācija
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default Nozares;
