import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HomeLeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/5">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Paldies!</h2>
          <p className="text-muted-foreground">Jūsu pieteikums ir saņemts. Mēs sazināsimies ar jums tuvāko 24 stundu laikā.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl border border-border/50 bg-gradient-to-br from-card/80 via-background to-card/80 p-6 sm:p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-tight mb-3">
              Pieteikties bezmaksas konsultācijai
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Aizpildiet formu un mūsu AI eksperts sazināsies ar jums, lai apspriestu jūsu uzņēmuma automatizācijas iespējas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
                Vārds *
              </label>
              <input
                id="lead-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Jūsu vārds"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lead-email" className="text-sm font-medium text-foreground">
                E-pasts *
              </label>
              <input
                id="lead-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="jusu.epasts@piemers.lv"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lead-company" className="text-sm font-medium text-foreground">
                Uzņēmums
              </label>
              <input
                id="lead-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Jūsu uzņēmuma nosaukums"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lead-interest" className="text-sm font-medium text-foreground">
                Kas jūs interesē? *
              </label>
              <select
                id="lead-interest"
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              >
                <option value="">Izvēlieties...</option>
                <option value="accounting">Grāmatvedības automatizācija</option>
                <option value="documents">Dokumentu apstrāde</option>
                <option value="chatbot">AI čatbots</option>
                <option value="platform">AI platforma</option>
                <option value="data">Datu analīze</option>
                <option value="other">Cits</option>
              </select>
            </div>

            <div className="sm:col-span-2 pt-2">
              <Button
                type="submit"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 group px-8 py-3"
              >
                Pieteikties bezmaksas konsultācijai
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeLeadForm;
