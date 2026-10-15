import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Reveal from '@/components/motion/Reveal';
import Hex from '@/components/motion/Hex';

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
  const [listRef, progress] = useScrollProgress<HTMLOListElement>();
  return (
    <section className="band bg-forest text-ink-foreground">
      <div className="wrap">
      <p className="label m-0 text-white/60">Process</p>
      <h2 className="display-2 m-0 mt-4 max-w-[14em]">
        <Reveal text="Kā tas notiek" />
      </h2>

      <ol
        ref={listRef}
        className="progress-rule list-none p-0 m-0 mt-10 lg:mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
        style={{ '--progress': progress } as React.CSSProperties}
      >
        {steps.map((step, i) => (
          <li key={step.title} className="border-t border-white/15 pb-8 pt-5">
            <span className="flex items-center gap-3">
              <Hex filled className="text-ink-foreground" />
              <span aria-hidden="true" className="display text-5xl leading-none">
                {i + 1}
              </span>
            </span>
            <h3 className="mb-2 mt-5 text-lg leading-snug">{step.title}</h3>
            <p className="m-0 text-white/70">{step.description}</p>
          </li>
        ))}
      </ol>

      <p className="mt-4 mb-0 max-w-[38em] text-lg">
        Pamata čatbots ir gatavs 1-2 nedēļās, procesu automatizācija parasti 2-6 nedēļās.{' '}
        <Link
          to="/contact"
          onClick={() => trackCTAClick('bezmaksas_konsultacija', 'home_process')}
          className="link"
        >
          Pieteikties bezmaksas konsultācijai
        </Link>
      </p>
      </div>
    </section>
  );
};

export default HomeProcess;
