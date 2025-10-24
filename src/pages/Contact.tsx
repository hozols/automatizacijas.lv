import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const contactFormSchema = z.object({
  name: z.string().min(2, "Vārds jābūt vismaz 2 rakstzīmes garš"),
  email: z.string().email("Lūdzu ievadiet derīgu e-pasta adresi"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Lūdzu izvēlieties pakalpojumu"),
  message: z.string().min(10, "Ziņojumam jābūt vismaz 10 rakstzīmes garšam"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company || "Not provided");
      formData.append("phone", data.phone || "Not provided");
      formData.append("service", data.service);
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/mqalbdra", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        reset();

        toast({
          title: t("contact.form.success.title"),
          description: t("contact.form.success.message"),
          variant: "default",
        });
      } else {
        throw new Error("Form submission failed");
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

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
              <div className="absolute inset-0 cosmic-grid opacity-10"></div>

              {/* Floating Orbs */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute top-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 left-1/3 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Geometric Shapes */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-blue-500/20 rounded-full animate-bounce-slow"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {t("contact.title")}
                </h1>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* Floating Action Button */}
              <div
                className="animate-fade-in-up animate-bounce-slow"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary">
                  <Send className="h-4 w-4" />
                  <span className="text-sm font-medium">Sāciet sarunu</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="w-full py-20 px-6 md:px-12 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-transparent to-primary/5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
                {/* Contact Form */}
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Card className="p-8 border border-border/50 bg-card/60 backdrop-blur-xl shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="p-0 mb-8 relative z-10">
                      <CardTitle className="text-2xl font-medium tracking-tighter text-foreground flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Send className="h-5 w-5 text-primary" />
                        </div>
                        {t("contact.form.title")}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 flex-1 relative z-10">
                      {isSubmitted ? (
                        <div className="text-center space-y-6 py-8">
                          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                          <div className="space-y-2">
                            <h3 className="text-xl font-medium text-foreground">
                              {t("contact.form.success.title")}
                            </h3>
                            <p className="text-muted-foreground">
                              {t("contact.form.success.message")}
                            </p>
                          </div>
                          <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                          >
                            {t("contact.form.send_another")}
                          </Button>
                        </div>
                      ) : (
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">
                                {t("contact.form.name")} *
                              </Label>
                              <Input
                                id="name"
                                {...register("name")}
                                placeholder={t("contact.form.name.placeholder")}
                                className={
                                  errors.name ? "border-destructive" : ""
                                }
                              />
                              {errors.name && (
                                <p className="text-sm text-destructive flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.name.message}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email">
                                {t("contact.form.email")} *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder={t(
                                  "contact.form.email.placeholder"
                                )}
                                className={
                                  errors.email ? "border-destructive" : ""
                                }
                              />
                              {errors.email && (
                                <p className="text-sm text-destructive flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.email.message}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="company">
                                {t("contact.form.company")}
                              </Label>
                              <Input
                                id="company"
                                {...register("company")}
                                placeholder={t(
                                  "contact.form.company.placeholder"
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone">
                                {t("contact.form.phone")}
                              </Label>
                              <Input
                                id="phone"
                                {...register("phone")}
                                placeholder={t(
                                  "contact.form.phone.placeholder"
                                )}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="service">
                              {t("contact.form.service")} *
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("service", value)
                              }
                              value={selectedService}
                            >
                              <SelectTrigger
                                className={
                                  errors.service ? "border-destructive" : ""
                                }
                              >
                                <SelectValue
                                  placeholder={t(
                                    "contact.form.service.placeholder"
                                  )}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem
                                    key={service.value}
                                    value={service.value}
                                  >
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.service && (
                              <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {errors.service.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">
                              {t("contact.form.message")} *
                            </Label>
                            <Textarea
                              id="message"
                              {...register("message")}
                              placeholder={t(
                                "contact.form.message.placeholder"
                              )}
                              rows={5}
                              className={
                                errors.message ? "border-destructive" : ""
                              }
                            />
                            {errors.message && (
                              <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {errors.message.message}
                              </p>
                            )}
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                {t("contact.form.sending")}
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <Send className="h-4 w-4" />
                                {t("contact.form.submit")}
                              </div>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Card className="p-8 border border-border/50 bg-card/60 backdrop-blur-xl shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="p-0 mb-8 relative z-10">
                      <CardTitle className="text-2xl font-medium tracking-tighter text-foreground flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <MapPin className="h-5 w-5 text-blue-500" />
                        </div>
                        {t("contact.info.title")}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6 flex-1 relative z-10">
                      <div className="flex items-start gap-4 group/item hover:scale-[1.02] transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {t("contact.info.address")}
                          </h3>
                          <p className="text-muted-foreground">
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=Gustava+Zemgala+gatve+67,+Riga,+Latvia"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              Gustava Zemgala gatve 67
                              <br />
                              Rīga, LV-1039
                              <br />
                              Latvija
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group/item hover:scale-[1.02] transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {t("contact.info.phone")}
                          </h3>
                          <p className="text-muted-foreground">
                            <a
                              href="tel:+37120015830"
                              className="hover:text-primary transition-colors"
                            >
                              +371 20 015 830
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group/item hover:scale-[1.02] transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {t("contact.info.email")}
                          </h3>
                          <p className="text-muted-foreground">
                            <a
                              href="mailto:info@automatizacijas.lv"
                              className="hover:text-primary transition-colors"
                            >
                              info@automatizacijas.lv
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group/item hover:scale-[1.02] transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {t("contact.info.hours")}
                          </h3>
                          <p className="text-muted-foreground">
                            {t("contact.info.hours.weekdays")}
                          </p>
                          <p className="text-muted-foreground">
                            {t("contact.info.hours.weekend")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
