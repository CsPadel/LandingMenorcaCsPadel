import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

export default function LegalLanguageNotice() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Only show when the user's active language is not English
  if (!mounted || i18n.language?.startsWith('en')) return null;

  return (
    <div className="mb-8 flex items-start gap-3 rounded border border-brand-gold/40 bg-brand-gold/5 px-5 py-4 text-sm text-brand-dark/70">
      <span className="mt-0.5 shrink-0 text-brand-gold">ⓘ</span>
      <p>{t('legalNotice.notice')}</p>
    </div>
  );
}
