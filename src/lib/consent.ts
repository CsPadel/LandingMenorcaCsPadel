export const STORAGE_KEY = 'cs_cookie_consent';

export type ConsentChoice = 'accepted' | 'rejected';

const CONSENT_DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const;

const CONSENT_GRANTED = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
} as const;

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function applyConsent(choice: ConsentChoice) {
  gtag(
    'consent',
    'update',
    choice === 'accepted' ? CONSENT_GRANTED : CONSENT_DENIED
  );
}

export function getStoredConsent(): ConsentChoice | null {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  if (value === '1') return 'accepted';
  return null;
}

export function storeConsent(choice: ConsentChoice) {
  localStorage.setItem(STORAGE_KEY, choice);
}
