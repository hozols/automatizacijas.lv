import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, RuledList, Steps, CtaBand } from '@/components/page';

const industries = [
  {
    title: 'Grāmatvedība un Finanses',
    description: 'AI automatizācija grāmatvedības birojiem un finanšu nodaļām: rēķinu apstrāde, atskaišu ģenerēšana, nodokļu aprēķini un VID atbilstība. Samaziniet manuālo darbu par 70% un minimizējiet kļūdu risku.',
    link: '/nozares/gramatvediba-un-finanses',
  },
  {
    title: 'E-komercija',
    description: 'Automatizēti AI chatboti klientu apkalpošanai, pasūtījumu apstrāde, krājumu pārvaldība, personalizētas rekomendācijas un pamesto grozu atgūšana. Palieliniet konversiju un samaziniet atbalsta izmaksas.',
    link: '/nozares/e-komercija',
  },
  {
    title: 'Ražošana',
    description: 'Kvalitātes kontrole ar datorredzi, prediktīvā apkope, piegādes ķēžu optimizācija un ražošanas plānošana ar AI. Samaziniet dīkstāves un palieliniet ražošanas efektivitāti.',
    link: '/nozares/razosana',
  },
  {
    title: 'Loģistika',
    description: 'Maršrutu optimizācija, sūtījumu izsekošana, automatizēta CMR un pavadzīmju apstrāde, noliktavas pārvaldība un pieprasījuma prognozēšana. Samaziniet loģistikas izmaksas par līdz 30%.',
    link: '/nozares/logistika',
  },
  {
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
        <title>AI automatizācija pa nozarēm | automatizacijas.lv</title>
        <meta name="description" content="Ko AI automatizē grāmatvedībā, e-komercijā, ražošanā, loģistikā un juridiskajās firmās. Piemēri katrai nozarei." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares" />
        <meta property="og:title" content="AI automatizācija pa nozarēm | automatizacijas.lv" />
        <meta property="og:description" content="Ko AI automatizē grāmatvedībā, e-komercijā, ražošanā, loģistikā un juridiskajās firmās. Piemēri katrai nozarei." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI automatizācija pa nozarēm" />
        <meta name="twitter:description" content="Ko AI automatizē grāmatvedībā, e-komercijā, ražošanā, loģistikā un juridiskajās firmās. Piemēri katrai nozarei." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: 'Nozares' }]} />

        <PageHero
          vignette="invoices"
          title="AI automatizācija pa nozarēm"
          lede={
            <>
              Katra nozare saskaras ar unikāliem izaicinājumiem, un AI risinājumi ir visefektīvākie, kad tie ir pielāgoti konkrētās
              nozares specifikai. Mēs piedāvājam <strong>specializētus automatizācijas risinājumus</strong>,
              kas risina tieši jūsu nozares sāpīgākos punktus, no grāmatvedības rēķinu apstrādes līdz juridisko dokumentu analīzei.
            </>
          }
        >
          <Prose>
            <p>
              Latvijas uzņēmumi dažādās nozarēs jau izmanto mūsu AI risinājumus, lai samazinātu manuālo darbu, paātrinātu procesus
              un uzlabotu klientu apkalpošanu. Neatkarīgi no tā, vai esat grāmatvedības birojs ar 5 darbiniekiem vai ražošanas
              uzņēmums ar 200 darbiniekiem, mūsu risinājumi ir mērogojami un pielāgojami jūsu vajadzībām.
            </p>
            <p>
              Izvēlieties savu nozari, lai uzzinātu, kādi konkrēti AI automatizācijas risinājumi ir pieejami un kādus rezultātus
              jūs varat sagaidīt. Katrai nozarei esam sagatavojuši detalizētu aprakstu ar reāliem piemēriem, ROI aprēķiniem
              un ieviešanas soļiem.
            </p>
          </Prose>
        </PageHero>

        <article>
          <Section title="Nozares, kurām piedāvājam AI risinājumus" tone="sheet">
            <RuledList
              items={industries.map((industry) => ({
                to: industry.link,
                title: industry.title,
                desc: industry.description,
              }))}
            />
          </Section>

          <Section title="Kāpēc nozares specifika ir svarīga">
            <Prose>
              <p>
                Universāli automatizācijas risinājumi bieži nespēj pilnvērtīgi risināt konkrētas nozares problēmas. Grāmatvedības
                birojam ir vajadzīga precīza VID prasību ievērošana un integrācija ar Latvijas grāmatvedības programmām. E-komercijas
                uzņēmumam ir kritiski svarīga ātra klientu apkalpošana un personalizētas rekomendācijas. Ražošanas uzņēmumam:
                prediktīvā apkope un kvalitātes kontrole.
              </p>
              <p>
                Tieši tāpēc mēs piedāvājam nozarei specifiskus risinājumus, kas jau no pirmās dienas ir pielāgoti jūsu biznesa
                procesiem, regulatīvajām prasībām un nozares standartiem. Tas nozīmē ātrāku ieviešanu, augstāku ROI un mazāku
                risku.
              </p>
              <p>
                Mūsu komanda ir strādājusi ar desmitiem uzņēmumu dažādās nozarēs, un šī pieredze ļauj mums piedāvāt
                praktiski pārbaudītus risinājumus, nevis teorētiskas koncepcijas. Katrs risinājums ir balstīts uz reāliem
                biznesa gadījumiem un mērāmiem rezultātiem.
              </p>
            </Prose>
          </Section>

          <Section
            title="Kā mēs strādājam ar nozarēm"
            tone="sheet"
            intro="Neatkarīgi no nozares, mūsu pieeja vienmēr sākas ar jūsu biznesa procesu izpratni. Mēs neuzspiedīsim tehnoloģiju. Mēs atradīsim veidus, kā AI var atrisināt jūsu konkrētās problēmas."
          >
            <Steps
              items={[
                {
                  title: 'Nozares audits',
                  desc: 'Analizējam jūsu nozares specifiskos procesus, identificējam automatizācijas iespējas un novērtējam potenciālo ietaupījumu. Salīdzinām ar nozares standartiem un labākajām praksēm.',
                },
                {
                  title: 'Risinājuma projektēšana',
                  desc: 'Izveidojam pielāgotu AI risinājumu, kas ievēro jūsu nozares regulatīvās prasības, integrējas ar nozarē lietotajām sistēmām un risina tieši jūsu sāpīgākos punktus.',
                },
                {
                  title: 'Ieviešana un apmācība',
                  desc: 'Pakāpeniski ieviesam risinājumu, sākot ar vienu procesu. Apmācām jūsu komandu un nodrošinām, ka sistēma darbojas nevainojami jūsu ikdienas darbā.',
                },
                {
                  title: 'Optimizācija un atbalsts',
                  desc: 'Nepārtraukti uzlabojam risinājumu, balstoties uz reālajiem datiem un jūsu atgriezenisko saiti. Nodrošinām tehnisko atbalstu un sistēmas uzturēšanu.',
                },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Neatrodat savu nozari sarakstā?"
          text="Mūsu AI risinājumi ir pielāgojami jebkurai nozarei. Sazinieties ar mums, un mēs izstrādāsim automatizācijas risinājumu tieši jūsu biznesa vajadzībām. Bezmaksas konsultācija bez saistībām."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/services', label: 'Visi pakalpojumi' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default Nozares;
