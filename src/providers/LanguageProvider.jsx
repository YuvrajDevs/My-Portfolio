"use client";

import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang");
      if (saved === "de" || saved === "en") setLanguage(saved);
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "en" ? "de" : "en";
      try { window.localStorage.setItem("lang", next); } catch {}
      return next;
    });
  }, []);

  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}


