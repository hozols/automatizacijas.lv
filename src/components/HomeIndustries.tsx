import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className="bg-card border-y border-border">
      <div className="wrap band">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="display-2 m-0">Nozares, kurām palīdzam</h2>
            <p className="mt-5 mb-0 text-muted-foreground max-w-[26em]">
              Katrā nozarē atkārtojas citi darbi. Šajās piecās zinām, kur parasti slēpjas lielākais laika
              zudums.
            </p>
            <Link to="/nozares" className="link inline-block mt-5 font-semibold">
              Skatīt visas nozares
            </Link>
          </div>

          <ul className="lg:col-span-7 list-none p-0 m-0">
            {industries.map((industry) => (
              <li key={industry.path} className="border-b border-border first:border-t-2 first:border-t-foreground">
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
    </section>
  );
};

export default HomeIndustries;
