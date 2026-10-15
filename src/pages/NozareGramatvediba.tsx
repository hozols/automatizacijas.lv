import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Vai AI var aizstāt grāmatvedi?',
    answer: 'Nē, AI neaizstāj grāmatvedi — tas ir instruments, kas padara grāmatveža darbu efektīvāku. AI pārņem rutīnas uzdevumus kā datu ievadi, rēķinu apstrādi un atskaišu sagatavošanu, ļaujot grāmatvedim fokusēties uz analītiku, konsultēšanu un stratēģiskiem lēmumiem. Grāmatveža profesionālais spriedums un klienta izpratne paliek neaizstājama.',
  },
  {
    question: 'Kā AI nodrošina atbilstību VID prasībām?',
    answer: 'Mūsu AI risinājumi ir konfigurēti atbilstoši Latvijas nodokļu likumdošanai un VID prasībām. Sistēma automātiski pārbauda PVN likmes, reģistrācijas numurus pret VID datubāzi, aprēķina nodokļu summas un sagatavo atskaites VID formātos. Regulāri atjauninām sistēmu, kad mainās likumdošana.',
  },
  {
    question: 'Ar kādām grāmatvedības programmām integrējas AI?',
    answer: 'Mūsu risinājumi integrējas ar visām populārākajām Latvijā lietotajām grāmatvedības programmām — Tildes Jumis, 1C, Horizon, Zalktis. Tāpat atbalstām starptautiskās platformas kā QuickBooks, Xero un SAP. Integrācija notiek caur API vai failu importu/eksportu.',
  },
  {
    question: 'Cik ilgā laikā atmaksājas ieguldījums AI grāmatvedībā?',
    answer: 'Tipiski mūsu klienti redz ROI 3-6 mēnešu laikā. Grāmatvedības birojs ar 5 grāmatvežiem un 200+ klientiem parasti ietaupa 30-40 stundas mēnesī uz rutīnas uzdevumiem. Tas atbilst aptuveni viena darbinieka algai, kamēr AI risinājuma izmaksas ir ievērojami zemākas.',
  },
  {
    question: 'Vai mani klientu dati ir drošībā?',
    answer: 'Pilnīgi. Visi dati tiek šifrēti gan pārsūtīšanas, gan glabāšanas laikā. Dati tiek apstrādāti ES teritorijā atbilstoši GDPR. Piekļuves kontrole nodrošina, ka katrs grāmatvedis redz tikai savu klientu datus. Regulāri drošības auditi un datu dublējumkopijas garantē jūsu informācijas aizsardzību.',
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
  "name": "AI Automatizācija Grāmatvedībai un Finansēm",
  "description": "AI risinājumi grāmatvedības birojiem, finanšu uzņēmumiem un nodaļām. Rēķinu apstrāde, atskaites, nodokļi — viss automatizēts.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Accounting AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Grāmatvedība un Finanses", "item": "https://automatizacijas.lv/nozares/gramatvediba-un-finanses" }
  ]
};

const NozareGramatvediba = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI grāmatvedības birojiem un finansēm | automatizacijas.lv</title>
        <meta name="description" content="Kā grāmatvedības biroji automatizē rēķinu apstrādi, atskaites un klientu dokumentus ar AI. Ko tas ietaupa un ar ko sākt." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/gramatvediba-un-finanses" />
        <meta property="og:title" content="AI grāmatvedības birojiem un finansēm | automatizacijas.lv" />
        <meta property="og:description" content="Kā grāmatvedības biroji automatizē rēķinu apstrādi, atskaites un klientu dokumentus ar AI. Ko tas ietaupa un ar ko sākt." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI grāmatvedības birojiem un finansēm" />
        <meta name="twitter:description" content="Kā grāmatvedības biroji automatizē rēķinu apstrādi, atskaites un klientu dokumentus ar AI. Ko tas ietaupa un ar ko sākt." />
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
            { label: 'Grāmatvedība un Finanses' },
          ]}
        />

        <PageHero
          vignette="tax-collector"
          title="AI automatizācija grāmatvedības birojiem un finansēm"
          lede={
            <>
              Grāmatvedības nozare Latvijā piedzīvo fundamentālas pārmaiņas. AI tehnoloģijas ļauj automatizēt <strong>rēķinu apstrādi,
              nodokļu aprēķinus, atskaišu sagatavošanu un klientu dokumentu pārvaldību</strong>, atbrīvojot grāmatvežu laiku
              konsultēšanai un stratēģiskiem uzdevumiem, kas rada vislielāko vērtību.
            </>
          }
          facts={['Līdz 70% laika ietaupījums', 'VID atbilstība', 'ROI 3-6 mēnešos', 'GDPR un datu drošība']}
        />

        <article>
          <Section title="Izaicinājumi grāmatvedībā">
            <Prose>
              <p>
                Latvijas grāmatvedības nozare saskaras ar pieaugošu spiedienu: klientu skaits aug, likumdošana mainās, un klienti
                sagaida ātrāku un precīzāku servisu. Tajā pašā laikā grāmatvežu trūkums darba tirgū nozīmē, ka biroji nevar vienkārši
                pieņemt papildu darbiniekus. Šī situācija rada vairākus būtiskus izaicinājumus.
              </p>
              <p>
                Grāmatvedības biroji Latvijā apkalpo vidēji 30-80 klientus, un katram klientam ir desmitiem dokumentu mēnesī.
                Rēķini no piegādātājiem, bankas izraksti, algu aprēķini, PVN deklarācijas, viss prasa manuālu apstrādi. Sezonas
                laikā, gada pārskatu un deklarāciju periodā, slodze var trīskāršoties, radot milzīgu stresu un kļūdu risku.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Manuāla rēķinu ievade grāmatvedības programmā, vidēji 3-5 minūtes katram rēķinam',
                'Regulāras izmaiņas VID prasībās un nodokļu likmēs prasa pastāvīgu uzmanību',
                'Klientu dokumentu šķirošana un klasificēšana aizņem līdz 25% darba laika',
                'Kļūdas datu ievadē rada neatbilstības deklarācijās un papildu labošanas darbu',
                'Grāmatvedības speciālistu trūkums darba tirgū apgrūtina biroja mērogošanu',
                'Sezonālās slodzes (gada pārskati, deklarācijas) rada stresa un virsstundu periodus',
              ]}
            />
          </Section>

          <Section
            title="AI risinājumi finanšu sektoram"
            tone="sheet"
            intro="Mūsu AI risinājumi grāmatvedībai aptver visus galvenos procesus, no dokumentu saņemšanas līdz atskaišu iesniegšanai. Katrs risinājums ir pielāgots Latvijas grāmatvedības specifikai un normatīvajām prasībām."
          >
            <RuledList
              items={[
                {
                  title: 'Automātiska rēķinu apstrāde',
                  desc: 'AI nolasa rēķinus no PDF, e-pasta pielikumiem vai skenētiem dokumentiem. Automātiski izvelk piegādātāja datus, summas, PVN likmi, pozīcijas un maksājuma termiņu. Dati nonāk grāmatvedības programmā bez manuālas ievades, samazinot apstrādes laiku no 5 minūtēm uz 30 sekundēm.',
                },
                {
                  title: 'Nodokļu aprēķini un deklarācijas',
                  desc: 'AI automātiski aprēķina PVN, IIN un citus nodokļus, balstoties uz grāmatvedības datiem. Sistēma sagatavo deklarāciju melnrakstus VID formātos, pārbauda datu konsekvenci un brīdina par iespējamām kļūdām pirms iesniegšanas.',
                },
                {
                  title: 'Atskaišu ģenerēšana',
                  desc: 'Automātiska finanšu atskaišu, peļņas vai zaudējumu aprēķinu, bilances un naudas plūsmas pārskatu sagatavošana. AI apkopo datus no dažādiem avotiem un ģenerē strukturētas atskaites vadības lēmumu pieņemšanai un klientu informēšanai.',
                },
                {
                  title: 'Klientu dokumentu pārvaldība',
                  desc: 'Centralizēta klientu dokumentu glabāšana ar automātisku klasifikāciju un meklēšanu. AI sakārto dokumentus pa klientiem, periodiem un veidiem. Termiņu kontrole brīdina par tuvojošos deklarāciju termiņiem un līgumu beigām.',
                },
              ]}
            />
          </Section>

          <Section
            title="Integrācija ar Latvijas sistēmām"
            intro="Mūsu AI risinājumi nevainojami integrējas ar Latvijā populārākajām grāmatvedības programmām un valsts sistēmām. Datu apmaiņa notiek automātiski, nodrošinot nepārtrauktu informācijas plūsmu bez manuālas iejaukšanās."
          >
            <RuledList
              columns={2}
              items={[
                { title: 'Tildes Jumis', desc: 'Pilna integrācija ar rēķinu un atskaišu moduli' },
                { title: '1C Grāmatvedība', desc: 'Automātisks dokumentu imports un eksports' },
                { title: 'Horizon ERP', desc: 'Datu sinhronizācija ar ERP sistēmu' },
                { title: 'VID EDS', desc: 'Deklarāciju sagatavošana un datu pārbaude' },
                { title: 'Banku sistēmas', desc: 'Automātiska izrakstu importēšana un salīdzināšana' },
                { title: 'E-rēķini', desc: 'E-rēķinu saņemšana un apstrāde Peppol formātā' },
              ]}
            />
            <Prose className="mt-8">
              <p>
                Uzziniet vairāk par mūsu{' '}
                <Link to="/gramatvedibas-automatizacija" className="link">grāmatvedības automatizācijas pakalpojumu</Link>{' '}
                un{' '}
                <Link to="/dokumentu-automatizacija" className="link">dokumentu automatizācijas risinājumiem</Link>.
              </p>
            </Prose>
          </Section>

          <Section
            title="Rezultāti un ROI"
            tone="sheet"
            intro="Grāmatvedības biroji, kas ievieš AI automatizāciju, redz būtiskus uzlabojumus jau pirmajos mēnešos. Šeit ir tipiski rezultāti no mūsu klientu pieredzes Latvijā."
          >
            <RuledList
              columns={2}
              items={[
                { title: 'Laika ietaupījums', desc: 'rutīnas uzdevumos', aside: '70%' },
                { title: 'Mēneši līdz ROI', desc: 'investīcijas atgūšanai', aside: '3-6' },
                { title: 'Vairāk klientu', desc: 'bez papildu darbiniekiem', aside: '2x' },
                { title: 'Mazāk kļūdu', desc: 'datu ievadē un aprēķinos', aside: '95%' },
              ]}
            />
            <Prose className="mt-8">
              <p>
                Piemēram, grāmatvedības birojs ar 4 darbiniekiem un 60 klientiem ieviesa mūsu rēķinu automatizācijas risinājumu.
                Pirms ieviešanas katrs grāmatvedis pavadīja aptuveni 2 stundas dienā, manuāli ievadot rēķinus. Pēc AI ieviešanas
                šis laiks samazinājās līdz 20 minūtēm, atbrīvojot 7 stundas dienā visam birojam. Tas ļāva uzņemt 15 jaunus klientus
                bez papildu darbinieku pieņemšanas.
              </p>
            </Prose>
          </Section>

          <Section title="Biežāk uzdotie jautājumi">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi" tone="sheet">
            <RuledList
              items={[
                { to: '/gramatvedibas-automatizacija', title: 'Grāmatvedības Automatizācija', desc: 'Pilna grāmatvedības procesu automatizācija ar AI' },
                { to: '/dokumentu-automatizacija', title: 'Dokumentu Automatizācija', desc: 'Automātiska dokumentu apstrāde un digitalizācija' },
                { to: '/datu-analize', title: 'Datu Analīze', desc: 'Finanšu datu analīze un prognozēšana ar AI' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Automatizējiet grāmatvedības procesus ar AI"
          text="Bezmaksas konsultācijā analizēsim jūsu grāmatvedības procesus un parādīsim, kā AI var ietaupīt laiku, samazināt kļūdas un ļaut jums apkalpot vairāk klientu."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default NozareGramatvediba;
