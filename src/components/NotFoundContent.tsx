import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

export default function NotFoundContent() {
  const { t } = useTranslation();

  return (
    <main
      id="main-content"
      className="w-full min-h-screen bg-brand-dark flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-6">
        {t('notFound.error')}
      </p>

      <h1
        className="text-8xl md:text-[12rem] font-light text-brand-light/10 leading-none tracking-tighter select-none"
        aria-hidden="true"
      >
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-light text-brand-light tracking-wide -mt-4 md:-mt-8 mb-6">
        {t('notFound.title')}
      </h2>

      <p className="text-brand-light/50 text-lg max-w-md mx-auto mb-12 leading-relaxed">
        {t('notFound.message')}
      </p>

      <a
        href="/"
        className="inline-flex items-center gap-3 px-10 py-4 border border-brand-gold text-brand-gold font-semibold uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300"
      >
        {t('notFound.backBtn')}
      </a>
    </main>
  );
}
