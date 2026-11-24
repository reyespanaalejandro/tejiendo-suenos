import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambia esto cuando el dominio esté comprado.
  site: 'https://pijamastejiendosuenos.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
