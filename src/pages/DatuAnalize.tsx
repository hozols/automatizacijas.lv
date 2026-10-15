import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Kādus datus var analizēt ar AI?',
    answer: 'AI var analizēt praktiski jebkāda veida strukturētus un nestrukturētus datus — pārdošanas datus, klientu uzvedību, finanšu rādītājus, mārketinga kampaņu rezultātus, inventāra datus, darbinieku produktivitāti un daudz ko citu. Sistēma spēj apstrādāt datus no dažādiem avotiem vienlaicīgi.',
  },
  {
    question: 'Cik ilgi aizņem datu analīzes sistēmas ieviešana?',
    answer: 'Pamata dashbordu un atskaišu ieviešana aizņem 2-4 nedēļas. Pilna biznesa inteliģences platforma ar prognozēšanas iespējām parasti tiek ieviesta 6-10 nedēļu laikā. Pirmās automātiskās atskaites jūs saņemsiet jau pirmajā nedēļā.',
  },
  {
    question: 'Vai man ir nepieciešams datu analītiķis komandā?',
    answer: 'Nē — mūsu AI vadītā sistēma ir projektēta tā, lai to varētu izmantot jebkurš darbinieks bez tehniskām zināšanām. Dashbordi ir intuitīvi, atskaites tiek ģenerētas automātiski, un sistēma pati izceļ svarīgākos ieskatus un anomālijas.',
  },
  {
    question: 'Kā nodrošināt datu drošību?',
    answer: 'Mēs izmantojam industrijas standarta šifrēšanu (AES-256), datu piekļuves kontroli ar lomu sistēmu un regulārus drošības auditus. Visi dati tiek glabāti ES serveros saskaņā ar GDPR prasībām. Jūsu dati nekad netiek izmantoti citu klientu modeļu apmācībai.',
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
  "name": "Datu Analīze un Biznesa Inteliģence ar AI",
  "description": "AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija. Pieņemiet lēmumus ar datiem.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Data Analytics and Business Intelligence"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Datu Analīze", "item": "https://automatizacijas.lv/datu-analize" }
  ]
};

const DatuAnalize = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Datu analīze un atskaites ar AI | automatizacijas.lv</title>
        <meta name="description" content="Automātiskas atskaites, tendenču analīze un prognozes no datiem, kas jums jau ir. Lēmumi bez Excel nakšu darba." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/datu-analize" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/datu-analize" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/datu-analize" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/datu-analize" />
        <meta property="og:title" content="Datu analīze un atskaites ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Automātiskas atskaites, tendenču analīze un prognozes no datiem, kas jums jau ir. Lēmumi bez Excel nakšu darba." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datu analīze un atskaites ar AI" />
        <meta name="twitter:description" content="Automātiskas atskaites, tendenču analīze un prognozes no datiem, kas jums jau ir. Lēmumi bez Excel nakšu darba." />
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
            { label: 'Datu Analīze' },
          ]}
        />

        <PageHero
          title="Datu analīze un atskaites ar AI"
          lede={
            <>
              Pārvērtiet savus biznesa datus par vērtīgiem ieskatiem un gudrākiem lēmumiem. Mūsu AI vadītā analītika
              apstrādā miljoniem datu punktu sekundēs, automātiski atklājot tendences, anomālijas un iespējas,
              ko <strong>cilvēka acs vienkārši nepamanītu</strong>.
            </>
          }
          facts={['3x ātrāki lēmumi', '24/7 reāllaika dati', 'No €349/mēn', '100% pielāgotas atskaites']}
        />

        <article>
          <Section title="Kāpēc AI vadīta datu analīze?">
            <Prose>
              <p>
                Lielākā daļa uzņēmumu saskaras ar vieniem un tiem pašiem izaicinājumiem: atskaišu sagatavošana aizņem
                stundas vai pat dienas, dati ir izkaisīti pa dažādām sistēmām, un lēmumi tiek pieņemti uz intuīcijas,
                nevis faktu pamata. Tikmēr konkurenti, kas izmanto datu analīzi, pieņem labākus lēmumus ātrāk.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  { title: 'Lēna atskaišu sagatavošana', desc: 'Darbinieki pavada stundas, manuāli apkopojot datus no dažādām sistēmām, lai izveidotu vienu atskaiti.' },
                  { title: 'Cilvēciskās kļūdas', desc: 'Manuāla datu apstrāde neizbēgami noved pie kļūdām, kas var maksāt tūkstošiem eiro nepareizu lēmumu dēļ.' },
                  { title: 'Novēloti lēmumi', desc: 'Kad atskaite ir gatava, dati jau ir novecojuši. Tirgus situācija ir mainījusies, un iespēja ir zaudēta.' },
                ]}
              />
            </div>
            <Prose className="mt-8">
              <p>
                AI vadīta datu analīze atrisina visas šīs problēmas vienlaicīgi. Sistēma automātiski apkopo datus no
                visām jūsu biznesa sistēmām, analizē tos reāllaikā un pasniedz gatavus ieskatus saprotamā vizuālā
                formātā, bez jebkādas manuālas iejaukšanās.
              </p>
            </Prose>
          </Section>

          <Section title="Ko mēs piedāvājam" tone="sheet">
            <RuledList
              items={[
                {
                  title: 'Automātiskas atskaites un dashbordi',
                  desc: 'Izveidojam interaktīvus dashbordus, kas atjaunojas reāllaikā. Ikdienas, iknedēļas un ikmēneša atskaites tiek ģenerētas un nosūtītas automātiski, jums tikai jāatver un jāizlasa. Katrs dashbords tiek pielāgots jūsu biznesa vajadzībām un lomai uzņēmumā.',
                },
                {
                  title: 'Tendenču analīze un prognozēšana',
                  desc: 'AI algoritmi analizē vēsturiskos datus, identificē tendences un ģenerē prognozes par nākotnes rādītājiem. Prognozējiet pārdošanas apjomus, pieprasījuma svārstības, sezonālās tendences un potenciālos riskus pirms tie kļūst par problēmām.',
                },
                {
                  title: 'Klientu uzvedības analīze',
                  desc: 'Izprotiet savus klientus dziļāk: kuri segmenti ir visrentablākie, kas ietekmē pirkuma lēmumu, kāpēc klienti aiziet un kā palielināt klientu mūža vērtību. AI atklāj slēptus modeļus, ko tradicionāla analīze nespēj.',
                },
                {
                  title: 'Finanšu datu analīze',
                  desc: 'Automatizēta finanšu atskaišu sagatavošana, naudas plūsmas prognozēšana, izmaksu optimizācijas ieteikumi un budžeta izpildes monitorings. Integrējam ar jūsu grāmatvedības sistēmu, lai dati vienmēr būtu aktuāli.',
                },
                {
                  title: 'Pārdošanas un mārketinga analītika',
                  desc: 'Sekojiet līdzi kampaņu ROI, konversijas rādītājiem, klientu piesaistes izmaksām un pārdošanas piltuves efektivitātei. AI automātiski identificē labākos kanālus un sniedz rekomendācijas budžeta pārdalei.',
                },
              ]}
            />
          </Section>

          <Section title="Integrācijas ar biznesa sistēmām">
            <Prose>
              <p>
                Datu analīze ir efektīva tikai tad, kad tā aptver visus jūsu biznesa datus. Tāpēc mēs nodrošinām
                nevainojamu integrāciju ar visām populārākajām biznesa sistēmām: dati tiek sinhronizēti automātiski,
                un jūs redzat pilnu ainu vienā vietā.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                columns={2}
                items={[
                  { title: 'CRM sistēmas', desc: 'Salesforce, HubSpot, Pipedrive un citas CRM platformas: klientu dati, darījumu vēsture un pārdošanas pipeline vienā skatā.' },
                  { title: 'ERP sistēmas', desc: 'SAP, Microsoft Dynamics, 1C un citas ERP: ražošanas, loģistikas un resursu dati integrēti ar analītiku.' },
                  { title: 'E-komercijas platformas', desc: 'Shopify, WooCommerce, Magento: pārdošanas dati, klientu uzvedība un produktu veiktspēja reāllaikā.' },
                  { title: 'Grāmatvedības sistēmas', desc: 'Jumis, Horizon, Tildes un citas sistēmas: finanšu dati automātiski integrēti ar biznesa analītiku.' },
                ]}
              />
            </div>
            <Prose className="mt-8">
              <p>
                Jūsu sistēma nav sarakstā? Mēs varam integrēt praktiski jebkuru sistēmu, kurai ir API vai datu
                eksporta iespēja.{' '}
                <Link to="/contact" className="link">Sazinieties ar mums</Link>, lai uzzinātu vairāk.
              </p>
            </Prose>
          </Section>

          <Section title="Kā sākt ar datu analīzi" tone="sheet">
            <Steps
              items={[
                { title: 'Datu audits un mērķu noteikšana', desc: 'Izanalizējam jūsu esošos datu avotus, identificējam galvenās biznesa metrikas un nosakām, kādi ieskati jums ir visvērtīgākie. Kopā definējam KPI un vēlamos rezultātus.' },
                { title: 'Datu integrācija un sagatavošana', desc: 'Savienojam jūsu biznesa sistēmas, izveidojam datu plūsmas un nodrošinām datu kvalitāti. Šajā posmā arī notiek datu tīrīšana un standartizācija.' },
                { title: 'Dashbordu izveide un AI konfigurācija', desc: 'Izveidojam pielāgotus dashbordus un atskaites, konfigurējam AI analīzes modeļus un iestatām automātiskos brīdinājumus par svarīgām datu izmaiņām.' },
                { title: 'Apmācība un optimizācija', desc: 'Apmācām jūsu komandu sistēmas lietošanā, optimizējam dashbordus pēc pirmajām lietošanas nedēļām un paplašinām analīzi, kad sistēma ir iedzīvojusies.' },
              ]}
            />
          </Section>

          <Section title="Biežāk uzdotie jautājumi">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi" tone="sheet">
            <RuledList
              items={[
                { to: '/ai-platformu-izstrade', title: 'AI Platformu Izstrāde', desc: 'Pielāgotas AI platformas jūsu biznesam' },
                { to: '/gramatvedibas-automatizacija', title: 'Grāmatvedības Automatizācija', desc: 'Finanšu procesu automatizācija ar AI' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Biznesa procesu automatizācija ar MI' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Sāciet pieņemt lēmumus ar datiem"
          text="Pieteikties bezmaksas datu audits: noskaidrosim, kā AI analītika var uzlabot jūsu biznesa rezultātus."
          primary={{ to: '/contact', label: 'Bezmaksas datu audits' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default DatuAnalize;
