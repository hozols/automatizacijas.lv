
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HomeAIIntro from '@/components/HomeAIIntro';
import Features from '@/components/Features';
import HomeProcess from '@/components/HomeProcess';
import Testimonials from '@/components/Testimonials';
import HomeFAQ from '@/components/HomeFAQ';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useScrollDepthTracking } from '@/hooks/useScrollDepthTracking';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kas ir mākslīgais intelekts un kā tas var palīdzēt manam biznesam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mākslīgais intelekts (MI) ir tehnoloģija, kas ļauj datoriem veikt uzdevumus, kurus tradicionāli veic cilvēki — piemēram, atbildēt uz klientu jautājumiem, analizēt datus vai automatizēt atkārtojošos procesus. Biznesā MI palīdz ietaupīt laiku, samazināt izmaksas un uzlabot klientu apkalpošanu. Mūsu klienti vidēji ietaupa 15-25 stundas nedēļā katram darbiniekam."
      }
    },
    {
      "@type": "Question",
      "name": "Cik maksā AI automatizācijas ieviešana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI risinājumu cenas sākas no €299 mēnesī par pamata automatizāciju. Sarežģītākiem projektiem, piemēram, pielāgotiem čatbotiem vai datu analīzes sistēmām, cenas tiek noteiktas individuāli. Piedāvājam bezmaksas konsultāciju, lai novērtētu jūsu vajadzības un sniegtu precīzu tāmi."
      }
    },
    {
      "@type": "Question",
      "name": "Cik ilgi aizņem AI risinājuma izstrāde un ieviešana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pamata AI čatbota ieviešana aizņem 1-2 nedēļas. Procesu automatizācijas projekti parasti ilgst 2-6 nedēļas atkarībā no sarežģītības. Pilnīgi pielāgoti risinājumi ar datu analīzi un integrācijām var aizņemt 1-3 mēnešus. Sākam ar bezmaksas konsultāciju un izstrādājam detalizētu projekta plānu."
      }
    },
    {
      "@type": "Question",
      "name": "Vai AI čatbots var strādāt latviešu valodā?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jā, mūsu AI čatboti pilnībā atbalsta latviešu valodu. Izmantojam jaunākās valodas apstrādes tehnoloģijas, kas nodrošina dabīgu un precīzu komunikāciju latviski. Čatboti var apkalpot klientus 24/7, atbildēt uz biežāk uzdotajiem jautājumiem un novirzīt sarežģītākus pieprasījumus pie speciālistiem."
      }
    },
    {
      "@type": "Question",
      "name": "Kā sākt sadarbību ar automatizacijas.lv?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sāciet ar bezmaksas konsultāciju — sazinieties ar mums pa tālruni +371 20 015 830, e-pastu info@automatizacijas.lv vai WhatsApp. Konsultācijā mēs novērtēsim jūsu biznesa vajadzības, piedāvāsim piemērotāko risinājumu un sniegsim orientējošu tāmi. Nav nekādu saistību — vienkārši aprunāsimies par jūsu mērķiem."
      }
    }
  ]
};

const Index = () => {
  useScrollDepthTracking();

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automatizācija Latvijā | automatizacijas.lv</title>
        <meta name="description" content="Profesionāli AI automatizācijas risinājumi uzņēmumiem Latvijā. Čatboti, procesu automatizācija, datu analīze un AI darbinieki. Bezmaksas konsultācija." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://automatizacijas.lv/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/" />
        <meta property="og:title" content="AI Automatizācija Latvijā | automatizacijas.lv" />
        <meta property="og:description" content="Profesionāli AI automatizācijas risinājumi uzņēmumiem Latvijā. Čatboti, procesu automatizācija, datu analīze un AI darbinieki." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Automatizācijas Pakalpojumi Latvijā" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatizācija Latvijā | automatizacijas.lv" />
        <meta name="twitter:description" content="Profesionāli AI automatizācijas risinājumi uzņēmumiem Latvijā. Čatboti, procesu automatizācija un AI darbinieki." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            <HeroSection />
            <HomeAIIntro />
            <Features />
            <HomeProcess />
            <HomeFAQ />
            <Testimonials />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
