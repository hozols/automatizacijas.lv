import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

const services = [
  {
    title: 'AI čatboti',
    description:
      'Čatboti latviešu valodā, kas apkalpo klientus 24/7, atbild uz jautājumiem un palīdz pārdošanas procesā. Integrējas ar populārākajām platformām.',
    link: '/chatbotu-izstrade',
  },
  {
    title: 'Procesu automatizācija',
    description:
      'Biznesa procesu automatizācija ar mākslīgo intelektu: e-pastu apstrāde, dokumentu ģenerēšana, datu ievade un atskaišu veidošana.',
    link: '/procesu-automatizacija',
  },
  {
    title: 'Dokumentu automatizācija',
    description:
      'Dokumentu digitalizācija, rēķinu apstrāde, līgumu analīze un datu izvilkšana no jebkura formāta dokumentiem ar AI.',
    link: '/dokumentu-automatizacija',
  },
  {
    title: 'Datu analīze un BI',
    description:
      'Automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija lēmumu pieņemšanai.',
    link: '/datu-analize',
  },
  {
    title: 'AI darbinieki',
    description:
      'AI darbinieki konkrētiem uzdevumiem: satura veidošanai, klientu apkalpošanai un datu apstrādei.',
    link: '/ai-darbinieki',
  },
  {
    title: 'Mājaslapu izstrāde',
    description:
      'Mājaslapas un e-komercijas risinājumi ar AI integrāciju: čatboti, personalizācija, SEO un analītika.',
    link: '/majaslapu-izstrade',
  },
];

const HomeServices = () => {
  return (
    <section className="wrap band">
      <h2 className="display-2 m-0 max-w-[14em]">Mūsu AI pakalpojumi uzņēmumiem Latvijā</h2>

      <ul className="list-none p-0 m-0 mt-10 lg:mt-14 border-t-2 border-foreground">
        {services.map((service) => (
          <li key={service.link} className="border-b border-border">
            <Link
              to={service.link}
              onClick={() => trackCTAClick(service.title, 'home_services')}
              className="service-row group grid gap-x-8 gap-y-2 py-6 lg:py-7 lg:grid-cols-12 lg:items-baseline no-underline text-foreground"
            >
              <h3 className="display-3 m-0 lg:col-span-4">
                <span className="sweep">{service.title}</span>
              </h3>
              <p className="m-0 lg:col-span-8 text-muted-foreground group-hover:text-foreground transition-colors">
                {service.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeServices;
