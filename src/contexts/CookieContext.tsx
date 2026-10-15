import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    loadAnalytics?: () => void;
  }
}
import Cookies from 'js-cookie';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  hasAcceptedCookies: boolean;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, can't be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  // Load saved preferences from cookies on mount
  useEffect(() => {
    const savedPreferences = Cookies.get('cookie-preferences');
    const acceptedStatus = Cookies.get('cookies-accepted');
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsed });
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
    
    if (acceptedStatus === 'true') {
      setHasAcceptedCookies(true);
    }
  }, []);

  // Save preferences to cookies whenever they change
  useEffect(() => {
    if (hasAcceptedCookies) {
      Cookies.set('cookie-preferences', JSON.stringify(preferences), { expires: 365 });
      // index.html defers the analytics scripts until there is consent
      if (preferences.analytics) window.loadAnalytics?.();
    }
  }, [preferences, hasAcceptedCookies]);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const acceptAllCookies = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    setHasAcceptedCookies(true);
    Cookies.set('cookies-accepted', 'true', { expires: 365 });
    closeModal();
  };

  const rejectAllCookies = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setHasAcceptedCookies(true);
    Cookies.set('cookies-accepted', 'true', { expires: 365 });
    closeModal();
  };

  const value: CookieContextType = {
    preferences,
    updatePreferences,
    isModalOpen,
    openModal,
    closeModal,
    hasAcceptedCookies,
    acceptAllCookies,
    rejectAllCookies,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
}; 