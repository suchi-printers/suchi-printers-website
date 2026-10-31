"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sp_lang") as Language;
      if (saved === "en" || saved === "hi") {
        setLangState(saved);
      }
    } catch (e) {
      // Ignore localStorage error in private mode
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("sp_lang", newLang);
    } catch (e) {
      // Ignore
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "hi" : "en";
    setLang(next);
  };

  const t = (en: string, hi: string) => {
    return lang === "hi" ? hi || en : en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

