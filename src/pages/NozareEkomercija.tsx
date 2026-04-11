import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ChevronDown, ShoppingCart, MessageSquare, Package, TrendingUp, ArrowRight, CheckCircle, Clock, Zap, Shield, Star, BarChart3 } from 'lucide-react';

const faqs = [
  {
    question: 'Cik ātri AI chatbots var sākt apkalpot klientus?',
    answer: 'Pamata AI chatbotu e-komercijas veikalam var ieviest 1-2 nedēļu laikā. Chatbots tiek apmācīts ar jūsu produktu katalogu, biežāk uzdotajiem jautājumiem un atgriešanas politiku. Sarežģītāks risinājums ar pasūtījumu izsekošanu un personalizētām rekomendācijām prasa 3-4 nedēļas.',
  },
  {
    question: 'Vai AI rekomendācijas tiešām palielina pārdošanas apjomu?',
    answer: 'Jā, personalizētas AI rekomendācijas vidēji palielina vidējo pasūtījuma vērtību par 15-35%. Sistēma analizē klientu pirkšanas vēsturi, pārlūkošanas paradumus un līdzīgu klientu uzvedību, lai piedāvātu atbilstošākos produktus. Tas ir līdzīgi tam, kā pieredzējis pārdevējs pazīst katra klienta gaumi.',
  },
  {
    question: 'Kā AI palīdz ar pamesto grozu problēmu?',
    answer: 'AI analizē, kāpēc klienti pamet grozus — vai tā ir augsta piegādes cena, sarežģīts checkout process vai vienkārši aizmāršība. Balstoties uz to, sistēma automātiski sūta personalizētus atgādinājumus ar īpašiem piedāvājumiem. Vidēji tas atgūst 10-20% no pamestajiem groziem.',
  },
  {
    question: 'Vai AI risinājumi darbojas ar Shopify, WooCommerce un citām platformām?',
    answer: 'Jā, mūsu risinājumi integrējas ar visām populārākajām e-komercijas platformām — Shopify, WooCommerce, Magento, PrestaShop, kā arī pielāgotām platformām. Integrācija notiek caur API, un datu apmaiņa ir automātiska un reāllaikā.',
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
  "name": "AI Automatizācija E-komercijai",
  "description": "AI risinājumi e-komercijas uzņēmumiem — chatboti, pasūtījumu apstrāde, krājumu pārvaldība, personalizētas rekomendācijas un pamesto grozu atgūšana.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "E-commerce AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "E-komercija", "item": "https://automatizacijas.lv/nozares/e-komercija" }
  ]
};

const NozareEkomercija = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija E-komercijai | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi e-komercijas uzņēmumiem — chatboti klientu apkalpošanai, pasūtījumu automatizācija, personalizētas rekomendācijas un pamesto grozu atgūšana." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/e-komercija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/e-komercija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/e-komercija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/e-komercija" />
        <meta property="og:title" content="AI Automatizācija E-komercijai | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi e-komercijas uzņēmumiem — chatboti, pasūtījumu apstrāde, personalizētas rekomendācijas." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija E-komercijai" />
        <meta name="twitter:description" content="AI risinājumi e-komercijas uzņēmumiem Latvijā." />
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
            <span className="text-foreground">E-komercija</span>
          </nav>

          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI Risinājumi E-komercijas Uzņēmumiem
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                E-komercijas nozarē konkurence ir sīva, un klientu gaidas nemitīgi aug. AI automatizācija ļauj jums <strong className="text-foreground">apkalpot
                klientus 24/7, personalizēt iepirkšanās pieredzi un automatizēt operatīvos procesus</strong> — vienlaikus samazinot
                izmaksas un palielinot pārdošanas apjomu.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: MessageSquare, label: '24/7 klientu apkalpošana' },
                  { icon: TrendingUp, label: '+25% konversija' },
                  { icon: Clock, label: '60% ātrāka apstrāde' },
                  { icon: Star, label: 'Personalizēta pieredze' },
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">E-komercijas izaicinājumi Latvijā</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Latvijas e-komercijas tirgus strauji aug — pēdējo gadu laikā tiešsaistes pirkumu apjoms ir dubultojies.
                  Tomēr līdz ar izaugsmi pieaug arī izaicinājumi. Klienti sagaida tūlītējas atbildes, ātru piegādi un
                  personalizētu pieredzi. Konkurence no starptautiskiem tirgotājiem spiež Latvijas e-veikalus meklēt veidus,
                  kā darīt vairāk ar mazākiem resursiem.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Daudzi e-komercijas uzņēmumi joprojām apstrādā pasūtījumus manuāli, atbild uz klientu jautājumiem e-pastā
                  ar kavēšanos un zaudē potenciālos klientus, jo nespēj nodrošināt atbalstu ārpus darba laika. Šīs problēmas
                  ir atrisināmas ar AI — un rezultāti ir redzami jau pirmajā mēnesī.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Klienti gaida atbildes stundām — un aiziet pie konkurenta, kas atbild ātrāk',
                    'Manuāla pasūtījumu apstrāde un statusa atjaunināšana prasa daudz laika',
                    'Pamestie grozi veido 60-80% no visiem sāktajiem pirkumiem',
                    'Produktu aprakstu rakstīšana simtiem vai tūkstošiem preču ir milzīgs darbs',
                    'Krājumu pārvaldība bez prognozēšanas rada vai nu pārpalikumus, vai deficītu',
                    'Klientu atsauksmju un atgriešanas pieprasījumu apstrāde aizņem daudz resursu',
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI risinājumi e-komercijas veikaliem</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mūsu AI risinājumi aptver visu e-komercijas ciklu — no klientu piesaistes līdz pēcpārdošanas apkalpošanai.
                  Katrs modulis darbojas gan atsevišķi, gan kā daļa no integrētas sistēmas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: 'AI chatboti klientu apkalpošanai',
                      desc: 'Inteliģents chatbots, kas atbild uz klientu jautājumiem 24/7 latviešu, angļu un krievu valodā. Palīdz ar produktu izvēli, pasūtījumu izsekošanu, atgriešanas procesu un bieži uzdotajiem jautājumiem. Sarežģītus jautājumus automātiski nodod cilvēkam ar pilnu kontekstu.',
                    },
                    {
                      icon: Package,
                      title: 'Pasūtījumu automatizācija',
                      desc: 'Automātiska pasūtījumu apstrāde no saņemšanas līdz nosūtīšanai. AI pārbauda maksājumu statusu, ģenerē pavadzīmes, atjaunina krājumus un informē klientu par statusu. Samazina pasūtījuma apstrādes laiku no stundām uz minūtēm.',
                    },
                    {
                      icon: Star,
                      title: 'Personalizētas rekomendācijas',
                      desc: 'AI analizē klienta pirkšanas vēsturi, pārlūkošanas uzvedību un līdzīgu klientu datus, lai piedāvātu visprecīzākās produktu rekomendācijas. "Klienti, kas pirka šo, arī iegādājās..." — bet daudz gudrāk un precīzāk nekā vienkāršs algoritms.',
                    },
                    {
                      icon: ShoppingCart,
                      title: 'Pamesto grozu atgūšana',
                      desc: 'AI identificē pamesto grozu iemeslus un automātiski sūta personalizētus atgādinājumus. Pirmais atgādinājums pēc 1 stundas, otrais ar īpašu piedāvājumu pēc 24 stundām. Vidēji atgūst 10-20% pamesto grozu, kas ir tieša ieņēmumu palielināšana.',
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Krājumu pārvaldība ar AI</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI prognozē pieprasījumu, balstoties uz vēsturiskajiem datiem, sezonalitāti un tirgus tendencēm.
                      Automātiski brīdina par zemiem krājumiem, iesaka pasūtīšanas apjomus un laiku. Samazina gan
                      pārpalikumu izmaksas, gan zaudētos pārdošanas gadījumus deficīta dēļ.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-border bg-card/60">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Automātiski produktu apraksti</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI ģenerē unikālus, SEO optimizētus produktu aprakstus latviešu valodā. Ielādējiet produkta
                      specifikācijas un fotoattēlus — AI izveido pārdošanas tekstu, atslēgas vārdus un meta aprakstus.
                      Ideāli veikaliem ar simtiem vai tūkstošiem produktu.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rezultāti */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Rezultāti e-komercijā</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  E-komercijas uzņēmumi, kas ievieš AI automatizāciju, redz tūlītēju ietekmi uz pārdošanas rādītājiem
                  un klientu apmierinātību. Šeit ir tipiski rezultāti.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '+25%', label: 'Konversijas pieaugums', desc: 'ar personalizāciju' },
                    { value: '15-20%', label: 'Grozu atgūšana', desc: 'no pamestajiem groziem' },
                    { value: '80%', label: 'Jautājumu atbildēti', desc: 'bez cilvēka iesaistes' },
                    { value: '3x', label: 'Ātrāka apkalpošana', desc: 'klientu jautājumiem' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-lg border border-border bg-card/60 text-center">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                      <p className="font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Uzziniet vairāk par mūsu{' '}
                  <Link to="/chatbotu-izstrade" className="text-primary hover:underline">AI chatbotu izstrādi</Link>{' '}
                  un{' '}
                  <Link to="/procesu-automatizacija" className="text-primary hover:underline">procesu automatizācijas</Link> pakalpojumiem.
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
                    <h3 className="font-medium text-foreground text-sm mb-1">Chatbotu Izstrāde</h3>
                    <p className="text-xs text-muted-foreground">AI chatboti klientu apkalpošanai un pārdošanai</p>
                  </Link>
                  <Link to="/procesu-automatizacija" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Procesu Automatizācija</h3>
                    <p className="text-xs text-muted-foreground">Biznesa procesu optimizācija un automatizācija</p>
                  </Link>
                  <Link to="/datu-analize" className="p-4 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors group">
                    <h3 className="font-medium text-foreground text-sm mb-1">Datu Analīze</h3>
                    <p className="text-xs text-muted-foreground">Pārdošanas datu analīze un prognozēšana</p>
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Palieliniet e-veikala pārdošanas apjomu ar AI</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Bezmaksas konsultācijā analizēsim jūsu e-veikala procesus un parādīsim, kā AI var palielināt konversiju,
                  uzlabot klientu pieredzi un samazināt operatīvās izmaksas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <ShoppingCart className="h-4 w-4 mr-2" />
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

export default NozareEkomercija;
