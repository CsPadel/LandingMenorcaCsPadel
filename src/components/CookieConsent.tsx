import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const STORAGE_KEY = 'cs_cookie_consent';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-brand-dark border-t border-brand-gold/25 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <p className="text-brand-light/70 text-sm flex-1 leading-relaxed">
        {t('cookieConsent.message')}{' '}
        <a
          href="/legal/cookie-policy"
          className="text-brand-gold underline underline-offset-2 hover:text-brand-gold/70 transition-colors"
        >
          {t('cookieConsent.learnMore')}
        </a>
      </p>
      <button
        onClick={accept}
        className="shrink-0 px-6 py-2 border border-brand-gold text-brand-gold text-sm font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200"
      >
        {t('cookieConsent.accept')}
      </button>
    </div>
  );
}
