import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  /* Only real local screenshots are shown; projects without one have no image. */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  client: string;
  year: string;
  tags: string[];
  metrics: { value: string; label: string }[];
}

const portfolioItems: Project[] = [
  {
    id: 1,
    title: "Automatizēta līgumu ģenerēšnas un izsūtīšanas sistēma",
    description: "Automatizēta sistēma, kas izveido jaunu un pielāgotu līgumu katram klientam balstoties no komentāriem sapulces laikā, Līgums tiek izveidots, izsūtīts un ielikts jaunā google drive folderī bez cilvēka iesaistes. Samazina 20 minūšu procesu uz 3 minūtēm palielinot efektivitāti.",
    category: "AI Automatizācija",
    client: "Kleen1",
    year: "2024",
    tags: ["Pārdošana", "Automatizācija"],
    metrics: [
      { value: "+80%", label: "Procesa paātrināšana" },
      { value: "150+", label: "Apkalpoti klienti" },
      { value: "60+", label: "Ietaupītas stundas" }
    ]
  },
  {
    id: 2,
    title: "LinkedIn satura ģenerēšanas automatizācija",
    description: "Tika izveidota sistēma, kura veido unikālu saturu balstoties uz dažādām personalitātēm / emocijām un profesionālajiem parametriem, saturs ir balstīts no 50+ veidnēm, MI pats izvēlas veidni balstoties no teksta formāta un ģenerē atbilstošu Linkedin rakstu.",
    category: "AI Automatizācija",
    image: "/linkedin.webp",
    imageWidth: 800,
    imageHeight: 517,
    client: "Signingclients.com",
    year: "2024",
    tags: ["Mārketings", "Personīgais brendings", "Automatizācija"],
    metrics: [
      { value: "+200%", label: "Procesa paātrināšana" },
      { value: "20+", label: "Ietaupītas stundas" },
      { value: "50+", label: "Veidnes" }
    ]
  },
  {
    id: 3,
    title: "Klientu apkalpošanas un uzņemšanas automatizācija",
    description: "Klientam tika izveidota automatizēta sistēma, kura parūpējas par klienta piesaisti komandai, esošajai komandai un iedod padziļinātus materiālus katru nedēļu pielāgotus klienta risinājumam viņa brenda izaugsmei.",
    category: "AI Automatizācija",
    client: "The Artisan Agency",
    year: "2024",
    tags: ["Mārketings", "Klientu apkalpošana", "Automatizācija"],
    metrics: [
      { value: "+70%", label: "Klientu apmierinātība" },
      { value: "5+", label: "Ietaupītas stundas nedēļā" },
      { value: "∞", label: "Klienti" }
    ]
  },
  {
    id: 4,
    title: "Portfolio lapa komercīpašumu aģentūrai",
    description: "Portfolio lapa aģentūrai, ko izmanto lead ģenerēšanai un brenda reklāmai.",
    category: "Portfolio",
    image: "/rigami.webp",
    imageWidth: 800,
    imageHeight: 521,
    client: "Rigami",
    year: "2024",
    tags: ["Real Estate", "Commercial"],
    metrics: [
      { value: "Lead", label: "Ģenerēšana" },
      { value: "Brand", label: "Reklāma" },
      { value: "24/7", label: "Pieejamība" }
    ]
  },
  {
    id: 5,
    title: "BN Darbi - Saules paneļu uzstādīšanas mājaslapa",
    description: "Informatīva mājaslapa saules paneļu uzstādīšanas uzņēmumam ar e-komercijas risinājumu, kas ļauj klientiem ērti uzzināt par pakalpojumiem un veikt pasūtījumus tiešsaistē.",
    category: "Web izstrāde",
    image: "/bndarbi.webp",
    imageWidth: 800,
    imageHeight: 640,
    client: "BN Darbi",
    year: "2024",
    tags: ["Saules paneļi", "E-komercija", "Informatīvā lapa"],
    metrics: [
      { value: "Web", label: "Risinājums" },
      { value: "E-com", label: "Platforma" },
      { value: "24/7", label: "Pieejamība" }
    ]
  },
  // {
  //   id: 6,
  //   title: "Dalībnieku menedžmenta sistēma",
  //   description: "Izstrādāta automatizācija reģistrēto dalībnieku organizēšanai, apziņošanai pirms realitātes šova veidošanas.",
  //   category: "AI Automatizācija",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
  //   client: "Sula Studios",
  //   year: "2024",
  //   tags: ["Automatizācija", "Dalībnieku menedžmenta sistēma"],
  //   metrics: [
  //     { icon: Clock, value: "70%", label: "Laika ietaupījums" },
  //     { icon: Users, value: "100+", label: "Dalībnieki" },
  //     { icon: TrendingUp, value: "24/7", label: "Pieejamība" }
  //   ],
  //   gradient: "from-blue-300 to-blue-400"
  // },
  {
    id: 7,
    title: "Autoremonts.com - Autoservisa vizītkartes mājaslapa",
    description: "Moderna vizītkartes mājaslapa autoservisa uzņēmumam ar SEO optimizāciju. Lapa palīdz klientiem atrast servisu, uzzināt par pakalpojumiem un sazināties ar uzņēmumu.",
    category: "Web izstrāde",
    client: "Autoremonts.com",
    year: "2025",
    tags: ["Autoserviss", "SEO", "Vizītkarte"],
    metrics: [
      { value: "SEO", label: "Optimizēts" },
      { value: "Lead", label: "Ģenerēšana" },
      { value: "24/7", label: "Pieejamība" }
    ]
  }
];

const PortfolioShowcase = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="wrap py-12 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
          <h2 className="display-2 m-0 lg:col-span-4">Veiksmīgie Projekti</h2>
          <p className="lede m-0 lg:col-span-8 lg:pt-2">
            <strong>Mūsu Pieredze.</strong> Aplūkojiet, kā mūsu risinājumi ir transformējuši dažādu nozaru uzņēmumus un radījuši mērāmu vērtību
          </p>
        </div>

        <ul className="list-none p-0 m-0 mt-10 lg:mt-14 border-t-2 border-foreground">
          {portfolioItems.map((item) => (
            <li
              key={item.id}
              className="grid gap-x-14 gap-y-5 py-9 lg:py-12 border-b border-border lg:grid-cols-12 lg:grid-rows-[auto_1fr]"
            >
              <p className="m-0 leading-snug lg:col-span-4">
                <span className="block text-xl font-medium">{item.client}</span>
                <span className="block mt-1 text-muted-foreground">
                  {item.year}, {item.category}
                </span>
              </p>

              <div className="min-w-0 lg:col-span-8 lg:row-span-2">
                <h3 className="display-3 m-0 max-w-[22em]">{item.title}</h3>
                <p className="mt-4 mb-0 text-lg leading-relaxed max-w-[40em]">{item.description}</p>
                <p className="mt-3 mb-0 text-muted-foreground">{item.tags.join(', ')}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.client} projekts`}
                    loading="lazy"
                    decoding="async"
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="block mt-7 w-full max-w-[40rem] h-auto rounded-md border border-border"
                  />
                )}
              </div>

              <dl className="m-0 self-start border-t border-border lg:col-span-4 lg:col-start-1">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline gap-3 py-2.5 border-b border-border">
                    <dt className="order-2 text-muted-foreground leading-snug">{metric.label}</dt>
                    <dd className="order-1 m-0 min-w-[4.5rem] shrink-0 font-medium tabular-nums">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
