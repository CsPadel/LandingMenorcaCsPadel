import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import { BRAND_ROUTES } from '../lib/site';

/**
 * Footer.
 *
 * Previously a single row of legal links, which meant the page ended in a dead
 * end: nothing pointed back to the rest of the brand. It now carries the same
 * destination and company columns as the main site's footer, so the retreat
 * page sits inside Courtside rather than beside it.
 *
 * The legal row is unchanged and stays where visitors expect it.
 */
export default function FooterIsland() {
  const { t } = useTranslation();

  const linkClass =
    'text-brand-light/45 hover:text-brand-gold text-sm font-light tracking-wide transition-colors duration-200';
  const headingClass =
    'text-[9px] uppercase tracking-[0.38em] text-brand-gold font-semibold mb-5';

  return (
    <footer className="bg-brand-dark border-t-2 border-brand-gold/60 px-8 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href={BRAND_ROUTES.home} className="inline-block mb-5">
              <img
                src="/logogold.webp"
                alt="CourtSide Padel"
                className="h-8 object-contain"
                width={160}
                height={32}
                loading="lazy"
              />
            </a>
            <a
              href={BRAND_ROUTES.home}
              className="flex items-center gap-2 text-brand-light/45 hover:text-brand-gold text-sm transition-colors duration-200"
            >
              <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {t('brandBar.allRetreats')}
            </a>
          </div>

          {/* Destinations */}
          <div>
            <p className={headingClass}>{t('brandBar.destinations')}</p>
            <ul className="space-y-3.5">
              <li><a href="/" className="text-brand-gold text-sm font-light tracking-wide">{t('brandBar.menorca')}</a></li>
              <li><a href={BRAND_ROUTES.eastSussex} className={linkClass}>{t('brandBar.eastSussex')}</a></li>
              <li><a href={BRAND_ROUTES.bali} className={linkClass}>{t('brandBar.bali')}</a></li>
              <li><a href={BRAND_ROUTES.dubai} className={linkClass}>{t('brandBar.dubai')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className={headingClass}>{t('brandBar.label')}</p>
            <ul className="space-y-3.5">
              <li><a href={BRAND_ROUTES.ourStory} className={linkClass}>{t('brandBar.ourStory')}</a></li>
              <li><a href={BRAND_ROUTES.experience} className={linkClass}>{t('brandBar.experience')}</a></li>
              <li><a href={BRAND_ROUTES.executiveRetreat} className={linkClass}>{t('brandBar.corporate')}</a></li>
              <li><a href={BRAND_ROUTES.upcomingRetreats} className={linkClass}>{t('brandBar.upcomingRetreats')}</a></li>
            </ul>
          </div>

          {/* This retreat */}
          <div>
            <p className={headingClass}>{t('brandBar.menorca')}</p>
            <ul className="space-y-3.5">
              <li><a href="/#includes" className={linkClass}>{t('navbar.includes')}</a></li>
              <li><a href="/#itinerary" className={linkClass}>{t('navbar.itinerary')}</a></li>
              <li><a href="/#rooms" className={linkClass}>{t('navbar.book')}</a></li>
              <li><a href="/#faq" className={linkClass}>{t('navbar.faq')}</a></li>
            </ul>
          </div>
        </div>

        {/* Legal row — unchanged */}
        <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
          <p className="text-brand-light/40 text-xs uppercase tracking-widest">{t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-6 text-brand-light/40 text-xs uppercase tracking-widest">
            <a href="/legal/privacy-policy" className="hover:text-brand-gold transition-colors">{t('footer.privacy')}</a>
            <a href="/legal/cookie-policy" className="hover:text-brand-gold transition-colors">{t('footer.cookies')}</a>
            <a href="/legal/terms-and-conditions" className="hover:text-brand-gold transition-colors">{t('footer.terms')}</a>
            <a href="/legal/legal-notice" className="hover:text-brand-gold transition-colors">{t('footer.legal')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
