import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePricing } from '@/contexts/PricingContext';
import { PageHero, Section, RuledList, CtaBand } from '@/components/page';
import { cn } from '@/lib/utils';

const legendClass = 'p-0 mb-3 text-lg font-bold leading-snug';
const optionClass = 'flex items-start gap-3 py-3 border-b border-border cursor-pointer';
const boxClass = 'mt-[0.2em] h-5 w-5 shrink-0 accent-primary cursor-pointer';

const Pricing = () => {
  const navigate = useNavigate();
  const { setPricingData } = usePricing();

  const [projectType, setProjectType] = useState('ai-automation');
  const [complexity, setComplexity] = useState([3]);
  const [timeline, setTimeline] = useState([4]);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);

  const serviceTypes = {
    'ai-automation': {
      name: 'AI Automatizācija',
      description: 'Automatizēti AI darbinieki un procesi'
    },
    'chatbots': {
      name: 'AI Čatboti',
      description: 'Inteliģenti sarunu aģenti'
    },
    'web-development': {
      name: 'Web Izstrāde',
      description: 'Mājaslapas un web aplikācijas'
    },
    'custom-solution': {
      name: 'Pielāgots Risinājums',
      description: 'Unikāli AI risinājumi'
    }
  };

  const availableIntegrations = [
    'Google Workspace', 'Slack', 'Zapier', 'Airtable', 'Notion',
    'Salesforce', 'HubSpot', 'Shopify', 'WordPress', 'Custom API'
  ];

  const availableFeatures = [
    'Daudzvalodu atbalsts', 'Reāllaika analītika', 'Mācīšanās no datiem',
    'Mērogojama arhitektūra', 'Mobilā aplikācija', 'API dokumentācija',
    'Apmācības materiāli', '24/7 atbalsts', 'Backup sistēma', 'SSL drošība'
  ];

  const storePricingData = () => {
    const pricingData = {
      projectType,
      complexity: complexity[0],
      timeline: timeline[0],
      integrations,
      customFeatures,
      estimatedCost: 0,
      serviceType: serviceTypes[projectType as keyof typeof serviceTypes]
    };

    setPricingData(pricingData);
  };

  const handleContactNavigation = () => {
    storePricingData();
    navigate('/contact');
  };

  const summaryRow = 'flex items-baseline justify-between gap-4 py-3 border-b border-border';

  return (
    <>
      <PageHero
        title="Katrs projekts ir unikāls"
        lede={
          <>
            <strong>Individuāla pieeja.</strong> Cenas ir atkarīgas no projekta apjoma un sarežģītības. Konfigurējiet savu projektu un pieteikties bezmaksas konsultācijai.
          </>
        }
      />

      <section id="pricing" className="wrap pb-14 lg:pb-24">
        <form
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start"
        >
          {/* Project configuration */}
          <div className="sheet p-6 sm:p-8 lg:col-span-7 min-w-0">
            <h2 className="m-0 pb-4 border-b-2 border-foreground font-sans text-xl font-bold leading-tight">
              Projektu Konfigurācija
            </h2>

            <fieldset className="m-0 p-0 border-0 min-w-0 mt-7">
              <legend className={legendClass}>Projekta veids</legend>
              <div className="border-t border-border grid sm:grid-cols-2 sm:gap-x-8">
                {Object.entries(serviceTypes).map(([key, service]) => (
                  <label key={key} className={optionClass}>
                    <input
                      type="radio"
                      name="projectType"
                      value={key}
                      checked={projectType === key}
                      onChange={() => setProjectType(key)}
                      className={boxClass}
                    />
                    <span className="min-w-0">
                      <span className="block font-bold leading-snug">
                        <span className={cn(projectType === key && 'mark')}>{service.name}</span>
                      </span>
                      <span className="block text-muted-foreground leading-snug">{service.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-9">
              <label htmlFor="pricing-complexity" className={cn(legendClass, 'block')}>
                Projekta sarežģītība: {complexity[0]}/5
              </label>
              <input
                id="pricing-complexity"
                type="range"
                min={1}
                max={5}
                step={1}
                value={complexity[0]}
                onChange={(e) => setComplexity([Number(e.target.value)])}
                aria-valuetext={`${complexity[0]}/5`}
                className="block w-full h-8 accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-[0.9375rem] text-muted-foreground">
                <span>Vienkāršs</span>
                <span>Sarežģīts</span>
              </div>
            </div>

            <div className="mt-9">
              <label htmlFor="pricing-timeline" className={cn(legendClass, 'block')}>
                Laika ietvars: {timeline[0]} nedēļas
              </label>
              <input
                id="pricing-timeline"
                type="range"
                min={1}
                max={8}
                step={1}
                value={timeline[0]}
                onChange={(e) => setTimeline([Number(e.target.value)])}
                aria-valuetext={`${timeline[0]} nedēļas`}
                className="block w-full h-8 accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-[0.9375rem] text-muted-foreground">
                <span>1 nedēļa</span>
                <span>8 nedēļas</span>
              </div>
            </div>

            <fieldset className="m-0 p-0 border-0 min-w-0 mt-9">
              <legend className={legendClass}>Integrācijas</legend>
              <div className="border-t border-border grid sm:grid-cols-2 sm:gap-x-8">
                {availableIntegrations.map((name) => (
                  <label key={name} className={optionClass}>
                    <input
                      type="checkbox"
                      checked={integrations.includes(name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setIntegrations([...integrations, name]);
                        } else {
                          setIntegrations(integrations.filter(i => i !== name));
                        }
                      }}
                      className={boxClass}
                    />
                    <span className="leading-snug">{name}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="m-0 p-0 border-0 min-w-0 mt-9">
              <legend className={legendClass}>Papildu funkcijas</legend>
              <div className="border-t border-border grid sm:grid-cols-2 sm:gap-x-8">
                {availableFeatures.map((feature) => (
                  <label key={feature} className={optionClass}>
                    <input
                      type="checkbox"
                      checked={customFeatures.includes(feature)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCustomFeatures([...customFeatures, feature]);
                        } else {
                          setCustomFeatures(customFeatures.filter(f => f !== feature));
                        }
                      }}
                      className={boxClass}
                    />
                    <span className="leading-snug">{feature}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Summary, laid out like a quote document */}
          <div className="sheet p-6 sm:p-8 lg:col-span-5 lg:sticky lg:top-24 min-w-0">
            <h2 className="m-0 pb-4 border-b-2 border-foreground font-sans text-xl font-bold leading-tight">
              Jūsu projekts
            </h2>

            <dl className="m-0" aria-live="polite">
              <div className={summaryRow}>
                <dt className="text-muted-foreground">Pakalpojums:</dt>
                <dd className="m-0 font-bold text-right">{serviceTypes[projectType as keyof typeof serviceTypes].name}</dd>
              </div>
              <div className={summaryRow}>
                <dt className="text-muted-foreground">Sarežģītība:</dt>
                <dd className="m-0 font-bold tabular-nums">{complexity[0]}/5</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 py-3 border-b border-border">
                <dt className="text-muted-foreground">Integrācijas:</dt>
                <dd className="m-0 font-bold tabular-nums">{integrations.length}</dd>
                {integrations.length > 0 && (
                  <dd className="m-0 mt-1 basis-full text-[0.9375rem] text-muted-foreground leading-snug">{integrations.join(', ')}</dd>
                )}
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 py-3 border-b-2 border-foreground">
                <dt className="text-muted-foreground">Papildu funkcijas:</dt>
                <dd className="m-0 font-bold tabular-nums">{customFeatures.length}</dd>
                {customFeatures.length > 0 && (
                  <dd className="m-0 mt-1 basis-full text-[0.9375rem] text-muted-foreground leading-snug">{customFeatures.join(', ')}</dd>
                )}
              </div>
              <div className="pt-5">
                <dt className="text-muted-foreground leading-snug">Laika ietvars:</dt>
                <dd className="display-2 m-0 pt-1 tabular-nums">{timeline[0]} nedēļas</dd>
              </div>
            </dl>

            <button type="button" onClick={handleContactNavigation} className="btn btn-solid w-full mt-7">
              Pieteikties bezmaksas konsultācijai
            </button>
            <p className="mt-3 mb-0 text-[0.9375rem] text-muted-foreground leading-snug">
              Projekta informācija tiks automātiski iekļauta kontaktformā
            </p>
          </div>
        </form>
      </section>

      <Section title="Kāpēc izvēlēties mūs?" tone="sheet">
        <RuledList
          items={[
            { title: 'Ātri un efektīvi', desc: 'Projekti tiek izpildīti laikā un budžetā' },
            { title: 'Pieredzējusi komanda', desc: '5+ gadu pieredze AI un web izstrādē' },
            { title: 'Rezultātu orientēts', desc: 'Fokusējamies uz biznesa vērtību' },
          ]}
        />
      </Section>

      <CtaBand
        title="Saņemiet individuālu piedāvājumu, kas pielāgots tieši jūsu vajadzībām"
        primary={{ to: '/contact', label: 'Pieteikties bezmaksas konsultācijai', onClick: storePricingData }}
      />
    </>
  );
};

export default Pricing;
