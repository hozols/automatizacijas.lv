import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import TrainingModal, { type TrainingItem } from '@/components/TrainingModal';
import { PageShell, Breadcrumbs, PageHero, Section, Prose, CheckList, Steps, Faq } from '@/components/page';

const trainingFaqs = [
  {
    question: 'Kam ir domāti mākslīgā intelekta kursi uzņēmumiem?',
    answer: 'Komandām, kas ikdienā raksta, rēķina un apstrādā dokumentus: biroja darbiniekiem, pārdošanai, grāmatvedībai, klientu apkalpošanai, vadītājiem. Priekšzināšanas nav vajadzīgas; strādājam ar jūsu reālajiem uzdevumiem.',
  },
  {
    question: 'Cik ilga ir apmācība un kur tā notiek?',
    answer: 'Pamata formāts ir pusdienas apmācība, četras stundas, uz vietas jūsu birojā vai attālināti. Lielākām komandām vai vairākām nodaļām ir vairāku sesiju programma.',
  },
  {
    question: 'Vai apmācība ir latviski?',
    answer: 'Jā, apmācība notiek latviski, un visi uzdevumi tiek rakstīti latviski. Rīki (ChatGPT, Gemini, Copilot) latviski strādā labi; apmācībā parādām, kur tie kļūdās.',
  },
  {
    question: 'Kas paliek pēc apmācības?',
    answer: 'Vienas lapas MI lietošanas politika jūsu uzņēmumam, uzdevumu paraugi jūsu darbam, saraksts ar procesiem, ko ir vērts automatizēt, un protokols ar datumu un dalībniekiem, kas sedz ES MI akta prasību par darbinieku MI pratību.',
  },
  {
    question: 'Cik maksā MI apmācība?',
    answer: 'Cena ir atkarīga no dalībnieku skaita un formāta. Pēc īsas sarunas par komandu un uzdevumiem saņemat fiksētu cenu.',
  },
];

const TrainingPage = () => {
  const { t } = useLanguage();
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trainingData = {
    courses: {
      title: t('training.courses.title'),
      subtitle: t('training.courses.subtitle'),
      description: t('training.courses.description'),
      type: 'courses' as const,
      features: [
        t('training.courses.features.selfpaced'),
        t('training.courses.features.practical'),
        t('training.courses.features.certificate'),
        t('training.courses.features.support')
      ]
    },
    seminars: {
      title: t('training.seminars.title'),
      subtitle: t('training.seminars.subtitle'),
      description: t('training.seminars.description'),
      type: 'seminars' as const,
      features: [
        t('training.seminars.features.customized'),
        t('training.seminars.features.expert'),
        t('training.seminars.features.interactive'),
        t('training.seminars.features.materials')
      ]
    },
    topics: [
      {
        title: t('training.topics.ai_basics'),
        subtitle: 'AI Pamati',
        description: t('training.topics.ai_basics.description'),
        type: 'topic' as const
      },
      {
        title: t('training.topics.automation'),
        subtitle: 'Automatizācija',
        description: t('training.topics.automation.description'),
        type: 'topic' as const
      },
      {
        title: t('training.topics.chatbots'),
        subtitle: 'Čatboti',
        description: t('training.topics.chatbots.description'),
        type: 'topic' as const
      },
      {
        title: t('training.topics.data_analysis'),
        subtitle: 'Datu Analīze',
        description: t('training.topics.data_analysis.description'),
        type: 'topic' as const
      },
      {
        title: t('training.topics.machine_learning'),
        subtitle: 'Mašīnmācīšanās',
        description: t('training.topics.machine_learning.description'),
        type: 'topic' as const
      },
      {
        title: t('training.topics.ethics'),
        subtitle: 'AI Ētika',
        description: t('training.topics.ethics.description'),
        type: 'topic' as const
      }
    ]
  };

  const handleTrainingClick = (training: TrainingItem) => {
    setSelectedTraining(training);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTraining(null);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Mākslīgā intelekta kursi uzņēmumiem | automatizacijas.lv</title>
        <meta name="description" content="Mākslīgā intelekta kursi un apmācības uzņēmumiem: pusdienas apmācība ar jūsu dokumentiem, ChatGPT, Gemini un Copilot darbā, MI lietošanas politika. Latviski, uz vietas vai attālināti."/>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": trainingFaqs.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
        })}</script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/training" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/training" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/training" />
        <meta property="og:title" content="Mākslīgā intelekta kursi uzņēmumiem | automatizacijas.lv" />
        <meta property="og:description" content="AI apmācības komandām: kā lietot ChatGPT un AI rīkus ikdienas darbā. Praktiski, latviski, jūsu uzņēmuma piemēros." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mākslīgā intelekta kursi uzņēmumiem" />
        <meta name="twitter:description" content="AI apmācības komandām: kā lietot ChatGPT un AI rīkus ikdienas darbā. Praktiski, latviski, jūsu uzņēmuma piemēros." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Apmācības", "item": "https://automatizacijas.lv/training" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Apmācību Kursi",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Course",
                "name": "AI Pamati un Automatizācija",
                "description": "Iemācieties izmantot mākslīgo intelektu biznesa procesu automatizācijai. Praktisks kurss ar reāliem piemēriem.",
                "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
                "inLanguage": "lv",
                "courseMode": "blended",
                "offers": { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR" }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Course",
                "name": "AI Čatbotu Izveide un Pārvaldība",
                "description": "Apgūstiet AI čatbotu izveidi, konfigurēšanu un integrēšanu ar biznesa sistēmām.",
                "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
                "inLanguage": "lv",
                "courseMode": "blended",
                "offers": { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR" }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Course",
                "name": "Datu Analīze ar MI",
                "description": "Iemācieties analizēt biznesa datus ar mākslīgā intelekta rīkiem un pieņemt labākus lēmumus.",
                "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
                "inLanguage": "lv",
                "courseMode": "blended",
                "offers": { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR" }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Course",
                "name": "Mašīnmācīšanās Pamati",
                "description": "Ievads mašīnmācīšanās tehnoloģijās un to praktiskajā pielietojumā uzņēmumiem.",
                "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
                "inLanguage": "lv",
                "courseMode": "blended",
                "offers": { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR" }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Course",
                "name": "AI Ētika un Atbildīga Izmantošana",
                "description": "Izprotiet AI ētikas principus, datu privātumu un atbildīgu mākslīgā intelekta izmantošanu biznesā.",
                "provider": { "@type": "Organization", "name": "automatizacijas.lv", "url": "https://automatizacijas.lv" },
                "inLanguage": "lv",
                "courseMode": "blended",
                "offers": { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR" }
              }
            }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: 'Apmācības' }]} />

        <PageHero vignette="telephone" title={t('training.title')} lede={t('training.subtitle')} />

        {/* The offer every article links to: half a day at the company, with its own documents */}
        <Section
          title="Pusdienas MI apmācība jūsu uzņēmumā"
          intro="Četras stundas uz vietas vai attālināti, ar jūsu dokumentiem un uzdevumiem. Pēc tās katrs darbinieks zina, ko ChatGPT, Gemini un Copilot drīkst darīt viņa darbā un ko ne."
        >
          <Prose>
            <p>
              Nevis lekcija par mākslīgo intelektu, bet darbs ar jūsu e-pastiem, rēķiniem, līgumiem un tabulām.
              Pirms apmācības sarunājam, kādi uzdevumi komandā atkārtojas; apmācībā tos izdarām ar MI rīkiem; pēc
              apmācības paliek vienas lapas MI lietošanas politika un uzdevumu paraugi, ko komanda var lietot nākamajā
              dienā. Apmācības protokols ar datumu un dalībniekiem sedz ES MI akta prasību par darbinieku MI pratību.
            </p>
          </Prose>
          <div className="mt-8">
            <Steps
              items={[
                { title: 'Rīki un robežas (60 min)', desc: 'ChatGPT, Gemini, Copilot un Claude: kas ir bez maksas, kas maksas, ko tajos drīkst un ko nedrīkst ievadīt, kā pārbaudīt atbildes.' },
                { title: 'Uzdevumi latviski (90 min)', desc: 'Kā rakstīt uzdevumu, lai atbilde ir lietojama: konteksts, formāts, piemēri. Praktiski ar jūsu e-pastiem, piedāvājumiem un atskaitēm.' },
                { title: 'Dokumenti un dati (60 min)', desc: 'PDF, foto un tabulas: nolasīt, apkopot, salīdzināt. NotebookLM saviem dokumentiem. Kur beidzas rīks un sākas automatizācija.' },
                { title: 'Politika un nākamie soļi (30 min)', desc: 'Vienas lapas MI lietošanas politika jūsu uzņēmumam, saraksts ar uzdevumiem, ko automatizēt, atbildes uz jautājumiem.' },
              ]}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact?offer=mi-apmacibas" className="btn btn-solid">
              Pieteikt apmācību
            </Link>
            <button type="button" onClick={() => handleTrainingClick(trainingData.seminars)} className="btn btn-line">
              Detaļas un tēmas
            </button>
          </div>
        </Section>

        {/* Online Courses */}
        <Section title={t('training.courses.title')} intro={t('training.courses.subtitle')} tone="sheet">
          <Prose>
            <p>{t('training.courses.description')}</p>
          </Prose>
          <CheckList className="mt-8" items={trainingData.courses.features} />
          <button
            type="button"
            onClick={() => handleTrainingClick(trainingData.courses)}
            className="btn btn-line mt-8"
          >
            Uzzināt vairāk
          </button>
        </Section>

        {/* Corporate Seminars */}
        <Section title={t('training.seminars.title')} intro={t('training.seminars.subtitle')}>
          <Prose>
            <p>{t('training.seminars.description')}</p>
          </Prose>
          <CheckList className="mt-8" items={trainingData.seminars.features} />
          <button
            type="button"
            onClick={() => handleTrainingClick(trainingData.seminars)}
            className="btn btn-line mt-8"
          >
            Uzzināt vairāk
          </button>
        </Section>

        {/* Training Topics: ruled rows, each opens the details dialog */}
        <Section title={t('training.topics.title')} tone="sheet">
          <ul className="list-none p-0 m-0 border-t-2 border-foreground">
            {trainingData.topics.map((topic) => (
              <li key={topic.title} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => handleTrainingClick(topic)}
                  className="service-row group grid w-full gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline bg-transparent border-0 text-left text-foreground cursor-pointer"
                >
                  <span className="text-xl font-medium leading-snug">
                    <span className="sweep">{topic.title}</span>
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {topic.description}
                  </span>
                  <span className="sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:text-right font-medium text-primary underline underline-offset-4 decoration-[1.5px]">
                    Uzzināt vairāk
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Biežāk uzdotie jautājumi par MI apmācībām" tone="sheet">
          <Faq items={trainingFaqs} />
        </Section>

        {/* CTA: same band as CtaBand, but the actions open the dialog instead of navigating */}
        <section className="band-action band-ink">
          <div className="wrap py-14 lg:py-20 grid gap-8 lg:grid-cols-12 lg:gap-14 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="display-2 m-0">Gatavi sākt mācīties?</h2>
              <p className="mt-4 mb-0 text-lg max-w-[34em] opacity-90">
                Sazinieties ar mums, lai uzzinātu vairāk par mūsu kursiem un semināriem
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <button
                type="button"
                onClick={() => handleTrainingClick(trainingData.courses)}
                className="btn btn-invert"
              >
                Apskatīt kursus
              </button>
              <button
                type="button"
                onClick={() => handleTrainingClick(trainingData.seminars)}
                className="btn btn-line"
              >
                Pieteikt semināru
              </button>
            </div>
          </div>
        </section>

        {/* Training Modal */}
        {selectedTraining && (
          <TrainingModal
            isOpen={isModalOpen}
            onClose={closeModal}
            training={selectedTraining}
          />
        )}
      </PageShell>
    </PageTransition>
  );
};

export default TrainingPage;
