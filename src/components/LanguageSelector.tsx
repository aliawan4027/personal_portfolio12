"use client";

import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !event.target || !(event.target as Element).closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'ur');
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative language-selector">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-border glass-subtle px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-background/50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <span className="hidden sm:inline">{t(`language.${currentLang.code === 'en' ? 'english' : 'urdu'}`)}</span>
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="ml-1"
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-50 min-w-[140px] rounded-lg border border-border glass-subtle shadow-premium p-2"
          >
            <div className="space-y-1">
              {languages.map((lang) => {
                const isActive = language === lang.code;
                
                return (
                  <motion.button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive 
                        ? "bg-accent text-accent-foreground" 
                        : "hover:bg-muted text-foreground"
                    }`}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{t(`language.${lang.code === 'en' ? 'english' : 'urdu'}`)}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeLang"
                        className="ml-auto"
                      >
                        <Check className="h-4 w-4" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
