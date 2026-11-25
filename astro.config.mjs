import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambia esto cuando el dominio esté comprado.
  site: 'https://pijamastejiendosuenos.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Diseños que ya no se venden: sus enlaces viejos llevan a la línea correspondiente.
  redirects: {
    '/producto/familiar-ejecutiva-verde': '/pijamas-familiares',
    '/producto/navidad-pinguinos': '/pijamas-navidenas',
    '/producto/navidad-renos': '/pijamas-navidenas',
    '/producto/navidad-oso': '/pijamas-navidenas',
  },
});
