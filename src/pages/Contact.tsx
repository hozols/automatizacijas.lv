import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePricing } from "@/contexts/PricingContext";
import { trackFormSubmission } from "@/lib/analytics";
import PageTransition from "@/components/PageTransition";
import { PageShell, Breadcrumbs, PageHero } from "@/components/page";

const contactFormSchema = z.object({
  name: z.string().min(2, "Vārds jābūt vismaz 2 rakstzīmes garš"),
  email: z.string().email("Lūdzu ievadiet derīgu e-pasta adresi"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Lūdzu izvēlieties pakalpojumu"),
  message: z.string().min(10, "Ziņojumam jābūt vismaz 10 rakstzīmes garšam"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Jums jāpiekrīt datu apstrādei, lai turpinātu",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { pricingData, clearPricingData } = usePricing();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const messageValue = watch("message");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company || "Nav norādīts");
      formData.append("phone", data.phone || "Nav norādīts");
      formData.append("service", data.service);
      formData.append("message", data.message);
      formData.append("budget", data.budget || "Nav norādīts");
      formData.append("timeline", data.timeline || "Nav norādīts");
      
      // Add timestamp and source
      formData.append("submitted_at", new Date().toISOString());
      formData.append("source", "automatizacijas.lv");
      formData.append("gdpr_consent", data.gdprConsent ? "Yes" : "No");
      
      // Add user agent and referrer for analytics
      formData.append("user_agent", navigator.userAgent);
      formData.append("referrer", document.referrer || "Direct");
      
      // Add pricing data if available
      if (pricingData) {
        formData.append("pricing_project_type", pricingData.projectType);
        formData.append("pricing_complexity", pricingData.complexity.toString());
        formData.append("pricing_timeline", pricingData.timeline.toString());
        formData.append("pricing_integrations", pricingData.integrations.join(", ") || "Nav izvēlēts");
        formData.append("pricing_custom_features", pricingData.customFeatures.join(", ") || "Nav izvēlēts");
        formData.append("pricing_service_name", pricingData.serviceType.name);
        formData.append("pricing_source", "Pricing Calculator");
      }

      const response = await fetch("https://formspree.io/f/mqalbdra", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully:", data);
        trackFormSubmission('contact_form');
        setIsSubmitted(true);
        reset();
        clearPricingData(); // Clear pricing data after successful submission

        toast({
          title: t("contact.form.success.title"),
          description: t("contact.form.success.message"),
          variant: "default",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission failed:", response.status, errorData);
        throw new Error(`Form submission failed: ${response.status} ${errorData.error || ''}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.message"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "workers", label: t("contact.form.service.workers") },
    { value: "chatbots", label: t("contact.form.service.chatbots") },
    { value: "automation", label: t("contact.form.service.automation") },
    { value: "documents", label: t("contact.form.service.documents") },
    { value: "intelligence", label: t("contact.form.service.intelligence") },
    { value: "custom", label: t("contact.form.service.custom") },
    { value: "consultation", label: t("contact.form.service.consultation") },
  ];

  const whatsappUrl = `https://wa.me/37120015830?text=${encodeURIComponent(
    'Sveiki! Es vēlos uzzināt vairāk par jūsu pakalpojumiem.'
  )}`;

  const errorClass = "mt-1.5 mb-0 text-[0.9375rem] font-medium text-destructive";
  const rowClass = "grid gap-x-6 gap-y-1 py-4 border-b border-border sm:grid-cols-[8rem_1fr]";

  return (
    <PageTransition>
      <Helmet>
        <title>Bezmaksas AI konsultācija | automatizacijas.lv</title>
        <meta name="description" content="Pastāstiet, kurš darbs birojā atkārtojas. Atbildam 24 stundu laikā ar priekšlikumu, ko var automatizēt un ko tas maksā."/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/contact" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/contact" />
        <meta property="og:title" content="Bezmaksas AI konsultācija | automatizacijas.lv" />
        <meta property="og:description" content="Pastāstiet, kurš darbs birojā atkārtojas. Atbildam 24 stundu laikā ar priekšlikumu, ko var automatizēt un ko tas maksā." />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bezmaksas AI konsultācija" />
        <meta name="twitter:description" content="Pastāstiet, kurš darbs birojā atkārtojas. Atbildam 24 stundu laikā ar priekšlikumu, ko var automatizēt un ko tas maksā." />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Kontakti", "item": "https://automatizacijas.lv/contact" }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: 'Kontakti' }]} />

        <PageHero title={t("contact.title")} lede={t("contact.subtitle")}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            Sāciet sarunu WhatsApp
          </a>
        </PageHero>

        <section className="border-t border-border">
          <div className="wrap py-12 lg:py-20 grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <h2 className="display-2 m-0">{t("contact.info.title")}</h2>
              <dl className="m-0 mt-8 border-t-2 border-foreground">
                <div className={rowClass}>
                  <dt className="text-muted-foreground">{t("contact.info.phone")}</dt>
                  <dd className="m-0">
                    <a href="tel:+37120015830" className="link text-xl font-medium">
                      +371 20 015 830
                    </a>
                  </dd>
                </div>
                <div className={rowClass}>
                  <dt className="text-muted-foreground">{t("contact.info.email")}</dt>
                  <dd className="m-0">
                    <a href="mailto:info@automatizacijas.lv" className="link text-xl font-medium break-words">
                      info@automatizacijas.lv
                    </a>
                  </dd>
                </div>
                <div className={rowClass}>
                  <dt className="text-muted-foreground">WhatsApp</dt>
                  <dd className="m-0">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="link font-medium">
                      Sāciet sarunu WhatsApp
                    </a>
                  </dd>
                </div>
                <div className={rowClass}>
                  <dt className="text-muted-foreground">{t("contact.info.address")}</dt>
                  <dd className="m-0">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Gustava+Zemgala+gatve+67,+Riga,+Latvia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Gustava Zemgala gatve 67
                      <br />
                      Rīga, LV-1039
                      <br />
                      Latvija
                    </a>
                  </dd>
                </div>
                <div className={rowClass}>
                  <dt className="text-muted-foreground">{t("contact.info.hours")}</dt>
                  <dd className="m-0">
                    {t("contact.info.hours.weekdays")}
                    <br />
                    {t("contact.info.hours.weekend")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7 sheet p-6 sm:p-10">
              {isSubmitted ? (
                <div role="status" className="py-6">
                  <h2 className="display-3 m-0">
                    <span className="mark">{t("contact.form.success.title")}</span>
                  </h2>
                  <p className="mt-4 mb-0 text-lg">{t("contact.form.success.message")}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      clearPricingData();
                    }}
                    className="btn btn-line mt-8"
                  >
                    {t("contact.form.send_another")}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="display-3 m-0">{t("contact.form.title")}</h2>

                  {/* Data carried over from the pricing calculator */}
                  {pricingData && (
                    <div className="mt-6">
                      <h3 className="m-0 text-base font-medium">Projekta informācija no kalkulatora</h3>
                      <ul className="list-none p-0 m-0 mt-3 border-t-2 border-foreground text-[0.9375rem]">
                        <li className="py-2 border-b border-border">
                          <span className="font-medium">Projekta veids:</span> {pricingData.serviceType.name}
                        </li>
                        <li className="py-2 border-b border-border">
                          <span className="font-medium">Sarežģītība:</span> {pricingData.complexity}/5
                        </li>
                        <li className="py-2 border-b border-border">
                          <span className="font-medium">Laika ietvars:</span> {pricingData.timeline} nedēļas
                        </li>
                        {pricingData.integrations.length > 0 && (
                          <li className="py-2 border-b border-border">
                            <span className="font-medium">Integrācijas:</span> {pricingData.integrations.join(", ")}
                          </li>
                        )}
                        {pricingData.customFeatures.length > 0 && (
                          <li className="py-2 border-b border-border">
                            <span className="font-medium">Papildu funkcijas:</span> {pricingData.customFeatures.join(", ")}
                          </li>
                        )}
                      </ul>
                      <button
                        type="button"
                        onClick={clearPricingData}
                        className="link mt-3 p-0 bg-transparent border-0 cursor-pointer text-[0.9375rem]"
                      >
                        Noņemt projekta informāciju
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="field-label">
                        {t("contact.form.name")} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register("name")}
                        placeholder={t("contact.form.name.placeholder")}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="field"
                      />
                      {errors.name && (
                        <p id="name-error" className={errorClass}>
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="field-label">
                        {t("contact.form.email")} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        placeholder={t("contact.form.email.placeholder")}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="field"
                      />
                      {errors.email && (
                        <p id="email-error" className={errorClass}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="field-label">
                        {t("contact.form.company")}
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        {...register("company")}
                        placeholder={t("contact.form.company.placeholder")}
                        className="field"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="field-label">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        placeholder={t("contact.form.phone.placeholder")}
                        className="field"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="service" className="field-label">
                        {t("contact.form.service")} *
                      </label>
                      <select
                        id="service"
                        defaultValue=""
                        {...register("service")}
                        aria-invalid={errors.service ? true : undefined}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        className="field"
                      >
                        <option value="">{t("contact.form.service.placeholder")}</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className={errorClass}>
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="field-label">
                        Budžets
                      </label>
                      <select id="budget" defaultValue="" {...register("budget")} className="field">
                        <option value="">Izvēlieties budžetu</option>
                        <option value="under-1000">Līdz 1000€</option>
                        <option value="1000-5000">1000€ - 5000€</option>
                        <option value="5000-10000">5000€ - 10000€</option>
                        <option value="10000-25000">10000€ - 25000€</option>
                        <option value="25000+">Vairāk par 25000€</option>
                        <option value="discuss">Vēlos apspriest</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="field-label">
                        Projekta termiņš
                      </label>
                      <select id="timeline" defaultValue="" {...register("timeline")} className="field">
                        <option value="">Izvēlieties termiņu</option>
                        <option value="asap">Cik ātri vien iespējams</option>
                        <option value="1-2-months">1-2 mēneši</option>
                        <option value="3-6-months">3-6 mēneši</option>
                        <option value="6-12-months">6-12 mēneši</option>
                        <option value="12+months">Vairāk par 12 mēnešiem</option>
                        <option value="flexible">Elastīgs termiņš</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="field-label">
                        {t("contact.form.message")} *
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        placeholder={t("contact.form.message.placeholder")}
                        rows={5}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={errors.message ? "message-error message-count" : "message-count"}
                        className="field block resize-y"
                      />
                      <p id="message-count" className="mt-1.5 mb-0 text-[0.9375rem] text-muted-foreground">
                        {messageValue?.length || 0}/1000
                      </p>
                      {errors.message && (
                        <p id="message-error" className={errorClass}>
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="gdprConsent"
                          {...register("gdprConsent")}
                          aria-invalid={errors.gdprConsent ? true : undefined}
                          aria-describedby={errors.gdprConsent ? "gdprConsent-error" : undefined}
                          className="mt-1 h-5 w-5 shrink-0 accent-primary"
                        />
                        <label htmlFor="gdprConsent" className="text-[0.9375rem] text-muted-foreground">
                          Es piekrītu, ka mana informācija tiks izmantota, lai sazinātos ar mani par šo pieprasījumu.{' '}
                          <Link to="/privacy" className="link">
                            Lasīt vairāk par privātuma politiku
                          </Link>
                        </label>
                      </div>
                      {errors.gdprConsent && (
                        <p id="gdprConsent-error" className={errorClass}>
                          {errors.gdprConsent.message}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-solid w-full sm:w-auto disabled:opacity-60"
                      >
                        {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </PageShell>
    </PageTransition>
  );
};

export default Contact;
