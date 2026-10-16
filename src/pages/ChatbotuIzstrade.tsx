import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik ilgi aizņem AI čatbota izstrāde?',
    answer: 'Pamata čatbots ar biežāk uzdotajiem jautājumiem ir gatavs 1-2 nedēļās. Sarežģītāks čatbots ar CRM integrāciju, daudzvalodu atbalstu un pielāgotu loģiku — 3-6 nedēļas. Sākam ar jūsu vajadzību analīzi un izveidojam detalizētu projekta plānu.',
  },
  {
    question: 'Vai čatbots var strādāt latviešu valodā?',
    answer: 'Jā, mūsu čatboti pilnībā atbalsta latviešu valodu. Izmantojam jaunākos valodas modeļus, kas nodrošina dabīgu komunikāciju latviski. Čatbots var arī automātiski pārslēgties starp valodām — piemēram, latviešu, angļu un krievu.',
  },
  {
    question: 'Cik maksā AI čatbota izstrāde?',
    answer: 'Cenas sākas no €299/mēnesī par pamata čatbotu. Pielāgoti risinājumi ar integrācijām un papildu funkcijām sākas no €699/mēnesī. Piedāvājam bezmaksas konsultāciju un detalizētu tāmi pirms projekta uzsākšanas.',
  },
  {
    question: 'Vai čatbots var integrēties ar manu esošo sistēmu?',
    answer: 'Jā, mūsu čatboti integrējas ar populārākajām platformām — Shopify, WordPress, WooCommerce, CRM sistēmām (HubSpot, Pipedrive), e-pasta sistēmām un citiem rīkiem. Izmantojam API integrācijas, lai nodrošinātu netraucētu datu plūsmu.',
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
  "name": "AI Čatbotu Izstrāde",
  "description": "Profesionāla AI čatbotu izstrāde uzņēmumiem Latvijā. Inteliģenti čatboti klientu apkalpošanai, pārdošanas automatizācijai un iekšējai komunikācijai.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Chatbot Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Čatbotu Izstrāde", "item": "https://automatizacijas.lv/chatbotu-izstrade" }
  ]
};

const ChatbotuIzstrade = () => {

  return (
    <PageTransition>
      <Helmet>
        <title>AI čatbota izstrāde latviešu valodā | automatizacijas.lv</title>
        <meta name="description" content="Čatbots, kas atbild klientiem latviski 24/7, pieslēdzas CRM un mājaslapai. Pamata versija gatava 1 līdz 2 nedēļās." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/chatbotu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/chatbotu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/chatbotu-izstrade" />
        <meta property="og:title" content="AI čatbota izstrāde latviešu valodā | automatizacijas.lv" />
        <meta property="og:description" content="Čatbots, kas atbild klientiem latviski 24/7, pieslēdzas CRM un mājaslapai. Pamata versija gatava 1 līdz 2 nedēļās." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI čatbota izstrāde latviešu valodā" />
        <meta name="twitter:description" content="Čatbots, kas atbild klientiem latviski 24/7, pieslēdzas CRM un mājaslapai. Pamata versija gatava 1 līdz 2 nedēļās." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs
          items={[
            { label: 'Sākums', to: '/' },
            { label: 'Pakalpojumi', to: '/services' },
            { label: 'AI Čatbotu Izstrāde' },
          ]}
        />

        <PageHero
          vignette="telephone"
          title="AI čatbota izstrāde latviešu valodā"
          lede={
            <>
              Izveidojam inteliģentus AI čatbotus, kas apkalpo jūsu klientus <strong>24/7 latviešu valodā</strong>.
              Mūsu čatboti atbild uz jautājumiem, palīdz ar produktu izvēli, pieņem pasūtījumus un novirza
              sarežģītākus pieprasījumus pie speciālistiem, viss pilnīgi automātiski.
            </>
          }
          facts={['24/7 pieejams', 'Latviešu valodā', '85% auto-atbildes', 'GDPR atbilstīgs']}
        />

        <article>
          <Section title="Kāpēc AI čatbots jūsu biznesam?">
            <Prose>
              <p>
                Tradicionāli klientu apkalpošana prasa daudz darbinieku laika un resursu. AI čatbots to
                fundamentāli maina: tas nekad nepieprasa brīvdienas, nekļūst noguris un spēj vienlaicīgi apkalpot
                simtiem klientu.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Samazina klientu atbildes laiku no stundām uz sekundēm',
                'Ietaupa līdz 60% no klientu apkalpošanas izmaksām',
                'Palielina klientu apmierinātību par 40-70%',
                'Uztver un kvalificē potenciālos klientus (leads) automātiski',
                'Integrējas ar jūsu esošo CRM, e-veikalu vai mājas lapu',
                'Mācās no katras sarunas un kļūst gudrāks laika gaitā',
              ]}
            />
          </Section>

          <Section title="Čatbotu veidi, ko piedāvājam" tone="sheet">
            <RuledList
              items={[
                { title: 'Klientu atbalsta čatbots', desc: 'Atbild uz biežāk uzdotajiem jautājumiem, palīdz ar problēmu risināšanu un novirza pie speciālistiem ja nepieciešams. Ideāls e-veikaliem un pakalpojumu uzņēmumiem.' },
                { title: 'Pārdošanas čatbots', desc: 'Kvalificē potenciālos klientus, iesaka produktus un palīdz ar pirkuma procesu. Palielina konversijas un vidējo pasūtījuma vērtību.' },
                { title: 'Iekšējais AI asistents', desc: 'Palīdz darbiniekiem atrast informāciju, atbildēt uz procedūru jautājumiem un automatizēt rutīnas uzdevumus. Ietaupa komandas laiku katru dienu.' },
                { title: 'Daudzvalodu čatbots', desc: 'Automātiski atpazīst klienta valodu un atbild latviski, angliski vai krieviski. Ideāls uzņēmumiem ar starptautiskajiem klientiem.' },
              ]}
            />
          </Section>

          <Section title="Kā notiek čatbota izstrāde?">
            <Steps
              items={[
                { title: 'Konsultācija un analīze', desc: 'Izpētām jūsu biznesa vajadzības, klientu tipiskos jautājumus un esošos procesus. Definējam čatbota mērķus un funkcionalitāti.' },
                { title: 'Dizains un apmācība', desc: 'Veidojam sarunu scenārijus, apmācām MI modeli uz jūsu specifisko saturu un integrējam ar nepieciešamajām sistēmām.' },
                { title: 'Testēšana un palaišana', desc: 'Rūpīgi testējam čatbotu ar reāliem scenārijiem, veicam korekcijas un palaidam produkcijā.' },
                { title: 'Uzturēšana un optimizācija', desc: 'Nepārtraukti uzraugām čatbota veiktspēju, analizējam sarunas un uzlabojam atbildes kvalitāti.' },
              ]}
            />
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie resursi">
            <RuledList
              items={[
                { to: '/kas-ir-maksligais-intelekts', title: 'Kas ir mākslīgais intelekts?', desc: 'Pilns ceļvedis par MI tehnoloģijām' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Automatizējiet biznesa procesus ar AI' },
                { to: '/majaslapu-izstrade', title: 'Mājaslapu Izstrāde', desc: 'Modernas mājas lapas ar AI integrāciju' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Izveidosim čatbotu jūsu biznesam"
          text="Bezmaksas konsultācijā novērtēsim jūsu vajadzības un piedāvāsim optimālo risinājumu."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default ChatbotuIzstrade;
