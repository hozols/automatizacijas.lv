import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Breadcrumbs, PageHero, Prose, CtaBand } from '@/components/page';
import ProjectModal from './ProjectModal';

// Portfolio projects data. The metric icons are data for ProjectModal, which renders them.
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

type Project = (typeof portfolioProjects)[number];

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  relatedProjects?: Project[];
  learnMoreLink?: string;
}

interface ServiceBandProps {
  id?: string;
  title: string;
  tone?: 'paper' | 'sheet';
  services: ServiceItem[];
  onProjectClick: (project: Project) => void;
}

/*
  One category of services as large ruled rows, like the homepage list.
  A row with a dedicated page is one big link (the title link is stretched over
  the row); the related project button sits above it.
*/
const ServiceBand = ({ id, title, tone = 'paper', services, onProjectClick }: ServiceBandProps) => (
  <section id={id} className={cn(tone === 'sheet' && 'bg-card border-y border-border')}>
    <div className="wrap py-12 lg:py-20">
      <h2 className="display-2 m-0">{title}</h2>

      <ul className="list-none p-0 m-0 mt-8 lg:mt-12 border-t-2 border-foreground">
        {services.map((service) => {
          const link = service.learnMoreLink ?? '';
          const hasPage = link !== '' && !link.includes('#');
          const anchor = link.includes('#') ? link.split('#')[1] : undefined;
          const project = service.relatedProjects?.[0];

          return (
            <li
              key={service.title}
              id={anchor}
              className={cn(
                'relative grid gap-x-8 gap-y-3 py-6 lg:py-7 lg:grid-cols-12 lg:items-baseline border-b border-border',
                hasPage && 'group'
              )}
            >
              <div className="lg:col-span-4">
                <h3 className="display-3 m-0">
                  {hasPage ? (
                    <Link to={link} className="service-row no-underline text-foreground after:absolute after:inset-0">
                      <span className="sweep">{service.title}</span>
                    </Link>
                  ) : (
                    service.title
                  )}
                </h3>
                <p className="mt-2 mb-0 font-medium leading-snug">{service.subtitle}</p>
              </div>

              <div className="lg:col-span-6">
                <p className="m-0 text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </p>

                {project && (
                  <div className="relative z-10 mt-4 text-[0.9375rem]">
                    <p className="m-0">
                      <span className="font-medium">Saistītais projekts</span>{' '}
                      <span className="text-muted-foreground">(klikšķis atvērs detaļas)</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => onProjectClick(project)}
                      className="link mt-1 p-0 bg-transparent border-0 text-left font-medium cursor-pointer"
                    >
                      {project.title}
                    </button>
                    <p className="m-0 text-muted-foreground">
                      {project.client}, {project.year}
                    </p>
                  </div>
                )}
              </div>

              {hasPage && (
                <span
                  aria-hidden="true"
                  className="lg:col-span-2 lg:text-right font-medium text-primary underline underline-offset-4 decoration-[1.5px]"
                >
                  Uzzināt vairāk
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

const Services = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const aiServices: ServiceItem[] = [
    {
      title: t('services.workers.title'),
      subtitle: t('services.workers.subtitle'),
      description: t('services.workers.description'),
      relatedProjects: [portfolioProjects[0]], // Kleen1
      learnMoreLink: "/services#ai-workers"
    },
    {
      title: t('services.chatbots.title'),
      subtitle: t('services.chatbots.subtitle'),
      description: t('services.chatbots.description'),
      relatedProjects: [portfolioProjects[2]], // Artisan Agency
      learnMoreLink: "/chatbotu-izstrade"
    },
    {
      title: t('services.automation.title'),
      subtitle: t('services.automation.subtitle'),
      description: t('services.automation.description'),
      // relatedProjects: [portfolioProjects[1]], // LinkedIn
      learnMoreLink: "/procesu-automatizacija"
    },
    {
      title: t('services.documents.title'),
      subtitle: t('services.documents.subtitle'),
      description: t('services.documents.description'),
      // relatedProjects: [portfolioProjects[5]], // Sula Studios
      learnMoreLink: "/dokumentu-automatizacija"
    },
    {
      title: t('services.intelligence.title'),
      subtitle: t('services.intelligence.subtitle'),
      description: t('services.intelligence.description'),
      // relatedProjects: [],
      learnMoreLink: "/datu-analize"
    },
    {
      title: t('services.custom.title'),
      subtitle: t('services.custom.subtitle'),
      description: t('services.custom.description'),
      // relatedProjects: [],
      learnMoreLink: "/ai-platformu-izstrade"
    }
  ];

  const webDevServices: ServiceItem[] = [
    {
      title: t('services.webdev.title'),
      subtitle: t('services.webdev.subtitle'),
      description: t('services.webdev.description'),
      // relatedProjects: [portfolioProjects[4], portfolioProjects[3]], // BN Darbi, Rigami
      learnMoreLink: "/majaslapu-izstrade"
    },
    {
      title: t('services.ecommerce.title'),
      subtitle: t('services.ecommerce.subtitle'),
      description: t('services.ecommerce.description'),
      // relatedProjects: [portfolioProjects[4]], // BN Darbi
      learnMoreLink: "/services#ecommerce"
    },
    {
      title: t('services.mobile.title'),
      subtitle: t('services.mobile.subtitle'),
      description: t('services.mobile.description'),
      relatedProjects: [],
      learnMoreLink: "/services#mobile"
    }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: 'Pakalpojumi' }]} />

      <PageHero title={t('services.title')} lede={t('services.description')}>
        {/* SEO intro content */}
        <Prose>
          <p>
            Piedāvājam plašu <strong>AI automatizācijas pakalpojumu</strong> klāstu, kas pielāgots
            Latvijas uzņēmumu vajadzībām. No inteliģentiem čatbotiem, kas apkalpo klientus latviešu valodā 24/7,
            līdz pilnīgi automatizētiem biznesa procesiem, mūsu mākslīgā intelekta risinājumi palīdz ietaupīt laiku,
            samazināt izmaksas un uzlabot efektivitāti.
          </p>
          <p>
            Katrs pakalpojums tiek pielāgots individuāli jūsu biznesa specifikai. Izmantojam jaunākās AI tehnoloģijas:
            OpenAI, Google AI, pielāgotas mašīnmācīšanās sistēmas, lai nodrošinātu maksimālu rezultātu.
            Mūsu klienti vidēji <strong>ietaupa 15-25 stundas nedēļā</strong> katram darbiniekam
            un sasniedz pozitīvu ROI <strong>3-6 mēnešu laikā</strong>.
          </p>
        </Prose>
      </PageHero>

      <ServiceBand
        id="services"
        title="AI Pakalpojumi"
        tone="sheet"
        services={aiServices}
        onProjectClick={handleProjectClick}
      />

      <ServiceBand title="Web izstrāde" services={webDevServices} onProjectClick={handleProjectClick} />

      <CtaBand
        title={t('services.cta.title')}
        text={t('services.cta.description')}
        primary={{ to: '/contact', label: t('services.cta.consultation') }}
      />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Services;
