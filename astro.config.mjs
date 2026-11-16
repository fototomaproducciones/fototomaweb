import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fototomaproducciones.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap({ filter: (url) => !url.includes('/marca') && !url.includes('/og') })],
});
