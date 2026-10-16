import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Vai AI darbinieks var pilnībā aizstāt cilvēku?',
    answer: 'AI darbinieks nav domāts, lai aizstātu cilvēkus, bet gan lai papildinātu komandu. Viņš pārņem rutīnas uzdevumus — datu ievadi, klientu atbildes, atskaišu ģenerēšanu — ļaujot jūsu darbiniekiem koncentrēties uz stratēģiskiem un radošiem darbiem. Rezultātā komanda strādā efektīvāk un ar augstāku apmierinātību.',
  },
  {
    question: 'Cik ātri AI darbinieks sāk strādāt?',
    answer: 'Pamata AI darbinieks ir gatavs darbam 1-2 nedēļu laikā. Sarežģītāki risinājumi ar vairākām integrācijām un pielāgotu loģiku prasa 3-5 nedēļas. Pēc ieviešanas AI darbinieks sāk mācīties no reāliem datiem un kļūst efektīvāks ar katru dienu.',
  },
  {
    question: 'Vai AI darbinieks strādā ar latviešu valodu?',
    answer: 'Jā, mūsu AI darbinieki pilnībā atbalsta latviešu valodu — gan teksta apstrādē, gan klientu saziņā, gan dokumentu analīzē. Tie spēj strādāt arī daudzvalodu vidē, automātiski pārslēdzoties starp latviešu, angļu un krievu valodām.',
  },
  {
    question: 'Kādi dati ir nepieciešami AI darbinieka apmācībai?',
    answer: 'Atkarībā no AI darbinieka tipa var būt nepieciešami klientu jautājumu paraugi, produktu katalogi, iekšējās procedūras vai vēsturiskie dati. Mēs palīdzam sagatavot un strukturēt datus, un viss process notiek pilnībā atbilstoši GDPR prasībām.',
  },
  {
    question: 'Cik maksā AI darbinieka ieviešana?',
    answer: 'Cenas sākas no €199/mēnesī par vienu AI darbinieku ar pamata funkcionalitāti. Pielāgoti risinājumi ar vairākām integrācijām sākas no €499/mēnesī. Piedāvājam bezmaksas konsultāciju, kurā novērtēsim jūsu vajadzības un sagatavosim precīzu piedāvājumu.',
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
  "name": "AI Darbinieki Uzņēmumiem",
  "description": "Gatavi izmantošanai AI darbinieki biznesa procesiem — klientu apkalpošana, satura veidošana, datu apstrāde. Strādā 24/7 bez kļūdām.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Workers and Agents"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Darbinieki", "item": "https://automatizacijas.lv/ai-darbinieki" }
  ]
};

const AiDarbinieki = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI darbinieki un AI aģenti uzņēmumam | automatizacijas.lv</title>
        <meta name="description" content="AI darbinieki konkrētiem uzdevumiem: klientu atbildes, satura sagatavošana, datu apstrāde. Strādā jūsu sistēmās un jūsu noteikumos." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/ai-darbinieki" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/ai-darbinieki" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/ai-darbinieki" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/ai-darbinieki" />
        <meta property="og:title" content="AI darbinieki un AI aģenti uzņēmumam | automatizacijas.lv" />
        <meta property="og:description" content="AI darbinieki konkrētiem uzdevumiem: klientu atbildes, satura sagatavošana, datu apstrāde. Strādā jūsu sistēmās un jūsu noteikumos." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI darbinieki un AI aģenti uzņēmumam" />
        <meta name="twitter:description" content="AI darbinieki konkrētiem uzdevumiem: klientu atbildes, satura sagatavošana, datu apstrāde. Strādā jūsu sistēmās un jūsu noteikumos." />
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
            { label: 'AI Darbinieki' },
          ]}
        />

        <PageHero
          vignette="card-index"
          title="AI darbinieki un AI aģenti uzņēmumam"
          lede={
            <>
              Iedomājieties komandas biedru, kas <strong>strādā 24/7 bez pārtraukumiem</strong>, nekad nepieļauj
              kļūdas rutīnas uzdevumos un spēj vienlaicīgi apkalpot desmitiem klientu. AI darbinieki nav nākotne.
              Tie ir šodienas risinājums, kas jau palīdz Latvijas uzņēmumiem strādāt efektīvāk un gudrāk.
            </>
          }
          facts={['24/7 pieejamība', '10x produktivitāte', 'No €199/mēn', 'Bez kļūdām']}
        />

        <article>
          <Section title="Kas ir AI darbinieki?">
            <Prose>
              <p>
                AI darbinieki ir mākslīgā intelekta aģenti, kas veic konkrētus biznesa uzdevumus autonomi vai ar
                minimālu cilvēka iesaisti. Atšķirībā no vienkāršiem automatizācijas rīkiem, AI darbinieki saprot
                kontekstu, mācās no pieredzes un spēj pieņemt lēmumus sarežģītās situācijās.
              </p>
              <p>
                Iedomājieties darbinieku, kas nekad neaizmirst nosūtīt atgādinājumu, vienmēr precīzi apstrādā datus
                un spēj vienlaicīgi vadīt simtiem sarunu ar klientiem. Tieši to piedāvā AI darbinieki. Tie integrējas
                jūsu esošajās sistēmās un sāk radīt vērtību jau no pirmās darba dienas.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Veic rutīnas uzdevumus 10x ātrāk nekā cilvēks',
                'Strādā bez pārtraukumiem: 24 stundas diennaktī, 365 dienas gadā',
                'Nepieļauj kļūdas atkārtojamos procesos',
                'Mācās un uzlabojas ar katru izpildītu uzdevumu',
                'Integrējas ar jūsu esošajām sistēmām un rīkiem',
                'Mērogojams: viens AI darbinieks var aizstāt veselu nodaļu',
              ]}
            />
          </Section>

          <Section
            title="AI darbinieku veidi"
            tone="sheet"
            intro="Katram biznesa procesam savs AI darbinieks. Mēs palīdzam identificēt jomas, kur AI darbinieki radīs vislielāko ietekmi, un ieviešam risinājumus, kas pielāgoti tieši jūsu uzņēmuma vajadzībām."
          >
            <RuledList
              items={[
                {
                  title: 'Klientu apkalpošanas AI darbinieks',
                  desc: 'Atbild uz klientu jautājumiem jebkurā laikā, risina standarta problēmas, novirza sarežģītus pieprasījumus pie speciālistiem. Saprot latviešu valodu un spēj vadīt dabīgas sarunas ar augstu apmierinātības līmeni.',
                },
                {
                  title: 'Satura veidošanas AI darbinieks',
                  desc: 'Raksta un rediģē tekstus: sociālo tīklu ierakstus, e-pasta kampaņas, produktu aprakstus un emuāra rakstus. Saglabā jūsu zīmola toni un stilistiku, veidojot konsekventu komunikāciju visos kanālos.',
                },
                {
                  title: 'Datu apstrādes AI darbinieks',
                  desc: 'Apstrādā, analizē un strukturē liela apjoma datus. Veido atskaites, identificē tendences un sagatavo ieskatus lēmumu pieņemšanai. Darbu, kas cilvēkam aizņemtu stundas, AI darbinieks paveic minūtēs.',
                },
                {
                  title: 'Pārdošanas AI darbinieks',
                  desc: 'Kvalificē potenciālos klientus, personalizē piedāvājumus un uztur kontaktu ar esošajiem klientiem. Analizē pirkumu vēsturi un iesaka optimālo pārdošanas stratēģiju katram klientam.',
                },
                {
                  title: 'Administratīvais AI darbinieks',
                  desc: 'Pārvalda kalendārus, organizē sapulces, apstrādā e-pastus un veic dokumentu pārvaldību. Automatizē ikdienas administratīvos uzdevumus, atbrīvojot jūsu laiku stratēģiskam darbam.',
                },
              ]}
            />
          </Section>

          <Section
            title="Kā AI darbinieki integrējas jūsu komandā"
            intro="AI darbinieka ieviešana nav sarežģīts vai ilgstošs process. Mēs esam izstrādājuši pārbaudītu pieeju, kas ļauj sākt gūt rezultātus jau dažu nedēļu laikā."
          >
            <Steps
              items={[
                {
                  title: 'Procesu audits un plānošana',
                  desc: 'Analizējam jūsu esošos biznesa procesus, identificējam rutīnas uzdevumus un novērtējam, kur AI darbinieki radīs vislielāko ietekmi. Izveidojam detalizētu ieviešanas plānu.',
                },
                {
                  title: 'AI darbinieka konfigurācija',
                  desc: 'Apmācām AI darbinieku uz jūsu specifiskajiem datiem, definējam darbības scenārijus un integrējam ar jūsu izmantotajām sistēmām: CRM, e-pastu, mājas lapu vai citiem rīkiem.',
                },
                {
                  title: 'Testēšana un pielāgošana',
                  desc: 'Testējam AI darbinieku reālos scenārijos, pielāgojam atbildes un uzvedību, un nodrošinām, ka tas strādā precīzi un atbilstoši jūsu biznesa standartiem.',
                },
                {
                  title: 'Palaišana un nepārtraukta optimizācija',
                  desc: 'Palaidam AI darbinieku produkcijā, uzraugām veiktspēju un nepārtraukti uzlabojam tā efektivitāti, balstoties uz reāliem datiem un atgriezenisko saiti.',
                },
              ]}
            />
          </Section>

          <Section
            title="Priekšrocības salīdzinājumā ar tradicionālo pieeju"
            tone="sheet"
            intro="AI darbinieki fundamentāli maina to, kā uzņēmumi pārvalda rutīnas uzdevumus. Salīdziniet tradicionālo pieeju ar AI darbinieku ieviešanu."
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="m-0 mb-4 text-xl font-medium leading-snug">Tradicionālā pieeja</h3>
                <ul className="list-none p-0 m-0 border-t border-border">
                  {[
                    'Ierobežots darba laiks (8h dienā)',
                    'Cilvēciskās kļūdas rutīnas uzdevumos',
                    'Lēna mērogošana: jaunu darbinieku apmācība',
                    'Augstas personāla izmaksas',
                    'Nevienmērīga kvalitāte atkarībā no noslogojuma',
                  ].map((item) => (
                    <li key={item} className="py-3 border-b border-border text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="m-0 mb-4 text-xl font-medium leading-snug">AI darbinieki</h3>
                <CheckList
                  items={[
                    'Strādā 24/7 bez pārtraukumiem',
                    'Konsekventa precizitāte katrā uzdevumā',
                    'Tūlītēja mērogošana: pievienojiet jaunus uzdevumus minūtēs',
                    'Fiksētas un prognozējamas izmaksas',
                    'Vienmērīgi augsta kvalitāte neatkarīgi no apjoma',
                  ]}
                />
              </div>
            </div>
          </Section>

          <Section title="Biežāk uzdotie jautājumi">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi" tone="sheet">
            <RuledList
              items={[
                { to: '/chatbotu-izstrade', title: 'AI Čatbotu Izstrāde', desc: 'Inteliģenti čatboti klientu apkalpošanai' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Automatizējiet biznesa procesus ar AI' },
                { to: '/ai-platformu-izstrade', title: 'AI Platformu Izstrāde', desc: 'Pielāgotas AI platformas jūsu biznesam' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Pievienojiet AI darbinieku savai komandai"
          text="Bezmaksas konsultācijā novērtēsim jūsu procesus un parādīsim, kā AI darbinieks var uzlabot jūsu uzņēmuma efektivitāti."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default AiDarbinieki;
