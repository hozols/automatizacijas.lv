import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, RuledList, Faq, CtaBand } from '@/components/page';

const faqs = [
  {
    question: 'Cik maksā mājas lapas izstrāde?',
    answer: 'Vienkārša biznesa mājas lapa sākas no €800-1,500. Mājas lapa ar pielāgotu dizainu, AI integrāciju un CMS — €2,000-5,000. E-komercijas risinājumi ar pilnu funkcionalitāti — no €3,000. Piedāvājam bezmaksas konsultāciju un detalizētu tāmi.',
  },
  {
    question: 'Cik ilgi aizņem mājaslapas izveide?',
    answer: 'Vienkārša vizītkarte/landing page — 1-2 nedēļas. Biznesa mājas lapa ar vairākām sadaļām — 3-4 nedēļas. E-komercijas veikals vai sarežģītāka web aplikācija — 6-12 nedēļas. Laiks ir atkarīgs no satura sagatavošanas ātruma un funkcionalitātes apjoma.',
  },
  {
    question: 'Kāda ir atšķirība starp parasto un AI mājas lapu?',
    answer: 'AI mājas lapa ietver inteliģentas funkcijas — čatbotu klientu apkalpošanai, personalizētu satura parādīšanu, automātisku SEO optimizāciju un analītiku. Tā ne tikai informē, bet aktīvi palīdz piesaistīt un konvertēt klientus.',
  },
  {
    question: 'Vai jūs nodrošināt mājas lapas uzturēšanu?',
    answer: 'Jā, piedāvājam uzturēšanas plānus sākot no €49/mēnesī, kas ietver drošības atjauninājumus, regulāras rezerves kopijas, veiktspējas monitoringu un mazas satura izmaiņas. Premium plānā iekļauts arī SEO monitorings un mēneša atskaites.',
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
  "name": "Mājaslapu Izstrāde ar AI",
  "description": "Profesionāla mājaslapu un web aplikāciju izstrāde ar AI integrāciju. Modernas, ātras un SEO optimizētas mājas lapas uzņēmumiem Latvijā.",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
  "areaServed": { "@type": "Country", "name": "Latvia" },
  "serviceType": "Web Development"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
    { "@type": "ListItem", "position": 2, "name": "Pakalpojumi", "item": "https://automatizacijas.lv/services" },
    { "@type": "ListItem", "position": 3, "name": "Mājaslapu Izstrāde", "item": "https://automatizacijas.lv/majaslapu-izstrade" }
  ]
};

const MajaslapuIzstrade = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Mājaslapu izstrāde ar AI integrāciju | automatizacijas.lv</title>
        <meta name="description" content="Mājaslapas un e-veikali ar čatbotu, personalizāciju un SEO jau iebūvētu. Skaidra cena pirms darba sākuma." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/majaslapu-izstrade" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/majaslapu-izstrade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/majaslapu-izstrade" />
        <meta property="og:title" content="Mājaslapu izstrāde ar AI integrāciju | automatizacijas.lv" />
        <meta property="og:description" content="Mājaslapas un e-veikali ar čatbotu, personalizāciju un SEO jau iebūvētu. Skaidra cena pirms darba sākuma." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mājaslapu izstrāde ar AI integrāciju" />
        <meta name="twitter:description" content="Mājaslapas un e-veikali ar čatbotu, personalizāciju un SEO jau iebūvētu. Skaidra cena pirms darba sākuma." />
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
            { label: 'Mājaslapu Izstrāde' },
          ]}
        />

        <PageHero
          vignette="merchant-van-dyck"
          title="Mājaslapu izstrāde ar AI integrāciju"
          lede={
            <>
              Izveidojam modernas, ātras un <strong>SEO optimizētas mājas lapas</strong>, kas ne tikai labi
              izskatās, bet arī aktīvi palīdz piesaistīt klientus. Katram projektam piedāvājam AI integrāciju:
              čatbotus, personalizāciju un inteliģentu analītiku.
            </>
          }
          facts={['90+ Lighthouse', 'Mobilā versija', 'SEO optimizēta', 'AI integrācija']}
        />

        <article>
          <Section title="Ko piedāvājam">
            <RuledList
              items={[
                { title: 'Biznesa mājas lapas', desc: 'Profesionālas korporatīvās mājas lapas ar modernu dizainu, ātru ielādi un pilnu SEO optimizāciju. Ideāli piemērotas uzņēmumiem, kas vēlas prezentēt savus pakalpojumus tiešsaistē.' },
                { title: 'E-komercijas veikali', desc: 'Pilnvērtīgi interneta veikali ar maksājumu sistēmām, inventāra pārvaldību un pasūtījumu apstrādi. Shopify, WooCommerce vai pilnībā pielāgoti risinājumi.' },
                { title: 'Web aplikācijas un MVP', desc: 'Pielāgotas web aplikācijas biznesa procesiem, no klientu portāliem līdz iekšējām vadības sistēmām. Ātra MVP izstrāde startupu idejām.' },
                { title: 'Progresīvās web aplikācijas', desc: 'PWA tehnoloģija nodrošina lietotnes pieredzi tieši pārlūkā: darbojas bezsaistē, saņem push paziņojumus un ielādējas zibenīgi ātri.' },
              ]}
            />
          </Section>

          <Section title="Kāpēc mājas lapa ar AI?" tone="sheet">
            <Prose>
              <p>
                Parasta mājas lapa ir kā digitāla vizītkarte. Mājas lapa ar AI integrāciju ir kā darbinieks, kas
                strādā 24/7: apkalpo klientus, vāc kontaktus un palīdz pārdot. Lūk, ko AI pievieno:
              </p>
            </Prose>
            <CheckList
              className="mt-8"
              items={[
                'AI čatbots, kas atbild uz klientu jautājumiem jebkurā diennakts laikā latviešu valodā',
                'Personalizēts saturs katram apmeklētājam balstoties uz viņa uzvedību',
                'Automātiska SEO optimizācija un meta tagu ģenerēšana',
                'Inteliģenta analītika ar ieteikumiem satura un konversiju uzlabošanai',
                'Automātiska attēlu optimizācija un ātruma uzlabošana',
                'Formu ar AI palīdzību: inteliģenta lauku validācija un ieteikumi',
              ]}
            />
          </Section>

          <Section
            title="Tehnoloģijas, ko izmantojam"
            intro="Izmantojam jaunākās web tehnoloģijas, kas nodrošina ātrumu, drošību un mērogojamību:"
          >
            <RuledList
              columns={2}
              items={[
                { title: 'React / Next.js' },
                { title: 'TypeScript' },
                { title: 'Tailwind CSS' },
                { title: 'Node.js' },
                { title: 'Vercel / AWS' },
                { title: 'Shopify / WooCommerce' },
                { title: 'PostgreSQL' },
                { title: 'OpenAI API' },
                { title: 'Stripe Maksājumi' },
              ]}
            />
          </Section>

          <Section title="Biežāk uzdotie jautājumi" tone="sheet">
            <Faq items={faqs} />
          </Section>

          <Section title="Saistītie resursi">
            <RuledList
              items={[
                { to: '/kas-ir-maksligais-intelekts', title: 'Kas ir mākslīgais intelekts?', desc: 'Pilns ceļvedis par MI tehnoloģijām' },
                { to: '/chatbotu-izstrade', title: 'AI Čatbotu Izstrāde', desc: 'Inteliģenti čatboti klientu apkalpošanai' },
                { to: '/procesu-automatizacija', title: 'Procesu Automatizācija', desc: 'Automatizējiet biznesa procesus ar AI' },
              ]}
            />
          </Section>
        </article>

        <CtaBand
          title="Izveidosim jūsu nākamo mājas lapu"
          text="Bezmaksas konsultācijā apspriedīsim jūsu vajadzības un piedāvāsim optimālo risinājumu ar budžetu."
          primary={{ to: '/contact', label: 'Bezmaksas konsultācija' }}
          secondary={{ to: '/portfolio', label: 'Mūsu darbi' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default MajaslapuIzstrade;
