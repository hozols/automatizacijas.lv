import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const selectedService = watch('service');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_baltai';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';
      
      // Prepare email parameters
      const emailParams = {
        to_email: 'info@automatizacijas.lv',
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        phone: data.phone || 'Not provided',
        service: data.service,
        message: data.message,
        reply_to: data.email,
      };
      
      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, emailParams, publicKey);
      
      console.log('Email sent successfully:', data);
      setIsSubmitted(true);
      reset();
      
      toast({
        title: "Message Sent!",
        description: t('contact.form.success'),
        variant: "default",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: t('contact.form.error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'workers', label: t('contact.form.service.workers') },
    { value: 'chatbots', label: t('contact.form.service.chatbots') },
    { value: 'automation', label: t('contact.form.service.automation') },
    { value: 'documents', label: t('contact.form.service.documents') },
    { value: 'intelligence', label: t('contact.form.service.intelligence') },
    { value: 'custom', label: t('contact.form.service.custom') },
    { value: 'consultation', label: t('contact.form.service.consultation') },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div ref={titleRef} className={`text-center space-y-4 max-w-3xl mx-auto scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Content */}
        <div ref={contentRef} className={`scroll-fade-in ${contentVisible ? 'animate-in' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
            
            {/* Contact Form */}
            <Card className="p-8 border border-border cosmic-gradient flex flex-col hover-lift">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl font-medium tracking-tighter text-foreground">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 flex-1">
                {isSubmitted ? (
                  <div className="text-center space-y-6 py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-scale-in" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-foreground">Thank you!</h3>
                      <p className="text-muted-foreground">{t('contact.form.success')}</p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="hover-lift"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name"
                          {...register('name')}
                          placeholder={t('contact.form.name.placeholder')}
                          className={`hover-glow transition-all duration-300 ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in-left">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder={t('contact.form.email.placeholder')}
                          className={`hover-glow transition-all duration-300 ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in-left">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">{t('contact.form.company')}</Label>
                        <Input
                          id="company"
                          {...register('company')}
                          placeholder={t('contact.form.company.placeholder')}
                          className="hover-glow transition-all duration-300"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input
                          id="phone"
                          {...register('phone')}
                          placeholder={t('contact.form.phone.placeholder')}
                          className="hover-glow transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contact.form.service')} *</Label>
                      <Select onValueChange={(value) => setValue('service', value)} value={selectedService}>
                        <SelectTrigger className={`hover-glow transition-all duration-300 ${errors.service ? 'border-destructive' : ''}`}>
                          <SelectValue placeholder={t('contact.form.service.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in-left">
                          <AlertCircle className="h-3 w-3" />
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')} *</Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder={t('contact.form.message.placeholder')}
                        rows={5}
                        className={`hover-glow transition-all duration-300 ${errors.message ? 'border-destructive' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in-left">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-magnetic bg-primary text-primary-foreground hover:bg-primary/90 hover-glow"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          {t('contact.form.sending')}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          {t('contact.form.submit')}
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 border border-border cosmic-gradient flex flex-col hover-lift">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl font-medium tracking-tighter text-foreground">
                  {t('contact.info.title')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 space-y-6 flex-1">
                <div className="flex items-start gap-4 group">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.info.address')}</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Gustava+Zemgala+gatve+67,+Riga,+Latvia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-all duration-300 hover-scale"
                      >
                        Gustava Zemgala gatve 67<br />
                        Rīga, LV-1039<br />
                        Latvija
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.info.phone')}</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+37120015830" className="hover:text-primary transition-all duration-300 hover-scale">
                        +371 28 600 401
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+37120015830" className="hover:text-primary transition-all duration-300 hover-scale">
                        +371 20 015 830
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.info.email')}</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@automatizacijas.lv" className="hover:text-primary transition-all duration-300 hover-scale">
                        info@automatizacijas.lv
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.info.hours')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.hours.weekdays')}</p>
                    <p className="text-muted-foreground">{t('contact.info.hours.weekend')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;