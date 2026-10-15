import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

const steps = [
  {
    title: 'Bezmaksas konsultācija',
    description:
      'Sākam ar jūsu biznesa vajadzību analīzi. Identificējam procesus, kurus var automatizēt, un novērtējam potenciālo ietaupījumu. Konsultācija ir pilnībā bezmaksas un bez saistībām.',
  },
  {
    title: 'Risinājuma izstrāde',
    description:
      'Izstrādājam pielāgotu risinājumu jūsu uzņēmumam. Izvēlamies piemērotākās tehnoloģijas un platformas, lai risinājums strādātu kopā ar jūsu esošajām sistēmām.',
  },
  {
    title: 'Ieviešana un testēšana',
    description:
      'Ieviešam risinājumu pakāpeniski, testējam ar reāliem datiem un pielāgojam jūsu biznesa procesiem. Apmācām jūsu komandu, lai katrs darbinieks prastu izmantot jaunos rīkus.',
  },
  {
    title: 'Atbalsts un optimizācija',
    description:
      'Pēc ieviešanas nodrošinām tehnisko atbalstu un regulāri optimizējam AI risinājumu. Analizējam rezultātus un piedāvājam uzlabojumus.',
  },
];

const HomeProcess = () => {
  return (
    <section className="wrap band">
      <h2 className="display-2 m-0 max-w-[14em]">Kā notiek AI automatizācijas ieviešana?</h2>

      <ol className="list-none p-0 m-0 mt-10 lg:mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-foreground pt-4 pb-8">
            <span aria-hidden="true" className="font-display font-extrabold text-7xl leading-none text-primary">
              {i + 1}
            </span>
            <h3 className="mt-3 mb-2 text-xl font-bold leading-snug">{step.title}</h3>
            <p className="m-0 text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>

      <p className="mt-4 mb-0 text-lg max-w-[38em]">
        Pamata čatbots ir gatavs 1-2 nedēļās, procesu automatizācija parasti 2-6 nedēļās.{' '}
        <Link
          to="/contact"
          onClick={() => trackCTAClick('bezmaksas_konsultacija', 'home_process')}
          className="link font-semibold"
        >
          Pieteikties bezmaksas konsultācijai
        </Link>
      </p>
    </section>
  );
};

export default HomeProcess;
