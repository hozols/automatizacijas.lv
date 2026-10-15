import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik ātri AI maršrutu optimizācija sāk dot rezultātus?',
    answer: 'Pirmie rezultāti ir redzami jau pirmajā nedēļā pēc ieviešanas. AI sistēma analizē jūsu vēsturiskos maršrutu datus, piegādes adreses un transportlīdzekļu parametrus, lai izveidotu optimālus maršrutus. Parasti degvielas ietaupījums ir 10-20% jau pirmajā mēnesī. Sistēma turpina mācīties un uzlabojas ar katru dienu, ņemot vērā satiksmes modeļus, sezonālās izmaiņas un klientu specifiskās prasības.',
  },
  {
    question: 'Vai AI var integrēties ar mūsu esošo TMS sistēmu?',
    answer: 'Jā, mūsu AI risinājumi ir izstrādāti ar atvērtu API arhitektūru un integrējas ar populārākajām TMS (Transport Management System) platformām, kā arī ERP sistēmām. Mēs nodrošinām integrāciju ar SAP, Oracle, 1C un citām Latvijā izplatītām sistēmām. Integrācijas process parasti aizņem 2-4 nedēļas, un datu apmaiņa notiek reāllaikā.',
  },
  {
    question: 'Kā AI palīdz ar starptautisko loģistiku un muitas dokumentiem?',
    answer: 'AI automatizē muitas deklarāciju sagatavošanu, pārbauda preču kodus (HS kodus), aprēķina muitas nodokļus un nodrošina atbilstību ES un trešo valstu regulējumam. Sistēma automātiski aizpilda CMR pavadzīmes, TIR karnetes un citus starptautiskās pārvadāšanas dokumentus. Tas samazina kļūdu skaitu par 90% un dokumentu sagatavošanas laiku par 80%.',
  },
  {
    question: 'Vai AI pieprasījuma prognozēšana darbojas sezonālā biznesā?',
    answer: 'Pilnīgi noteikti. AI ir īpaši spēcīgs tieši sezonālu svārstību prognozēšanā. Sistēma analizē vēsturiskos datus vairāku gadu griezumā, identificē sezonālās tendences, svētku periodu ietekmi un pat laika apstākļu korelācijas ar pieprasījumu. Latvijas loģistikas uzņēmumiem tas ir īpaši svarīgi, ņemot vērā izteiktās sezonālās svārstības transporta nozarē.',
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
  "name": "AI Automatizācija Loģistikai",
  "description": "AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, automatizēta dokumentācija un noliktavu pārvaldība.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Logistics AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "Loģistika", "item": "https://automatizacijas.lv/nozares/logistika" }
  ]
};

const NozareLogistika = () => {

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Loģistikai | automatizacijas.lv</title>
        <meta name="description" content="AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, automatizēta dokumentācija un noliktavu pārvaldība." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/logistika" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/logistika" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/logistika" />
        <meta property="og:title" content="AI Automatizācija Loģistikai | automatizacijas.lv" />
        <meta property="og:description" content="AI risinājumi loģistikas uzņēmumiem — maršrutu optimizācija, sūtījumu izsekošana, dokumentācija." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Loģistikai" />
        <meta name="twitter:description" content="AI risinājumi loģistikas uzņēmumiem Latvijā." />
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
            { label: 'Loģistika' },
          ]}
        />

        <PageHero
          title="AI Risinājumi Loģistikas Uzņēmumiem"
          lede={
            <>
              Loģistikas nozare Latvijā ir stratēģiski svarīga, taču saskaras ar pieaugošām izmaksām, sarežģītākiem piegādes tīkliem
              un klientu gaidām pēc ātrākas piegādes. AI tehnoloģijas ļauj <strong>optimizēt maršrutus,
              automatizēt dokumentāciju, prognozēt pieprasījumu un pārvaldīt noliktavas</strong>, padarot jūsu loģistikas
              operācijas ātrākas, lētākas un precīzākas.
            </>
          }
          facts={['-20% degvielas izmaksas', '80% ātrāka dokumentācija', '99.5% piegādes precizitāte', 'Pilna izsekojamība']}
        />

        <article>
          <Section title="Loģistikas izaicinājumi Latvijā">
            <Prose>
              <p>
                Latvija atrodas stratēģiski izdevīgā ģeogrāfiskā pozīcijā starp Rietumeiropu un Austrumeiropu, padarot loģistiku
                par vienu no valsts ekonomikas stūrakmeņiem. Tomēr nozare saskaras ar nopietniem izaicinājumiem: degvielas cenu
                svārstības, autovadītāju trūkums, pieaugošas klientu gaidas pēc ātrākas un precīzākas piegādes, kā arī
                sarežģītāki starptautiskās tirdzniecības regulējumi pēc Brexit un ģeopolitiskām pārmaiņām.
              </p>
              <p>
                Daudzi Latvijas loģistikas uzņēmumi joprojām izmanto manuālus procesus maršrutu plānošanā, dokumentu sagatavošanā
                un krājumu pārvaldībā. Dispečeri plāno maršrutus, balstoties uz pieredzi, nevis datiem. CMR pavadzīmes un
                muitas dokumenti tiek aizpildīti manuāli ar augstu kļūdu risku. Noliktavās preču izvietojums nav optimizēts,
                un pieprasījuma prognozes balstās uz intuīciju. AI tehnoloģijas piedāvā konkrētus risinājumus katrai no šīm problēmām.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Neoptimāli maršruti rada lieku degvielas patēriņu un kavē piegādes',
                'Manuāla CMR, pavadzīmju un muitas dokumentu sagatavošana ir lēna un kļūdaina',
                'Sūtījumu izsekošana prasa pastāvīgu manuālu uzraudzību un komunikāciju',
                'Noliktavu pārvaldība bez datu analīzes rada neefektīvu telpu izmantošanu',
                'Pieprasījuma svārstības pārsteidz un rada vai nu resursu trūkumu, vai dīkstāvi',
                'Autovadītāju darba laika uzskaite un atbilstība regulējumam prasa daudz administratīvā darba',
              ]}
            />
          </Section>

          <Section title="Maršrutu optimizācija ar AI" tone="sheet">
            <Prose>
              <p>
                AI maršrutu optimizācija ir viens no visspēcīgākajiem rīkiem loģistikas uzņēmumiem. Sistēma analizē simtiem
                mainīgo lielumu: piegādes adreses, laika logus, transportlīdzekļu kapacitāti, ceļu stāvokli, satiksmes
                intensitāti un pat laika apstākļu prognozes, lai izveidotu optimālu maršrutu katram transportlīdzeklim.
              </p>
              <p>
                Atšķirībā no tradicionālās plānošanas, kur dispečers izveido maršrutu, balstoties uz pieredzi, AI spēj
                vienlaicīgi optimizēt simtus maršrutu ar desmitiem ierobežojumu. Sistēma ņem vērā katra autovadītāja darba
                laika ierobežojumus, transportlīdzekļa kravas kapacitāti un degvielas efektivitāti. Rezultāts: par 15-25%
                mazāks nobrauktais attālums, ātrākas piegādes un apmierinātāki klienti.
              </p>
              <p>
                Reāllaika pielāgošanās ir vēl viens būtisks ieguvums. Ja ceļā notiek negadījums vai klients maina piegādes
                laiku, AI sistēma sekunžu laikā pārrēķina visus ietekmētos maršrutus un piedāvā optimālu alternatīvu.
                Dispečers saņem jauno plānu automātiski, un autovadītāja navigācija tiek atjaunināta reāllaikā.
              </p>
            </Prose>
          </Section>

          <Section title="Sūtījumu izsekošana">
            <Prose>
              <p>
                Moderna sūtījumu izsekošana ar AI pārsniedz vienkāršu GPS pozīcijas noteikšanu. AI sistēma apvieno datus no
                GPS sensoriem, temperatūras un mitruma sensoriem, kravnesības datiem un autovadītāja statusa informācijas,
                lai sniegtu pilnīgu priekšstatu par katru sūtījumu.
              </p>
              <p>
                Sistēma proaktīvi brīdina par iespējamām kavēšanām: ja transportlīdzeklis iestrēgst sastrēgumā vai
                autovadītājs tuvojas darba laika limitam, AI automātiski informē gan dispečeru, gan klientu par sagaidāmo
                kavēšanos un piedāvā alternatīvus risinājumus. Klienti var izsekot savus sūtījumus reāllaikā caur
                pašapkalpošanās portālu, kas samazina zvanu centram par 60%. Automātiski tiek ģenerēti piegādes
                apstiprinājumi ar fotofiksāciju un parakstu.
              </p>
            </Prose>
          </Section>

          <Section title="Dokumentu automatizācija loģistikā" tone="sheet">
            <Prose>
              <p>
                Loģistikas dokumentācija (CMR pavadzīmes, muitas deklarācijas, rēķini, piegādes apstiprinājumi) ir viena
                no laikietilpīgākajām un kļūdainākajām jomām. AI automatizē visu dokumentu ciklu no izveides līdz arhivēšanai.
              </p>
              <p>
                CMR pavadzīmju automatizācija ir īpaši vērtīga starptautiskiem pārvadātājiem. AI sistēma automātiski aizpilda
                CMR, balstoties uz pasūtījuma datiem, pārbauda informācijas pareizību un ģenerē dokumentu vairākās valodās.
                Muitas deklarācijas tiek sagatavotas automātiski, ar pareizu preču klasifikāciju un nodokļu aprēķinu.
              </p>
              <p>
                Rēķinu automatizācija samazina maksājumu kavēšanos. AI sistēma automātiski izveido rēķinus pēc piegādes
                apstiprināšanas, salīdzina tos ar līguma cenām un nosūta klientam. Neatbilstību gadījumā sistēma brīdina
                grāmatvedību pirms rēķina nosūtīšanas. Uzziniet vairāk par mūsu{' '}
                <Link to="/dokumentu-automatizacija" className="link">dokumentu automatizācijas</Link> risinājumiem.
              </p>
            </Prose>
          </Section>

          <Section title="Noliktavu pārvaldība">
            <Prose>
              <p>
                AI noliktavu pārvaldības sistēma optimizē visu noliktavas darbību, no preču izvietojuma līdz komplektēšanas
                maršrutiem. Sistēma analizē preču aprites ātrumu, izmērus, svaru un savstarpējo saistību, lai noteiktu
                optimālu vietu katrai precei noliktavā.
              </p>
              <p>
                Biežāk pieprasītās preces tiek izvietotas tuvāk izdošanas zonai, savukārt preces, kas bieži tiek pasūtītas
                kopā, tiek novietotas blakus. AI optimizē arī komplektēšanas maršrutus. Tā vietā, lai darbinieks ietu
                pa noliktavu haotiski, sistēma izveido optimālu ceļu, kas minimizē pārvietošanās laiku. Rezultāts:
                par 30-40% ātrāka pasūtījumu komplektēšana un par 25% efektīvāka noliktavas telpas izmantošana. Skatiet arī
                mūsu{' '}
                <Link to="/procesu-automatizacija" className="link">procesu automatizācijas</Link> pakalpojumus.
              </p>
            </Prose>
          </Section>

          <Section title="Pieprasījuma prognozēšana" tone="sheet">
            <Prose>
              <p>
                AI pieprasījuma prognozēšana ļauj loģistikas uzņēmumiem sagatavoties nākotnei, nevis tikai reaģēt uz
                pašreizējo situāciju. Sistēma analizē vēsturiskos pārvadājumu datus, sezonālās tendences, ekonomiskos
                rādītājus, e-komercijas tendences un pat laika apstākļu prognozes, lai precīzi prognozētu pieprasījumu.
              </p>
              <p>
                Piemēram, sistēma var prognozēt, ka nākamajā mēnesī pieprasījums pēc kravas pārvadājumiem Rīga-Viļņa
                virzienā pieaugs par 15% sezonālo faktoru dēļ, ļaujot uzņēmumam laicīgi piesaistīt papildu transportu
                un autovadītājus. Ilgtermiņa prognozes palīdz plānot autoparku: kad iegādāties jaunus transportlīdzekļus
                un kad nolietotus norakstīt. Precīzas prognozes samazina gan dīkstāves izmaksas, gan virsstundu izdevumus.
                Apskatiet mūsu{' '}
                <Link to="/datu-analize" className="link">datu analīzes</Link> pakalpojumus detalizētākām prognozēm.
              </p>
            </Prose>
          </Section>

          <Section title="Rezultāti loģistikas uzņēmumiem">
            <Prose>
              <p>
                Loģistikas uzņēmumi, kas ievieš AI risinājumus, redz ievērojamus uzlabojumus efektivitātē un izmaksu samazinājumā.
                Šeit ir tipiski rezultāti no mūsu ieviešanas projektiem Latvijā un Baltijā.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                columns={2}
                items={[
                  { title: 'Mazāk degvielas', desc: 'ar maršrutu optimizāciju', aside: '20%' },
                  { title: 'Ātrāka dokumentācija', desc: 'CMR un muitas dokumenti', aside: '80%' },
                  { title: 'Ātrāka komplektēšana', desc: 'noliktavu operācijās', aside: '35%' },
                  { title: 'Mazāk zvanu', desc: 'ar pašapkalpošanās portālu', aside: '60%' },
                ]}
              />
            </div>
            <Prose className="mt-8">
              <p>
                Piemēram, starptautisks pārvadājumu uzņēmums ar 30 transportlīdzekļiem ieviesa AI maršrutu optimizāciju un
                dokumentu automatizāciju. Pirmajā gadā degvielas izmaksas samazinājās par 18%, dokumentu apstrādes laiks
                par 75%, un klientu apmierinātības rādītājs pieauga par 25 punktiem.
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
                { to: '/datu-analize', title: 'Datu Analīze', desc: 'Loģistikas datu analīze un prognozēšana' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Optimizējiet savu loģistiku ar AI"
          text="Bezmaksas konsultācijā analizēsim jūsu loģistikas procesus un parādīsim, kur AI var dot vislielāko ietaupījumu un efektivitātes pieaugumu jūsu uzņēmumam."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default NozareLogistika;
