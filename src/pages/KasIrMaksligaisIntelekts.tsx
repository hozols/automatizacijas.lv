import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Vai mākslīgais intelekts var aizstāt cilvēkus darbā?',
    answer: 'MI neaizstāj cilvēkus — tas papildina viņu darbu. MI pārņem atkārtojošos, rutīnas uzdevumus, ļaujot darbiniekiem fokusēties uz radošāku, stratēģiskāku darbu. Piemēram, MI var apstrādāt rēķinus un e-pastus, bet biznesa lēmumus joprojām pieņem cilvēki.',
  },
  {
    question: 'Cik drošs ir mākslīgais intelekts biznesa datos?',
    answer: 'Mūsdienu MI risinājumi izmanto šifrēšanu, piekļuves kontroli un datu anonimizāciju. Izvēloties MI pakalpojumu sniedzēju, pārliecinieties, ka tas atbilst GDPR prasībām un piedāvā datu apstrādi ES robežās. Mēs automatizacijas.lv vienmēr nodrošinām datu drošību visaugstākajā līmenī.',
  },
  {
    question: 'Kādi ir populārākie MI rīki Latvijā?',
    answer: 'Latvijā populārākie MI rīki ir ChatGPT (teksta ģenerēšana un analīze), Google Gemini (meklēšana un datu apstrāde), Microsoft Copilot (Office integrācija), kā arī specializēti čatboti un automatizācijas risinājumi. Arvien populārāki kļūst arī MI rīki, kas strādā latviešu valodā.',
  },
  {
    question: 'Kā sākt izmantot mākslīgo intelektu savā uzņēmumā?',
    answer: 'Sāciet ar vienkāršiem soļiem: 1) Identificējiet atkārtojošos procesus, kas aizņem daudz laika. 2) Izmēģiniet bezmaksas MI rīkus kā ChatGPT vai Google Gemini. 3) Konsultējieties ar MI speciālistiem par automatizācijas iespējām. 4) Sāciet ar vienu nelielu projektu un paplašiniet pakāpeniski.',
  },
  {
    question: 'Cik maksā mākslīgā intelekta ieviešana uzņēmumā?',
    answer: 'MI risinājumu cenas variē no bezmaksas rīkiem (ChatGPT, Google Gemini) līdz pielāgotiem biznesa risinājumiem sākot no €299/mēnesī. Sarežģītāki projekti kā pielāgoti čatboti vai datu analīzes sistēmas var maksāt €1,000-€10,000+ atkarībā no apjoma. Piedāvājam bezmaksas konsultāciju, lai novērtētu jūsu vajadzības.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kas ir mākslīgais intelekts? Pilnīgs ceļvedis 2026. gadam",
  "description": "Uzziniet, kas ir mākslīgais intelekts, kā tas darbojas un kā to izmantot biznesā Latvijā. Praktisks ceļvedis ar piemēriem.",
  "author": {
    "@type": "Organization",
    "name": "automatizacijas.lv",
    "url": "https://automatizacijas.lv"
  },
  "publisher": {
    "@type": "Organization",
    "name": "automatizacijas.lv",
    "url": "https://automatizacijas.lv",
    "logo": {
      "@type": "ImageObject",
      "url": "https://automatizacijas.lv/favicon.svg"
    }
  },
  "datePublished": "2026-02-17",
  "dateModified": "2026-02-17",
  "mainEntityOfPage": "https://automatizacijas.lv/kas-ir-maksligais-intelekts",
  "inLanguage": "lv"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Kas ir mākslīgais intelekts", "item": "https://automatizacijas.lv/kas-ir-maksligais-intelekts" }
  ]
};

const toc = [
  { href: '#kas-ir-mi', label: 'Kas ir mākslīgais intelekts vienkāršiem vārdiem' },
  { href: '#mi-veidi', label: 'Mākslīgā intelekta veidi' },
  { href: '#ka-darbojas', label: 'Kā mākslīgais intelekts darbojas' },
  { href: '#mi-biznesam', label: 'Mākslīgais intelekts biznesā: praktiski piemēri' },
  { href: '#mi-latvija', label: 'Mākslīgais intelekts Latvijā' },
  { href: '#mi-riki', label: 'Populārākie MI rīki 2026. gadā' },
  { href: '#nakotne', label: 'MI nākotne un tendences' },
  { href: '#buj', label: 'Biežāk uzdotie jautājumi' },
];

const KasIrMaksligaisIntelekts = () => {

  return (
    <PageTransition>
      <Helmet>
        <title>Kas ir mākslīgais intelekts? Ceļvedis latviski 2026</title>
        <meta name="description" content="Mākslīgais intelekts vienkārši latviski: kas tas ir, kā strādā ChatGPT un līdzīgi rīki, un kur to izmanto Latvijas uzņēmumi." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/kas-ir-maksligais-intelekts" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/kas-ir-maksligais-intelekts" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://automatizacijas.lv/kas-ir-maksligais-intelekts" />
        <meta property="og:title" content="Kas ir mākslīgais intelekts? Ceļvedis latviski 2026" />
        <meta property="og:description" content="Mākslīgais intelekts vienkārši latviski: kas tas ir, kā strādā ChatGPT un līdzīgi rīki, un kur to izmanto Latvijas uzņēmumi." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kas ir mākslīgais intelekts? Ceļvedis latviski 2026" />
        <meta name="twitter:description" content="Mākslīgais intelekts vienkārši latviski: kas tas ir, kā strādā ChatGPT un līdzīgi rīki, un kur to izmanto Latvijas uzņēmumi." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs
          items={[
            { label: 'Sākums', to: '/' },
            { label: 'Kas ir mākslīgais intelekts' },
          ]}
        />

        <PageHero
          vignette="scholar-writing"
          title="Kas ir mākslīgais intelekts? Ceļvedis latviski"
          lede={
            <>
              Mākslīgais intelekts (MI) jeb <strong>artificial intelligence (AI)</strong> ir
              datorzinātnes nozare, kas veido sistēmas, kuras spēj veikt uzdevumus, kam tradicionāli nepieciešama
              cilvēka intelektuālā spēja: mācīties, analizēt, lemt un komunicēt. Šajā ceļvedī uzzināsiet,
              kā MI darbojas, kādi ir tā galvenie veidi un kā to praktiski izmantot biznesā Latvijā.
            </>
          }
        />

        <Section title="Saturs" tone="sheet">
          <ul className="list-none p-0 m-0 border-t-2 border-foreground">
            {toc.map((item) => (
              <li key={item.href} className="py-3 border-b border-border">
                <a href={item.href} className="link">{item.label}</a>
              </li>
            ))}
          </ul>
        </Section>

        <article>
          <Section id="kas-ir-mi" title="Kas ir mākslīgais intelekts vienkāršiem vārdiem">
            <Prose>
              <p>
                Iedomājieties datoru, kas var mācīties no pieredzes, tāpat kā cilvēks. Mākslīgais intelekts ir tehnoloģija,
                kas ļauj datorprogrammām atpazīt rakstus datos, saprast cilvēku valodu, pieņemt lēmumus un pat radīt
                jaunu saturu. Atšķirībā no parastām programmām, kas seko stingriem noteikumiem, MI sistēmas var pielāgoties
                jaunām situācijām un uzlabot savu veiktspēju laika gaitā.
              </p>
              <p>
                Piemēram, kad jūs lietojat <strong>ChatGPT</strong> vai <strong>Google Gemini</strong>,
                jūs sazināties ar mākslīgā intelekta sistēmu, kas ir apmācīta uz miljardiem tekstu un var saprast kontekstu,
                atbildēt uz jautājumiem un pat rakstīt kodu vai tulkot no latviešu valodas.
              </p>
              <p>
                Mūsdienās MI ir visur: no jūsu telefona balss asistenta līdz Netflix ieteikumiem, no banku krāpšanas
                atklāšanas sistēmām līdz autonomiem automobiļiem. Tomēr biznesa kontekstā MI vislielāko vērtību rada,
                automatizējot ikdienas procesus un palīdzot pieņemt labākus lēmumus.
              </p>
            </Prose>
          </Section>

          <Section id="mi-veidi" title="Mākslīgā intelekta veidi" tone="sheet">
            <Prose>
              <p>Mākslīgo intelektu iedala vairākos tipos atkarībā no tā spējām un pielietojuma:</p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  {
                    title: 'Šaurais MI (Narrow AI)',
                    desc: 'Vislielākā daļa mūsdienu MI sistēmu. Specializēts konkrētu uzdevumu veikšanai, piemēram, attēlu atpazīšana, teksta ģenerēšana vai čatboti. ChatGPT, Siri un Google Translate ir šaurā MI piemēri. Tas nevar domāt kā cilvēks, bet savā jomā pārspēj cilvēkus ātrumā un precizitātē.',
                  },
                  {
                    title: 'Vispārējais MI (AGI)',
                    desc: 'Hipotētiska sistēma, kas spētu veikt jebkuru intelektuālu uzdevumu tāpat kā cilvēks. Pagaidām tas nepastāv, bet ir aktīvs pētniecības mērķis. AGI spētu mācīties jaunas jomas bez specifiskas apmācības un pielāgoties pilnīgi jaunām situācijām.',
                  },
                  {
                    title: 'Ģeneratīvais MI',
                    desc: 'MI, kas rada jaunu saturu: tekstus, attēlus, mūziku, video un kodu. Šis ir visstraujāk augošais MI virziens. Piemēri: ChatGPT (teksti), DALL-E un Midjourney (attēli), Suno (mūzika), GitHub Copilot (kods).',
                  },
                  {
                    title: 'Mašīnmācīšanās (ML)',
                    desc: 'MI apakšnozare, kur sistēma mācās no datiem bez tiešas programmēšanas. Piemēram, e-pasta surogātpasta filtrs mācās atpazīt nevēlamus ziņojumus, analizējot tūkstošiem piemēru. Jo vairāk datu, jo precīzākas prognozes.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section id="ka-darbojas" title="Kā mākslīgais intelekts darbojas">
            <Prose>
              <p>
                MI darbības pamatā ir <strong>neironu tīkli</strong>, matemātiski modeļi,
                kas imitē cilvēka smadzeņu darbības principus. Vienkāršots process izskatās šādi:
              </p>
            </Prose>
            <div className="my-8">
              <Steps
                items={[
                  { title: 'Datu vākšana', desc: 'MI sistēma saņem miljonus piemēru: tekstus, attēlus, skaitļus vai citus datus.' },
                  { title: 'Apmācība', desc: 'Sistēma analizē šos piemērus un atrod likumsakarības: kādi vārdi parasti seko citiem, kā izskatās kaķis fotogrāfijā utt.' },
                  { title: 'Modelis', desc: 'Rezultātā rodas modelis, matemātiska formula, kas var veikt prognozes par jauniem, iepriekš neredzētiem datiem.' },
                  { title: 'Izmantošana', desc: 'Modelis saņem jaunu ievadi (piemēram, jūsu jautājumu) un ģenerē atbildi, balstoties uz to, ko iemācījies apmācības laikā.' },
                ]}
              />
            </div>
            <Prose>
              <p>
                Lieli valodas modeļi kā GPT-4 vai Gemini ir apmācīti uz terabaitiem teksta datu, ieskaitot grāmatām,
                tīmekļa lapām un zinātniskiem rakstiem. Tieši tāpēc tie var saprast kontekstu un atbildēt latviski,
                jo apmācības datos ir arī latviešu valodas teksti.
              </p>
            </Prose>
          </Section>

          <Section id="mi-biznesam" title="Mākslīgais intelekts biznesā: praktiski piemēri" tone="sheet">
            <Prose>
              <p>
                MI nav tikai lielo korporāciju tehnoloģija. Arvien vairāk mazo un vidējo uzņēmumu Latvijā sāk
                izmantot MI, lai ietaupītu laiku un palielinātu ieņēmumus. Šeit ir konkrēti piemēri:
              </p>
            </Prose>
            <div className="my-8">
              <RuledList
                items={[
                  {
                    to: '/chatbotu-izstrade',
                    title: 'AI čatboti klientu apkalpošanai',
                    desc: 'Čatbots uz jūsu mājaslapas var atbildēt uz klientu jautājumiem 24/7 latviešu valodā. Tas samazina atbildes laiku no stundām uz sekundēm un atbrīvo darbinieku laiku sarežģītākiem uzdevumiem. Mūsu klienti ar čatbotiem apkalpo līdz 85% standarta pieprasījumu automātiski.',
                  },
                  {
                    to: '/procesu-automatizacija',
                    title: 'Procesu automatizācija',
                    desc: 'No rēķinu izrakstīšanas līdz e-pastu apstrādei, MI var automatizēt desmitiem ikdienas procesu. Piemēram, sistēma var automātiski ģenerēt līgumus pēc sapulces, kategorizēt ienākošos e-pastus vai atgādināt par neapmaksātiem rēķiniem.',
                  },
                  {
                    title: 'Datu analīze un prognozes',
                    desc: 'MI analizē pārdošanas datus, klientu uzvedību un tirgus tendences, lai prognozētu pieprasījumu un optimizētu krājumus. Tas palīdz pieņemt labākus biznesa lēmumus, balstoties uz faktiem, nevis intuīciju.',
                  },
                  {
                    title: 'Dokumentu apstrāde',
                    desc: 'MI var automātiski lasīt un kategorizēt dokumentus, izvilkt svarīgu informāciju no līgumiem, rēķiniem vai pieteikumiem. Tas ietaupa desmitiem stundu mēnesī un samazina cilvēciskās kļūdas.',
                  },
                  {
                    title: 'Satura ģenerēšana un mārketings',
                    desc: 'MI palīdz radīt mārketinga saturu, no sociālo mediju ierakstiem līdz epastu kampaņām. Tas var pielāgot ziņojumus katram klientu segmentam, palielinot konversijas un iesaisti.',
                  },
                ]}
              />
            </div>
            <Prose>
              <p>
                <strong>Mūsu pieredze:</strong> automatizacijas.lv komanda ir palīdzējusi Latvijas uzņēmumiem ieviest AI
                risinājumus, kas ietaupa vidēji 15-25 stundas nedēļā katram darbiniekam. Mēs piedāvājam{' '}
                <Link to="/contact" className="link">bezmaksas konsultāciju</Link>,
                lai novērtētu, kā MI var palīdzēt tieši jūsu biznesam.
              </p>
            </Prose>
          </Section>

          <Section id="mi-latvija" title="Mākslīgais intelekts Latvijā">
            <Prose>
              <p>Latvija aktīvi iekļaujas Eiropas MI attīstībā. Galvenie virzieni:</p>
            </Prose>
            <CheckList
              className="my-8"
              items={[
                'Eiropas Savienības MI regulējums (AI Act) nosaka drošus MI izmantošanas standartus visām dalībvalstīm, ieskaitot Latviju',
                'Latvijas Mākslīgā intelekta stratēģija paredz MI ieviešanu valsts pārvaldē un izglītībā',
                'LIAA un Rīgas Tehniskā universitāte atbalsta MI startapus un pētniecību',
                'Arvien vairāk Latvijas uzņēmumu sāk izmantot MI rīkus ikdienas darbā, no grāmatvedības līdz klientu apkalpošanai',
                'MI rīki kā ChatGPT un Google Gemini arvien labāk darbojas latviešu valodā, padarot tehnoloģiju pieejamāku',
              ]}
            />
            <Prose>
              <p>
                Lai gan Latvija ir neliela valsts, MI piedāvā iespēju konkurēt globālā mērogā. Uzņēmumi, kas ievieš
                MI agri, iegūst ievērojamu konkurences priekšrocību, gan vietējā, gan starptautiskā tirgū.
              </p>
            </Prose>
          </Section>

          <Section id="mi-riki" title="Populārākie MI rīki 2026. gadā" tone="sheet">
            <Prose>
              <p>
                Šeit ir MI rīki, kurus varat sākt lietot jau šodien, daudzi no tiem ir bezmaksas vai piedāvā
                bezmaksas plānu:
              </p>
            </Prose>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="py-3 pr-6 align-top">Rīks</th>
                    <th className="py-3 pr-6 align-top">Pielietojums</th>
                    <th className="py-3 pr-6 align-top">Latviešu valoda</th>
                    <th className="py-3 pr-6 align-top">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['ChatGPT (OpenAI)', 'Teksti, analīze, kods, tulkošana', 'Jā, laba', 'Bezmaksas / $20/mēn'],
                    ['Google Gemini', 'Meklēšana, analīze, teksti', 'Jā, laba', 'Bezmaksas / $20/mēn'],
                    ['Microsoft Copilot', 'Office integrācija, e-pasti, dokumenti', 'Jā', '$30/mēn'],
                    ['Claude (Anthropic)', 'Teksti, analīze, sarežģīti uzdevumi', 'Jā, vidēja', 'Bezmaksas / $20/mēn'],
                    ['Midjourney / DALL-E', 'Attēlu ģenerēšana', 'Pamata', '$10-30/mēn'],
                    ['Zapier + AI', 'Procesu automatizācija', 'Nē', '$20-50/mēn'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border">
                      {row.map((cell, j) => (
                        <td key={j} className={j === 0 ? 'py-3 pr-6 align-top font-semibold' : 'py-3 pr-6 align-top text-muted-foreground'}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="nakotne" title="MI nākotne un tendences">
            <Prose>
              <p>Mākslīgais intelekts attīstās ātrāk nekā jebkad iepriekš. Galvenās tendences 2026. gadā un tālāk:</p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  { title: 'MI aģenti', desc: 'Sistēmas, kas var patstāvīgi veikt sarežģītus uzdevumus, no ceļojumu plānošanas līdz projektu vadībai. MI vairs ne tikai atbild uz jautājumiem, bet arī rīkojas.' },
                  { title: 'Multimodālie modeļi', desc: 'MI, kas vienlaicīgi saprot tekstu, attēlus, audio un video. Piemēram, varat parādīt foto no rēķina, un MI to automātiski apstrādās.' },
                  { title: 'MI personalizācija', desc: 'Katrs uzņēmums varēs izveidot savu MI, kas apmācīts uz viņu specifiskajiem datiem un procesiem, ne tikai vispārīgs čatbots, bet jūsu biznesa eksperts.' },
                  { title: 'Regulējums un ētika', desc: 'ES AI Act un citi regulējumi veido drošu vidi MI attīstībai. Uzņēmumiem jāseko līdzi jaunajām prasībām MI datu apstrādē un caurspīdīgumā.' },
                ]}
              />
            </div>
          </Section>

          <Section id="buj" title="Biežāk uzdotie jautājumi par mākslīgo intelektu" tone="sheet">
            <Faq items={faqs} />
          </Section>
        </article>

        <CtaBand
          title="Gatavi ieviest MI savā biznesā?"
          text="Mēs palīdzēsim izvēlēties piemērotāko MI risinājumu jūsu uzņēmumam, no čatbotiem līdz pilnai procesu automatizācijai."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/services', label: 'Mūsu pakalpojumi' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default KasIrMaksligaisIntelekts;
