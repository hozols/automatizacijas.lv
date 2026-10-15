import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik ātri AI chatbots var sākt apkalpot klientus?',
    answer: 'Pamata AI chatbotu e-komercijas veikalam var ieviest 1-2 nedēļu laikā. Chatbots tiek apmācīts ar jūsu produktu katalogu, biežāk uzdotajiem jautājumiem un atgriešanas politiku. Sarežģītāks risinājums ar pasūtījumu izsekošanu un personalizētām rekomendācijām prasa 3-4 nedēļas.',
  },
  {
    question: 'Vai AI rekomendācijas tiešām palielina pārdošanas apjomu?',
    answer: 'Jā, personalizētas AI rekomendācijas vidēji palielina vidējo pasūtījuma vērtību par 15-35%. Sistēma analizē klientu pirkšanas vēsturi, pārlūkošanas paradumus un līdzīgu klientu uzvedību, lai piedāvātu atbilstošākos produktus. Tas ir līdzīgi tam, kā pieredzējis pārdevējs pazīst katra klienta gaumi.',
  },
  {
    question: 'Kā AI palīdz ar pamesto grozu problēmu?',
    answer: 'AI analizē, kāpēc klienti pamet grozus — vai tā ir augsta piegādes cena, sarežģīts checkout process vai vienkārši aizmāršība. Balstoties uz to, sistēma automātiski sūta personalizētus atgādinājumus ar īpašiem piedāvājumiem. Vidēji tas atgūst 10-20% no pamestajiem groziem.',
  },
  {
    question: 'Vai AI risinājumi darbojas ar Shopify, WooCommerce un citām platformām?',
    answer: 'Jā, mūsu risinājumi integrējas ar visām populārākajām e-komercijas platformām — Shopify, WooCommerce, Magento, PrestaShop, kā arī pielāgotām platformām. Integrācija notiek caur API, un datu apmaiņa ir automātiska un reāllaikā.',
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
  "name": "AI Automatizācija E-komercijai",
  "description": "AI risinājumi e-komercijas uzņēmumiem — chatboti, pasūtījumu apstrāde, krājumu pārvaldība, personalizētas rekomendācijas un pamesto grozu atgūšana.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "E-commerce AI Automation"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Nozares", "item": "https://automatizacijas.lv/nozares" },
    { "@type": "ListItem", "position": 3, "name": "E-komercija", "item": "https://automatizacijas.lv/nozares/e-komercija" }
  ]
};

const NozareEkomercija = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI automatizācija e-komercijai | automatizacijas.lv</title>
        <meta name="description" content="Klientu atbildes, pasūtījumu apstrāde un produktu apraksti ar AI e-veikaliem. Integrācijas ar Shopify un WooCommerce." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/nozares/e-komercija" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/nozares/e-komercija" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/nozares/e-komercija" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/nozares/e-komercija" />
        <meta property="og:title" content="AI automatizācija e-komercijai | automatizacijas.lv" />
        <meta property="og:description" content="Klientu atbildes, pasūtījumu apstrāde un produktu apraksti ar AI e-veikaliem. Integrācijas ar Shopify un WooCommerce." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI automatizācija e-komercijai" />
        <meta name="twitter:description" content="Klientu atbildes, pasūtījumu apstrāde un produktu apraksti ar AI e-veikaliem. Integrācijas ar Shopify un WooCommerce." />
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
            { label: 'E-komercija' },
          ]}
        />

        <PageHero
          vignette="merchant-hals"
          title="AI automatizācija e-komercijas uzņēmumiem"
          lede={
            <>
              E-komercijas nozarē konkurence ir sīva, un klientu gaidas nemitīgi aug. AI automatizācija ļauj jums <strong>apkalpot
              klientus 24/7, personalizēt iepirkšanās pieredzi un automatizēt operatīvos procesus</strong>, vienlaikus samazinot
              izmaksas un palielinot pārdošanas apjomu.
            </>
          }
          facts={['24/7 klientu apkalpošana', '+25% konversija', '60% ātrāka apstrāde', 'Personalizēta pieredze']}
        />

        <article>
          <Section title="E-komercijas izaicinājumi Latvijā">
            <Prose>
              <p>
                Latvijas e-komercijas tirgus strauji aug: pēdējo gadu laikā tiešsaistes pirkumu apjoms ir dubultojies.
                Tomēr līdz ar izaugsmi pieaug arī izaicinājumi. Klienti sagaida tūlītējas atbildes, ātru piegādi un
                personalizētu pieredzi. Konkurence no starptautiskiem tirgotājiem spiež Latvijas e-veikalus meklēt veidus,
                kā darīt vairāk ar mazākiem resursiem.
              </p>
              <p>
                Daudzi e-komercijas uzņēmumi joprojām apstrādā pasūtījumus manuāli, atbild uz klientu jautājumiem e-pastā
                ar kavēšanos un zaudē potenciālos klientus, jo nespēj nodrošināt atbalstu ārpus darba laika. Šīs problēmas
                ir atrisināmas ar AI, un rezultāti ir redzami jau pirmajā mēnesī.
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'Klienti gaida atbildes stundām, un aiziet pie konkurenta, kas atbild ātrāk',
                'Manuāla pasūtījumu apstrāde un statusa atjaunināšana prasa daudz laika',
                'Pamestie grozi veido 60-80% no visiem sāktajiem pirkumiem',
                'Produktu aprakstu rakstīšana simtiem vai tūkstošiem preču ir milzīgs darbs',
                'Krājumu pārvaldība bez prognozēšanas rada vai nu pārpalikumus, vai deficītu',
                'Klientu atsauksmju un atgriešanas pieprasījumu apstrāde aizņem daudz resursu',
              ]}
            />
          </Section>

          <Section
            title="AI risinājumi e-komercijas veikaliem"
            tone="sheet"
            intro="Mūsu AI risinājumi aptver visu e-komercijas ciklu, no klientu piesaistes līdz pēcpārdošanas apkalpošanai. Katrs modulis darbojas gan atsevišķi, gan kā daļa no integrētas sistēmas."
          >
            <RuledList
              items={[
                {
                  title: 'AI chatboti klientu apkalpošanai',
                  desc: 'Inteliģents chatbots, kas atbild uz klientu jautājumiem 24/7 latviešu, angļu un krievu valodā. Palīdz ar produktu izvēli, pasūtījumu izsekošanu, atgriešanas procesu un bieži uzdotajiem jautājumiem. Sarežģītus jautājumus automātiski nodod cilvēkam ar pilnu kontekstu.',
                },
                {
                  title: 'Pasūtījumu automatizācija',
                  desc: 'Automātiska pasūtījumu apstrāde no saņemšanas līdz nosūtīšanai. AI pārbauda maksājumu statusu, ģenerē pavadzīmes, atjaunina krājumus un informē klientu par statusu. Samazina pasūtījuma apstrādes laiku no stundām uz minūtēm.',
                },
                {
                  title: 'Personalizētas rekomendācijas',
                  desc: 'AI analizē klienta pirkšanas vēsturi, pārlūkošanas uzvedību un līdzīgu klientu datus, lai piedāvātu visprecīzākās produktu rekomendācijas. "Klienti, kas pirka šo, arī iegādājās...", bet daudz gudrāk un precīzāk nekā vienkāršs algoritms.',
                },
                {
                  title: 'Pamesto grozu atgūšana',
                  desc: 'AI identificē pamesto grozu iemeslus un automātiski sūta personalizētus atgādinājumus. Pirmais atgādinājums pēc 1 stundas, otrais ar īpašu piedāvājumu pēc 24 stundām. Vidēji atgūst 10-20% pamesto grozu, kas ir tieša ieņēmumu palielināšana.',
                },
                {
                  title: 'Krājumu pārvaldība ar AI',
                  desc: 'AI prognozē pieprasījumu, balstoties uz vēsturiskajiem datiem, sezonalitāti un tirgus tendencēm. Automātiski brīdina par zemiem krājumiem, iesaka pasūtīšanas apjomus un laiku. Samazina gan pārpalikumu izmaksas, gan zaudētos pārdošanas gadījumus deficīta dēļ.',
                },
                {
                  title: 'Automātiski produktu apraksti',
                  desc: 'AI ģenerē unikālus, SEO optimizētus produktu aprakstus latviešu valodā. Ielādējiet produkta specifikācijas un fotoattēlus. AI izveido pārdošanas tekstu, atslēgas vārdus un meta aprakstus. Ideāli veikaliem ar simtiem vai tūkstošiem produktu.',
                },
              ]}
            />
          </Section>

          <Section
            title="Rezultāti e-komercijā"
            intro="E-komercijas uzņēmumi, kas ievieš AI automatizāciju, redz tūlītēju ietekmi uz pārdošanas rādītājiem un klientu apmierinātību. Šeit ir tipiski rezultāti."
          >
            <RuledList
              columns={2}
              items={[
                { title: 'Konversijas pieaugums', desc: 'ar personalizāciju', aside: '+25%' },
                { title: 'Grozu atgūšana', desc: 'no pamestajiem groziem', aside: '15-20%' },
                { title: 'Jautājumu atbildēti', desc: 'bez cilvēka iesaistes', aside: '80%' },
                { title: 'Ātrāka apkalpošana', desc: 'klientu jautājumiem', aside: '3x' },
              ]}
            />
            <Prose className="mt-8">
              <p>
                Uzziniet vairāk par mūsu{' '}
                <Link to="/chatbotu-izstrade" className="link">AI chatbotu izstrādi</Link>{' '}
                un{' '}
                <Link to="/procesu-automatizacija" className="link">procesu automatizācijas</Link> pakalpojumiem.
              </p>
            </Prose>
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi">
            <RuledList
              items={[
                { to: '/chatbotu-izstrade', title: 'Chatbotu Izstrāde', desc: 'AI chatboti klientu apkalpošanai un pārdošanai' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Biznesa procesu optimizācija un automatizācija' },
                { to: '/datu-analize', title: 'Datu Analīze', desc: 'Pārdošanas datu analīze un prognozēšana' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Palieliniet e-veikala pārdošanas apjomu ar AI"
          text="Bezmaksas konsultācijā analizēsim jūsu e-veikala procesus un parādīsim, kā AI var palielināt konversiju, uzlabot klientu pieredzi un samazināt operatīvās izmaksas."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default NozareEkomercija;
