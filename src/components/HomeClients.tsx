import React from 'react';

const clients = [
  'Kleen1',
  'Signingclients.com',
  'The Artisan Agency',
  'Rigami',
  'BN Darbi',
  'Autoremonts.com',
];

const HomeClients = () => {
  return (
    <section aria-label="Klienti" className="border-y border-border">
      <div className="wrap py-8 sm:py-10">
        <p className="display-3 m-0 max-w-[26em]">
          Līdz šim strādāts ar {clients.join(', ')} un Dalton Nekustamie Īpašumi.
        </p>
      </div>
    </section>
  );
};

export default HomeClients;
