import React from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioShowcase from '@/components/PortfolioCarousel';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Prose, CtaBand } from '@/components/page';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Paveiktie AI projekti | automatizacijas.lv</title>
        <meta name="description" content="Konkrēti AI automatizācijas projekti Latvijas uzņēmumiem: kas bija problēma, ko uzbūvējām, ko tas mainīja."/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/portfolio" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/portfolio" />
        <meta property="og:title" content="Paveiktie AI projekti | automatizacijas.lv" />
        <meta property="og:description" content="Konkrēti AI automatizācijas projekti Latvijas uzņēmumiem: kas bija problēma, ko uzbūvējām, ko tas mainīja." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paveiktie AI projekti" />
        <meta name="twitter:description" content="Konkrēti AI automatizācijas projekti Latvijas uzņēmumiem: kas bija problēma, ko uzbūvējām, ko tas mainīja." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Projekti", "item": "https://automatizacijas.lv/portfolio" }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: 'Projekti' }]} />

        <PageHero
          vignette="filing-cabinet"
          title="Paveiktie darbi"
          lede={
            <>
              Apskatiet mūsu AI automatizācijas projektus Latvijas un starptautiskajiem uzņēmumiem.
              No automatizētas līgumu ģenerēšanas līdz inteliģentām klientu apkalpošanas sistēmām,
              katrs projekts demonstrē reālus rezultātus un izmērāmu biznesa vērtību.
            </>
          }
        >
          <Prose className="text-muted-foreground">
            <p>
              Mūsu <strong className="text-foreground">AI automatizācijas portfelis</strong> ietver projektus dažādās nozarēs: ražošana,
              enerģētika, muzeji, grāmatvedība, nekustamie īpašumi, mārketings un klientu apkalpošana. Katrs projekts ir izstrādāts
              individuāli, ņemot vērā klienta specifiskās vajadzības un biznesa mērķus.
            </p>
            <p>
              Rezultāti runā paši par sevi: mūsu klienti ir sasnieguši līdz pat <strong className="text-foreground">80% procesa paātrināšanu</strong>,
              ietaupījuši <strong className="text-foreground">60+ stundas</strong> ikdienas darbā un ievērojami uzlabojuši klientu apmierinātību
              ar inteliģentiem automatizācijas risinājumiem.
            </p>
          </Prose>
        </PageHero>

        <PortfolioShowcase />

        <CtaBand
          title="Vēlaties līdzīgu risinājumu savam uzņēmumam?"
          primary={{ to: '/contact', label: 'Pieteikties konsultācijai' }}
          secondary={{ to: '/pricing', label: 'Apskatīt cenas' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default PortfolioPage;