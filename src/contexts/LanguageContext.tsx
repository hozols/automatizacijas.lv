import React, { createContext, useContext, ReactNode } from 'react';

export type Language = 'lv';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object - only Latvian
const translations = {
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.features': 'Iespējas',
    'nav.solutions': 'Risinājumi',
    'nav.portfolio': 'Projekti',
    'nav.training': 'Apmācības',
    'nav.pricing': 'Cenas',
    'nav.contact': 'Kontakti',
    'nav.blog': 'Blogs',
    'nav.ai_solutions': 'AI Risinājumi',
    'nav.chatbots': 'AI Čatboti',
    'nav.automation': 'Automatizācija',
    'nav.webdev': 'Mājaslapu Izstrāde',
    'nav.theme': 'Kontrasts',
    
    // Hero Section
    'hero.badge': 'Jauni AI risinājumi',
    'hero.title': 'AI automatizācija augošiem uzņēmumiem',
    'hero.title.highlight': 'augošiem',
    'hero.description': 'Optimizējiet savus biznesa procesus ar mūsu visaptverošajiem AI risinājumiem. Radīts moderniem uzņēmumiem, kas novērtē efektivitāti, precizitāti un mērogojamu izaugsmi.',
    'hero.cta.demo': 'Rezervēt bezmaksas konsultāciju',
    'hero.trial': 'Bezmaksas 14 dienu izmēģinājums',
    'hero.showcase.title': 'Mūsu AI Risinājumi',
    'hero.showcase.view_all': 'Skatīt visus',
    'hero.showcase.nav.workers': 'AI Darbinieki',
    'hero.showcase.nav.chatbots': 'Čatboti',
    'hero.showcase.nav.automation': 'Automatizācija',
    'hero.showcase.nav.analytics': 'Analītika',
    'hero.showcase.categories.automation': 'Automatizācija',
    'hero.showcase.categories.intelligence': 'Datu Intelekts',
    'hero.showcase.categories.support': 'Klientu Atbalsts',
    'hero.showcase.services': 'Aktīvie Pakalpojumi',
    'hero.showcase.explore': 'Izpētīt pakalpojumus',
    
    // Services
    'services.title': 'Mūsu AI Pakalpojumi',
    'services.description': 'Visaptveroši AI risinājumi, kas transformē jūsu biznesa procesus un uzlabo efektivitāti',
    'services.workers.title': 'AI Darbinieki',
    'services.workers.subtitle': 'Gatavi izmantošanai AI darbinieki, kas nevainojami integrējas jūsu komandā',
    'services.workers.description': 'Pielāgoti apmācīti AI darbinieki, kas var veikt specifiskus uzdevumus un darba plūsmas, ar iebūvētām zināšanām un pielāgojamām prasmēm.',
    'services.chatbots.title': 'AI Čatboti',
    'services.chatbots.subtitle': 'Inteliģenti sarunu aģenti 24/7 klientu atbalstam',
    'services.chatbots.description': 'Moderni čatboti, kas darbojas ar jaunāko AI tehnoloģiju, nodrošinot tūlītēju atbalstu un uzlabojot klientu apmierinātību.',
    'services.automation.title': 'Procesu Automatizācija',
    'services.automation.subtitle': 'Optimizējiet darbības ar inteliģento automatizāciju',
    'services.automation.description': 'Pilnīgi automatizācijas risinājumi, kas optimizē darba plūsmas, samazina izmaksas un uzlabo efektivitāti.',
    'services.documents.title': 'Dokumentu Apstrāde',
    'services.documents.subtitle': 'Automatizēta dokumentu ģenerēšana un analīze',
    'services.documents.description': 'Inteliģentas sistēmas dokumentu veidošanai, apstrādei un analīzei, samazinot manuālo darbu un kļūdas.',
    'services.intelligence.title': 'Datu Intelekts',
    'services.intelligence.subtitle': 'Pārvērtiet savus datus rīcībspējīgos ieskatos',
    'services.intelligence.description': 'Moderna datu analītika un AI veidoti ieskati labāku biznesa lēmumu pieņemšanai un iespēju identificēšanai.',
    'services.custom.title': 'Pielāgoti AI Risinājumi',
    'services.custom.subtitle': 'Individuāli AI risinājumi unikāliem izaicinājumiem',
    'services.custom.description': 'Īpaši izstrādāti AI risinājumi, kas veidoti atbilstoši jūsu biznesa vajadzībām un nozares prasībām.',
    'services.development.title': 'Mājaslapu un lietotņu izstrāde',
    'services.development.subtitle': 'Moderni web risinājumi un MVP izstrāde',
    'services.development.description': 'Izveidojam profesionālas mājaslapas, web aplikācijas un MVP risinājumus, kas palīdz jūsu biznesam augt un attīstīties digitālajā vidē.',
    'services.integration.title': 'Sistēmu Integrācija',
    'services.integration.subtitle': 'AI integrācija ar esoša\u0161ajām sistēmām',
    'services.integration.description': 'Integrējam AI risinājumus ar jūsu esoša\u0161ajām biznesa sistēmām un darba procesiem.',
    'services.training.title': 'AI Apmācības',
    'services.training.subtitle': 'Personāla apmācība AI lietošanā',
    'services.training.description': 'Profesionālas AI apmācību programmas jūsu komandai, lai maksimāli izmantotu tehnoloģiju potenciālu.',
    'services.maintenance.title': 'Tehniskais Atbalsts',
    'services.maintenance.subtitle': 'Nepārtraukts AI sistēmu uzturēšana',
    'services.maintenance.description': 'Profesionāls tehniskais atbalsts un sistēmu uzturēšana 24/7 režīmā.',
    
    // Web Development Services
    'services.webdev.title': 'Mājaslapu un lietotņu izstrāde',
    'services.webdev.subtitle': 'Moderni web risinājumi un MVP izstrāde',
    'services.webdev.description': 'Izveidojam profesionālas mājaslapas, web aplikācijas un MVP risinājumus.',
    'services.ecommerce.title': 'E-komercija',
    'services.ecommerce.subtitle': 'Online veikalu izstrāde',
    'services.ecommerce.description': 'Pilnvērtīgi e-komercijas risinājumi ar maksājumu sistēmām un inventāra pārvaldību.',
    'services.mobile.title': 'Mobilās Aplikācijas',
    'services.mobile.subtitle': 'iOS un Android aplikācijas',
    'services.mobile.description': 'Natīvas un cross-platform mobilās aplikācijas jūsu biznesam.',
    'services.cta.title': 'Gatavi sākt?',
    'services.cta.description': 'Sazinieties ar mums, lai apspriestu, kā AI var transformēt jūsu biznesu un palīdzēt sasniegt jaunos mērķus.',
    'services.cta.contact': 'Sazinaties ar mums',
    'services.cta.consultation': 'Bezmaksas konsultācija',
    'services.learn_more': 'Uzzināt vairāk',
    
    // Pricing
    'pricing.title': 'Caurspīdīgas Cenas Katram Posmam',
    'pricing.subtitle': 'Izvēlieties sev piemēroto plānu un sāciet transformēt savu biznesu ar AI',
    'pricing.starter.title': 'Sākuma',
    'pricing.starter.price': 'Sākot no €299',
    'pricing.starter.period': 'mēnesī',
    'pricing.starter.description': 'Ideāls mazākiem uzņēmumiem, kas vēlas sākt AI automatizācijas ceļu',
    'pricing.professional.title': 'Profesionālis',
    'pricing.professional.price': 'Sākot no €699',
    'pricing.professional.period': 'mēnesī',
    'pricing.professional.description': 'Pilnvērtīgs risinājums uzņēmumiem ar sarežģītām automatizācijas vajadzībām',
    'pricing.contact': 'Sazināties',
    'pricing.popular': 'Populārākais',
    
    // Benefits
    'features.title': 'Viss, kas nepieciešams jūsu biznesam',
    'features.description': 'AI tehnoloģijas, kas sniedz reālus rezultātus un transformē jūsu uzņēmuma darbību',
    'features.efficiency.title': 'Dramatiska Efektivitātes Pieaugums',
    'features.efficiency.description': 'Samaziniet manuālo darbu līdz 80% un paātriniet procesus ar inteliģento automatizāciju.',
    'features.efficiency.expanded': 'Mūsu klienti vidēji ietaupa 15-25 stundas nedēļā katram darbiniekam, automatizējot atkārtojošos uzdevumus. AI sistēmas strādā 24/7 bez pārtraukumiem un kļūdām.',
    'features.savings.title': 'Ievērojams Izmaksu Samazinājums',
    'features.savings.description': 'Samaziniet darbaspēka izmaksas un operacionālās izmaksas ar AI automatizāciju.',
    'features.savings.expanded': 'Vidējais mūsu klientu izmaksu samazinājums ir 40-60% pirmajā gadā. AI risinājumi atmaksājas 3-6 mēnešos un turpina radīt ietaupījumus ilgtermiņā.',
    'features.growth.title': 'Mērogojama Biznesa Izaugsme',
    'features.growth.description': 'Paplašiniet savu biznesu bez proporcionāla darbinieku skaita palielināšanas.',
    'features.growth.expanded': 'AI sistēmas ļauj apstrādāt 10x lielāku darba apjomu ar to pašu komandu. Mūsu klienti vidēji palielina savu kapacitāti par 200-500% pirmajā gadā.',
    'features.accuracy.title': 'Maksimāla Precizitāte un Kvalitāte',
    'features.accuracy.description': 'Samaziniet cilvēciskās kļūdas līdz minimumam ar AI precizitāti.',
    'features.accuracy.expanded': 'AI sistēmas nodrošina 99.9% precizitāti datu apstrādē un lēmumu pieņemšanā. Pilnībā novēršiet tipiskās manuālā darba kļūdas.',
    'features.competitive.title': 'Konkurētspējas Priekšrocība',
    'features.competitive.description': 'Apsteidziet konkurentus ar jaunākajām AI tehnoloģijām un inovācijām.',
    'features.competitive.expanded': 'Kļūstiet par nozares līderi, piedāvājot ātrāku, precizāku un kvalitatīvāku servisu. AI ļauj reaģēt uz tirgus izmaiņām reāllaikā.',
    'features.satisfaction.title': 'Uzlabota Klientu Apmierinātība',
    'features.satisfaction.description': 'Nodrošiniet 24/7 atbalstu un personalizētu pieredzi katram klientam.',
    'features.satisfaction.expanded': 'Mūsu klienti reģistrē 40-70% klientu apmierinātības pieaugumu. AI ļauj sniegt tūlītējas, precīzas atbildes un personalizētu apkalpošanu.',
    'features.learn_more': 'Uzzināt vairāk →',
    
    // Contact Page
    'contact.title': 'Sazinaties ar mums',
    'contact.subtitle': 'Gatavi transformēt savu biznesu ar AI? Sazinieties ar mūsu ekspertiem.',
    'contact.form.title': 'Nosūtiet mums ziņu',
    'contact.form.name': 'Vārds',
    'contact.form.name.placeholder': 'Jūsu vārds',
    'contact.form.email': 'E-pasts',
    'contact.form.email.placeholder': 'jusu.epasts@piemers.lv',
    'contact.form.company': 'Uzņēmums',
    'contact.form.company.placeholder': 'Jūsu uzņēmuma nosaukums',
    'contact.form.phone': 'Telefons',
    'contact.form.phone.placeholder': '+371 20 015 830',
    'contact.form.service': 'Interesējošais pakalpojums',
    'contact.form.service.placeholder': 'Izvēlieties pakalpojumu',
    'contact.form.service.workers': 'AI Darbinieki',
    'contact.form.service.chatbots': 'AI Čatboti',
    'contact.form.service.automation': 'Procesu Automatizācija',
    'contact.form.service.documents': 'Dokumentu Apstrāde',
    'contact.form.service.intelligence': 'Datu Intelekts',
    'contact.form.service.custom': 'Pielāgoti Risinājumi',
    'contact.form.service.consultation': 'Konsultācija',
    'contact.form.message': 'Ziņa',
    'contact.form.message.placeholder': 'Pastāstiet mums par savu projektu un vajadzībām...',
    'contact.form.submit': 'Nosūtīt ziņu',
    'contact.form.sending': 'Nosūta...',
    'contact.form.success.title': 'Paldies!',
    'contact.form.success.message': 'Jūsu ziņa ir nosūtīta. Mēs sazināsimies ar jums tuvāko 24 stundu laikā.',
    'contact.form.error.title': 'Radās kļūda',
    'contact.form.error.message': 'Lūdzu mēģiniet vēlreiz.',
    'contact.form.send_another': 'Nosūtīt vēlreiz',
    'contact.info.title': 'Kontaktinformācija',
    'contact.info.address': 'Adrese',
    'contact.info.phone': 'Tālrunis',
    'contact.info.email': 'E-pasts',
    'contact.info.hours': 'Darba laiks',
    'contact.info.hours.weekdays': 'Pirmdiena - Piektdiena: 9:00 - 18:00',
    'contact.info.hours.weekend': 'Sestdiena - Svētdiena: Pēc vienošanās',
    'contact.map.title': 'Mūsu atrašanās vieta',
    'contact.form.success': 'Paldies! Jūsu ziņa ir nosūtīta. Mēs sazināsimies ar jums tuvāko 24 stundu laikā.',
    'contact.form.error': 'Radās kļūda nosūtot ziņu. Lūdzu mēģiniet vēlreiz.',
    
    // Training Page
    'training.title': 'AI Apmācības un Izglītība',
    'training.subtitle': 'Apgūstiet AI tehnoloģijas ar mūsu ekspertu vadītajiem kursiem un semināriiem',
    'training.courses.title': 'Online Kursi',
    'training.courses.subtitle': 'Mācieties savā tempā ar strukturētiem online kursiem',
    'training.courses.description': 'Mūsu online kursi ir veidoti, lai sniegtu praktisku AI zināšanu pamatu. Katrs kurss ietver reālus projektus, praktiskus uzdevumus un ekspertu atbalstu.',
    'training.courses.features.selfpaced': 'Mācīšanās savā tempā',
    'training.courses.features.practical': 'Praktiski projekti',
    'training.courses.features.certificate': 'Sertifikāts par pabeigšanu',
    'training.courses.features.support': '24/7 ekspertu atbalsts',
    'training.seminars.title': 'Korporatīvie Semināri',
    'training.seminars.subtitle': 'Apmāciet savu komandu ar pielāgotiem semināriiem',
    'training.seminars.description': 'Organizējam korporatīvos seminārus, kas pielāgoti jūsu uzņēmuma specifiskajām vajadzībām. Mūsu eksperti ierodas jūsu birojā vai vada online sesijas.',
    'training.seminars.features.customized': 'Pielāgots saturs',
    'training.seminars.features.expert': 'Ekspertu vadīti',
    'training.seminars.features.interactive': 'Interaktīvas sesijas',
    'training.seminars.features.materials': 'Mācību materiāli',
    'training.topics.title': 'Mācību temati',
    'training.topics.ai_basics': 'AI Pamati Biznesam',
    'training.topics.ai_basics.description': 'Uzziniet AI pamatprincipus un to praktisko pielietojumu biznesa procesos',
    'training.topics.automation': 'Procesu Automatizācija',
    'training.topics.automation.description': 'Mācieties automatizēt ikdienas uzdevumus un optimizēt darba plūsmas',
    'training.topics.chatbots': 'Čatbotu Izstrāde',
    'training.topics.chatbots.description': 'Izveidojiet inteliģentus čatbotus klientu apkalpošanai un atbalstam',
    'training.topics.data_analysis': 'AI Datu Analīze',
    'training.topics.data_analysis.description': 'Analizējiet datus ar AI rīkiem un pieņemiet datu balstītus lēmumus',
    'training.topics.machine_learning': 'Mašīnmācīšanās',
    'training.topics.machine_learning.description': 'Apgūstiet mašīnmācīšanās algoritmus un to praktisko izmantošanu',
    'training.topics.ethics': 'AI Ētika un Drošība',
    'training.topics.ethics.description': 'Izprotiet AI ētiskos aspektus un drošības prasības biznesa vidē',
    'training.cta.title': 'Gatavi sākt mācīties?',
    'training.cta.description': 'Sazinieties ar mums, lai uzzinātu vairāk par mūsu kursiem un semināriiem',
    'training.cta.courses': 'Apskatīt kursus',
    'training.cta.contact': 'Pieteikt semināru',

    // Blog
    'blog.meta.title': 'AI Automatizācijas Blogs | automatizacijas.lv',
    'blog.meta.description': 'Raksti un padomi par mākslīgo intelektu, biznesa automatizāciju un digitālo transformāciju Latvijā. Uzziniet jaunākās AI tendences.',
    'blog.badge': 'Blogs',
    'blog.title': 'Jaunākais no AI Pasaules',
    'blog.subtitle': 'Raksti, padomi un ieskati par AI tehnoloģijām, automatizāciju un digitālo transformāciju',
    'blog.read_more': 'Lasīt vairāk',
    'blog.back': '← Atpakaļ uz blogu',
    'blog.post1.title': 'Kā AI Transformē Biznesa Procesus 2026. Gadā',
    'blog.post1.excerpt': 'Uzziniet, kā mākslīgais intelekts maina uzņēmumu darba veidus un kādi ir galvenie ieguvumi no AI integrācijas jūsu biznesa procesos.',
    'blog.post1.content': 'Mākslīgais intelekts (AI) turpina strauji mainīt veidu, kā uzņēmumi darbojas un konkurē tirgū. 2026. gadā mēs redzam vēl nebijušu AI tehnoloģiju integrāciju biznesa procesos.\n\nGalvenie virzieni, kuros AI transformē uzņēmumus:\n\n**1. Automatizēta klientu apkalpošana**\nAI čatboti un virtuālie asistenti tagad spēj risināt līdz 85% klientu pieprasījumu bez cilvēka iesaistes. Tas nozīmē ātrāku apkalpošanu un zemākas izmaksas.\n\n**2. Datu analīze un prognozēšana**\nAI algoritmi analizē miljoniem datu punktu reāllaikā, palīdzot uzņēmumiem pieņemt labākus lēmumus un prognozēt tirgus tendences.\n\n**3. Procesu optimizācija**\nNo dokumentu apstrādes līdz piegādes ķēžu pārvaldībai — AI automatizē sarežģītus procesus, samazinot kļūdas un palielinot ātrumu.\n\n**4. Personalizēta mārketinga stratēģija**\nAI ļauj radīt individuāli pielāgotus piedāvājumus katram klientam, palielinot konversijas un klientu apmierinātību.\n\nUzņēmumi, kas pieņem AI tagad, iegūst būtisku konkurences priekšrocību. Svarīgi ir sākt ar skaidriem mērķiem un pakāpeniski paplašināt AI lietojumu.',
    'blog.post2.title': 'Automatizācijas Labākās Prakses Maziem Uzņēmumiem',
    'blog.post2.excerpt': 'Praktiski padomi un stratēģijas, kā mazie uzņēmumi var izmantot automatizāciju, lai ietaupītu laiku un resursus bez lieliem sākotnējiem ieguldījumiem.',
    'blog.post2.content': 'Automatizācija vairs nav tikai lielu korporāciju privilēģija. Mazie un vidējie uzņēmumi arvien vairāk izmanto automatizācijas rīkus, lai konkurētu ar lielākiem tirgus dalībniekiem.\n\n**Kur sākt automatizāciju?**\n\n**1. E-pasta mārketings**\nAutomatizētas e-pasta kampaņas var ietaupīt desmitiem stundu mēnesī. Iestatiet trigeru bāzētas ziņas jauniem klientiem, pamestiem groziem un regulāriem jaunumiem.\n\n**2. Rēķinu un grāmatvedības procesi**\nAutomatizēta rēķinu izrakstīšana, atgādinājumi par maksājumiem un finanšu atskaites — tas viss var darboties bez manuālas iejaukšanās.\n\n**3. Sociālo mediju pārvaldība**\nPlānojiet un publicējiet saturu automātiski, analizējiet auditorijas iesaisti un ģenerējiet atskaites.\n\n**4. Klientu atbalsts**\nVienkārši čatboti var atbildēt uz biežāk uzdotajiem jautājumiem 24/7, atstājot sarežģītākus pieprasījumus cilvēkiem.\n\n**Padomi veiksmīgai ieviešanai:**\n- Sāciet ar vienu procesu un pilnveidojiet to\n- Mēriet rezultātus pirms un pēc automatizācijas\n- Izvēlieties rīkus, kas integrējas ar esošajām sistēmām\n- Apmāciet komandu darbam ar jaunajiem rīkiem',
    'blog.post3.title': 'Modernās Web Izstrādes Tendences un AI Integrācija',
    'blog.post3.excerpt': 'Izpētiet jaunākās web izstrādes tendences un uzziniet, kā AI rīki var uzlabot izstrādes procesu un gala produkta kvalitāti.',
    'blog.post3.content': 'Web izstrādes ainava 2026. gadā ir būtiski mainījusies, pateicoties AI rīku integrācijai izstrādes procesā un jaunām tehnoloģiskām pieejām.\n\n**Galvenās tendences:**\n\n**1. AI asistēta koda rakstīšana**\nIzstrādātāji arvien vairāk izmanto AI rīkus koda ģenerēšanai, pārskatīšanai un testēšanai. Tas paātrina izstrādes procesu par 30-50%.\n\n**2. Serverless un Edge Computing**\nAplikācijas arvien biežāk tiek izvietotas tuvāk lietotājiem, nodrošinot ātrāku ielādes laiku un labāku lietotāja pieredzi.\n\n**3. Komponentu bāzēta arhitektūra**\nModulāra pieeja ļauj atkārtoti izmantot komponentus starp projektiem, samazinot izstrādes laiku un uzlabojot koda kvalitāti.\n\n**4. AI personalizācija**\nMājaslapas tagad var dinamiski pielāgot saturu katram apmeklētājam, balstoties uz viņu uzvedību un preferencēm.\n\n**5. Progresīvās web aplikācijas (PWA)**\nPWA turpina iegūt popularitāti, piedāvājot natīvai lietotnei līdzīgu pieredzi tieši pārlūkā.\n\nŠīs tendences kopā veido nākotnes web izstrādes ainavu, kur kvalitāte un ātrums iet roku rokā ar inovācijām.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const t = (key: string): string => {
    return translations.lv[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'lv', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};