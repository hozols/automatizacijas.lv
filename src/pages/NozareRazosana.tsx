import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Vai AI kvalitātes kontrole var aizstāt vizuālo pārbaudi?',
    answer: 'AI datorredze veic vizuālo pārbaudi ātrāk un precīzāk nekā cilvēks — tā spēj atklāt defektus, kas nav redzami ar neapbruņotu aci. Tomēr sākotnēji iesakām paralēlu darbību, kur AI un cilvēks strādā kopā, pakāpeniski palielinot AI autonomiju, kad sistēma ir pierādījusi savu precizitāti jūsu specifiskajos apstākļos.',
  },
  {
    question: 'Cik daudz datu ir vajadzīgi prediktīvās apkopes ieviešanai?',
    answer: 'Ideālā gadījumā — vismaz 6-12 mēnešu vēsturiskie dati par iekārtu darbību un apkopes gadījumiem. Tomēr mēs varam sākt arī ar mazāku datu apjomu, izmantojot nozares etalonu modeļus un pakāpeniski pielāgojot tos jūsu iekārtu specifikai. Jo ilgāk sistēma darbojas, jo precīzākas kļūst prognozes.',
  },
  {
    question: 'Kā AI palīdz piegādes ķēžu optimizācijā?',
    answer: 'AI analizē vēsturiskos pieprasījuma datus, sezonālās svārstības, piegādātāju veiktspēju un ārējos faktorus (piemēram, izejvielu cenas). Balstoties uz to, sistēma prognozē nepieciešamo materiālu apjomu, optimālo pasūtīšanas laiku un identificē riskus piegādes ķēdē pirms tie rada problēmas.',
  },
  {
    question: 'Vai AI risinājumi darbojas ar vecākām iekārtām?',
    answer: 'Jā, mūsu risinājumi ir pielāgojami dažāda vecuma iekārtām. Vecākām iekārtām uzstādām IoT sensorus, kas nodrošina nepieciešamos datus. Jaunākām iekārtām bieži jau ir iebūvēti sensori, un mēs vienkārši integrējam esošos datu avotus. Katrs risinājums tiek pielāgots jūsu ražotnes specifikai.',
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
  "name": "AI Automatizācija Ražošanas Uzņēmumiem",
  "description": "AI risinājumi ražošanas nozarei — kvalitātes kontrole, prediktīvā apkope, piegādes ķēžu optimizācija, ražošanas plānošana un dokumentu pārvaldība.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Manufacturing AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Ražošana", "item": "https://automatizacijas.lv/nozares/razosana" }
  ]
};

const NozareRazosana = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI automatizācija ražošanai | automatizacijas.lv</title>
        <meta name="description" content="Kvalitātes kontrole, pasūtījumu dokumenti un piegādes ķēdes dati ar AI ražošanas uzņēmumos Latvijā." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/razosana" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/razosana" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/razosana" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/razosana" />
        <meta property="og:title" content="AI automatizācija ražošanai | automatizacijas.lv" />
        <meta property="og:description" content="Kvalitātes kontrole, pasūtījumu dokumenti un piegādes ķēdes dati ar AI ražošanas uzņēmumos Latvijā." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI automatizācija ražošanai" />
        <meta name="twitter:description" content="Kvalitātes kontrole, pasūtījumu dokumenti un piegādes ķēdes dati ar AI ražošanas uzņēmumos Latvijā." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs
          items={[
            { label: 'Sākums', to: '/' },
            { label: 'Nozares', to: '/nozares' },
            { label: 'Ražošana' },
          ]}
        />

        <PageHero
          vignette="desk-lamp"
          title="AI automatizācija ražošanas uzņēmumiem"
          lede={
            <>
              Latvijas ražošanas uzņēmumi saskaras ar augošu konkurenci, darbaspēka trūkumu un prasību pēc augstākas kvalitātes.
              AI tehnoloģijas ļauj <strong>automatizēt kvalitātes kontroli, prognozēt iekārtu apkopi,
              optimizēt piegādes ķēdes un uzlabot ražošanas plānošanu</strong>, padarot jūsu ražotni gudrāku un efektīvāku.
            </>
          }
          facts={['99.8% defektu atklāšana', '-40% neplānotas dīkstāves', '+20% ražošanas efektivitāte', 'ISO atbilstība']}
        />

        <article>
          <Section title="Ražošanas nozares izaicinājumi">
            <Prose>
              <p>
                Latvijas ražošanas sektors ir viens no ekonomikas stūrakmeņiem, tomēr tas saskaras ar nopietniem izaicinājumiem.
                Darbaspēka trūkums, augošās enerģijas un izejvielu izmaksas, un starptautiskā konkurence spiež uzņēmumus
                meklēt jaunus efektivitātes avotus. AI tehnoloģijas piedāvā konkrētus risinājumus šīm problēmām.
              </p>
              <p>
                Ražošanas uzņēmumiem Latvijā bieži ir ierobežoti resursi digitālajai transformācijai, un daudzi procesi joprojām
                balstās uz pieredzējušu darbinieku zināšanām un manuālu pārbaudi. Kad šie darbinieki aiziet pensijā, zināšanas
                pazūd. AI ļauj šīs zināšanas digitalizēt un padarīt pieejamas visai organizācijai.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Manuāla kvalitātes kontrole ir lēna un atkarīga no darbinieka pieredzes',
                'Neplānotas iekārtu dīkstāves rada tiešus finansiālus zaudējumus',
                'Piegādes ķēžu traucējumi kavē ražošanu un palielina izmaksas',
                'Ražošanas plānošana bez precīziem datiem rada neefektivitāti',
                'Dokumentu pārvaldība (kvalitātes sertifikāti, specifikācijas) ir haotiska',
                'Enerģijas patēriņa optimizācija prasa detalizētu datu analīzi',
              ]}
            />
          </Section>

          <Section
            title="AI risinājumi ražošanai"
            tone="sheet"
            intro="Mūsu AI risinājumi ražošanas nozarei aptver visu ražošanas ciklu, no izejvielu piegādes līdz gatavās produkcijas kvalitātes kontrolei. Sistēmas ir pielāgotas Latvijas ražošanas uzņēmumu specifikai un mērogam."
          >
            <RuledList
              items={[
                {
                  title: 'Kvalitātes kontrole ar datorredzi',
                  desc: 'AI datorredzes sistēma reāllaikā pārbauda produktu kvalitāti ražošanas līnijā. Atklāj defektus, izmēru novirzes un virsmas bojājumus ar 99.8% precizitāti, daudz augstāku nekā manuālā pārbaude. Sistēma mācās no katras pārbaudes un kļūst arvien precīzāka.',
                },
                {
                  title: 'Prediktīvā apkope',
                  desc: 'AI analizē iekārtu sensoru datus (vibrācija, temperatūra, skaņa, enerģijas patēriņš) un prognozē iespējamos bojājumus pirms tie notiek. Sistēma brīdina par nepieciešamo apkopi 2-4 nedēļas iepriekš, ļaujot plānot remontu bez ražošanas pārtraukuma.',
                },
                {
                  title: 'Piegādes ķēžu optimizācija',
                  desc: 'AI prognozē izejvielu pieprasījumu, analizē piegādātāju veiktspēju un identificē riskus piegādes ķēdē. Automātiski iesaka optimālos pasūtīšanas apjomus un laiku, samazinot gan noliktavas izmaksas, gan deficīta risku.',
                },
                {
                  title: 'Ražošanas plānošana',
                  desc: 'AI optimizē ražošanas grafiku, ņemot vērā pasūtījumus, iekārtu pieejamību, darbinieku grafikus un materiālu krājumus. Sistēma automātiski pielāgojas izmaiņām un piedāvā optimālu plānu, kas maksimizē iekārtu noslodzi un minimizē pārslēgšanos.',
                },
                {
                  title: 'Dokumentu pārvaldība ražošanā',
                  desc: 'Automātiska ražošanas dokumentācijas pārvaldība: kvalitātes sertifikāti, materiālu specifikācijas, darba instrukcijas un atskaites. AI klasificē un organizē dokumentus, nodrošina versiju kontroli un brīdina par sertifikātu derīguma termiņiem. Atbilstība ISO standartiem un audita prasībām.',
                },
              ]}
            />
          </Section>

          <Section
            title="Rezultāti ražošanas uzņēmumiem"
            intro="Ražošanas uzņēmumi, kas ievieš AI risinājumus, redz būtiskus uzlabojumus efektivitātē, kvalitātē un izmaksās. Šeit ir tipiski rezultāti no mūsu ieviešanas projektiem."
          >
            <RuledList
              columns={2}
              items={[
                { title: 'Mazāk dīkstāves', desc: 'ar prediktīvo apkopi', aside: '40%' },
                { title: 'Defektu atklāšana', desc: 'ar datorredzes kontroli', aside: '99.8%' },
                { title: 'Efektivitātes pieaugums', desc: 'ražošanas procesā', aside: '20%' },
                { title: 'Izmaksu samazinājums', desc: 'piegādes ķēdē', aside: '25%' },
              ]}
            />
            <Prose className="mt-8">
              <p>
                Piemēram, metālapstrādes uzņēmums ar 50 darbiniekiem ieviesa AI kvalitātes kontroles sistēmu un prediktīvo
                apkopi. Pirmajā gadā defektu skaits samazinājās par 85%, neplānotās dīkstāves par 40%, un kopējā
                ražošanas efektivitāte pieauga par 18%. Apskatiet mūsu{' '}
                <Link to="/procesu-automatizacija" className="link">procesu automatizācijas</Link>{' '}
                un{' '}
                <Link to="/dokumentu-automatizacija" className="link">dokumentu automatizācijas</Link> risinājumus.
              </p>
            </Prose>
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi">
            <RuledList
              items={[
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Biznesa procesu optimizācija un automatizācija' },
                { to: '/dokumentu-automatizacija', title: 'Dokumentu Automatizācija', desc: 'Automātiska dokumentu apstrāde un digitalizācija' },
                { to: '/ai-platformu-izstrade', title: 'AI Platformu Izstrāde', desc: 'Pielāgotas AI platformas ražošanas vajadzībām' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Padariet savu ražotni gudrāku ar AI"
          text="Bezmaksas konsultācijā analizēsim jūsu ražošanas procesus un parādīsim, kur AI var dot vislielāko efektivitātes pieaugumu un izmaksu samazinājumu."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default NozareRazosana;
