import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import { BRAND_ROUTES } from '../lib/site';

/**
 * Slim bar above the retreat navigation, linking back to the main Courtside
 * site.
 *
 * A visitor landing here from search or an ad had no route to the rest of the
 * brand: not to the other four destinations, not to the founders' story, not
 * even to the home page. The logo pointed at this site's own root. This is the
 * way back.
 *
 * Deliberately understated and above the existing navbar rather than merged
 * into it: this page converts, and its own section navigation should stay the
 * prominent one.
 */
export default function BrandBar() {
  const { t } = useTranslation();
  const [openDestinations, setOpenDestinations] = useState(false);

  const linkClass =
    'text-brand-light/45 hover:text-brand-gold transition-colors duration-200 whitespace-nowrap';

  const destinations = [
    // Menorca is this site; link it home rather than off to the main domain.
    { href: '/', label: t('brandBar.menorca'), current: true },
    { href: BRAND_ROUTES.eastSussex, label: t('brandBar.eastSussex'), current: false },
    { href: BRAND_ROUTES.bali, label: t('brandBar.bali'), current: false },
    { href: BRAND_ROUTES.dubai, label: t('brandBar.dubai'), current: false },
  ];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-brand-dark-2 border-b border-brand-gold/15"
      aria-label={t('brandBar.label')}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-9 flex items-center justify-between gap-4 text-[11px] tracking-wide">

        {/* Back to the main site */}
        <a
          href={BRAND_ROUTES.home}
          className="flex items-center gap-2 text-brand-light/60 hover:text-brand-gold transition-colors duration-200 flex-shrink-0"
        >
          <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="hidden sm:inline">{t('brandBar.allRetreats')}</span>
          <span className="sm:hidden">Courtside</span>
        </a>

        {/* Brand navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href={BRAND_ROUTES.ourStory} className={linkClass}>{t('brandBar.ourStory')}</a>
          <a href={BRAND_ROUTES.experience} className={linkClass}>{t('brandBar.experience')}</a>

          <div
            className="relative"
            onMouseEnter={() => setOpenDestinations(true)}
            onMouseLeave={() => setOpenDestinations(false)}
          >
            <button
              type="button"
              className={`${linkClass} flex items-center gap-1 cursor-pointer`}
              aria-expanded={openDestinations}
              aria-haspopup="true"
            >
              {t('brandBar.destinations')}
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${openDestinations ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDestinations && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52">
                <div className="bg-brand-dark border border-brand-gold/20 rounded shadow-2xl shadow-black/50 flex flex-col py-1">
                  {destinations.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      className={`px-4 py-2.5 transition-colors duration-150 ${
                        d.current
                          ? 'text-brand-gold'
                          : 'text-brand-light/60 hover:text-brand-gold hover:bg-brand-gold/5'
                      }`}
                    >
                      {d.label}
                      {d.current && (
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-light/30 mt-0.5">
                          {t('brandBar.thisRetreat')}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href={BRAND_ROUTES.upcomingRetreats} className={linkClass}>{t('brandBar.upcomingRetreats')}</a>
        </nav>
      </div>
    </div>
  );
}
