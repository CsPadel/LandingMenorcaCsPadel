import React, { useState } from 'react';
import { ArrowRight, Users } from './icons';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const WHATSAPP_NUMBER = '447786694723';

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const images = [
  '/imagenes/hotel-room-sea.jpg',
  '/imagenes/hotel-terrace.jpg',
  '/imagenes/hotel-pool-night.jpg',
];

export default function RoomsSelector() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t('menorcaPage.rooms.talkToConciergeMessage'),
  )}`;

  const amenities = t('menorcaPage.rooms.openRetreat.amenities', { returnObjects: true }) as string[];

  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const next = () => setActive((p) => (p + 1) % images.length);

  return (
    <section
      id="rooms"
      aria-label={t('menorcaPage.rooms.sectionTag')}
      className="bg-[#f7f5f2] py-24 md:py-32 px-4 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            {t('menorcaPage.rooms.sectionTag')}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-brand-dark tracking-wide">
            {t('menorcaPage.rooms.title')}
          </h2>
          <p className="text-brand-dark/45 mt-4 text-lg max-w-md mx-auto">
            {t('menorcaPage.rooms.subtitle')}
          </p>
        </div>

        {/* Card */}
        <div className="grid lg:grid-cols-[58%_42%] rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/15">

          {/* Image panel */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px] overflow-hidden bg-brand-dark/10">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Barceló Nura — CourtSide Menorca"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  active === i ? 'opacity-100' : 'opacity-0'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
                width={800}
                height={600}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />

            {/* Tag */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-gold text-brand-dark">
                {t('menorcaPage.rooms.openRetreat.tag')}
              </span>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  aria-label={`Photo ${i + 1}`}
                  className={`transition-all duration-200 rounded-full ${
                    active === i ? 'w-6 h-1.5 bg-brand-gold' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="flex flex-col bg-brand-dark px-8 py-10 md:px-10 md:py-12">

            {/* Name + capacity */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-2">
                {t('menorcaPage.rooms.openRetreat.name')}
              </h3>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-brand-gold/70" />
                <span className="text-xs text-white/45 uppercase tracking-widest">
                  {t('menorcaPage.rooms.openRetreat.capacity')}
                </span>
              </div>
            </div>

            {/* Price block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-6">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                {t('menorcaPage.rooms.priceLabel')}
              </p>
              <p className="text-white font-semibold text-sm leading-relaxed">
                {t('menorcaPage.rooms.openRetreat.priceSingle')}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('menorcaPage.rooms.openRetreat.priceShared')}
              </p>
            </div>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-7">
              {t('menorcaPage.rooms.openRetreat.description')}
            </p>

            {/* What's included */}
            <div className="mb-8 flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-3">
                {t('menorcaPage.rooms.whatsIncluded')}
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {Array.isArray(amenities) && amenities.map((a) => (
                  <div key={a} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-white/70 text-xs leading-snug">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('menorcaPage.rooms.talkToConcierge')}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-brand-gold text-brand-dark font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors duration-150 group"
              >
                {t('menorcaPage.rooms.talkToConcierge')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </a>
              <button
                type="button"
                onClick={() => globalThis.dispatchEvent(new Event('open-booking-drawer'))}
                aria-label={t('menorcaPage.rooms.securePlace')}
                className="flex items-center justify-center w-full py-3 rounded-2xl border border-white/15 text-white/55 text-sm font-medium tracking-wide hover:border-white/30 hover:text-white/80 transition-colors duration-150 cursor-pointer"
              >
                {t('menorcaPage.rooms.securePlace')}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
