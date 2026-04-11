
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Zap, FileText, BarChart3, Lightbulb, Settings, GraduationCap, Wrench, Code, Globe, Smartphone, ArrowRight, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ai');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(6, 150);
  
  // Modal handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: "Automatizēta līgumu ģenerēšnas un izsūtīšanas sistēma",
      description: "Automatizēta sistēma, kas izveido jaunu un pielāgotu līgumu katram klientam balstoties no komentāriem sapulces laikā, Līgums tiek izveidots, izsūtīts un ielikts jaunā google drive folderī bez cilvēka iesaistes. Samazina 20 minūšu procesu uz 3 minūtēm palielinot efektivitāti.",
      longDescription: "Šī sistēma automātiski ģenerē un pielāgo līgumus balstoties uz sapulces komentāriem. Izmantojot AI tehnoloģijas, sistēma analizē sarunas saturu un izveido atbilstošus juridisko dokumentus. Līgumi tiek automātiski izsūtīti un organizēti Google Drive mapēs, ievērojami paātrinot biznesa procesus.",
      category: "AI Automatizācija",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      client: "Kleen1",
      year: "2024",
      tags: ["Pārdošana", "Automatizācija", "AI", "Līgumi"],
      techStack: ["OpenAI API", "Google Apps Script", "Google Drive API", "JavaScript", "Airtable"],
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
      longDescription: "Inteliģenta sistēma, kas automātiski ģenerē personalizētu LinkedIn saturu. Izmantojot 50+ veidnes un AI algoritmus, sistēma izvēlas piemērotāko satura formātu un ģenerē unikālus rakstus, kas atbilst klienta profesionālajam profilam un mērķiem.",
      category: "AI Automatizācija",
      image: "/linkedin.webp",
      client: "Signingclients.com",
      year: "2024",
      tags: ["Mārketings", "Personīgais brendings", "Automatizācija", "AI", "LinkedIn"],
      techStack: ["OpenAI GPT-4", "Python", "LinkedIn API", "Natural Language Processing", "Machine Learning"],
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
      longDescription: "Pilnībā automatizēta klientu apkalpošanas sistēma, kas pārvalda visu klienta ceļu no pirmā kontakta līdz ilgtermiņa sadarbībai. Sistēma automātiski ģenerē personalizētus materiālus un nodrošina nepārtrauktu klientu atbalstu.",
      category: "AI Automatizācija",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80",
      client: "The Artisan Agency",
      year: "2024",
      tags: ["Mārketings", "Klientu apkalpošana", "Automatizācija", "AI", "CRM"],
      techStack: ["Zapier", "Airtable", "OpenAI API", "Email Automation", "CRM Integration"],
      metrics: [
        { icon: TrendingUp, value: "+70%", label: "Klientu apmierinātība" },
        { icon: Clock, value: "5+", label: "Ietaupītas stundas nedēļā" },
        { icon: Users, value: "∞", label: "Klienti" },
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 4,
      title: "Portfolio lapa komercīpašumu aģentūrai",
      description: "Portfolio lapa aģentūrai, ko izmanto lead ģenerēšanai un brenda reklāmai.",
      longDescription: "Modernā un responsīva portfolio lapa komercīpašumu aģentūrai, kas efektīvi prezentē nekustamā īpašuma piedāvājumus un ģenerē kvalitatīvus leadus. Lapa ir optimizēta SEO un lietotāju pieredzei.",
      category: "Portfolio",
      image: "/rigami.webp",
      client: "Rigami",
      year: "2024",
      tags: ["Real Estate", "Commercial", "Portfolio", "Lead Generation"],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
      longDescription: "Pilnībā funkcionāla e-komercijas platforma saules paneļu uzstādīšanas uzņēmumam. Lapa ietver produktu katalogu, cenu kalkulatoru, online rezervācijas sistēmu un integrētu maksājumu apstrādi.",
      category: "Web izstrāde",
      image: "/bndarbi.webp",
      client: "BN Darbi",
      year: "2024",
      tags: ["Saules paneļi", "E-komercija", "Informatīvā lapa", "Online Rezervācijas"],
      techStack: ["React", "Node.js", "Stripe API", "MongoDB", "Tailwind CSS"],
      metrics: [
        { icon: TrendingUp, value: "Web", label: "Risinājums" },
        { icon: Users, value: "E-com", label: "Platforma" },
        { icon: Clock, value: "24/7", label: "Pieejamība" }
      ],
      gradient: "from-blue-300 to-blue-400"
    },
    {
      id: 6,
      title: "Dalībnieku menedžmenta sistēma",
      description: "Izstrādāta automatizācija reģistrēto dalībnieku organizēšanai, apziņošanai pirms realitātes šova veidošanas.",
      longDescription: "Automatizēta sistēma realitātes šova dalībnieku pārvaldībai. Sistēma automātiski organizē dalībniekus, sūta atgādinājumus un sagatavo nepieciešamos dokumentus, ievērojami samazinot organizatoru darba slodzi.",
      category: "AI Automatizācija",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      client: "Sula Studios",
      year: "2024",
      tags: ["Automatizācija", "Dalībnieku menedžmenta sistēma", "AI", "Event Management"],
      techStack: ["Python", "Django", "PostgreSQL", "Email Automation", "SMS API"],
      metrics: [
        { icon: Clock, value: "70%", label: "Laika ietaupījums" },
        { icon: Users, value: "100+", label: "Dalībnieki" },
        { icon: TrendingUp, value: "24/7", label: "Pieejamība" }
      ],
      gradient: "from-blue-300 to-blue-400"
    }
  ];

  const aiServices = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: t('services.workers.title'),
      subtitle: t('services.workers.subtitle'),
      description: t('services.workers.description'),
      relatedProjects: [portfolioProjects[0]], // Kleen1
      learnMoreLink: "/services#ai-workers"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: t('services.chatbots.title'),
      subtitle: t('services.chatbots.subtitle'),
      description: t('services.chatbots.description'),
      relatedProjects: [portfolioProjects[2]], // Artisan Agency
      learnMoreLink: "/chatbotu-izstrade"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('services.automation.title'),
      subtitle: t('services.automation.subtitle'),
      description: t('services.automation.description'),
      // relatedProjects: [portfolioProjects[1]], // LinkedIn
      learnMoreLink: "/procesu-automatizacija"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t('services.documents.title'),
      subtitle: t('services.documents.subtitle'),
      description: t('services.documents.description'),
      // relatedProjects: [portfolioProjects[5]], // Sula Studios
      learnMoreLink: "/dokumentu-automatizacija"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('services.intelligence.title'),
      subtitle: t('services.intelligence.subtitle'),
      description: t('services.intelligence.description'),
      // relatedProjects: [],
      learnMoreLink: "/datu-analize"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t('services.custom.title'),
      subtitle: t('services.custom.subtitle'),
      description: t('services.custom.description'),
      // relatedProjects: [],
      learnMoreLink: "/ai-platformu-izstrade"
    }
  ];

  const webDevServices = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: t('services.webdev.title'),
      subtitle: t('services.webdev.subtitle'),
      description: t('services.webdev.description'),
      // relatedProjects: [portfolioProjects[4], portfolioProjects[3]], // BN Darbi, Rigami
      learnMoreLink: "/majaslapu-izstrade"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('services.ecommerce.title'),
      subtitle: t('services.ecommerce.subtitle'),
      description: t('services.ecommerce.description'),
      // relatedProjects: [portfolioProjects[4]], // BN Darbi
      learnMoreLink: "/services#ecommerce"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: t('services.mobile.title'),
      subtitle: t('services.mobile.subtitle'),
      description: t('services.mobile.description'),
      relatedProjects: [],
      learnMoreLink: "/services#mobile"
    }
  ];

  const currentServices = activeTab === 'ai' ? aiServices : webDevServices;

  return (
    <section id="services" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div ref={titleRef} className={`text-center space-y-4 max-w-3xl mx-auto scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            {t('services.title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('services.description')}
          </p>
        </div>

        {/* SEO intro content */}
        <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Piedāvājam plašu <strong className="text-foreground">AI automatizācijas pakalpojumu</strong> klāstu, kas pielāgots
            Latvijas uzņēmumu vajadzībām. No inteliģentiem čatbotiem, kas apkalpo klientus latviešu valodā 24/7,
            līdz pilnīgi automatizētiem biznesa procesiem — mūsu mākslīgā intelekta risinājumi palīdz ietaupīt laiku,
            samazināt izmaksas un uzlabot efektivitāti.
          </p>
          <p>
            Katrs pakalpojums tiek pielāgots individuāli jūsu biznesa specifikai. Izmantojam jaunākās AI tehnoloģijas —
            OpenAI, Google AI, pielāgotas mašīnmācīšanās sistēmas — lai nodrošinātu maksimālu rezultātu.
            Mūsu klienti vidēji <strong className="text-foreground">ietaupa 15-25 stundas nedēļā</strong> katram darbiniekam
            un sasniedz pozitīvu ROI <strong className="text-foreground">3-6 mēnešu laikā</strong>.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex bg-muted/70 rounded-lg p-1 border border-border">
            <Button
              variant={activeTab === 'ai' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('ai')}
              className="px-6 py-2"
            >
              AI Pakalpojumi
            </Button>
            <Button
              variant={activeTab === 'webdev' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('webdev')}
              className="px-6 py-2"
            >
              Web izstrāde
            </Button>
          </div>
        </div>
        
        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <Card 
              key={index}
              className={`p-6 border border-border hover:border-primary/30 transition-all duration-500 cosmic-gradient bg-card h-full flex flex-col hover-lift hover-glow group scroll-fade-in ${visibleItems.has(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <div className="group-hover:animate-pulse">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-medium tracking-tighter text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {service.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>
                
                {/* Related Project(s) Proof */}
                {service.relatedProjects && service.relatedProjects.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium text-foreground mb-2 flex items-center gap-1">
                      <span>Saistītais projekts</span>
                      <span className="text-xs text-primary">(klikšķis atvērs detaļas)</span>
                    </p>
                    {service.relatedProjects.slice(0, 1).map((project) => (
                                              <div
                          key={project.id}
                          className="bg-muted/50 rounded-lg p-3 border border-border hover:bg-muted/70 hover:border-primary/30 cursor-pointer transition-all duration-200"
                          onClick={() => handleProjectClick(project)}
                        >
                        <div className="flex items-center gap-3">
                          <img
                            src={project.image}
                            alt={`${project.title} - saistītais projekts`}
                            loading="lazy"
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-foreground truncate">
                              {project.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {project.client} • {project.year}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Learn More Link */}
                {service.learnMoreLink && !service.learnMoreLink.includes('#') && (
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <Link
                      to={service.learnMoreLink}
                      className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1.5 group/link transition-colors"
                    >
                      Uzzināt vairāk
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />

      </div>
    </section>
  );
};

export default Services;
