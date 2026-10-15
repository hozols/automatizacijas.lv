import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Ko nozīmē procesu automatizācija ar AI?',
    answer: 'Procesu automatizācija ar AI nozīmē izmantot mākslīgo intelektu, lai aizstātu manuālas, atkārtojošas darbības ar automatizētām sistēmām. Atšķirībā no vienkāršas automatizācijas, AI sistēmas var pieņemt lēmumus, pielāgoties mainīgiem apstākļiem un mācīties no pieredzes.',
  },
  {
    question: 'Kādus biznesa procesus var automatizēt?',
    answer: 'Praktiski jebkuru atkārtojošos procesu — e-pastu apstrādi un atbildēšanu, rēķinu izrakstīšanu, dokumentu ģenerēšanu, datu ievadi, klientu uzņemšanu, atskaišu veidošanu, inventāra pārvaldību, sociālo mediju publicēšanu un daudz ko citu.',
  },
  {
    question: 'Cik ātri var redzēt rezultātus pēc automatizācijas ieviešanas?',
    answer: 'Pirmie rezultāti ir redzami jau pirmajā nedēļā — ietaupītais laiks un samazinātas kļūdas. Pilnu ROI (ieguldījumu atdevi) mūsu klienti parasti sasniedz 3-6 mēnešu laikā, ar vidējo izmaksu samazinājumu 40-60%.',
  },
  {
    question: 'Vai automatizācija aizstās manus darbiniekus?',
    answer: 'Nē — automatizācija atbrīvo darbiniekus no rutīnas uzdevumiem, ļaujot viņiem fokusēties uz vērtīgāku darbu. Piemēram, grāmatvedim vairs nav jāievada dati manuāli, bet var veltīt laiku finanšu analīzei un konsultēšanai.',
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
  "name": "Biznesa Procesu Automatizācija ar AI",
  "description": "Biznesa procesu automatizācija ar mākslīgo intelektu. Samaziniet manuālo darbu līdz 80% un ietaupiet laiku ar inteliģento automatizāciju.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Business Process Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Procesu Automatizācija", "item": "https://automatizacijas.lv/procesu-automatizacija" }
  ]
};

const ProcesuAutomatizacija = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Biznesa procesu automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="E-pastu šķirošana, datu pārnešana starp sistēmām, atskaites un dokumentu ģenerēšana bez roku darba. Sākam ar bezmaksas procesu auditu." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/procesu-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/procesu-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/procesu-automatizacija" />
        <meta property="og:title" content="Biznesa procesu automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="E-pastu šķirošana, datu pārnešana starp sistēmām, atskaites un dokumentu ģenerēšana bez roku darba. Sākam ar bezmaksas procesu auditu." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Biznesa procesu automatizācija ar AI" />
        <meta name="twitter:description" content="E-pastu šķirošana, datu pārnešana starp sistēmām, atskaites un dokumentu ģenerēšana bez roku darba. Sākam ar bezmaksas procesu auditu." />
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
            { label: 'Procesu Automatizācija' },
          ]}
        />

        <PageHero
          vignette="merchant-van-dyck"
          title="Biznesa procesu automatizācija ar AI"
          lede={
            <>
              Automatizējam jūsu biznesa procesus ar AI, no e-pastu apstrādes līdz pilnai darba plūsmu vadībai.
              Mūsu klienti <strong>ietaupa vidēji 15-25 stundas nedēļā</strong> katram darbiniekam un samazina
              operacionālās izmaksas par 40-60%.
            </>
          }
          facts={['80% mazāk manuāla darba', '15-25h ietaupītas nedēļā', '3-6 mēn. ROI periods', '99.9% precizitāte']}
        />

        <article>
          <Section title="Procesus, ko automatizējam">
            <RuledList
              items={[
                { title: 'E-pastu apstrāde un atbildēšana', desc: 'AI automātiski kategorizē ienākošos e-pastus, sagatavo atbilžu melnrakstus un novirza ziņojumus pie atbildīgajām personām. Steidzami pieprasījumi tiek atzīmēti un apstrādāti prioritāri.' },
                { title: 'Dokumentu ģenerēšana un apstrāde', desc: 'Automātiska līgumu, piedāvājumu, atskaišu un rēķinu ģenerēšana. AI aizpilda veidnes ar datiem no jūsu sistēmām un nodrošina konsekventu formatējumu un precizitāti.' },
                { title: 'Datu apkopošana un atskaites', desc: 'AI apkopo datus no dažādām sistēmām, izveido automātiskas atskaites un brīdina par nozīmīgām izmaiņām. Vairs nav vajadzīga stundu ilga manuāla datu apstrāde.' },
                { title: 'Darba plūsmu automatizācija', desc: 'No klienta pieprasījuma līdz gala rezultātam: automatizējam visu ķēdi. Piemēram: klients aizpilda formu → sistēma izveido uzdevumu → piešķir darbiniekam → nosūta apstiprinājumu klientam.' },
                { title: 'CRM un pārdošanas automatizācija', desc: 'Automātiska līdu kvalificēšana, follow-up e-pasti, tikšanās plānošana un pārdošanas piltuves pārvaldība. AI palīdz pārdošanas komandai fokusēties uz perspektīvākajiem klientiem.' },
              ]}
            />
          </Section>

          <Section title="Kā mēs strādājam" tone="sheet">
            <Steps
              items={[
                { title: 'Procesu audits', desc: 'Kartējam jūsu esošos biznesa procesus, identificējam šaurās vietas un noteicam, kur automatizācija dos vislielāko atdevi.' },
                { title: 'Risinājuma projektēšana', desc: 'Izstrādājam automatizācijas arhitektūru: kādas sistēmas tiks integrētas, kādi procesi automatizēti un kādus KPI sekosim.' },
                { title: 'Ieviešana un testēšana', desc: 'Pakāpeniski ievietojam automatizāciju, testējam ar reāliem datiem un pārliecināmies, ka viss darbojas pareizi.' },
                { title: 'Optimizācija un paplašināšana', desc: 'Monitorējam rezultātus, optimizējam procesus un paplašinām automatizāciju uz jaunām jomām, kad esošā ir nostabilizējusies.' },
              ]}
            />
          </Section>

          <Section title="Biežāk uzdotie jautājumi">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie resursi" tone="sheet">
            <RuledList
              items={[
                { to: '/kas-ir-maksligais-intelekts', title: 'Kas ir mākslīgais intelekts?', desc: 'Pilns ceļvedis par MI tehnoloģijām' },
                { to: '/chatbotu-izstrade', title: 'AI Čatbotu Izstrāde', desc: 'Inteliģenti čatboti klientu apkalpošanai' },
                { to: '/majaslapu-izstrade', title: 'Mājaslapu Izstrāde', desc: 'Modernas mājas lapas ar AI integrāciju' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Automatizēsim jūsu biznesa procesus"
          text="Sāksim ar bezmaksas procesu auditu: identificēsim, kur automatizācija dos vislielāko atdevi."
          primary={{ to: '/contact', label: 'Bezmaksas procesu audits' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default ProcesuAutomatizacija;
