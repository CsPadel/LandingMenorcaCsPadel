export const SITE_URL = 'https://menorca.cspadel.com';
export const SITE_HOST = 'menorca.cspadel.com';

/**
 * The main Courtside site. `www` is deliberate: the apex redirects to it, so
 * linking without the prefix costs every visitor an extra hop.
 */
export const BRAND_URL = 'https://www.cspadel.com';
export const BRAND_LOGO_URL = `${BRAND_URL}/logogold.webp`;

/**
 * Routes on the main site, for the brand bar and footer.
 *
 * Until this retreat page moves onto the main domain, a visitor who lands here
 * has no way back to the rest of the brand — the other four destinations, the
 * founders' story, everything. These are that way back.
 */
export const BRAND_ROUTES = {
  home: BRAND_URL,
  ourStory: `${BRAND_URL}/our-story`,
  experience: `${BRAND_URL}/the-experience`,
  upcomingRetreats: `${BRAND_URL}/upcoming-retreats`,
  executiveRetreat: `${BRAND_URL}/executive-retreat`,
  eastSussex: `${BRAND_URL}/east-sussex`,
  bali: `${BRAND_URL}/bali`,
  dubai: `${BRAND_URL}/dubai`,
} as const;

export const GTM_ID = 'GTM-52QPRRZ8';
export const GOOGLE_ADS_ID = 'AW-18206970630';

/** Build an absolute URL for this site. Keep public/sitemap.xml and public/robots.txt in sync with SITE_URL. */
export function sitePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
