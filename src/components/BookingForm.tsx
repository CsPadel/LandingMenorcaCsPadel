import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const TSHIRT_SIZES = ['S', 'M', 'L', 'XL'];

const APPS_SCRIPT_URL = import.meta.env.PUBLIC_APPS_SCRIPT_URL ?? '';
const STRIPE_LINK_DOUBLE = import.meta.env.PUBLIC_STRIPE_LINK_DOUBLE ?? '';
const STRIPE_LINK_PRIVATE = import.meta.env.PUBLIC_STRIPE_LINK_PRIVATE ?? '';
const STRIPE_LINK_DISCOUNT = import.meta.env.PUBLIC_STRIPE_LINK_DISCOUNT ?? '';
const DISCOUNT_CODE = import.meta.env.PUBLIC_DISCOUNT_CODE ?? '';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  level: string;
  courtSide: string;
  withPartner: 'yes' | 'no' | '';
  partnerName: string;
  tshirtSize: string;
  tshirtCut: string;
};

const EMPTY_FORM: FormData = {
  fullName: '', email: '', phone: '', country: '', city: '',
  level: '', courtSide: '', withPartner: '', partnerName: '',
  tshirtSize: '', tshirtCut: '',
};

const inputClass =
  'w-full bg-white/5 border border-white/15 text-brand-light placeholder:text-brand-light/25 text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors';
const labelClass = 'text-[10px] uppercase tracking-[0.2em] text-brand-light/50 font-semibold mb-2 block';
const fieldsetLabelClass = 'text-[10px] uppercase tracking-[0.2em] text-brand-light/50 font-semibold mb-3 block';

function RadioGroup({
  name, options, value, onChange,
}: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-2 text-sm border transition-colors ${
            value === opt
              ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
              : 'border-white/15 text-brand-light/70 hover:border-white/30'
          }`}
          aria-pressed={value === opt}
        >
          {opt}
        </button>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default function BookingForm() {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [discountInput, setDiscountInput] = useState('');
  const [discountUnlocked, setDiscountUnlocked] = useState(false);
  const [discountInvalid, setDiscountInvalid] = useState(false);
  const [showDiscountField, setShowDiscountField] = useState(false);

  const levelOptions = t('bookingForm.levelOptions', { returnObjects: true }) as string[];
  const courtSideOptions = t('bookingForm.courtSideOptions', { returnObjects: true }) as string[];
  const tshirtCutOptions = t('bookingForm.tshirtCutOptions', { returnObjects: true }) as string[];

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!APPS_SCRIPT_URL) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      // Apps Script's redirect hop doesn't carry CORS headers, so the browser
      // can't read the response — mode: 'no-cors' avoids that block. The
      // request (and doPost's sheet/email side effects) still goes through;
      // we just can't confirm success from the response body anymore.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...form, language: i18n.language }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function applyDiscount() {
    if (discountInput.trim().toUpperCase() === DISCOUNT_CODE.toUpperCase() && DISCOUNT_CODE) {
      setDiscountUnlocked(true);
      setDiscountInvalid(false);
    } else {
      setDiscountInvalid(true);
      setDiscountUnlocked(false);
    }
  }

  if (status === 'success') {
    return (
      <div className="px-8 py-2">
        <h3 className="text-xl text-brand-light font-light mb-2">{t('bookingForm.successTitle')}</h3>
        <p className="text-brand-light/50 text-sm mb-8 leading-relaxed">{t('bookingForm.successSubtitle')}</p>

        <div className="space-y-3">
          <a
            href={STRIPE_LINK_DOUBLE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-white/15 px-5 py-4 hover:border-brand-gold transition-colors group"
          >
            <span>
              <span className="block text-brand-light font-medium">{t('bookingForm.paymentDoubleLabel')}</span>
              <span className="block text-brand-light/40 text-xs">{t('bookingForm.paymentDoublePrice')}</span>
            </span>
            <span className="text-brand-gold text-sm shrink-0">{t('bookingForm.payBtn')}</span>
          </a>

          <a
            href={STRIPE_LINK_PRIVATE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-white/15 px-5 py-4 hover:border-brand-gold transition-colors group"
          >
            <span>
              <span className="block text-brand-light font-medium">{t('bookingForm.paymentPrivateLabel')}</span>
              <span className="block text-brand-light/40 text-xs">{t('bookingForm.paymentPrivatePrice')}</span>
            </span>
            <span className="text-brand-gold text-sm shrink-0">{t('bookingForm.payBtn')}</span>
          </a>

          {discountUnlocked && (
            <a
              href={STRIPE_LINK_DISCOUNT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-brand-gold px-5 py-4 bg-brand-gold/5 hover:bg-brand-gold/10 transition-colors group"
            >
              <span>
                <span className="block text-brand-gold font-medium">{t('bookingForm.discountUnlockedLabel')}</span>
                <span className="block text-brand-light/40 text-xs">{t('bookingForm.discountUnlockedPrice')}</span>
              </span>
              <span className="text-brand-gold text-sm shrink-0">{t('bookingForm.payBtn')}</span>
            </a>
          )}
        </div>

        <div className="mt-6">
          {!showDiscountField ? (
            <button
              type="button"
              onClick={() => setShowDiscountField(true)}
              className="text-brand-light/40 text-xs underline hover:text-brand-light/70 transition-colors"
            >
              {t('bookingForm.discountToggle')}
            </button>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
                placeholder={t('bookingForm.discountPlaceholder') ?? ''}
                className={`${inputClass} flex-1`}
              />
              <button
                type="button"
                onClick={applyDiscount}
                className="px-4 border border-white/15 text-brand-light/70 text-sm hover:border-brand-gold hover:text-brand-gold transition-colors shrink-0"
              >
                {t('bookingForm.discountApplyBtn')}
              </button>
            </div>
          )}
          {discountInvalid && (
            <p className="text-red-400 text-xs mt-2">{t('bookingForm.discountInvalidMsg')}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 py-2 space-y-7">
      {/* Section 1 — Details */}
      <div>
        <p className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          {t('bookingForm.step1Title')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelClass}>{t('bookingForm.fullNameLabel')} *</label>
            <input
              required type="text" className={inputClass}
              placeholder={t('bookingForm.fullNamePlaceholder') ?? ''}
              value={form.fullName} onChange={(e) => set('fullName', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>{t('bookingForm.emailLabel')} *</label>
            <input
              required type="email" className={inputClass}
              placeholder={t('bookingForm.emailPlaceholder') ?? ''}
              value={form.email} onChange={(e) => set('email', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>{t('bookingForm.phoneLabel')} *</label>
            <input
              required type="tel" className={inputClass}
              placeholder={t('bookingForm.phonePlaceholder') ?? ''}
              value={form.phone} onChange={(e) => set('phone', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>{t('bookingForm.countryLabel')} *</label>
            <input
              required type="text" className={inputClass}
              placeholder={t('bookingForm.countryPlaceholder') ?? ''}
              value={form.country} onChange={(e) => set('country', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>{t('bookingForm.cityLabel')} *</label>
            <input
              required type="text" className={inputClass}
              placeholder={t('bookingForm.cityPlaceholder') ?? ''}
              value={form.city} onChange={(e) => set('city', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/8" />

      {/* Section 2 — Padel profile */}
      <div>
        <p className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          {t('bookingForm.step2Title')}
        </p>
        <div className="space-y-5">
          <div>
            <label className={fieldsetLabelClass}>{t('bookingForm.levelLabel')} *</label>
            <RadioGroup name="level" options={levelOptions} value={form.level} onChange={(v) => set('level', v)} />
          </div>
          <div>
            <label className={fieldsetLabelClass}>{t('bookingForm.courtSideLabel')} *</label>
            <RadioGroup name="courtSide" options={courtSideOptions} value={form.courtSide} onChange={(v) => set('courtSide', v)} />
          </div>
          <div>
            <label className={fieldsetLabelClass}>{t('bookingForm.withPartnerLabel')} *</label>
            <RadioGroup
              name="withPartner"
              options={[t('bookingForm.withPartnerYes'), t('bookingForm.withPartnerNo')]}
              value={form.withPartner === 'yes' ? t('bookingForm.withPartnerYes') : form.withPartner === 'no' ? t('bookingForm.withPartnerNo') : ''}
              onChange={(v) => set('withPartner', v === t('bookingForm.withPartnerYes') ? 'yes' : 'no')}
            />
          </div>
          {form.withPartner === 'yes' && (
            <div>
              <label className={labelClass}>{t('bookingForm.partnerNameLabel')} *</label>
              <input
                required type="text" className={inputClass}
                placeholder={t('bookingForm.partnerNamePlaceholder') ?? ''}
                value={form.partnerName} onChange={(e) => set('partnerName', e.target.value)}
              />
            </div>
          )}
          <div>
            <label className={fieldsetLabelClass}>{t('bookingForm.tshirtSizeLabel')} *</label>
            <RadioGroup name="tshirtSize" options={TSHIRT_SIZES} value={form.tshirtSize} onChange={(v) => set('tshirtSize', v)} />
          </div>
          <div>
            <label className={fieldsetLabelClass}>{t('bookingForm.tshirtCutLabel')} *</label>
            <RadioGroup name="tshirtCut" options={tshirtCutOptions} value={form.tshirtCut} onChange={(v) => set('tshirtCut', v)} />
          </div>
        </div>
      </div>

      <p className="text-brand-light/25 text-[11px]">{t('bookingForm.requiredHint')}</p>

      {status === 'error' && (
        <p className="text-red-400 text-sm border border-red-400/30 bg-red-400/5 px-4 py-3">
          {t('bookingForm.errorMsg')}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-sm py-4 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? t('bookingForm.submittingBtn') : t('bookingForm.submitBtn')}
      </button>
    </form>
  );
}
