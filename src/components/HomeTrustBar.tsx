import React from 'react';
import { Shield, MapPin, Clock, Award } from 'lucide-react';

const trustItems = [
  { icon: MapPin, label: 'Latvijā dibināts' },
  { icon: Award, label: 'Pielāgoti risinājumi' },
  { icon: Clock, label: '24/7 atbalsts' },
  { icon: Shield, label: 'GDPR atbilstošs' },
];

const HomeTrustBar = () => {
  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border/50 bg-card/30 text-center">
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTrustBar;
