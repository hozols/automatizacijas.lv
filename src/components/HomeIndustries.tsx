import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal';
import Hairline from '@/components/motion/Hairline';

const industries = [
  {
    title: 'Grāmatvedība un finanses',
    description: 'Rēķinu apstrāde, atskaites, nodokļu aprēķini un VID integrācija',
    path: '/nozares/gramatvediba-un-finanses',
  },
  {
    title: 'E-komercija',
    description: 'Klientu apkalpošana, pasūtījumu apstrāde un personalizēti ieteikumi',
    path: '/nozares/e-komercija',
  },
  {
    title: 'Ražošana',
    description: 'Kvalitātes kontrole, apkope un piegādes ķēžu optimizācija',
    path: '/nozares/razosana',
  },
  {
    title: 'Loģistika',
    description: 'Maršrutu optimizācija, dokumentu automatizācija un noliktavu pārvaldība',
    path: '/nozares/logistika',
  },
  {
    title: 'Juridiskās firmas',
    description: 'Līgumu analīze, dokumentu automatizācija un juridiskā izpēte',
    path: '/nozares/juridiskas-firmas',
  },
];

const HomeIndustries = () => {
  return (
    <section>
      <div className="wrap band">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-2 m-0">
              <Reveal text="Nozares, kurām palīdzam" />
            </h2>
            <p className="mt-5 mb-0 text-muted-foreground max-w-[26em]">
              Katrā nozarē atkārtojas citi darbi. Šajās piecās zinām, kur parasti slēpjas lielākais laika
              zudums.
            </p>
            <Link to="/nozares" className="link mt-5 inline-block">
              Skatīt visas nozares
            </Link>
          </div>

          <div className="lg:col-span-7">
          <Hairline />
          <ul className="list-none p-0 m-0">
            {industries.map((industry) => (
              <li key={industry.path} className="border-b border-border">
                <Link to={industry.path} className="service-row block py-5 no-underline text-foreground">
                  <span className="display-3 block">
                    <span className="sweep">{industry.title}</span>
                  </span>
                  <span className="block mt-1 text-muted-foreground">{industry.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;
