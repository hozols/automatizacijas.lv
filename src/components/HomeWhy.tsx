import React from 'react';
import Reveal from '@/components/motion/Reveal';

const HomeWhy = () => {
  return (
    <section className="bg-card">
      <div className="wrap band grid gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 className="display-2 m-0 lg:col-span-5">
          <Reveal text="Kāpēc tieši tagad" />
        </h2>

        <div className="max-w-[40em] space-y-5 text-lg leading-relaxed lg:col-span-7">
          <p className="m-0">
            <strong>Mākslīgais intelekts</strong> (MI) strauji maina veidu, kā uzņēmumi Latvijā veic ikdienas
            biznesa procesus. AI automatizācija ļauj samazināt manuālo darbu, paātrināt lēmumu pieņemšanu un
            uzlabot klientu apkalpošanas kvalitāti, vienlaikus samazinot izmaksas līdz pat 60%.
          </p>
          <p className="m-0">
            Latvijas uzņēmumi, kas jau izmanto mākslīgo intelektu, ietaupa vidēji{' '}
            <strong>15-25 stundas nedēļā</strong> katram darbiniekam. Neatkarīgi no uzņēmuma lieluma, vai tas
            ir neliels e-komercijas veikals vai liela ražošanas kompānija, AI risinājumi var automatizēt
            atkārtojošos procesus un atbrīvot resursus stratēģiskam darbam.
          </p>
          <p className="m-0">
            No AI čatbotiem, kas apkalpo klientus 24/7 latviešu valodā, līdz dokumentu apstrādes
            automatizācijai un biznesa datu analīzei: <strong>automatizacijas.lv</strong> piedāvā pilnu AI
            pakalpojumu klāstu, kas pielāgots Latvijas tirgus vajadzībām.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
