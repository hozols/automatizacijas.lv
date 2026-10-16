import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik droša ir automatizētā grāmatvedības sistēma?',
    answer: 'Mūsu risinājumi izmanto bankas līmeņa šifrēšanu (AES-256) un atbilst GDPR prasībām. Visi dati tiek glabāti ES serveros, un piekļuve ir ierobežota ar daudzlīmeņu autentifikāciju. Regulāri veicam drošības auditus un sistēmas atjauninājumus, lai nodrošinātu maksimālu datu aizsardzību.',
  },
  {
    question: 'Vai automatizācija aizstās grāmatvedi?',
    answer: 'Nē — automatizācija neaizstāj grāmatvedi, bet gan atbrīvo viņu no rutīnas darbiem. AI pārņem manuālo datu ievadi, saskaņošanu un atskaišu ģenerēšanu, bet grāmatvedis var koncentrēties uz stratēģiskiem lēmumiem, konsultēšanu un sarežģītu situāciju risināšanu. Rezultātā grāmatvedis kļūst produktīvāks un var apkalpot vairāk klientu.',
  },
  {
    question: 'Cik ilgi aizņem ieviešana?',
    answer: 'Pamata automatizācija (rēķinu apstrāde, bankas izrakstu saskaņošana) ir ieviešama 2-4 nedēļās. Pilna grāmatvedības automatizācija ar VID EDS integrāciju, nodokļu aprēķiniem un gada pārskatu sagatavošanu — 6-10 nedēļas. Ieviešana notiek pakāpeniski, lai netraucētu ikdienas darbu.',
  },
  {
    question: 'Vai sistēma ir saderīga ar VID EDS?',
    answer: 'Jā, mūsu risinājums pilnībā integrējas ar VID Elektroniskās deklarēšanas sistēmu. Automātiski ģenerējam un iesniedzam PVN deklarācijas, gada pārskatus un citus nepieciešamos dokumentus. Sistēma vienmēr atbilst aktuālajām VID prasībām un tiek regulāri atjaunināta.',
  },
  {
    question: 'Kādas grāmatvedības sistēmas tiek atbalstītas?',
    answer: 'Mūsu risinājums integrējas ar visām populārākajām Latvijas grāmatvedības sistēmām — 1C, Tildes Jumis, Horizon, Zalktis, kā arī starptautiskajām platformām. Ja jūsu sistēma nav sarakstā, varam izstrādāt pielāgotu integrāciju pēc individuāla projekta.',
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
  "name": "Grāmatvedības Automatizācija ar AI",
  "description": "AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini. Samaziniet manuālo darbu par 70%.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Accounting Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Grāmatvedības Automatizācija", "item": "https://automatizacijas.lv/gramatvedibas-automatizacija" }
  ]
};

const GramatvedibadAutomatizacija = () => {

  return (
    <PageTransition>
      <Helmet>
        <title>Grāmatvedības automatizācija ar AI | automatizacijas.lv</title>
        <meta name="description" content="Automātiska rēķinu un e-rēķinu apstrāde, bankas izrakstu saskaņošana un ievade jūsu grāmatvedības programmā. Grāmatvežiem un birojiem." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/gramatvedibas-automatizacija" />
        <meta property="og:title" content="Grāmatvedības automatizācija ar AI | automatizacijas.lv" />
        <meta property="og:description" content="Automātiska rēķinu un e-rēķinu apstrāde, bankas izrakstu saskaņošana un ievade jūsu grāmatvedības programmā. Grāmatvežiem un birojiem." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grāmatvedības automatizācija ar AI" />
        <meta name="twitter:description" content="Automātiska rēķinu un e-rēķinu apstrāde, bankas izrakstu saskaņošana un ievade jūsu grāmatvedības programmā. Grāmatvežiem un birojiem." />
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
            { label: 'Grāmatvedības Automatizācija' },
          ]}
        />

        <PageHero
          vignette="adding-machine"
          title="Grāmatvedības automatizācija ar AI"
          lede={
            <>
              Pārveidojiet savu grāmatvedības praksi ar AI tehnoloģijām. Automatizējiet <strong>rēķinu apstrādi, PVN deklarācijas, bankas izrakstu saskaņošanu</strong> un
              desmitiem citu ikdienas uzdevumu. Mūsu risinājumi ir pilnībā pielāgoti Latvijas normatīvajiem aktiem un integrējas ar VID EDS sistēmu,
              ļaujot jūsu grāmatvedības komandai koncentrēties uz to, kas patiešām svarīgs: stratēģisku finanšu konsultēšanu un biznesa izaugsmes atbalstu.
            </>
          }
          facts={['70% mazāk manuālā darba', '99.9% precizitāte', 'No €249/mēn', 'VID EDS saderīgs']}
        />

        <article>
          <Section title="Kāpēc automatizēt grāmatvedību?">
            <Prose>
              <p>
                Latvijas grāmatveži ikdienā saskaras ar milzīgu manuālā darba apjomu. VID atskaišu sagatavošana, PVN deklarāciju aizpildīšana,
                gada pārskatu kompilēšana, bankas izrakstu pārbaude un datu ievade dažādās sistēmās, tas viss prasa stundām ilgu, monotonu darbu,
                kurā vienmēr pastāv cilvēciskas kļūdas risks. Katru mēnesi grāmatvedis pavada aptuveni 15-25 stundas tikai manuālai datu ievadei un
                pārbaudei, laiku, ko varētu veltīt stratēģiskam darbam.
              </p>
              <p>
                Situāciju sarežģī arī pastāvīgas izmaiņas Latvijas nodokļu likumdošanā. Jauni MK noteikumi, VID prasību izmaiņas, PVN likmju
                korekcijas: grāmatvedim jāseko līdzi visam un manuāli jāatjaunina aprēķini. Ar AI automatizāciju šīs izmaiņas tiek ieviestas
                automātiski, samazinot kļūdu risku un nodrošinot pastāvīgu atbilstību normatīvajiem aktiem.
              </p>
              <p>
                Grāmatvedības biroji ar 3-10 darbiniekiem bieži vien nevar atļauties pieņemt jaunus klientus, jo esošais darba apjoms jau ir
                maksimāls. Automatizācija atrisina šo problēmu: tā ļauj apkalpot par 40-60% vairāk klientu ar tādu pašu komandas lielumu,
                vienlaikus uzlabojot pakalpojuma kvalitāti un samazinot kļūdu skaitu.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'VID atskaišu sagatavošana aizņem stundas manuālā darba katru mēnesi',
                'PVN deklarāciju aizpildīšanā bieži rodas cilvēciskas kļūdas',
                'Gada pārskatu kompilēšana prasa nedēļām ilgu intensīvu darbu',
                'Manuāla datu ievade no rēķiniem un bankas izrakstiem ir laikietilpīga',
                'Debitoru un kreditoru atlikumu saskaņošana prasa pastāvīgu uzmanību',
                'Algu aprēķini ar mainīgiem nodokļu parametriem rada kļūdu risku',
              ]}
            />
          </Section>

          <Section title="Grāmatvedības procesi, ko AI automatizē" tone="sheet">
            <Prose>
              <p>
                Mūsu AI risinājumi aptver visus galvenos grāmatvedības procesus, no ikdienas rēķinu apstrādes līdz sarežģītiem nodokļu
                aprēķiniem un gada pārskatiem. Katrs modulis darbojas gan patstāvīgi, gan kā daļa no integrētas sistēmas.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  {
                    title: 'Rēķinu apstrāde un grāmatošana',
                    desc: 'AI automātiski nolasa ienākošos un izejošos rēķinus (arī skenētus PDF un fotoattēlus), klasificē tos pēc izmaksu kategorijām, piešķir pareizos grāmatvedības kontus un izveido grāmatojumus. Sistēma atpazīst piegādātājus, summas, PVN likmes un datumu. Precizitāte pārsniedz 99%. Vidēji viens rēķins tiek apstrādāts 3 sekundēs, salīdzinot ar 3-5 minūtēm manuāli.',
                  },
                  {
                    title: 'Bankas izrakstu saskaņošana',
                    desc: 'Automātiska bankas darījumu saskaņošana ar grāmatvedības ierakstiem. AI analizē darījumu aprakstus, summas un datumu sakritības, lai atrastu atbilstošos rēķinus un maksājumus. Neatbilstības tiek automātiski atzīmētas pārskatīšanai. Process, kas agrāk prasīja stundas, tagad notiek dažās minūtēs.',
                  },
                  {
                    title: 'PVN un nodokļu aprēķini',
                    desc: 'Automātiski aprēķina priekšnodokli un maksājamo PVN, ģenerē PVN deklarāciju atbilstoši aktuālajām VID prasībām un sagatavo to iesniegšanai EDS sistēmā. Sistēma ņem vērā visas PVN likmes (21%, 12%, 5%, 0%), reverso PVN un darījumus ar ES partneriem.',
                  },
                  {
                    title: 'Gada pārskatu sagatavošana',
                    desc: 'AI apkopo gada datus, ģenerē bilanci, peļņas vai zaudējumu aprēķinu un naudas plūsmas pārskatu. Automātiski pārbauda datu konsekvenci starp atskaišu sadaļām un piedāvā korekcijas. Gada pārskata sagatavošanas laiks samazinās no nedēļām līdz dienām.',
                  },
                  {
                    title: 'Debitoru un kreditoru pārvaldība',
                    desc: 'Automātiska debitoru un kreditoru atlikumu uzskaite, atgādinājumu sūtīšana par kavētiem maksājumiem, naudas plūsmas prognozēšana un risku analīze. AI identificē klientus ar paaugstinātu kavējuma risku un iesaka preventīvas darbības, piemēram, avansa pieprasīšanu.',
                  },
                  {
                    title: 'Algu aprēķins un HR dokumenti',
                    desc: 'Pilns algu aprēķina cikls, no darba laika uzskaites līdz algu lapām un nodokļu pārskatiem. Automātiski aprēķina IIN, VSAOI, slimības naudas un atvaļinājuma uzkrājumus atbilstoši aktuālajiem Latvijas likumdošanas parametriem. Ģenerē darba līgumus, rīkojumus un citus HR dokumentus.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section title="Integrācija ar Latvijas grāmatvedības sistēmām">
            <Prose>
              <p>
                Mūsu AI risinājumi ir izstrādāti, lai netraucēti integrētos ar populārākajām Latvijas grāmatvedības programmām un valsts sistēmām.
                Jums nav jāmaina sava esošā grāmatvedības sistēma: mēs pielāgojam automatizāciju jūsu pašreizējai infrastruktūrai. Integrācija
                nodrošina divvirzienu datu apmaiņu, kas nozīmē, ka AI sistēma var gan lasīt, gan rakstīt datus jūsu grāmatvedības programmā.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                columns={2}
                items={[
                  {
                    title: '1C Grāmatvedība',
                    desc: 'Pilna integrācija ar 1C platformu: automātiska dokumentu importēšana, grāmatojumu veidošana un atskaišu ģenerēšana tieši 1C vidē.',
                  },
                  {
                    title: 'Tildes Jumis',
                    desc: 'Savienojums ar Tildes Jumis grāmatvedības un noliktavas moduli. Automātiska rēķinu un maksājumu datu sinhronizācija.',
                  },
                  {
                    title: 'Horizon',
                    desc: 'Integrācija ar Horizon grāmatvedības sistēmu, ieskaitot algu moduli, pamatlīdzekļu uzskaiti un finanšu atskaites.',
                  },
                  {
                    title: 'Zalktis',
                    desc: 'Savienojums ar Zalktis grāmatvedības programmu: automātiska datu importēšana un eksportēšana standartizētos formātos.',
                  },
                  {
                    title: 'VID EDS sistēma',
                    desc: 'Tieša integrācija ar VID Elektroniskās deklarēšanas sistēmu: automātiska PVN deklarāciju, gada pārskatu un citu atskaišu iesniegšana.',
                  },
                  {
                    title: 'Banku API',
                    desc: 'Automātiska izrakstu ielāde no Latvijas bankām (Swedbank, SEB, Citadele, Luminor) caur PSD2 atvērtās bankas API.',
                  },
                ]}
              />
            </div>
            <Prose className="mt-8">
              <p>
                Ja jūs izmantojat citu grāmatvedības sistēmu, kas nav sarakstā, sazinieties ar mums. Mēs varam izstrādāt pielāgotu integrāciju
                jūsu specifiskajām vajadzībām. Mūsu komandai ir pieredze ar desmitiem dažādu grāmatvedības platformu un ERP sistēmu.
              </p>
            </Prose>
          </Section>

          <Section title="Kā norit ieviešana" tone="sheet">
            <Prose>
              <p>
                Ieviešanas process ir strukturēts četros posmos, lai nodrošinātu netraucētu pāreju un minimālu ietekmi uz jūsu ikdienas darbu.
                Katru posmu mēs realizējam ciešā sadarbībā ar jūsu grāmatvedības komandu.
              </p>
            </Prose>
            <div className="mt-8">
              <Steps
                items={[
                  {
                    title: 'Audits un vajadzību analīze',
                    desc: 'Detalizēti izanalizējam jūsu pašreizējos grāmatvedības procesus, identificējam laikietilpīgākos manuālos uzdevumus un novērtējam automatizācijas potenciālu. Pārskatām izmantotās sistēmas, dokumentu apjomus un specifiskās prasības. Rezultātā izveidojam personalizētu automatizācijas ceļa karti ar skaidriem termiņiem un sagaidāmajiem ieguvumiem.',
                  },
                  {
                    title: 'Sistēmas konfigurēšana un integrācija',
                    desc: 'Konfigurējam AI sistēmu atbilstoši jūsu kontu plānam, grāmatvedības politikām un specifiskajām prasībām. Ieviešam integrācijas ar jūsu grāmatvedības programmu, bankas kontiem un VID EDS. Apmācām AI modeli uz jūsu vēsturiskajiem datiem, lai tas iemācītos jūsu specifiskos grāmatošanas paradumus un klasifikācijas.',
                  },
                  {
                    title: 'Testēšana un paralēlā darbība',
                    desc: 'Sistēma darbojas paralēli jūsu esošajiem procesiem 2-4 nedēļas. Salīdzinām AI rezultātus ar manuāli sagatavotajiem datiem, lai pārliecinātos par precizitāti. Jūsu komanda iepazīstas ar jauno sistēmu un sniedz atgriezenisko saiti, ko izmantojam korekcijām. Šajā posmā visi AI apstrādātie dokumenti tiek pārbaudīti manuāli.',
                  },
                  {
                    title: 'Palaišana un pastāvīgs atbalsts',
                    desc: 'Pēc veiksmīgas testēšanas sistēma tiek pilnībā aktivizēta. Nodrošinām pastāvīgu tehnisko atbalstu, regulārus sistēmas atjauninājumus un veiktspējas monitoringu. Katru mēnesi saņemat detalizētu atskaiti par automatizācijas rezultātiem: apstrādāto dokumentu skaitu, ietaupīto laiku un precizitātes rādītājiem.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section title="Piemērs: Kā grāmatvedības birojs ietaupīja 25 stundas nedēļā">
            <div className="space-y-10">
              <div>
                <h3 className="m-0 mb-3 text-xl font-medium leading-snug">Izaicinājums</h3>
                <Prose>
                  <p>
                    Grāmatvedības birojs ar 6 darbiniekiem apkalpoja 85 klientus, mazos un vidējos uzņēmumus Rīgā un Pierīgā. Katru mēnesi
                    komanda apstrādāja aptuveni 3200 rēķinus, saskaņoja 12 bankas kontus un sagatavoja PVN deklarācijas visiem klientiem.
                    Manuālais darbs aizņēma tik daudz laika, ka birojs bija spiests atteikt jaunus klientus, un darbiniekiem regulāri nācās
                    strādāt virsstundas, īpaši gada pārskata sezonā.
                  </p>
                </Prose>
              </div>
              <div>
                <h3 className="m-0 mb-3 text-xl font-medium leading-snug">Risinājums</h3>
                <Prose>
                  <p>
                    Ieviesām trīs automatizācijas moduļus: AI rēķinu apstrādi ar automātisku grāmatošanu, bankas izrakstu saskaņošanu un
                    PVN deklarāciju automātisku sagatavošanu. Sistēmu integrējām ar biroja esošo 1C grāmatvedības programmu un VID EDS.
                    Apmācījām AI modeli uz biroja vēsturiskajiem datiem: 18 mēnešu grāmatojumiem un klasifikācijām.
                  </p>
                </Prose>
              </div>
              <div>
                <h3 className="m-0 mb-3 text-xl font-medium leading-snug">Rezultāti</h3>
                <CheckList
                  items={[
                    'Rēķinu apstrādes laiks samazinājās par 85%, no 4 minūtēm uz 35 sekundēm vidēji',
                    'Bankas saskaņošana tagad aizņem 15 minūtes mēnesī (iepriekš: 8 stundas)',
                    'PVN deklarāciju sagatavošana pilnībā automatizēta: grāmatvedis tikai pārskata un apstiprina',
                    'Kopējais ietaupītais laiks: 25 stundas nedēļā (100+ stundas mēnesī)',
                    'Birojs pieņēma 30 jaunus klientus bez papildu darbinieku pieņemšanas',
                    'Kļūdu skaits samazinājās par 94%, no vidēji 12 kļūdām mēnesī uz mazāk nekā 1',
                  ]}
                />
              </div>
              <div>
                <h3 className="m-0 mb-3 text-xl font-medium leading-snug">Investīcijas atdeve</h3>
                <Prose>
                  <p>
                    Automatizācijas mēneša maksa bija €489. Ietaupītais darbinieku laiks (100+ stundas) vērtībā pārsniedza €2500 mēnesī.
                    Papildu ieņēmumi no 30 jaunajiem klientiem: aptuveni €4500 mēnesī. Kopējā investīcijas atdeve: vairāk nekā 14x
                    pirmajā gadā. Sistēma sevi atmaksāja jau pirmajā mēnesī.
                  </p>
                </Prose>
              </div>
            </div>
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie resursi">
            <RuledList
              items={[
                { to: '/dokumentu-automatizacija', title: 'Dokumentu Automatizācija', desc: 'Automatizējiet dokumentu apstrādi ar AI' },
                { to: '/nozares/gramatvediba-un-finanses', title: 'Grāmatvedība un Finanses', desc: 'AI risinājumi finanšu nozarei' },
                { to: '/datu-analize', title: 'Datu Analīze', desc: 'Inteliģenta datu analīze un vizualizācija' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Automatizējiet savu grāmatvedību jau šodien"
          text="Bezmaksas konsultācijā novērtēsim jūsu grāmatvedības procesus un parādīsim, kā AI var ietaupīt līdz 70% jūsu komandas laika."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default GramatvedibadAutomatizacija;
