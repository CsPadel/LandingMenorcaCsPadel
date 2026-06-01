import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  hideLangToggle?: boolean;
}

export default function Navbar({ hideLangToggle = false }: Readonly<NavbarProps>) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#includes', label: t('navbar.includes') },
    { href: '#itinerary', label: t('navbar.itinerary') },
    { href: '#rooms',    label: t('navbar.book') },
    { href: '#faq',     label: t('navbar.faq') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-brand-dark shadow-lg shadow-black/30'
          : 'bg-transparent backdrop-blur-sm'
      }`}
      style={{
        borderBottom: isScrolled
          ? '1px solid rgba(217, 173, 98, 0.25)'
          : '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-24">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/logogold.webp"
            alt="CourtSide Padel"
            className="h-9 md:h-12 object-contain"
            width={120}
            height={48}
            fetchPriority="high"
            decoding="async"
          />
        </a>

        {/* Desktop: nav links + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link text-sm tracking-widest uppercase font-medium text-brand-light/70 hover:text-brand-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          {!hideLangToggle && <LanguageToggle />}
        </div>

        {/* Mobile: lang toggle in header */}
        {!hideLangToggle && (
          <div className="md:hidden">
            <LanguageToggle />
          </div>
        )}
      </div>

      {/* Mobile: nav links row */}
      <div className="md:hidden px-4 pb-2">
        <div
          className={`flex items-center justify-around border-t pt-1 ${
            isScrolled ? 'border-brand-gold/20' : 'border-white/5'
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[10px] tracking-[0.12em] uppercase font-medium text-brand-light/70 hover:text-brand-gold transition-colors py-2 px-1"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
