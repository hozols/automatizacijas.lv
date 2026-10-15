import React, { useState } from 'react';
import { trackFormSubmission } from '@/lib/analytics';

const FORM_ENDPOINT = 'https://formspree.io/f/mqalbdra';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const INTERESTS = [
  { value: 'Grāmatvedības automatizācija', label: 'Grāmatvedības automatizācija' },
  { value: 'Dokumentu apstrāde', label: 'Dokumentu apstrāde' },
  { value: 'AI čatbots', label: 'AI čatbots' },
  { value: 'AI platforma', label: 'AI platforma' },
  { value: 'Datu analīze', label: 'Datu analīze' },
  { value: 'Cits', label: 'Cits' },
];

const HomeLeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData((data) => ({ ...data, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const body = new FormData();
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('company', formData.company);
    body.append('interest', formData.interest);
    body.append('_subject', 'Konsultācijas pieteikums no sākumlapas');
    body.append('form_source', 'Sākumlapas forma');
    body.append('page_url', window.location.href);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      trackFormSubmission('home_lead_form');
      setStatus('sent');
    } catch (error) {
      console.error('Lead form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="konsultacija" className="band band-ink">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
        <div className="lg:col-span-5">
          <p className="label m-0 text-smoke">Konsultācija</p>
          <h2 className="display-2 m-0 mt-4">Pieteikties bezmaksas konsultācijai</h2>
          <p className="mt-5 mb-0 text-lg text-ink-muted max-w-[26em]">
            Pastāstiet, kurš darbs jūsu uzņēmumā aizņem visvairāk laika. Atbildēsim 24 stundu laikā un
            pateiksim, vai un kā to var automatizēt.
          </p>
          <p className="mt-8 mb-0 text-ink-muted">
            Var arī uzreiz zvanīt vai rakstīt:
            <br />
            <a href="tel:+37120015830" className="text-ink-foreground underline underline-offset-4">
              +371 20 015 830
            </a>
            <br />
            <a
              href="mailto:info@automatizacijas.lv"
              className="text-ink-foreground underline underline-offset-4"
            >
              info@automatizacijas.lv
            </a>
          </p>
        </div>

        <div className="sheet lg:col-span-7">
          {status === 'sent' ? (
            <div role="status" className="py-6">
              <h3 className="display-3 m-0">
                <span className="mark">Pieteikums saņemts</span>
              </h3>
              <p className="mt-4 mb-0 text-lg">
                Paldies, {formData.name}. Sazināsimies ar jums 24 stundu laikā uz {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-name" className="field-label">
                  Vārds
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={update('name')}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="field-label">
                  E-pasts
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={update('email')}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="lead-company" className="field-label">
                  Uzņēmums <span className="font-normal text-muted-foreground">(nav obligāts)</span>
                </label>
                <input
                  id="lead-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={update('company')}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="lead-interest" className="field-label">
                  Kas jūs interesē?
                </label>
                <select
                  id="lead-interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={update('interest')}
                  className="field"
                >
                  <option value="">Izvēlieties</option>
                  {INTERESTS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="btn btn-solid w-full sm:w-auto disabled:opacity-60">
                  {status === 'sending' ? 'Sūta pieteikumu' : 'Nosūtīt pieteikumu'}
                </button>

                {status === 'error' && (
                  <p role="alert" className="mt-4 mb-0 text-destructive">
                    Pieteikums netika nosūtīts. Pārbaudiet interneta savienojumu un mēģiniet vēlreiz vai rakstiet
                    uz info@automatizacijas.lv.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeLeadForm;
