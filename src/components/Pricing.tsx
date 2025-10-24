
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, Zap, Clock, Users, TrendingUp, MessageSquare, Bot, FileText, BarChart3, Lightbulb, Code, Globe, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePricing } from '@/contexts/PricingContext';

const Pricing = () => {
  const navigate = useNavigate();
  const { setPricingData } = usePricing();
  
  // Project calculator state
  const [projectType, setProjectType] = useState('ai-automation');
  const [complexity, setComplexity] = useState([3]);
  const [timeline, setTimeline] = useState([4]);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);

  
  // Service types with base pricing - Latvian Market Rate 2024 (rounded to hundreds)
  const serviceTypes = {
    'ai-automation': {
      name: 'AI Automatizācija',
      icon: <Bot className="h-6 w-6" />,
      basePrice: 4200,
      description: 'Automatizēti AI darbinieki un procesi'
    },
    'chatbots': {
      name: 'AI Čatboti',
      icon: <MessageSquare className="h-6 w-6" />,
      basePrice: 2800,
      description: 'Inteliģenti sarunu aģenti'
    },
    'web-development': {
      name: 'Web Izstrāde',
      icon: <Code className="h-6 w-6" />,
      basePrice: 3800,
      description: 'Mājaslapas un web aplikācijas'
    },
    'custom-solution': {
      name: 'Pielāgots Risinājums',
      icon: <Lightbulb className="h-6 w-6" />,
      basePrice: 6500,
      description: 'Unikāli AI risinājumi'
    }
  };
  
  // Calculate project cost based on selections
  const calculateCost = () => {
    let baseCost = serviceTypes[projectType as keyof typeof serviceTypes].basePrice;
    
    // Complexity multiplier (1-5 scale) - more realistic scaling
    const complexityMultiplier = 1 + (complexity[0] - 1) * 0.3;
    
    // Timeline multiplier (1-8 weeks) - more realistic scaling
    const timelineMultiplier = 1 + (timeline[0] - 1) * 0.15;
    
    // Integrations cost - Actual subscription + service fee
    const integrationCost = integrations.reduce((total, integrationName) => {
      const integration = availableIntegrations.find(i => i.name === integrationName);
      return total + (integration ? integration.cost + integration.serviceFee : 0);
    }, 0);
    
    // Custom features cost - Latvian Market Rate 2024 (rounded to hundreds)
    const featureCost = customFeatures.length * 1000;
    
    // Calculate base cost with multipliers
    const adjustedBaseCost = Math.round(baseCost * complexityMultiplier * timelineMultiplier);
    
    // Add all costs together
    const totalCost = adjustedBaseCost + integrationCost + featureCost;
    
    // Add service fee
    const serviceFee = 200;
    
    const finalCost = totalCost + serviceFee;
    
    // Apply psychological pricing technique (e.g., 8999 instead of 9000)
    if (finalCost >= 1000) {
      const thousands = Math.floor(finalCost / 1000);
      const remainder = finalCost % 1000;
      if (remainder === 0) {
        return (thousands * 1000) - 1; // 8999 instead of 9000
      }
    }
    
    return finalCost;
  };
  
  // Available integrations with actual subscription costs + service fee (rounded to hundreds)
  const availableIntegrations = [
    { name: 'Google Workspace', cost: 100, serviceFee: 200 }, // €6/month × 12 months (rounded)
    { name: 'Slack', cost: 100, serviceFee: 200 }, // €8/month × 12 months (rounded)
    { name: 'Zapier', cost: 200, serviceFee: 200 }, // €20/month × 12 months (rounded)
    { name: 'Airtable', cost: 100, serviceFee: 200 }, // €10/month × 12 months (rounded)
    { name: 'Notion', cost: 100, serviceFee: 200 }, // €8/month × 12 months (rounded)
    { name: 'Salesforce', cost: 300, serviceFee: 200 }, // €25/month × 12 months (rounded)
    { name: 'HubSpot', cost: 400, serviceFee: 200 }, // €30/month × 12 months (rounded)
    { name: 'Shopify', cost: 300, serviceFee: 200 }, // €29/month × 12 months (rounded)
    { name: 'WordPress', cost: 100, serviceFee: 200 }, // €5/month × 12 months (rounded)
    { name: 'Custom API', cost: 0, serviceFee: 400 } // No subscription, higher service fee
  ];
  
  const availableFeatures = [
    'Daudzvalodu atbalsts', 'Reāllaika analītika', 'Mācīšanās no datiem',
    'Mērogojama arhitektūra', 'Mobilā aplikācija', 'API dokumentācija',
    'Apmācības materiāli', '24/7 atbalsts', 'Backup sistēma', 'SSL drošība'
  ];

  const estimatedCost = calculateCost();

  const handleContactNavigation = () => {
    // Save pricing data to context before navigating
    const pricingData = {
      projectType,
      complexity: complexity[0],
      timeline: timeline[0],
      integrations,
      customFeatures,
      estimatedCost,
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
            <Calculator className="h-4 w-4" />
            Projektu Kalkulators
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Cenas atkarībā no projekta
          </h2>
          <p className="text-muted-foreground text-lg">
            Aprēķiniet savas idejas izmaksas, izmantojot mūsu interaktīvo kalkulatoru
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Calculator */}
          <div className="xl:col-span-2">
            <Card className="p-4 sm:p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Calculator className="h-5 w-5 text-primary" />
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
                    {availableIntegrations.map((integration) => (
                      <div key={integration.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={integration.name}
                          checked={integrations.includes(integration.name)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setIntegrations([...integrations, integration.name]);
                            } else {
                              setIntegrations(integrations.filter(i => i !== integration.name));
                            }
                          }}
                        />
                        <Label htmlFor={integration.name} className="text-xs sm:text-sm leading-tight">
                          {integration.name}
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

          {/* Cost Estimate */}
          <div className="xl:col-span-1">
            <Card className="p-4 sm:p-6 h-fit xl:sticky xl:top-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="h-5 w-5 text-primary" />
                  Izmaksu Aprēķins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-0">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">€{estimatedCost.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">aptuvenās projekta izmaksas</div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Bāzes cena:</span>
                    <span>€{serviceTypes[projectType as keyof typeof serviceTypes].basePrice}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Sarežģītība:</span>
                    <span>+{Math.round((complexity[0] - 1) * 30)}%</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Laika ietvars:</span>
                    <span>+{Math.round((timeline[0] - 1) * 15)}%</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Integrācijas:</span>
                    <span>€{integrations.reduce((total, integrationName) => {
                      const integration = availableIntegrations.find(i => i.name === integrationName);
                      return total + (integration ? integration.cost + integration.serviceFee : 0);
                    }, 0)}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Funkcijas:</span>
                    <span>€{customFeatures.length * 1000}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Pakalpojuma maksa:</span>
                    <span>€200</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleContactNavigation}
                  >
                    <span className="mr-2">Pieteikties konsultācijai</span>
                    <Zap className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    *Cenas ir orientējošas un var mainīties atkarībā no projekta specifikas
                  </p>
                  <div className="mt-3 p-2 bg-primary/5 border border-primary/20 rounded text-xs text-primary text-center">
                    📋 Projekta informācija tiks automātiski iekļauta kontaktformā
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
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
