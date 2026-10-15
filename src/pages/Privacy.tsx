import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { PageShell, Breadcrumbs, PageHero, Section, Prose } from '@/components/page';

const Privacy = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Privātuma politika | automatizacijas.lv</title>
        <meta name="description" content="Kādus datus automatizacijas.lv apstrādā, kāpēc un cik ilgi. Sīkdatnes, analītika un jūsu tiesības." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/privacy" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/privacy" />
        <meta property="og:title" content="Privātuma politika | automatizacijas.lv" />
        <meta property="og:description" content="Kādus datus automatizacijas.lv apstrādā, kāpēc un cik ilgi. Sīkdatnes, analītika un jūsu tiesības." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Privātuma Politika", "item": "https://automatizacijas.lv/privacy" }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs
          items={[
            { label: 'Sākums', to: '/' },
            { label: 'Privātuma Politika' },
          ]}
        />

        <PageHero title="Privātuma politika" lede="Pēdējoreiz atjaunināts: 2026. gada 22. februāris" />

        <article>
          <Section title="1. Datu Pārzinis">
            <Prose>
              <p>
                Jūsu personas datu pārzinis ir <strong>automatizacijas.lv</strong> (turpmāk: "mēs" vai "Uzņēmums").
                Ar mums var sazināties pa e-pastu: <a href="mailto:info@automatizacijas.lv" className="link">info@automatizacijas.lv</a> vai
                tālruni: <a href="tel:+37120015830" className="link">+371 20 015 830</a>.
              </p>
            </Prose>
          </Section>

          <Section title="2. Kādus Datus Mēs Apkopojam" tone="sheet">
            <Prose>
              <p>
                Mēs apkopojam šādus personas datus, ko jūs brīvprātīgi sniedzat, izmantojot mūsu kontaktformu:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vārds un uzvārds</li>
                <li>E-pasta adrese</li>
                <li>Tālruņa numurs (neobligāts)</li>
                <li>Uzņēmuma nosaukums (neobligāts)</li>
                <li>Ziņojuma saturs</li>
              </ul>
            </Prose>
          </Section>

          <Section title="3. Datu Apstrādes Mērķi">
            <Prose>
              <p>
                Jūsu personas dati tiek apstrādāti šādiem mērķiem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lai atbildētu uz jūsu pieprasījumu vai jautājumu</li>
                <li>Lai sagatavotu un nosūtītu piedāvājumu par mūsu pakalpojumiem</li>
                <li>Lai sazinātos ar jums par sadarbības iespējām</li>
              </ul>
              <p>
                Datu apstrādes tiesiskais pamats ir jūsu piekrišana (GDPR 6. panta 1. punkta a) apakšpunkts) un leģitīmā interese atbildēt uz pieprasījumiem (GDPR 6. panta 1. punkta f) apakšpunkts).
              </p>
            </Prose>
          </Section>

          <Section title="4. Datu Glabāšana un Drošība" tone="sheet">
            <Prose>
              <p>
                Jūsu personas dati tiek glabāti ne ilgāk, kā nepieciešams to apstrādes mērķiem, bet ne ilgāk kā 2 gadus pēc pēdējās saziņas.
                Mēs izmantojam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu datus pret nesankcionētu piekļuvi, zudumu vai izmainīšanu.
              </p>
            </Prose>
          </Section>

          <Section title="5. Sīkdatnes (Cookies)">
            <Prose>
              <p>
                Mūsu mājas lapa izmanto sīkdatnes, lai nodrošinātu tās darbību un uzlabotu lietotāju pieredzi.
                Mēs izmantojam Google Analytics (G-1D9GFNDNFG) apmeklējumu statistikas apkopošanai.
                Jūs varat pārvaldīt sīkdatņu iestatījumus, izmantojot mūsu sīkdatņu paziņojumu lapas apakšā.
              </p>
            </Prose>
          </Section>

          <Section title="6. Jūsu Tiesības" tone="sheet">
            <Prose>
              <p>
                Saskaņā ar GDPR jums ir šādas tiesības attiecībā uz jūsu personas datiem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Piekļuves tiesības</strong>: pieprasīt informāciju par jūsu apstrādātajiem datiem</li>
                <li><strong>Labošanas tiesības</strong>: pieprasīt neprecīzu datu labošanu</li>
                <li><strong>Dzēšanas tiesības</strong>: pieprasīt jūsu datu dzēšanu</li>
                <li><strong>Ierobežošanas tiesības</strong>: pieprasīt datu apstrādes ierobežošanu</li>
                <li><strong>Pārnesamības tiesības</strong>: saņemt savus datus strukturētā formātā</li>
                <li><strong>Iebilduma tiesības</strong>: iebilst pret datu apstrādi</li>
              </ul>
              <p>
                Lai izmantotu savas tiesības, sazinieties ar mums pa e-pastu: <a href="mailto:info@automatizacijas.lv" className="link">info@automatizacijas.lv</a>.
                Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā (<a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="link">www.dvi.gov.lv</a>).
              </p>
            </Prose>
          </Section>

          <Section title="7. Izmaiņas Privātuma Politikā">
            <Prose>
              <p>
                Mēs paturam tiesības atjaunināt šo privātuma politiku. Par būtiskām izmaiņām mēs informēsim, publicējot atjauninātu versiju mūsu mājas lapā.
              </p>
            </Prose>
          </Section>
        </article>
      </PageShell>
    </PageTransition>
  );
};

export default Privacy;
