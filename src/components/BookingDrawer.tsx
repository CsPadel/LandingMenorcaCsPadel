import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import BookingForm from './BookingForm';

export default function BookingDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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
                  {t('bookingDrawer.eyebrow')}
                </p>
                <h2 className="text-[28px] font-light text-brand-light tracking-wide leading-tight">
                  {t('bookingDrawer.title')}
                </h2>
              </div>
              <button
                onClick={close}
                className="mt-1 text-brand-light/25 hover:text-brand-light/60 transition-colors p-2 -mr-2"
                aria-label={t('bookingDrawer.closeAria')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-8 h-px bg-brand-gold mx-8 mb-6 flex-shrink-0" />

            {/* Context strip */}
            <div className="mx-8 mb-6 border border-white/10 divide-y divide-white/8 flex-shrink-0">
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">
                  {t('bookingDrawer.labelDestination')}
                </span>
                <span className="text-sm text-brand-light font-medium">
                  {t('bookingDrawer.valueDestination')}
                </span>
              </div>
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">
                  {t('bookingDrawer.labelDates')}
                </span>
                <span className="text-sm text-brand-light font-medium">
                  {t('bookingDrawer.valueDates')}
                </span>
              </div>
              <div className="flex justify-between items-center px-5 py-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-light/35">
                  {t('bookingDrawer.labelFrom')}
                </span>
                <span className="text-sm text-brand-light font-medium">
                  {t('bookingDrawer.valueFrom')}
                </span>
              </div>
            </div>

            {/* Booking form — min-h-0 lets flex-1 shrink so the inner content scrolls */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              <BookingForm />
            </div>

            {/* Footer */}
            <p className="text-brand-light/20 text-[11px] text-center px-8 pb-6 flex-shrink-0">
              {t('bookingDrawer.footerDisclaimer')}{' '}
              <a href="/legal/privacy-policy" className="underline hover:text-brand-gold transition-colors">
                {t('bookingDrawer.privacyLink')}
              </a>.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
