import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const WHATSAPP_NUMBER = '447786694723';

function fireWhatsAppConversion() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18206970630/Y0sOCK_27rccEIam4elD',
      value: 1.0,
      currency: 'USD',
    });
  }
}

export default function BookNowSection() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t('menorcaPage.rooms.talkToConciergeMessage'),
  )}`;

  return (
    <section
      id="book"
      aria-label="Book your CourtSide Menorca padel retreat"
      className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden"
    >
      <img
        src="/imagenes/IMG_2914.webp"
        alt="Book your luxury Menorca padel retreat with CourtSide — limited places 2026"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        width={1200}
        height={700}
      />
      <div className="absolute inset-0 bg-brand-dark/75 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-brand-gold mb-4 font-semibold">
          {t('bookNow.eyebrow')}
        </p>
        <h2 className="text-5xl md:text-7xl font-light text-brand-light mb-6 tracking-wide">
          {t('bookNow.title')}
        </h2>
        <p className="text-brand-light/70 text-xl mb-12 max-w-lg mx-auto">
          {t('bookNow.subtitle')}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-0 mb-10 border border-white/20 max-w-2xl mx-auto">
          <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r border-white/20 text-left">
            <p className="text-xs uppercase tracking-widest text-brand-light/60 mb-1">
              {t('bookNow.labelDestination')}
            </p>
            <p className="text-brand-light font-semibold text-lg">{t('bookNow.valueDestination')}</p>
          </div>
          <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r border-white/20 text-left">
            <p className="text-xs uppercase tracking-widest text-brand-light/60 mb-1">
              {t('bookNow.labelDates')}
            </p>
            <p className="text-brand-light font-semibold text-lg">30 Sep – 4 Oct 2026</p>
          </div>
          <div className="flex-1 px-6 py-5 text-left">
            <p className="text-xs uppercase tracking-widest text-brand-light/60 mb-1">
              {t('bookNow.labelAccommodation')}
            </p>
            <p className="text-brand-light font-semibold text-lg">{t('bookNow.valueAccommodation')}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={fireWhatsAppConversion}
            aria-label={t('bookNow.talkToConcierge')}
            className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-brand-gold text-brand-dark font-semibold uppercase tracking-widest text-sm hover:bg-brand-light transition-colors duration-150"
          >
            {t('bookNow.talkToConcierge')}
          </a>
          <button
            type="button"
            onClick={() => globalThis.dispatchEvent(new Event('open-booking-drawer'))}
            className="inline-flex items-center justify-center w-full py-3 rounded-2xl border border-white/15 text-brand-light/70 text-sm font-medium tracking-wide hover:border-white/30 hover:text-brand-light transition-colors duration-150 cursor-pointer"
            aria-label={t('bookNow.cta')}
          >
            {t('bookNow.cta')}
          </button>
        </div>

        <p className="text-brand-light/55 text-sm mt-6">
          {t('bookNow.disclaimer')}
        </p>
      </div>
    </section>
  );
}
