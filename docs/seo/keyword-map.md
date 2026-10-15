# Keyword map, 2026-10-15

Source: DataForSEO, location Latvia, language lv (Google Ads volumes, Labs
keyword ideas, Labs ranked keywords for automatizacijas.lv, live SERP top 10).
Raw data: `dfs-raw.json`. "no data" means Google reports no measurable volume
in Latvia for the term; the title was then chosen by judgement and by what
the site already ranks for.

Rules applied to every row: keyword first, plain benefit second, brand
suffix ` | automatizacijas.lv` when it fits in 60 characters; H1 in sentence
case without the brand; description one or two plain sentences within 155
characters; no invented numbers.

## Findings that shape the map

- Latvian search demand for the service terms is tiny. None of
  "grāmatvedības automatizācija", "dokumentu automatizācija", "AI čatbots",
  "procesu automatizācija", "AI automatizācija" has measurable volume. The
  only service terms with volume are generic: "mājaslapu izstrāde" 480,
  "chatbot" 320, "grāmatvedības programma" 170, "e-rēķini" 590,
  "grāmatvedības pakalpojumi" 590 (accounting firms, not automation),
  "automatizācija" 40, "čatbots" 30, "biznesa procesu automatizācija" 10.
- The demand is informational: "mākslīgais intelekts" 8,100 (site ranks
  22nd with /kas-ir-maksligais-intelekts), "mākslīgais intelekts latviski"
  880 (13th), "kas ir mākslīgais intelekts" 170 (15th), "chatgpt latviski"
  9,900 (7th with /blog/chatgpt-latviski-ka-lietot), "čats gpt latviski"
  720 (20th), "mākslīgā intelekta kursi" 110 (36th with /training).
- The site already holds position 1 for "dokumentu automatizācija" (with the
  homepage) and position 2 for "AI čatbots" (with /chatbotu-izstrade), so
  those two pages keep their keyword in the title exactly.
- Top 10 for "grāmatvedības automatizācija" is banks, media and an
  accountants' association, no agency. The page can win it with a title that
  names the term plainly.
- **Three blog posts exist on the live site but not in this repository:**
  `/blog/chatgpt-latviski-ka-lietot` (the site's best-ranking page),
  `/blog/crm-sistema-ka-izveleties`, `/blog/digitalizacija-uznemumam-ar-ko-sakt`.
  They must be restored before any production deploy from this branch, or
  the deploy deletes them. Their content was captured from the live site.

## Routes

| Route | Primary keyword | Volume/mo | Title | H1 | Description |
| --- | --- | --- | --- | --- | --- |
| / | AI automatizācija uzņēmumiem | no data (ranks 1st for "dokumentu automatizācija", 2nd for "automatizācija" 40) | AI automatizācija uzņēmumiem Latvijā \| automatizacijas.lv | AI automatizācija darbiem, kas birojā atkārtojas katru dienu | Rēķinu ievade, dokumentu apstrāde, atbildes klientiem: uzbūvējam AI sistēmu, kas šos darbus dara pati, un pieslēdzam to jūsu programmām. Bezmaksas konsultācija. |
| /services | AI pakalpojumi uzņēmumiem | no data | AI pakalpojumi uzņēmumiem \| automatizacijas.lv | AI pakalpojumi uzņēmumiem | Čatboti, procesu un dokumentu automatizācija, datu analīze, AI platformas un mājaslapas. Viss, ko būvējam, un kam tas der. |
| /chatbotu-izstrade | AI čatbots (ranks 2nd); chatbot | no data; 320 | AI čatbota izstrāde latviešu valodā \| automatizacijas.lv | AI čatbota izstrāde latviešu valodā | Čatbots, kas atbild klientiem latviski 24/7, pieslēdzas CRM un mājaslapai. Pamata versija gatava 1 līdz 2 nedēļās. |
| /procesu-automatizacija | biznesa procesu automatizācija | 10 | Biznesa procesu automatizācija ar AI \| automatizacijas.lv | Biznesa procesu automatizācija ar AI | E-pastu šķirošana, datu pārnešana starp sistēmām, atskaites un dokumentu ģenerēšana bez roku darba. Sākam ar bezmaksas procesu auditu. |
| /majaslapu-izstrade | mājaslapu izstrāde; mājaslapas izveide cena | 480; 210 | Mājaslapu izstrāde ar AI integrāciju \| automatizacijas.lv | Mājaslapu izstrāde ar AI integrāciju | Mājaslapas un e-veikali ar čatbotu, personalizāciju un SEO jau iebūvētu. Skaidra cena pirms darba sākuma. |
| /dokumentu-automatizacija | dokumentu automatizācija (ranks 1st); e-rēķini; dokumentu pārvaldība | no data; 590; 70 | Dokumentu automatizācija ar AI \| automatizacijas.lv | Dokumentu automatizācija ar AI | Rēķinu, e-rēķinu, līgumu un pavadzīmju datus AI nolasa, pārbauda un ievada jūsu sistēmā. Dokumentu pārvaldība bez pārrakstīšanas. |
| /gramatvedibas-automatizacija | grāmatvedības automatizācija; grāmatvedības programma; e-rēķini | no data; 170; 590 | Grāmatvedības automatizācija ar AI \| automatizacijas.lv | Grāmatvedības automatizācija ar AI | Automātiska rēķinu un e-rēķinu apstrāde, bankas izrakstu saskaņošana un ievade jūsu grāmatvedības programmā. Grāmatvežiem un birojiem. |
| /ai-platformu-izstrade | AI platformu izstrāde | no data | AI platformu izstrāde uzņēmumiem \| automatizacijas.lv | AI platformu izstrāde uzņēmumiem | Pielāgotas AI sistēmas uz jūsu datiem: iekšējie asistenti, zināšanu bāzes un integrācijas ar esošajām programmām. |
| /datu-analize | datu analīze uzņēmumiem | no data | Datu analīze un atskaites ar AI \| automatizacijas.lv | Datu analīze un atskaites ar AI | Automātiskas atskaites, tendenču analīze un prognozes no datiem, kas jums jau ir. Lēmumi bez Excel nakšu darba. |
| /ai-darbinieki | AI darbinieki; AI aģenti | no data | AI darbinieki un AI aģenti uzņēmumam \| automatizacijas.lv | AI darbinieki un AI aģenti uzņēmumam | AI darbinieki konkrētiem uzdevumiem: klientu atbildes, satura sagatavošana, datu apstrāde. Strādā jūsu sistēmās un jūsu noteikumos. |
| /kas-ir-maksligais-intelekts | mākslīgais intelekts; mākslīgais intelekts latviski; kas ir mākslīgais intelekts | 8100 (22nd); 880 (13th); 170 (15th) | Kas ir mākslīgais intelekts? Ceļvedis latviski 2026 | Kas ir mākslīgais intelekts? Ceļvedis latviski | Mākslīgais intelekts vienkārši latviski: kas tas ir, kā strādā ChatGPT un līdzīgi rīki, un kur to izmanto Latvijas uzņēmumi. |
| /nozares | AI automatizācija pa nozarēm | no data | AI automatizācija pa nozarēm \| automatizacijas.lv | AI automatizācija pa nozarēm | Ko AI automatizē grāmatvedībā, e-komercijā, ražošanā, loģistikā un juridiskajās firmās. Piemēri katrai nozarei. |
| /nozares/gramatvediba-un-finanses | grāmatvedības pakalpojumi (intent: firms) | 590 | AI grāmatvedības birojiem un finansēm \| automatizacijas.lv | AI automatizācija grāmatvedības birojiem un finansēm | Kā grāmatvedības biroji automatizē rēķinu apstrādi, atskaites un klientu dokumentus ar AI. Ko tas ietaupa un ar ko sākt. |
| /nozares/e-komercija | AI automatizācija e-komercijai | no data | AI automatizācija e-komercijai \| automatizacijas.lv | AI automatizācija e-komercijas uzņēmumiem | Klientu atbildes, pasūtījumu apstrāde un produktu apraksti ar AI e-veikaliem. Integrācijas ar Shopify un WooCommerce. |
| /nozares/razosana | AI automatizācija ražošanai | no data | AI automatizācija ražošanai \| automatizacijas.lv | AI automatizācija ražošanas uzņēmumiem | Kvalitātes kontrole, pasūtījumu dokumenti un piegādes ķēdes dati ar AI ražošanas uzņēmumos Latvijā. |
| /nozares/logistika | AI automatizācija loģistikai | no data | AI automatizācija loģistikai \| automatizacijas.lv | AI automatizācija loģistikas uzņēmumiem | Pavadzīmju apstrāde, maršrutu plānošana un klientu paziņojumi ar AI loģistikas uzņēmumiem. |
| /nozares/juridiskas-firmas | AI automatizācija juridiskajām firmām | no data | AI automatizācija juridiskajām firmām \| automatizacijas.lv | AI automatizācija juridiskajām firmām | Līgumu analīze, dokumentu sagatavošana un klientu pieprasījumu šķirošana ar AI juridiskajām firmām. |
| /portfolio | paveiktie AI projekti | no data | Paveiktie AI projekti \| automatizacijas.lv | Paveiktie darbi | Konkrēti AI automatizācijas projekti Latvijas uzņēmumiem: kas bija problēma, ko uzbūvējām, ko tas mainīja. |
| /training | mākslīgā intelekta kursi | 110 (36th) | Mākslīgā intelekta kursi uzņēmumiem \| automatizacijas.lv | Mākslīgā intelekta kursi un apmācības uzņēmumiem | AI apmācības komandām: kā lietot ChatGPT un AI rīkus ikdienas darbā. Praktiski, latviski, jūsu uzņēmuma piemēros. |
| /pricing | AI automatizācijas cenas | no data | AI automatizācijas cenas \| automatizacijas.lv | Cenas | Cik maksā AI čatbots, procesu automatizācija un AI platforma. Pakalpojumu konfigurators un orientējoša tāme pirms konsultācijas. |
| /contact | bezmaksas AI konsultācija | no data | Bezmaksas AI konsultācija \| automatizacijas.lv | Pieteikt bezmaksas konsultāciju | Pastāstiet, kurš darbs birojā atkārtojas. Atbildam 24 stundu laikā ar priekšlikumu, ko var automatizēt un ko tas maksā. |
| /privacy | privātuma politika | no data | Privātuma politika \| automatizacijas.lv | Privātuma politika | Kādus datus automatizacijas.lv apstrādā, kāpēc un cik ilgi. Sīkdatnes, analītika un jūsu tiesības. |
| /blog | AI automatizācijas blogs | no data | AI automatizācijas blogs \| automatizacijas.lv | Jaunākais no AI pasaules | Raksti par AI automatizāciju, ChatGPT latviski, čatbotiem un grāmatvedības digitalizāciju Latvijas uzņēmumiem. |

## Blog posts

Each post keeps its existing H1. Title: the H1 in sentence case, with the
brand suffix only when the total stays within 60 characters. Description:
the post's existing excerpt, trimmed to 155 characters at a sentence or word
boundary. Two posts have real demand and get a hand-written title:

| Route | Primary keyword | Volume/mo | Title |
| --- | --- | --- | --- |
| /blog/chatgpt-latviski-ka-lietot (restore from live) | chatgpt latviski; čats gpt latviski | 9900 (7th); 720 (20th) | ChatGPT latviski: kas tas ir un kā to lietot (2026) |
| /blog/ai-chatbots-latviesu-valoda | chatbot; čatbots | 320; 30 | AI čatbots latviešu valodā: kā tas strādā un ko dod |
| all other posts | post topic | no data | rule above |
