import React from 'react';
import { Link } from 'react-router-dom';
import ProcessSheet from './ProcessSheet';
import { trackCTAClick } from '@/lib/analytics';

const HeroSection = () => {
  return (
    <section className="wrap pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-24">
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <h1 className="display-1 m-0">
            AI automatizācija <br className="hidden lg:inline" />
            darbiem, kas birojā <br className="hidden lg:inline" />
            atkārtojas katru dienu
          </h1>

          <p className="lede mt-6 lg:mt-8 text-foreground">
            Rēķinu ievade, līgumu sagatavošana, atbildes uz klientu jautājumiem. Uzbūvējam sistēmu, kas šos
            darbus izdara pati, un pieslēdzam to programmām, kuras jau lietojat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={() => trackCTAClick('bezmaksas_konsultacija', 'hero')}
              className="btn btn-solid"
            >
              Pieteikt bezmaksas konsultāciju
            </Link>
            <Link
              to="/portfolio"
              onClick={() => trackCTAClick('skatit_darbus', 'hero')}
              className="btn btn-line"
            >
              Skatīt paveiktos darbus
            </Link>
          </div>

          <p className="mt-4 mb-0 text-muted-foreground">Konsultācija ir bez maksas un bez saistībām.</p>
        </div>

        <div className="lg:col-span-5">
          <ProcessSheet />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
