import React, { useState, useEffect } from 'react';
import { Menu, X } from './icons';
import '../i18n/config';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-24">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 z-50">
            <img
              src="/logogold.webp"
              alt="CourtSide Padel"
              className="h-10 md:h-12 object-contain"
              width={120}
              height={48}
              fetchPriority="high"
              decoding="async"
            />
          </a>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-8 z-50">
            <nav className="flex items-center gap-6">
              <a href="#includes" className="nav-link text-sm tracking-widest uppercase font-medium text-brand-light/70 hover:text-brand-gold transition-colors">Includes</a>
              <a href="#itinerary" className="nav-link text-sm tracking-widest uppercase font-medium text-brand-light/70 hover:text-brand-gold transition-colors">Itinerary</a>
              <a href="#rooms" className="nav-link text-sm tracking-widest uppercase font-medium text-brand-light/70 hover:text-brand-gold transition-colors">Book</a>
            </nav>
            <LanguageToggle />
          </div>

          {/* Mobile Hamburger toggle */}
          <button
            className="md:hidden z-50 text-brand-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center pt-24 pb-12 px-6">
          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            <a href="#includes" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light text-white hover:text-brand-gold transition-colors">Includes</a>
            <a href="#itinerary" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light text-white hover:text-brand-gold transition-colors">Itinerary</a>
            <a href="#rooms" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light text-white hover:text-brand-gold transition-colors">Book</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light text-white hover:text-brand-gold transition-colors">FAQ</a>
            <div className="w-full h-px bg-brand-gold/20 my-4" />
            <div className="scale-125 mt-4">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
