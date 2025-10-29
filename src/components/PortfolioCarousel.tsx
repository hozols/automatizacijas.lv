import React, { useState } from 'react';
import { TrendingUp, Users, Clock } from 'lucide-react';
import ProjectModal from './ProjectModal';

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Automatizēta līgumu ģenerēšnas un izsūtīšanas sistēma",
      description: "Automatizēta sistēma, kas izveido jaunu un pielāgotu līgumu katram klientam balstoties no komentāriem sapulces laikā, Līgums tiek izveidots, izsūtīts un ielikts jaunā google drive folderī bez cilvēka iesaistes. Samazina 20 minūšu procesu uz 3 minūtēm palielinot efektivitāti.",
      category: "AI Automatizācija",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      client: "Kleen1",
      year: "2024",
      tags: ["Pārdošana", "Automatizācija"],
      metrics: [
        { icon: TrendingUp, value: "+80%", label: "Procesa paātrināšana" },
        { icon: Users, value: "150+", label: "Apkalpoti klienti" },
        { icon: Clock, value: "60+", label: "Ietaupītas stundas" }
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 2,
      title: "LinkedIn satura ģenerēšanas automatizācija",
      description: "Tika izveidota sistēma, kura veido unikālu saturu balstoties uz dažādām personalitātēm / emocijām un profesionālajiem parametriem, saturs ir balstīts no 50+ veidnēm, MI pats izvēlas veidni balstoties no teksta formāta un ģenerē atbilstošu Linkedin rakstu.",
      category: "AI Automatizācija",
      image: "/linkedin.png",
      client: "Signingclients.com",
      year: "2024",
      tags: ["Mārketings", "Personīgais brendings", "Automatizācija"],
      metrics: [
        { icon: TrendingUp, value: "+200%", label: "Procesa paātrināšana" },
        { icon: Clock, value: "20+", label: "Ietaupītas stundas" },
        { icon: Users, value: "50+", label: "Veidnes" }
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 3,
      title: "Klientu apkalpošanas un uzņemšanas automatizācija",
      description: "Klientam tika izveidota automatizēta sistēma, kura parūpējas par klienta piesaisti komandai, esošajai komandai un iedod padziļinātus materiālus katru nedēļu pielāgotus klienta risinājumam viņa brenda izaugsmei.",
      category: "AI Automatizācija",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80",
      client: "The Artisan Agency",
      year: "2024",
      tags: ["Mārketings", "Klientu apkalpošana", "Automatizācija"],
      metrics: [
        { icon: TrendingUp, value: "+70%", label: "Klientu apmierinātība" },
        { icon: Clock, value: "5+", label: "Ietaupītas stundas nedēļā" },
        { icon: Users, value: "∞", label: "Klienti" }
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 4,
      title: "Portfolio lapa komercīpašumu aģentūrai",
      description: "Portfolio lapa aģentūrai, ko izmanto lead ģenerēšanai un brenda reklāmai.",
      category: "Portfolio",
      image: "/rigami.png",
      client: "Rigami",
      year: "2024",
      tags: ["Real Estate", "Commercial"],
      metrics: [
        { icon: TrendingUp, value: "Lead", label: "Ģenerēšana" },
        { icon: Users, value: "Brand", label: "Reklāma" },
        { icon: Clock, value: "24/7", label: "Pieejamība" }
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 5,
      title: "BN Darbi - Saules paneļu uzstādīšanas mājaslapa",
      description: "Informatīva mājaslapa saules paneļu uzstādīšanas uzņēmumam ar e-komercijas risinājumu, kas ļauj klientiem ērti uzzināt par pakalpojumiem un veikt pasūtījumus tiešsaistē.",
      category: "Web izstrāde",
      image: "/bndarbi.png",
      client: "BN Darbi",
      year: "2024",
      tags: ["Saules paneļi", "E-komercija", "Informatīvā lapa"],
      metrics: [
        { icon: TrendingUp, value: "Web", label: "Risinājums" },
        { icon: Users, value: "E-com", label: "Platforma" },
        { icon: Clock, value: "24/7", label: "Pieejamība" }
      ],
      gradient: "from-blue-300 to-blue-400"
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
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=80",
      client: "Autoremonts.com",
      year: "2025",
      tags: ["Autoserviss", "SEO", "Vizītkarte"],
      metrics: [
        { icon: TrendingUp, value: "SEO", label: "Optimizēts" },
        { icon: Users, value: "Lead", label: "Ģenerēšana" },
        { icon: Clock, value: "24/7", label: "Pieejamība" }
      ],
      gradient: "from-blue-300 to-blue-400"
    }
  ];

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-background via-muted/20 to-background py-28 md:py-36"
      style={{ minWidth: '100vw' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Mūsu Pieredze
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Veiksmīgie AI Projekti
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Aplūkojiet, kā mūsu AI risinājumi ir transformējuši dažādu nozaru uzņēmumus un radījuši mērāmu vērtību
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onClick={() => handleProjectClick(item)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium opacity-70 mb-2">
                    {item.client}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-muted/60 text-muted-foreground text-xs px-2.5 py-1 rounded-full border border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex justify-center mb-1">
                        <metric.icon size={16} className="text-primary" />
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default PortfolioShowcase;