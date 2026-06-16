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
    build: {
      // Split chunks so each route only loads what it needs
      cssCodeSplit: true,
      // Inline small assets (<4KB) directly in CSS/JS to save round-trips
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          // Separate vendor chunk (React, i18next) — cached independently
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
              return 'i18n-vendor';
            }
          }
        }
      }
    },
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
