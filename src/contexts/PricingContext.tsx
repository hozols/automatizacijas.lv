import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PricingData {
  projectType: string;
  complexity: number;
  timeline: number;
  integrations: string[];
  customFeatures: string[];
  estimatedCost: number;
  serviceType: {
    name: string;
    basePrice: number;
    description: string;
  };
}

interface PricingContextType {
  pricingData: PricingData | null;
  setPricingData: (data: PricingData | null) => void;
  clearPricingData: () => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({ children }) => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);

  const clearPricingData = () => {
    setPricingData(null);
  };

  return (
    <PricingContext.Provider value={{ pricingData, setPricingData, clearPricingData }}>
      {children}
    </PricingContext.Provider>
  );
}; 