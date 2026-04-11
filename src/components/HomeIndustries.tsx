import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShoppingCart, Factory, Truck, Scale, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Calculator,
    title: 'Grāmatvedība un Finanses',
    description: 'Rēķinu apstrāde, atskaites, nodokļu aprēķini un VID integrācija',
    path: '/nozares/gramatvediba-un-finanses',
  },
  {
    icon: ShoppingCart,
    title: 'E-komercija',
    description: 'Klientu apkalpošana, pasūtījumu apstrāde un personalizēti ieteikumi',
    path: '/nozares/e-komercija',
  },
  {
    icon: Factory,
    title: 'Ražošana',
    description: 'Kvalitātes kontrole, apkope un piegādes ķēžu optimizācija',
    path: '/nozares/razosana',
  },
  {
    icon: Truck,
    title: 'Loģistika',
    description: 'Maršrutu optimizācija, dokumentu automatizācija un noliktavu pārvaldība',
    path: '/nozares/logistika',
  },
  {
    icon: Scale,
    title: 'Juridiskās Firmas',
    description: 'Līgumu analīze, dokumentu automatizācija un juridiskā izpēte',
    path: '/nozares/juridiskas-firmas',
  },
];

const HomeIndustries = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
            Nozares, kurām palīdzam
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            AI automatizācijas risinājumi, kas pielāgoti katras nozares specifiskajām vajadzībām
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, i) => (
            <Link
              key={i}
              to={industry.path}
              className="group p-5 sm:p-6 rounded-xl border border-border/50 hover:border-primary/20 bg-card/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/nozares"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Skatīt visas nozares
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;
