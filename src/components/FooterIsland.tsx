import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

export default function FooterIsland() {
  const { t } = useTranslation();

  return (
    <footer className="py-14 bg-brand-dark border-t-2 border-brand-gold/60 text-center px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img src="/logogold.webp" alt="CourtSide Logo" className="h-6 object-contain" width={120} height={24} />
          <p className="text-brand-light/60 text-xs uppercase tracking-widest">{t('footer.rights')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-brand-light/60 text-xs uppercase tracking-widest">
          <a href="/legal/privacy-policy" className="hover:text-brand-gold transition-colors">{t('footer.privacy')}</a>
          <a href="/legal/cookie-policy" className="hover:text-brand-gold transition-colors">{t('footer.cookies')}</a>
          <a href="/legal/terms-and-conditions" className="hover:text-brand-gold transition-colors">{t('footer.terms')}</a>
          <a href="/legal/legal-notice" className="hover:text-brand-gold transition-colors">{t('footer.legal')}</a>
        </div>
      </div>
    </footer>
  );
}
