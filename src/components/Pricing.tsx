
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Zap, Clock, Users, TrendingUp, MessageSquare, Bot, Code, Lightbulb, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePricing } from '@/contexts/PricingContext';

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
      icon: <Bot className="h-6 w-6" />,
      description: 'Automatizēti AI darbinieki un procesi'
    },
    'chatbots': {
      name: 'AI Čatboti',
      icon: <MessageSquare className="h-6 w-6" />,
      description: 'Inteliģenti sarunu aģenti'
    },
    'web-development': {
      name: 'Web Izstrāde',
      icon: <Code className="h-6 w-6" />,
      description: 'Mājaslapas un web aplikācijas'
    },
    'custom-solution': {
      name: 'Pielāgots Risinājums',
      icon: <Lightbulb className="h-6 w-6" />,
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

  const handleContactNavigation = () => {
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
    navigate('/contact');
  };

  return (
    <section id="pricing" className="w-full py-20 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="h-4 w-4" />
            Individuāla pieeja
          </div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Katrs projekts ir unikāls
          </h1>
          <p className="text-muted-foreground text-lg">
            Cenas ir atkarīgas no projekta apjoma un sarežģītības. Konfigurējiet savu projektu un pieteikties bezmaksas konsultācijai.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Configuration */}
          <div className="xl:col-span-2">
            <Card className="p-4 sm:p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="h-5 w-5 text-primary" />
                  Projektu Konfigurācija
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-0">
                {/* Project Type Selection */}
                <div className="space-y-3">
                  <Label>Projekta veids</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(serviceTypes).map(([key, service]) => (
                      <div
                        key={key}
                        className={`p-3 sm:p-4 border rounded-lg cursor-pointer transition-all ${
                          projectType === key
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30'
                        }`}
                        onClick={() => setProjectType(key)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-primary flex-shrink-0">{service.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm sm:text-base truncate">{service.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{service.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complexity Slider */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">Projekta sarežģītība: {complexity[0]}/5</Label>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexity}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Vienkāršs</span>
                    <span>Sarežģīts</span>
                  </div>
                </div>

                {/* Timeline Slider */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-sm sm:text-base">Laika ietvars: {timeline[0]} nedēļas</Label>
                  <Slider
                    value={timeline}
                    onValueChange={setTimeline}
                    max={8}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 nedēļa</span>
                    <span>8 nedēļas</span>
                  </div>
                </div>

                {/* Integrations */}
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base">Integrācijas</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableIntegrations.map((name) => (
                      <div key={name} className="flex items-center space-x-2">
                        <Checkbox
                          id={name}
                          checked={integrations.includes(name)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setIntegrations([...integrations, name]);
                            } else {
                              setIntegrations(integrations.filter(i => i !== name));
                            }
                          }}
                        />
                        <Label htmlFor={name} className="text-xs sm:text-sm leading-tight">
                          {name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Features */}
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base">Papildu funkcijas</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableFeatures.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={customFeatures.includes(feature)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setCustomFeatures([...customFeatures, feature]);
                            } else {
                              setCustomFeatures(customFeatures.filter(f => f !== feature));
                            }
                          }}
                        />
                        <Label htmlFor={feature} className="text-xs sm:text-sm leading-tight">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary & CTA */}
          <div className="xl:col-span-1">
            <Card className="p-4 sm:p-6 h-fit xl:sticky xl:top-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Phone className="h-5 w-5 text-primary" />
                  Jūsu projekts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Pakalpojums:</span>
                    <span className="font-medium">{serviceTypes[projectType as keyof typeof serviceTypes].name}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Sarežģītība:</span>
                    <span className="font-medium">{complexity[0]}/5</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Laika ietvars:</span>
                    <span className="font-medium">{timeline[0]} nedēļas</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Integrācijas:</span>
                    <span className="font-medium">{integrations.length}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Papildu funkcijas:</span>
                    <span className="font-medium">{customFeatures.length}</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <p className="text-sm text-muted-foreground text-center">
                    Saņemiet individuālu piedāvājumu, kas pielāgots tieši jūsu vajadzībām.
                  </p>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleContactNavigation}
                  >
                    <span className="mr-2">Pieteikties bezmaksas konsultācijai</span>
                    <Phone className="h-4 w-4" />
                  </Button>
                  <div className="p-2 bg-primary/5 border border-primary/20 rounded text-xs text-primary text-center">
                    Projekta informācija tiks automātiski iekļauta kontaktformā
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why us */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-medium tracking-tighter text-foreground">
            Kāpēc izvēlēties mūs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Ātri un efektīvi</h4>
              <p className="text-sm text-muted-foreground">Projekti tiek izpildīti laikā un budžetā</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Pieredzējusi komanda</h4>
              <p className="text-sm text-muted-foreground">5+ gadu pieredze AI un web izstrādē</p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Rezultātu orientēts</h4>
              <p className="text-sm text-muted-foreground">Fokusējamies uz biznesa vērtību</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
