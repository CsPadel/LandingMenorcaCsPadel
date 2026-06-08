import React, { useEffect, useState } from 'react';
import { ArrowRight } from './icons';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

// TODO CRÍTICO: Comprimir vid2.mp4 (actualmente 4.8 MB) antes del lanzamiento.
// Comando: ffmpeg -i public/vid2.mp4 -vcodec libx264 -crf 28 -vf scale=1280:-2 -movflags +faststart -an public/vid2-opt.mp4
// Objetivo: < 600 KB. Sustituir bgVideoSrc="/vid2.mp4" → "/vid2-opt.mp4" en index.astro.

interface RetreatLandingHeroProps {
  readonly bgVideoSrc?: string;
  readonly bgImageSrc?: string;
}

function Background({ bgVideoSrc, bgImageSrc }: Readonly<RetreatLandingHeroProps>) {
  // null = SSR/unknown; false = mobile; true = desktop
  // Only mount <video> after JS confirms desktop — mobile never downloads the file.
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDesktop(globalThis.matchMedia('(min-width: 768px)').matches);
  }, []);

  if (bgVideoSrc) {
    return (
      <>
        {!isDesktop && (
          <picture>
            <source media="(min-width: 768px)" srcSet="/imagenes/EM-2-desktop.webp" type="image/webp" />
            <img
              src="/imagenes/EM-2-mobile.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-105"
              loading="eager"
              fetchPriority="high"
              width={630}
              height={945}
            />
          </picture>
        )}
        {isDesktop && (
          <video
            src={bgVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/imagenes/EM-2-desktop.webp"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-100"
          />
        )}
      </>
    );
  }

  if (bgImageSrc) {
    return (
      <img
        src={bgImageSrc}
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-100"
        alt="Menorca"
        width={1920}
        height={1080}
      />
    );
  }

  return <div className="absolute inset-0 w-full h-full bg-brand-dark-2" />;
}

export default function RetreatLandingHero({ bgVideoSrc, bgImageSrc }: Readonly<RetreatLandingHeroProps>) {
  const { t } = useTranslation();

  return (
    <section className="relative w-screen h-screen overflow-hidden flex items-end pb-32 px-8 md:px-16">
      <div className="absolute inset-0 w-full h-full z-0 bg-brand-dark">
        <Background bgVideoSrc={bgVideoSrc} bgImageSrc={bgImageSrc} />
        <div className="absolute inset-0 bg-brand-dark/50 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-3xl animate-hero-in">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-gold to-white">
            {t('menorcaPage.heroTitle')}
          </h1>
          <p className="mt-8 text-xl md:text-3xl font-light tracking-wide text-brand-light/90 max-w-2xl">
            {t('menorcaPage.heroSubtitle')}
          </p>
          <p className="mt-4 text-sm md:text-base font-semibold uppercase tracking-widest text-brand-gold">
            {t('menorcaPage.heroMeta')}
          </p>
        </div>

        <div className="animate-hero-in-delay">
          <button
            onClick={() => {
              document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-luxury group"
          >
            {t('menorcaPage.bookBtn')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
