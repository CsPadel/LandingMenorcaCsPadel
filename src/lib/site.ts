export const SITE_URL = 'https://menorca.cspadel.com';
export const SITE_HOST = 'menorca.cspadel.com';

export const BRAND_URL = 'https://cspadel.com';
export const BRAND_LOGO_URL = `${BRAND_URL}/logogold.webp`;

export const GTM_ID = 'GTM-52QPRRZ8';
export const GOOGLE_ADS_ID = 'AW-18206970630';

/** Build an absolute URL for this site. Keep public/sitemap.xml and public/robots.txt in sync with SITE_URL. */
export function sitePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
