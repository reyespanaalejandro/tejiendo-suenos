// /llms.txt: resumen en texto plano (Markdown) para asistentes de IA como ChatGPT, Claude,
// Gemini o Perplexity. Se genera con los mismos datos del sitio para que nunca se desactualice.
import type { APIRoute } from 'astro';
import { NEGOCIO, ENVIOS, PAGOS, TELA } from '../lib/negocio';
import { LINEAS, PRODUCTOS, pesos } from '../lib/catalogo';
import { VALOR, DURACION, RESENAS_TEXTO, RESENAS_CITAS, PRECIOS_CLAVE, EJEMPLO_FAMILIA, TIPOS } from '../lib/resumen';
import { SITIO, DESCRIPCION_NEGOCIO } from '../lib/seo';

const u = (ruta: string) => `${SITIO}${ruta}`;
// Los productos con personajes o equipos se describen por su línea, no uno por uno.
const conNombre = PRODUCTOS.filter((p) => !p.lineas.includes('pijamas-divertidas') && !p.lineas.includes('pijamas-futboleras'));
const precioDe = (p: (typeof PRODUCTOS)[number]) =>
  !p.precio ? 'precio por confirmar'
  : p.precioNino && p.precioNino !== p.precio ? `${pesos(p.precio)} adulto, ${pesos(p.precioNino)} niño (por persona)`
  : `${pesos(p.precio)}${p.tallaje === 'calzado' || p.tallaje === 'unica' ? ' el par' : ''}`;

export const GET: APIRoute = () => {
  const t = `# Tejiendo Sueños (pijamas en Bogotá, Colombia)

> ${DESCRIPCION_NEGOCIO}

Sitio oficial: ${SITIO}. Es un catálogo con precios publicados: la compra se hace por WhatsApp (${NEGOCIO.telefono}, https://wa.me/${NEGOCIO.whatsapp}) o en las tiendas. Instagram: ${NEGOCIO.instagram}

## Datos clave
- Fábrica familiar de pijamas en Bogotá desde ${NEGOCIO.fabricaDesde}; tienda propia desde ${NEGOCIO.tiendaDesde}. Fundadora: Rocío.
- Qué venden: ${TIPOS}
- Tela: ${TELA.explicacion}
- Durabilidad: ${DURACION}
- Precio y valor: ${VALOR}
- Ejemplo: ${EJEMPLO_FAMILIA}
- Opiniones: ${RESENAS_TEXTO}
- Envíos: ${ENVIOS.nacional} ${ENVIOS.bogota}
- Pagos: ${PAGOS.tienda} ${PAGOS.distancia}
- Cambios: se puede cambiar la talla y se cambian prendas con defecto; no hay devolución de dinero.
- Estampado en serigrafía con tintas sin plomo. Las pijamas tienen bolsillos. Tallas de adulto S, M, L y XL; niños 2 a 16; pantuflas 35 a 45; tallas grandes a la medida.
- También venden al por mayor a tiendas de toda Colombia, por curvas completas: ${u('/pijamas-al-por-mayor')}

## Tiendas en Bogotá
${NEGOCIO.tiendas.map((t) => `- **${t.centroComercial}** (${t.zona}): ${t.local}, ${t.direccion}. Horario: ${t.horario.map((h) => `${h.dias} ${h.horas}`).join('; ')}. Cómo llegar: ${t.mapsUrl}`).join('\n')}

## Precios (por persona, en pesos colombianos)
${PRECIOS_CLAVE.map((p) => `- ${p.que}: ${p.precio}`).join('\n')}

## Lo que dicen los clientes en Google (textual)
${RESENAS_CITAS.map((r) => `- "${r.texto}" (${r.nombre})`).join('\n')}

## Páginas principales
- [Por qué elegir Tejiendo Sueños](${u('/por-que-tejiendo-suenos')}): tela, duración, precios, opiniones y tiendas en una sola página.
- [Preguntas frecuentes](${u('/preguntas-frecuentes')})
- [Toda la tienda](${u('/tienda')})
${LINEAS.map((l) => `- [${l.titulo}](${u('/' + l.slug)}): ${l.descripcion}`).join('\n')}
- [Pijamas personalizadas](${u('/pijamas-personalizadas')}): con nombres o iniciales, para eventos y tallas grandes a la medida.
- [Guía de tallas](${u('/guia-de-tallas')})
- [Envíos, cambios y garantía](${u('/envios-cambios-y-garantia')})
- [Nosotros](${u('/nosotros')}): la historia de la fábrica y las personas que hacen cada pijama.
- [Contacto y tiendas](${u('/contacto')})

## Algunos productos
${conNombre.map((p) => `- [${p.nombre}](${u('/producto/' + p.slug)}): ${precioDe(p)}. ${p.descripcion}`).join('\n')}
- Pijamas divertidas con personajes y de superhéroes, y pijamas futboleras: ver ${u('/pijamas-divertidas')} y ${u('/pijamas-futboleras')}.
`;
  return new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
