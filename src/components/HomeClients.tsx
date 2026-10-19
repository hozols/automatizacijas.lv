import React from 'react';
import Marquee from '@/components/motion/Marquee';

const clients = ['Rīga Prints', 'Latvijas Nacionālais dabas muzejs', 'BN Darbi', 'Balance up', 'SIA Meži', 'Dezgo.lv', 'Kleen1', 'Signingclients.com', 'The Artisan Agency', 'Rigami', 'Autoremonts.com', 'Dalton Nekustamie Īpašumi'];

/* A slow ticker of the people we have worked with. */
const HomeClients = () => {
  return (
    <section aria-label="Klienti" className="border-y border-border py-8 sm:py-10">
      <p className="label wrap m-0 mb-6 text-muted-foreground">Līdz šim strādāts ar</p>
      <Marquee items={clients} className="text-smoke" />
    </section>
  );
};

export default HomeClients;
