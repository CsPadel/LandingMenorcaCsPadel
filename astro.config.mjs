// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/lib/site.ts';

export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  integrations: [react()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      }
    }
  }
});
