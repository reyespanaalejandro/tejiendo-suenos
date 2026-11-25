// Datos estructurados (schema.org en JSON-LD) para Google, Bing y los asistentes de IA.
// Todo sale de negocio.ts, catalogo.ts y resenas.ts: si un dato cambia allá, cambia aquí solo.
// Regla: nada de datos inventados. No se marcan calificaciones (AggregateRating) porque las
// reseñas viven en Google y Google no permite copiarlas como marcado del propio sitio;
// el promedio y el total se dicen en el texto visible y en /llms.txt.
import { getImage } from 'astro:assets';
import { NEGOCIO, ENVIOS, TELA } from './negocio';
import { LINEAS, foto, type Producto } from './catalogo';
import logo from '../assets/logo-tejiendo-suenos.png';

export const SITIO = 'https://pijamastejiendosuenos.com';
export const ID_ORG = `${SITIO}/#organizacion`;
export const ID_WEB = `${SITIO}/#sitio`;
export const idTienda = (id: string) => `${SITIO}/#tienda-${id}`;

const abs = (ruta: string) => new URL(ruta, SITIO).toString();

async function urlFoto(nombre: string, ancho = 1200) {
  const img = await getImage({ src: foto(nombre), format: 'jpg', width: ancho });
  return abs(img.src);
}

export const DESCRIPCION_NEGOCIO =
  'Tejiendo Sueños es una fábrica colombiana de pijamas en Bogotá, desde 2018. Hace pijamas familiares, navideñas, de pareja, para mujer, para hombre, para niños, divertidas y futboleras, además de batas y pantuflas. ' +
  'Usa tela colombiana de polialgodón (algodón con poliéster) con sello TEKS, hipoalergénica, que no se estira ni se encoge, y estampa en serigrafía con tintas sin plomo. ' +
  'Tiene dos tiendas en Bogotá (Centro Comercial Santafé y Centro Comercial Bulevar Niza), vende por WhatsApp y envía a toda Colombia con pago contraentrega.';

const TEMAS = [
  'pijamas familiares', 'pijamas navideñas', 'pijamas de pareja', 'pijamas para mujer', 'pijamas para hombre',
  'pijamas para niños', 'pijamas divertidas', 'pijamas futboleras', 'batas de dormir', 'pantuflas', 'pijamas personalizadas',
  'pijamas de polialgodón', 'pijamas al por mayor',
];

export async function grafoNegocio() {
  const logoImg = await getImage({ src: logo, format: 'png', width: 512 });
  const tiendas = await Promise.all(NEGOCIO.tiendas.map(async (t) => ({
    '@type': 'ClothingStore',
    '@id': idTienda(t.id),
    name: `Pijamas Tejiendo Sueños – ${t.centroComercial}`,
    description: `Tienda de pijamas Tejiendo Sueños en el ${t.centroComercial} (${t.zona}). Pijamas familiares, navideñas, de pareja, para mujer, hombre y niños, batas y pantuflas, hechas en Bogotá. Abre todos los días; festivos de ${t.horario.find((h) => h.dias === 'Festivos')?.horas}`,
    url: abs('/contacto'),
    image: await urlFoto(t.foto),
    telephone: NEGOCIO.telefono,
    priceRange: '$30.000 – $150.000',
    currenciesAccepted: 'COP',
    paymentAccepted: 'Efectivo, tarjeta débito, tarjeta crédito, Bre-B, Nequi, Daviplata, transferencia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${t.direccion}, ${t.centroComercial}, ${t.local}`,
      addressLocality: 'Bogotá',
      addressRegion: 'Bogotá D.C.',
      addressCountry: 'CO',
    },
    hasMap: t.mapsUrl,
    openingHoursSpecification: t.horarioDatos.map((h) => ({
      '@type': 'OpeningHoursSpecification', dayOfWeek: h.dias, opens: h.abre, closes: h.cierra,
    })),
    parentOrganization: { '@id': ID_ORG },
  })));

  return [
    {
      '@type': 'Organization',
      '@id': ID_ORG,
      name: NEGOCIO.nombre,
      alternateName: ['Pijamas Tejiendo Sueños', 'Tejiendo Sueños Pijamas'],
      url: SITIO,
      logo: abs(logoImg.src),
      description: DESCRIPCION_NEGOCIO,
      slogan: 'Pijamas para toda la familia, hechas con amor en Bogotá',
      foundingDate: String(NEGOCIO.fabricaDesde),
      foundingLocation: { '@type': 'Place', name: 'Bogotá, Colombia' },
      founder: { '@type': 'Person', name: 'Rocío' },
      areaServed: { '@type': 'Country', name: 'Colombia' },
      knowsAbout: TEMAS,
      telephone: NEGOCIO.telefono,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: NEGOCIO.telefono,
        url: `https://wa.me/${NEGOCIO.whatsapp}`,
        availableLanguage: 'Spanish',
        areaServed: 'CO',
      },
      sameAs: [NEGOCIO.instagram],
      department: NEGOCIO.tiendas.map((t) => ({ '@id': idTienda(t.id) })),
    },
    ...tiendas,
    {
      '@type': 'WebSite',
      '@id': ID_WEB,
      url: SITIO,
      name: 'Pijamas Tejiendo Sueños',
      inLanguage: 'es-CO',
      publisher: { '@id': ID_ORG },
    },
  ];
}

const envio = {
  '@type': 'OfferShippingDetails',
  shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'CO' },
  shippingRate: { '@type': 'MonetaryAmount', minValue: 15000, maxValue: 20000, currency: 'COP' },
};

export async function productoLd(p: Producto) {
  const url = abs(`/producto/${p.slug}`);
  const linea = LINEAS.find((l) => l.slug === p.lineas[0]);
  const oferta = (precio: number, nombre?: string) => ({
    '@type': 'Offer',
    ...(nombre ? { name: nombre } : {}),
    price: precio,
    priceCurrency: 'COP',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url,
    seller: { '@id': ID_ORG },
    shippingDetails: envio,
  });
  const ofertas = !p.precio ? undefined
    : p.precioNino && p.precioNino !== p.precio
      ? [oferta(p.precio, 'Talla adulto (S a XL), por persona'), oferta(p.precioNino, 'Talla niño o niña (2 a 16), por persona')]
      : oferta(p.precio);
  const esPijama = p.tallaje !== 'calzado' && p.tallaje !== 'unica';
  return {
    '@type': 'Product',
    '@id': `${url}#producto`,
    name: /^(pijama|pantuflas|bata|medias|la pijama)/i.test(p.nombre) ? p.nombre : `Pijama ${p.nombre}`,
    description: `${p.descripcion}${p.propia === false ? '' : esPijama ? ` ${TELA.explicacion}` : ' Hechas por Tejiendo Sueños en Bogotá.'} ${ENVIOS.nacional}`,
    url,
    ...(p.fotos.length ? { image: await Promise.all(p.fotos.map((f) => urlFoto(f))) } : {}),
    category: linea ? `Pijamas > ${linea.nombre}` : 'Pijamas',
    ...(p.propia === false
      ? (p.slug === 'medias-termicas' ? { brand: { '@type': 'Brand', name: 'Pisando Fuerte' } } : {})
      : { brand: { '@type': 'Brand', name: NEGOCIO.nombre }, manufacturer: { '@id': ID_ORG } }),
    ...(p.propia !== false && esPijama ? { material: 'Polialgodón (algodón con poliéster), tela colombiana TEKS' } : {}),
    countryOfOrigin: p.propia === false ? undefined : 'CO',
    ...(ofertas ? { offers: ofertas } : {}),
  };
}

export const migas = (pasos: { nombre: string; ruta: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: pasos.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.nombre, item: abs(s.ruta) })),
});

export const listaProductos = (nombre: string, productos: Producto[]) => ({
  '@type': 'ItemList',
  name: nombre,
  numberOfItems: productos.length,
  itemListElement: productos.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/producto/${p.slug}`), name: p.nombre })),
});

export const faqLd = (preguntas: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: preguntas.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
});
