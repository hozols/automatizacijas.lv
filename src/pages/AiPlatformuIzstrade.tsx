import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Steps, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik ilgi aizņem pielāgotas AI platformas izstrāde?',
    answer: 'Tas ir atkarīgs no projekta sarežģītības. Vienkāršs MVP (minimāli dzīvotspējīgs produkts) var būt gatavs 4 nedēļās. Pilnvērtīga platforma ar visām integrācijām un pielāgotiem ML modeļiem parasti aizņem 2-4 mēnešus. Sākam ar detalizētu konsultāciju, lai noteiktu precīzus termiņus jūsu projektam.',
  },
  {
    question: 'Kādas tehnoloģijas izmantojat AI platformu izstrādē?',
    answer: 'Strādājam ar vadošajām AI tehnoloģijām — Python, TensorFlow, PyTorch, OpenAI API, LangChain, vektoru datubāzēm (Pinecone, Weaviate) un mākoņplatformām (AWS, Google Cloud, Azure). Tehnoloģiju izvēle tiek pielāgota katram projektam, ņemot vērā jūsu specifiskās vajadzības un mērogojamības prasības.',
  },
  {
    question: 'Vai varu integrēt AI platformu ar savām esošajām sistēmām?',
    answer: 'Jā, mēs specializējamies tieši AI integrācijā ar esošajām biznesa sistēmām. Neatkarīgi no tā, vai tas ir ERP, CRM, grāmatvedības programmatūra vai e-komercijas platforma — mēs nodrošinām netraucētu datu apmaiņu caur API un automatizācijas risinājumiem.',
  },
  {
    question: 'Kāpēc izvēlēties pielāgotu platformu, nevis gatavu SaaS risinājumu?',
    answer: 'Pielāgota platforma nodrošina pilnu kontroli pār datiem, funkcionalitāti un mērogojamību. Jums nav jāmaksā pieaugošas abonēšanas maksas, nav atkarība no trešo pušu ierobežojumiem, un risinājums ir precīzi pielāgots jūsu biznesa procesiem. Ilgtermiņā tas bieži vien ir izdevīgāk nekā gatavi produkti.',
  },
  {
    question: 'Vai nodrošināt atbalstu pēc platformas palaišanas?',
    answer: 'Pilnīgi noteikti. Piedāvājam dažādus atbalsta plānus — no pamata uzturēšanas līdz pilnam tehniskajam atbalstam ar garantētu reakcijas laiku. Tas ietver kļūdu labošanu, veiktspējas monitoringu, regulārus atjauninājumus un nepārtrauktu optimizāciju.',
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
  "name": "AI Platformu Izstrāde",
  "description": "Pielāgotu AI platformu un risinājumu izstrāde uzņēmumiem. No idejas līdz gatavam produktam — AI čatboti, datu platformas, automatizācijas sistēmas.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "AI Platform Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "AI Platformu Izstrāde", "item": "https://automatizacijas.lv/ai-platformu-izstrade" }
  ]
};

const AiPlatformuIzstrade = () => {

  return (
    <PageTransition>
      <Helmet>
        <title>AI platformu izstrāde uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="Pielāgotas AI sistēmas uz jūsu datiem: iekšējie asistenti, zināšanu bāzes un integrācijas ar esošajām programmām." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <link rel="alternate" hrefLang="lv" href="https://automatizacijas.lv/ai-platformu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/ai-platformu-izstrade" />
        <meta property="og:title" content="AI platformu izstrāde uzņēmumiem | automatizacijas.lv" />
        <meta property="og:description" content="Pielāgotas AI sistēmas uz jūsu datiem: iekšējie asistenti, zināšanu bāzes un integrācijas ar esošajām programmām." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI platformu izstrāde uzņēmumiem" />
        <meta name="twitter:description" content="Pielāgotas AI sistēmas uz jūsu datiem: iekšējie asistenti, zināšanu bāzes un integrācijas ar esošajām programmām." />
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
            { label: 'AI Platformu Izstrāde' },
          ]}
        />

        <PageHero
          vignette="scholar-writing"
          title="AI platformu izstrāde uzņēmumiem"
          lede={
            <>
              Izstrādājam <strong>pielāgotas AI platformas</strong>, kas risina jūsu uzņēmuma unikālās vajadzības.
              No idejas līdz pilnvērtīgam produktam: čatboti, datu analīzes rīki, automatizācijas sistēmas un custom ML modeļi,
              kas strādā tieši tā, kā jūsu biznesam nepieciešams.
            </>
          }
          facts={['50+ izstrādāti projekti', 'No idejas līdz MVP 4 nedēļās', 'Pilns atbalsts', 'Mērogojami risinājumi']}
        />

        <article>
          <Section title="Ko mēs izstrādājam">
            <Prose>
              <p>
                Mūsu komanda specializējas dažādu AI risinājumu izstrādē, kas palīdz uzņēmumiem automatizēt procesus,
                analizēt datus un uzlabot klientu pieredzi. Katrs projekts tiek pielāgots jūsu specifiskajām biznesa vajadzībām.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                items={[
                  {
                    to: '/chatbotu-izstrade',
                    title: 'AI čatbotu platformas',
                    desc: 'Inteliģentas sarunu platformas ar dabīgās valodas apstrādi, daudzvalodu atbalstu un integrāciju ar jūsu biznesa sistēmām. Čatboti, kas saprot kontekstu un mācās no katras sarunas.',
                  },
                  {
                    to: '/datu-analize',
                    title: 'Datu analīzes un BI platformas',
                    desc: 'Pielāgotas datu analīzes sistēmas ar mākslīgā intelekta iespējām. Automātiska datu apstrāde, vizualizācija, prognožu modeļi un reāllaika monitoringa paneļi jūsu biznesa lēmumiem.',
                  },
                  {
                    to: '/procesu-automatizacija',
                    title: 'Automatizācijas sistēmas',
                    desc: 'End-to-end biznesa procesu automatizācija ar AI. No dokumentu apstrādes un klasifikācijas līdz pilnīgi automatizētām darba plūsmām, kas savieno vairākas sistēmas vienotā ekosistēmā.',
                  },
                  {
                    title: 'AI integrācijas ar esošajām sistēmām',
                    desc: 'Savienojam AI iespējas ar jūsu pašreizējo infrastruktūru: ERP, CRM, grāmatvedības un e-komercijas sistēmām. Bez nepieciešamības mainīt esošos procesus vai rīkus.',
                  },
                  {
                    title: 'Custom ML modeļu izstrāde',
                    desc: 'Pielāgotu mašīnmācīšanās modeļu apmācība un ieviešana. Attēlu atpazīšana, teksta klasifikācija, prognožu modeļi un anomāliju noteikšana. Viss pielāgots jūsu datiem un specifiskajiem uzdevumiem.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section title="Tehnoloģijas, ar kurām strādājam" tone="sheet">
            <Prose>
              <p>
                Izmantojam vadošās nozares tehnoloģijas, lai nodrošinātu jūsu AI platformas veiktspēju, drošību un mērogojamību.
                Tehnoloģiju izvēle tiek pielāgota katram projektam, ņemot vērā jūsu specifiskos mērķus un infrastruktūras prasības.
              </p>
            </Prose>
            <div className="mt-8">
              <RuledList
                columns={2}
                items={[
                  { title: 'Python & Frameworks', desc: 'Python, FastAPI, Flask, Django' },
                  { title: 'AI & ML', desc: 'TensorFlow, PyTorch, Scikit-learn, Hugging Face' },
                  { title: 'LLM & NLP', desc: 'OpenAI API, LangChain, LlamaIndex, Anthropic API' },
                  { title: 'Vektoru datubāzes', desc: 'Pinecone, Weaviate, ChromaDB, Qdrant' },
                  { title: 'Mākoņplatformas', desc: 'AWS, Google Cloud, Azure, Vercel' },
                  { title: 'Datu apstrāde', desc: 'PostgreSQL, Redis, Apache Kafka, Elasticsearch' },
                ]}
              />
            </div>
          </Section>

          <Section title="Izstrādes process">
            <Prose>
              <p>
                Mūsu izstrādes process ir strukturēts un caurskatāms. Katrā posmā jūs esat informēts par progresu
                un varat sniegt atgriezenisko saiti, lai nodrošinātu, ka gala rezultāts precīzi atbilst jūsu vajadzībām.
              </p>
            </Prose>
            <div className="mt-8">
              <Steps
                items={[
                  {
                    title: 'Konsultācija un vajadzību analīze',
                    desc: 'Sākam ar bezmaksas konsultāciju, kurā izpētām jūsu biznesa procesus, identificējam automatizācijas iespējas un definējam projekta mērķus. Rezultāts: detalizēts projekta apraksts ar skaidriem kritērijiem un termiņiem.',
                  },
                  {
                    title: 'Arhitektūras projektēšana',
                    desc: 'Projektējam platformas arhitektūru, izvēlamies optimālās tehnoloģijas un plānojam integrācijas ar jūsu esošajām sistēmām. Izveidojam detalizētu tehnisko specifikāciju un prototipus.',
                  },
                  {
                    title: 'MVP izstrāde',
                    desc: 'Izstrādājam minimāli dzīvotspējīgu produktu (MVP) ar pamata funkcionalitāti. Tas ļauj ātri validēt ideju un sākt iegūt reālu lietotāju atgriezenisko saiti jau 4 nedēļu laikā.',
                  },
                  {
                    title: 'Iteratīvā izstrāde',
                    desc: 'Balstoties uz MVP rezultātiem, iteratīvi paplašinām funkcionalitāti. Katru nedēļu piegādājam jaunas iespējas, testējam un optimizējam, pamatojoties uz reāliem lietošanas datiem.',
                  },
                  {
                    title: 'Testēšana un palaišana',
                    desc: 'Veicam rūpīgu testēšanu: veiktspējas, drošības un lietojamības testus. Nodrošinām raitu pāreju uz produkcijas vidi ar minimālu ietekmi uz jūsu biznesa procesiem.',
                  },
                  {
                    title: 'Atbalsts un nepārtraukta optimizācija',
                    desc: 'Pēc palaišanas nodrošinām pilnu tehnisko atbalstu, monitoringu un regulārus atjauninājumus. Nepārtraukti optimizējam AI modeļus un platformas veiktspēju, lai tā augtu kopā ar jūsu biznesu.',
                  },
                ]}
              />
            </div>
          </Section>

          <Section title="Kāpēc pielāgots risinājums, nevis gatavs produkts?" tone="sheet">
            <Prose>
              <p>
                Gatavi SaaS risinājumi var šķist pievilcīgi to ātrās ieviešanas dēļ, taču ilgtermiņā pielāgota platforma
                bieži vien ir izdevīgāka un efektīvāka. Lūk, galvenās atšķirības:
              </p>
            </Prose>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="m-0 mb-4 text-xl font-medium leading-snug">Pielāgota AI platforma</h3>
                <CheckList
                  items={[
                    'Pilna kontrole pār datiem un funkcionalitāti',
                    'Nav ikmēneša abonēšanas maksu trešajām pusēm',
                    'Precīzi pielāgota jūsu biznesa procesiem',
                    'Neierobežota mērogojamība',
                    'Pilna intelektuālā īpašuma kontrole',
                    'Integrācija ar jebkuru sistēmu',
                    'Neatkarība no ārēju pakalpojumu sniedzēju lēmumiem',
                  ]}
                />
              </div>
              <div>
                <h3 className="m-0 mb-4 text-xl font-medium leading-snug">Gatavs SaaS produkts</h3>
                <ul className="list-none p-0 m-0 border-t border-border text-muted-foreground">
                  {[
                    'Ierobežotas pielāgošanas iespējas',
                    'Pieaugošas ikmēneša izmaksas, augot lietotāju skaitam',
                    'Standarta funkcionalitāte visiem klientiem',
                    'Ierobežota mērogojamība un veiktspēja',
                    'Dati glabājas trešās puses serveros',
                    'Ierobežotas integrācijas iespējas',
                    'Atkarība no pakalpojuma sniedzēja nākotnes lēmumiem',
                  ].map((item) => (
                    <li key={item} className="py-3 border-b border-border">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Prose className="mt-8">
              <p>
                Protams, gatavi risinājumi var būt piemēroti vienkāršiem uzdevumiem vai ātrai prototipēšanai.
                Mēs palīdzēsim izvērtēt, kurš ceļš ir labākais tieši jūsu situācijai:{' '}
                <Link to="/contact" className="link">sazinieties ar mums</Link> bezmaksas konsultācijai.
              </p>
            </Prose>
          </Section>

          <Section title="Biežāk uzdotie jautājumi">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie pakalpojumi" tone="sheet">
            <RuledList
              items={[
                { to: '/chatbotu-izstrade', title: 'AI Čatbotu Izstrāde', desc: 'Inteliģenti čatboti klientu apkalpošanai' },
                { to: '/datu-analize', title: 'Datu Analīze', desc: 'AI datu analīzes un BI risinājumi' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Biznesa procesu automatizācija ar AI' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Izveidosim AI platformu jūsu biznesam"
          text="Bezmaksas konsultācijā izvērtēsim jūsu vajadzības, ieteiktu optimālās tehnoloģijas un sagatavosim detalizētu projekta plānu."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/services', label: 'Visi pakalpojumi' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default AiPlatformuIzstrade;
