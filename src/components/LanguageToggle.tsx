import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const LANGS = ['es', 'en', 'fr'] as const;
type Lang = typeof LANGS[number];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = (i18n.language || 'en') as Lang;

  if (!mounted) return null;

  return (
    <div className="flex items-center bg-brand-dark/50 backdrop-blur-md border border-white/10 rounded-full px-1 py-1">
      {LANGS.map((lang) => (
        <button
          key={lang}
          onClick={() => currentLang !== lang && i18n.changeLanguage(lang)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest transition-colors ${
            currentLang === lang
              ? 'bg-brand-gold text-brand-dark'
              : 'text-brand-light/60 hover:text-brand-light'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
