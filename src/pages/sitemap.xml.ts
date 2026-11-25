// Mapa del sitio para Google, Bing y los buscadores de las IA. Se arma solo con las páginas reales.
import type { APIRoute } from 'astro';
import { LINEAS, PRODUCTOS } from '../lib/catalogo';
import { SITIO } from '../lib/seo';

const paginas = [
  '/', '/tienda', ...LINEAS.map((l) => `/${l.slug}`), '/pijamas-personalizadas', '/por-que-tejiendo-suenos',
  '/preguntas-frecuentes', '/guia-de-tallas', '/envios-cambios-y-garantia', '/nosotros', '/contacto', '/pijamas-al-por-mayor',
  ...PRODUCTOS.map((p) => `/producto/${p.slug}`),
];

export const GET: APIRoute = () => {
  const hoy = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas.map((p) => `  <url><loc>${SITIO}${p === '/' ? '' : p}</loc><lastmod>${hoy}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
