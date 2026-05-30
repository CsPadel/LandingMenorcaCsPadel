import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

// ── JotForm IDs ───────────────────────────────────────────────────────────────
// Option A (recommended): create a Spanish version of the form in JotForm,
//   paste the new form ID below as JOTFORM_ID_ES.
// Option B: use JotForm's built-in multilingual feature and keep both IDs equal
//   — JotForm will serve the correct language via ?lang= automatically.
const JOTFORM_ID_EN = '261356602607051';
const JOTFORM_ID_ES = '261356602607051'; // ← replace with the Spanish form ID
type FormLang = 'en' | 'es';

function resolveFormLang(i18nLang: string | undefined): FormLang {
  if (i18nLang?.startsWith('es')) return 'es';
  // TODO: i18n FR fallback — JotForm has no French form; FR visitors are served EN. // NOSONAR
  return 'en';
}

export default function BookingDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang    = resolveFormLang(i18n.language);
  const formId  = lang === 'es' ? JOTFORM_ID_ES : JOTFORM_ID_EN;
  const formSrc = `https://form.jotform.com/${formId}${lang === 'es' && JOTFORM_ID_ES === JOTFORM_ID_EN ? '?lang=es' : ''}`;

  useEffect(() => {
    const open = () => setIsOpen(true);
    globalThis.addEventListener('open-booking-drawer', open);
    return () => globalThis.removeEventListener('open-booking-drawer', open);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-[520px] bg-[#071426] z-50 flex flex-col overflow-hidden border-l border-white/5 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-9 pb-5 flex-shrink-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-semibold mb-2">
                  Limited places · 2026
                </p>
                <h2 className="text-[28px] font-light text-brand-light tracking-wide leading-tight">
                  Secure Your Place
                </h2>
              </div>
              <button
                onClick={close}
                className="mt-1 text-brand-light/25 hover:text-brand-light/60 transition-colors p-2 -mr-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-8 h-px bg-brand-gold mx-8 mb-6 flex-shrink-0" />

            {/* Context strip */}
            <div className="mx-8 mb-6 border border-white/10 divide-y divide-white/8 flex-shrink-0">
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">Destination</span>
                <span className="text-sm text-brand-light font-medium">Menorca, Spain</span>
              </div>
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">Dates</span>
                <span className="text-sm text-brand-light font-medium">30 Sep – 4 Oct 2026</span>
              </div>
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">From</span>
                <span className="text-sm text-brand-light font-medium">£1,750 per person</span>
              </div>
            </div>

            {/* JotForm iframe */}
            <div className="mx-8 flex-1 bg-white overflow-hidden mb-6">
              <iframe
                key={formSrc}
                title={lang === 'es' ? 'Formulario de reserva' : 'Booking enquiry'}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src={formSrc}
                style={{ width: '100%', height: '100%', minHeight: '480px', border: 'none', display: 'block' }}
              />
            </div>

            {/* Footer */}
            <p className="text-brand-light/20 text-[11px] text-center px-8 pb-6 flex-shrink-0">
              No commitment required. Handled per our{' '}
              <a href="/legal/privacy-policy" className="underline hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
