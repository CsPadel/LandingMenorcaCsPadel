import React, { useState } from 'react';
import { ArrowRight, Users, Sparkles, ChevronLeft, ChevronRight, ChevronDown } from './icons';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

export default function RoomsSelector() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const [expandedIncluded, setExpandedIncluded] = useState(false);

  const images = ['/imagenes/154A8505.webp', '/imagenes/154A8605.webp', '/imagenes/154A8631.webp'];

  const amenities = t('menorcaPage.rooms.openRetreat.amenities', { returnObjects: true }) as string[];

  const prevImage = () => setActiveImage((p) => (p - 1 + images.length) % images.length);
  const nextImage = () => setActiveImage((p) => (p + 1) % images.length);

  return (
    <section
      id="rooms"
      aria-label={t('menorcaPage.rooms.sectionTag')}
      className="bg-[#f7f5f2] py-24 md:py-32 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-brand-dark tracking-wide">
            {t('menorcaPage.rooms.title')}
          </h2>
          <p className="text-brand-dark/45 mt-4 text-lg max-w-md mx-auto">
            {t('menorcaPage.rooms.subtitle')}
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/8">
          <div className="flex flex-col lg:flex-row">
            {/* Image panel */}
            <div className="relative w-full lg:w-[55%] aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden bg-brand-dark/10">
              {images.map((img, iIdx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Open Retreat — CourtSide Menorca`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 will-change-[opacity] ${
                    activeImage === iIdx ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={iIdx === 0 ? 'eager' : 'lazy'}
                  width={800}
                  height={600}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm bg-brand-gold text-brand-dark">
                  <Sparkles className="w-3 h-3" />
                  {t('menorcaPage.rooms.openRetreat.tag')}
                </span>
              </div>

              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10 pointer-events-none">
                <button
                  onClick={prevImage}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-150"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-150"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-0 z-10">
                {images.map((img, iIdx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(iIdx)}
                    className="w-[44px] h-[44px] flex items-center justify-center group"
                    aria-label={`Open Retreat — photo ${iIdx + 1} of ${images.length}`}
                  >
                    <span className={`block transition-all duration-150 rounded-full ${
                      activeImage === iIdx
                        ? 'w-5 h-1.5 bg-brand-gold'
                        : 'w-1.5 h-1.5 bg-white/50 group-hover:bg-white/80'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info panel */}
            <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12 w-full lg:w-[45%]">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-brand-dark leading-tight">
                      {t('menorcaPage.rooms.openRetreat.name')}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="w-3.5 h-3.5 text-brand-gold/70" />
                      <span className="text-xs text-brand-dark/50 uppercase tracking-widest">
                        {t('menorcaPage.rooms.openRetreat.capacity')}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-brand-dark/40 uppercase tracking-widest mb-1">
                      {t('menorcaPage.rooms.priceLabel')}
                    </p>
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-sm font-semibold text-brand-dark">{t('menorcaPage.rooms.openRetreat.priceSingle')}</p>
                      <p className="text-sm font-semibold text-brand-dark">{t('menorcaPage.rooms.openRetreat.priceShared')}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-brand-dark/8 mb-6" />

                <p className="text-brand-dark/60 text-base leading-relaxed mb-8">
                  {t('menorcaPage.rooms.openRetreat.description')}
                </p>

                <div className="mb-8">
                  <button
                    onClick={() => setExpandedIncluded((v) => !v)}
                    className="w-full flex items-center justify-between py-2 group"
                    aria-expanded={expandedIncluded}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-dark/60 font-semibold m-0 group-hover:text-brand-dark transition-colors">
                      {t('menorcaPage.rooms.whatsIncluded')}
                    </p>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-dark/50 transition-all duration-200 group-hover:text-brand-dark ${
                        expandedIncluded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      expandedIncluded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2 pb-2">
                        {Array.isArray(amenities) && amenities.map((a) => (
                          <span
                            key={a}
                            className="px-3 py-1.5 rounded-full bg-[#f7f5f2] text-brand-dark/70 text-xs font-medium border border-brand-dark/8"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#book"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-brand-dark text-white font-semibold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors duration-150 group"
                aria-label="Book Open Retreat at CourtSide Menorca"
              >
                {t('menorcaPage.rooms.securePlace')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
