import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, Settings, Rocket, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Bezmaksas konsultācija',
    description: 'Sākam ar jūsu biznesa vajadzību analīzi. Identificējam procesus, kurus var automatizēt, un novērtējam potenciālo ietaupījumu. Konsultācija ir pilnībā bezmaksas un bez saistībām.',
  },
  {
    number: '02',
    icon: <Search className="h-6 w-6 text-primary" />,
    title: 'Risinājuma izstrāde',
    description: 'Mūsu AI speciālisti izstrādā pielāgotu risinājumu jūsu uzņēmumam. Izvēlamies piemērotākās tehnoloģijas un platformas, lai nodrošinātu maksimālu efektivitāti un integrāciju ar jūsu esošajām sistēmām.',
  },
  {
    number: '03',
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: 'Ieviešana un testēšana',
    description: 'Ieviešam risinājumu pakāpeniski, testējam ar reāliem datiem un pielāgojam atbilstoši jūsu biznesa procesiem. Nodrošinām apmācību jūsu komandai, lai katrs darbinieks prastu izmantot jaunos rīkus.',
  },
  {
    number: '04',
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Atbalsts un optimizācija',
    description: 'Pēc ieviešanas nodrošinām pastāvīgu tehnisko atbalstu un regulāri optimizējam AI risinājumu. Analizējam rezultātus un piedāvājam uzlabojumus, lai jūsu automatizācija kļūtu arvien efektīvāka.',
  },
];

const HomeProcess = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
            Kā notiek AI automatizācijas ieviešana?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Vienkāršs un pārskatāms process no pirmās konsultācijas līdz gatavam AI risinājumam jūsu uzņēmumam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              <div className="relative p-5 sm:p-6 rounded-xl border border-border/50 hover:border-primary/20 bg-card/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-primary/20">{step.number}</span>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gatavs sākt? Sazinieties ar mums jau šodien un uzziniet, kā mākslīgais intelekts var transformēt jūsu biznesa procesus.
            Pirmā konsultācija ir bezmaksas.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCTAClick('bezmaksas_konsultacija', 'home_process')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Pieteikties bezmaksas konsultācijai
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
