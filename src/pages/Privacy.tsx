import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Privacy = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Privātuma Politika | automatizacijas.lv</title>
        <meta name="description" content="automatizacijas.lv privātuma politika. Uzziniet, kā mēs apstrādājam jūsu personas datus saskaņā ar GDPR prasībām." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/privacy" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/privacy" />
        <meta property="og:title" content="Privātuma Politika | automatizacijas.lv" />
        <meta property="og:description" content="automatizacijas.lv privātuma politika un GDPR atbilstība." />
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
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <article className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <nav className="text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary transition-colors">Sākums</Link>
                <span className="mx-2">/</span>
                <span>Privātuma Politika</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Privātuma Politika
              </h1>

              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  Pēdējoreiz atjaunināts: 2026. gada 22. februāris
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">1. Datu Pārzinis</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Jūsu personas datu pārzinis ir <strong>automatizacijas.lv</strong> (turpmāk — "mēs" vai "Uzņēmums").
                    Ar mums var sazināties pa e-pastu: <a href="mailto:info@automatizacijas.lv" className="text-primary hover:underline">info@automatizacijas.lv</a> vai
                    tālruni: <a href="tel:+37120015830" className="text-primary hover:underline">+371 20 015 830</a>.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">2. Kādus Datus Mēs Apkopojam</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mēs apkopojam šādus personas datus, ko jūs brīvprātīgi sniedzat, izmantojot mūsu kontaktformu:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>Vārds un uzvārds</li>
                    <li>E-pasta adrese</li>
                    <li>Tālruņa numurs (neobligāts)</li>
                    <li>Uzņēmuma nosaukums (neobligāts)</li>
                    <li>Ziņojuma saturs</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">3. Datu Apstrādes Mērķi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Jūsu personas dati tiek apstrādāti šādiem mērķiem:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>Lai atbildētu uz jūsu pieprasījumu vai jautājumu</li>
                    <li>Lai sagatavotu un nosūtītu piedāvājumu par mūsu pakalpojumiem</li>
                    <li>Lai sazinātos ar jums par sadarbības iespējām</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Datu apstrādes tiesiskais pamats ir jūsu piekrišana (GDPR 6. panta 1. punkta a) apakšpunkts) un leģitīmā interese atbildēt uz pieprasījumiem (GDPR 6. panta 1. punkta f) apakšpunkts).
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">4. Datu Glabāšana un Drošība</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Jūsu personas dati tiek glabāti ne ilgāk, kā nepieciešams to apstrādes mērķiem, bet ne ilgāk kā 2 gadus pēc pēdējās saziņas.
                    Mēs izmantojam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu datus pret nesankcionētu piekļuvi, zudumu vai izmainīšanu.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">5. Sīkdatnes (Cookies)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mūsu mājas lapa izmanto sīkdatnes, lai nodrošinātu tās darbību un uzlabotu lietotāju pieredzi.
                    Mēs izmantojam Google Analytics (G-1D9GFNDNFG) apmeklējumu statistikas apkopošanai.
                    Jūs varat pārvaldīt sīkdatņu iestatījumus, izmantojot mūsu sīkdatņu paziņojumu lapas apakšā.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">6. Jūsu Tiesības</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Saskaņā ar GDPR jums ir šādas tiesības attiecībā uz jūsu personas datiem:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li><strong>Piekļuves tiesības</strong> — pieprasīt informāciju par jūsu apstrādātajiem datiem</li>
                    <li><strong>Labošanas tiesības</strong> — pieprasīt neprecīzu datu labošanu</li>
                    <li><strong>Dzēšanas tiesības</strong> — pieprasīt jūsu datu dzēšanu</li>
                    <li><strong>Ierobežošanas tiesības</strong> — pieprasīt datu apstrādes ierobežošanu</li>
                    <li><strong>Pārnesamības tiesības</strong> — saņemt savus datus strukturētā formātā</li>
                    <li><strong>Iebilduma tiesības</strong> — iebilst pret datu apstrādi</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Lai izmantotu savas tiesības, sazinieties ar mums pa e-pastu: <a href="mailto:info@automatizacijas.lv" className="text-primary hover:underline">info@automatizacijas.lv</a>.
                    Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā (<a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dvi.gov.lv</a>).
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">7. Izmaiņas Privātuma Politikā</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mēs paturam tiesības atjaunināt šo privātuma politiku. Par būtiskām izmaiņām mēs informēsim, publicējot atjauninātu versiju mūsu mājas lapā.
                  </p>
                </section>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Privacy;
