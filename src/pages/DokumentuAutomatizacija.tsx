import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik ilgi aizņem dokumentu automatizācijas ieviešana?',
    answer: 'Pamata rēķinu digitalizācijas risinājums ir gatavs 2-3 nedēļās. Pilna dokumentu apstrādes sistēma ar vairāku dokumentu tipu atpazīšanu, integrācijām un pielāgotu loģiku — 4-8 nedēļas. Sākam ar jūsu esošo procesu auditu un izveidojam detalizētu ieviešanas plānu.',
  },
  {
    question: 'Vai sistēma spēj apstrādāt dokumentus latviešu valodā?',
    answer: 'Jā, mūsu AI risinājumi pilnībā atbalsta latviešu valodu. Sistēma atpazīst un apstrādā dokumentus latviešu, angļu un krievu valodā, ieskaitot jaukta satura dokumentus. OCR tehnoloģija ir optimizēta latviešu alfabēta specifiskajiem burtiem.',
  },
  {
    question: 'Cik droša ir dokumentu apstrāde?',
    answer: 'Mēs ievērojam stingrus datu drošības standartus. Visi dokumenti tiek apstrādāti šifrētā vidē, dati tiek glabāti ES teritorijā atbilstoši GDPR prasībām. Piekļuves kontrole nodrošina, ka tikai autorizēti lietotāji var skatīt sensitīvus dokumentus.',
  },
  {
    question: 'Vai dokumentu automatizācija integrējas ar mūsu grāmatvedības programmu?',
    answer: 'Jā, mūsu risinājumi integrējas ar populārākajām Latvijā lietotajām sistēmām — 1C, Horizon, Tildes Jumis, kā arī ar starptautiskām platformām. Integrācija nodrošina automātisku datu pārnesi bez manuālas ievades.',
  },
  {
    question: 'Kāda ir minimālā dokumentu apjoma prasība?',
    answer: 'Nav minimālā apjoma prasību. Mūsu risinājumi ir izdevīgi jau sākot no 50 dokumentiem mēnesī. Sistēma ir elastīga un mērogojama — tā aug kopā ar jūsu uzņēmumu bez papildu ieviešanas izmaksām.',
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
  "name": "Dokumentu Automatizācija ar AI",
  "description": "Automātiska dokumentu apstrāde, rēķinu digitalizācija, līgumu analīze un datu izvilkšana ar AI. Ietaupiet līdz 80% laika dokumentu apstrādē.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Document Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Dokumentu Automatizācija", "item": "https://automatizacijas.lv/dokumentu-automatizacija" }
  ]
};

const DokumentuAutomatizacija = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Dokumentu automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="Rēķinu, e-rēķinu, līgumu un pavadzīmju datus AI nolasa, pārbauda un ievada jūsu sistēmā. Dokumentu pārvaldība bez pārrakstīšanas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/dokumentu-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/dokumentu-automatizacija" />
        <meta property="og:title" content="Dokumentu automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Rēķinu, e-rēķinu, līgumu un pavadzīmju datus AI nolasa, pārbauda un ievada jūsu sistēmā. Dokumentu pārvaldība bez pārrakstīšanas." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dokumentu automatizācija ar AI" />
        <meta name="twitter:description" content="Rēķinu, e-rēķinu, līgumu un pavadzīmju datus AI nolasa, pārbauda un ievada jūsu sistēmā. Dokumentu pārvaldība bez pārrakstīšanas." />
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
            { label: 'Dokumentu Automatizācija' },
          ]}
        />

        <PageHero
          vignette="invoices"
          title="Dokumentu automatizācija ar AI"
          lede={
            <>
              Pārvēršam jūsu dokumentu apstrādi no laikietilpīga manuāla procesa par{' '}
              <strong>pilnībā automatizētu sistēmu</strong>. Mūsu AI risinājumi apstrādā rēķinus, līgumus,
              grāmatvedības dokumentus un e-pastus, izvilkjot datus, klasificējot informāciju un integrējot to jūsu
              esošajās sistēmās bez cilvēka iejaukšanās.
            </>
          }
          facts={['Līdz 80% laika ietaupījums', '99.5% precizitāte', 'No €199/mēn', 'GDPR atbilstīgs']}
        />

        <article>
          <Section title="Kāpēc automatizēt dokumentu apstrādi?">
            <Prose>
              <p>
                Latvijas uzņēmumi katru dienu saskaras ar simtiem dokumentu: rēķini no piegādātājiem, līgumi ar
                klientiem, grāmatvedības atskaites, e-pasti ar pielikumiem. Manuāla šo dokumentu apstrāde ir ne tikai
                lēna, bet arī dārga un kļūdām pakļauta. Darbinieki pavada stundas, pārrakstot datus no vienas sistēmas
                uz citu, meklējot pareizos dokumentus un labojot ievades kļūdas.
              </p>
              <p>
                Pētījumi rāda, ka darbinieki vidēji pavada 20-30% sava darba laika, meklējot un apstrādājot
                dokumentus. Tas nozīmē, ka uzņēmums ar 10 biroja darbiniekiem zaudē aptuveni 2-3 pilnas darba vietas
                tikai dokumentu apstrādei. AI dokumentu automatizācija šo laiku samazina par 80%, ļaujot darbiniekiem
                fokusēties uz vērtīgākiem uzdevumiem.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Manuāla datu ievade aizņem līdz 30% darbinieku laika',
                'Cilvēciskās kļūdas datu ievadē sasniedz 1-5%, AI samazina līdz 0.5%',
                'Dokumentu meklēšana un šķirošana kavē biznesa procesus',
                'Lēna rēķinu apstrāde rada kavējumus maksājumos un attiecībās ar partneriem',
                'Neatbilstīga dokumentu glabāšana apdraud GDPR prasību ievērošanu',
                'Mērogošana ar manuāliem procesiem prasa jaunus darbiniekus',
              ]}
            />
          </Section>

          <Section title="Ko mēs automatizējam" tone="sheet">
            <Prose>
              <p>
                Mūsu AI risinājumi aptver plašu dokumentu apstrādes spektru, no vienkāršas rēķinu digitalizācijas līdz
                sarežģītai līgumu analīzei un automātiskai datu maršrutēšanai. Katrs risinājums tiek pielāgots jūsu
                uzņēmuma specifiskajām vajadzībām.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  {
                    title: 'Rēķinu apstrāde un digitalizācija',
                    desc: 'Automātiska rēķinu nolasīšana no PDF, e-pasta pielikumiem vai skenētiem dokumentiem. AI izvilks piegādātāja nosaukumu, reģistrācijas numuru, rēķina summu, PVN, pozīcijas un maksājuma termiņu. Dati automātiski nonāk jūsu grāmatvedības sistēmā.',
                  },
                  {
                    title: 'Līgumu analīze un datu izvilkšana',
                    desc: 'AI analizē līgumu saturu, identificē galvenos noteikumus, termiņus, summas un pušu informāciju. Sistēma brīdina par termiņu tuvošanos un palīdz uzturēt līgumu reģistru ar automātisku klasifikāciju.',
                  },
                  {
                    title: 'Grāmatvedības dokumentu automatizācija',
                    desc: 'Automātiska dokumentu sagatavošana, klasifikācija un grāmatošana. Sistēma atpazīst dokumentu tipus, piešķir pareizos kontus un sagatavo ierakstus grāmatvedības programmā. Integrācija ar 1C, Horizon un Tildes Jumis.',
                  },
                  {
                    title: 'E-pastu klasifikācija un maršrutēšana',
                    desc: 'AI automātiski analizē ienākošos e-pastus, klasificē tos pēc satura un steidzamības, izvelk pielikumus un novirza pie atbildīgajiem darbiniekiem. Pieprasījumi, sūdzības un rēķini tiek apstrādāti automātiski.',
                  },
                  {
                    title: 'Atskaišu ģenerēšana',
                    desc: 'Automātiska atskaišu sagatavošana no dažādiem datu avotiem. Sistēma apkopo informāciju no dokumentiem, e-pastiem un datubāzēm, ģenerējot strukturētas atskaites vadības lēmumu pieņemšanai. Periodiskie pārskati tiek izveidoti un nosūtīti automātiski: ikmēneša finanšu kopsavilkumi, piegādātāju analīze un izdevumu atskaites.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section
            title="Kā tas strādā"
            intro="Mūsu dokumentu automatizācijas process ir vienkāršs un caurspīdīgs. Četros soļos jūsu dokumentu plūsma kļūst pilnībā automatizēta, samazinot manuālo darbu līdz minimumam."
          >
            <Steps
              items={[
                {
                  title: 'Dokumentu uztveršana',
                  desc: 'Sistēma automātiski uztver dokumentus no visiem kanāliem: e-pasta pielikumi, augšupielādēti faili, skenēti dokumenti, API integrācijas. Neatkarīgi no formāta (PDF, Word, Excel, attēli), AI tos atpazīst un sagatavo apstrādei.',
                },
                {
                  title: 'AI analīze un datu izvilkšana',
                  desc: 'Mākslīgais intelekts analizē katra dokumenta saturu, izmantojot OCR un dabīgās valodas apstrādi. Sistēma atpazīst dokumenta tipu, izvelk strukturētus datus (nosaukumus, summas, datumus, adreses) un pārbauda to pareizību.',
                },
                {
                  title: 'Validācija un klasifikācija',
                  desc: 'Izvilktie dati tiek automātiski validēti pret biznesa noteikumiem: vai summas sakrīt, vai piegādātājs ir reģistrēts, vai termiņi ir korekti. Dokumenti tiek klasificēti un novirzīti atbilstošajā darba plūsmā.',
                },
                {
                  title: 'Integrācija un arhivēšana',
                  desc: 'Apstrādātie dati automātiski nonāk jūsu grāmatvedības sistēmā, CRM vai citā mērķa platformā. Oriģinālie dokumenti tiek droši arhivēti ar pilnu meklēšanas iespēju un atbilstību GDPR prasībām.',
                },
              ]}
            />
          </Section>

          <Section
            title="Integrācijas"
            tone="sheet"
            intro="Mūsu risinājumi nevainojami integrējas ar Latvijā populārākajām biznesa sistēmām. Datu apmaiņa notiek automātiski, bez manuālas iejaukšanās, nodrošinot nepārtrauktu informācijas plūsmu starp sistēmām."
          >
            <RuledList
              columns={2}
              items={[
                { title: '1C Grāmatvedība', desc: 'Automātiska rēķinu un dokumentu importēšana' },
                { title: 'Horizon', desc: 'Datu sinhronizācija ar ERP sistēmu' },
                { title: 'Tildes Jumis', desc: 'Grāmatvedības dokumentu automatizācija' },
                { title: 'E-pasta sistēmas', desc: 'Gmail, Outlook, Exchange integrācija' },
                { title: 'Google Drive / OneDrive', desc: 'Mākoņa dokumentu automātiska apstrāde' },
                { title: 'API integrācijas', desc: 'Pielāgotas integrācijas ar jebkuru sistēmu' },
              ]}
            />
          </Section>

          <Section title="Rezultāti skaitļos">
            <Prose>
              <p>
                Mūsu klienti jau pirmajos mēnešos novēro būtiskus uzlabojumus dokumentu apstrādes ātrumā, precizitātē
                un izmaksās. Šeit ir tipiski rezultāti, ko sasniedz uzņēmumi pēc dokumentu automatizācijas ieviešanas.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                columns={2}
                items={[
                  { title: 'Laika ietaupījums', desc: 'dokumentu apstrādē', aside: '80%' },
                  { title: 'Datu precizitāte', desc: 'pret manuālajiem 95-98%', aside: '99.5%' },
                  { title: 'Ātrāka apstrāde', desc: 'rēķinu un dokumentu cikls', aside: '3x' },
                  { title: 'Izmaksu samazinājums', desc: 'dokumentu pārvaldībā', aside: '60%' },
                ]}
              />
            </div>
            <Prose className="mt-8">
              <p>
                Piemēram, uzņēmums ar 500 ienākošajiem rēķiniem mēnesī, kur katrs rēķins manuāli prasa 5 minūtes
                apstrādei, pavada aptuveni 42 stundas mēnesī tikai rēķinu ievadei. Ar mūsu AI risinājumu šis laiks
                samazinās līdz 8 stundām, atbrīvojot 34 darba stundas mēnesī produktīvākam darbam. Apskatiet mūsu{' '}
                <Link to="/pricing" className="link">cenu lapā</Link> pieejamos plānus.
              </p>
            </Prose>
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi">
            <RuledList
              items={[
                { to: '/gramatvedibas-automatizacija', title: 'Grāmatvedības Automatizācija', desc: 'Pilna grāmatvedības procesu automatizācija ar AI' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Biznesa procesu optimizācija un automatizācija' },
                { to: '/ai-platformu-izstrade', title: 'AI Platformu Izstrāde', desc: 'Pielāgotas AI platformas jūsu uzņēmumam' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Automatizējiet dokumentu apstrādi jau šodien"
          text="Bezmaksas konsultācijā analizēsim jūsu dokumentu plūsmu un parādīsim, cik daudz laika un resursu varat ietaupīt ar AI automatizāciju."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default DokumentuAutomatizacija;
