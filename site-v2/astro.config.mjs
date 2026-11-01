// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ofirmarzouk.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'he',
        locales: { he: 'he', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
