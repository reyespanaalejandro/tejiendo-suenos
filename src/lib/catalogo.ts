// Catálogo al detal. ÚNICA fuente de productos, precios y líneas.
// Precios por persona, tomados del catálogo de WhatsApp (nov. 2026).
// BORRADOR: las referencias activas y las fotos se confirman con Rocío.
import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.webp', { eager: true });
export const foto = (nombre: string): ImageMetadata => {
  const f = fotos[`../assets/fotos/${nombre}.webp`];
  if (!f) throw new Error(`Falta la foto ${nombre}`);
  return f.default;
};

export type Tallaje = 'familia' | 'adulto-dama' | 'adulto-caballero' | 'adulto' | 'ninos' | 'calzado';

export const TALLAS = {
  adulto: ['S', 'M', 'L', 'XL'],
  ninos: ['2', '4', '6', '8', '10', '12', '14', '16'],
  calzado: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
};

export interface Linea {
  slug: string;
  nombre: string;
  titulo: string; // H1 de la página
  seoTitle: string;
  descripcion: string;
  intro: string;
  portada: string | null; // foto; null = sin foto todavía
}

export const LINEAS: Linea[] = [
  {
    slug: 'pijamas-familiares', nombre: 'Familiares', titulo: 'Pijamas familiares: iguales para todos… ¡hasta para la foto!',
    seoTitle: 'Pijamas familiares iguales para toda la familia | Tejiendo Sueños',
    descripcion: 'Pijamas familiares de algodón certificado, con diseños propios para mamá, papá e hijos. Hechas en Bogotá. Envíos a toda Colombia.',
    intro: 'El mismo diseño para mamá, papá, hijos y abuelos. Escoge el diseño y la talla de cada uno: el precio es por persona.',
    portada: 'familia-tortugas',
  },
  {
    slug: 'pijamas-navidenas', nombre: 'Navidad', titulo: 'Pijamas navideñas para vestir igual a toda la familia',
    seoTitle: 'Pijamas navideñas familiares en Bogotá | Tejiendo Sueños',
    descripcion: 'Pijamas navideñas familiares de algodón, con diseños propios. Para la noche de las velitas, la novena y la foto de Navidad.',
    intro: 'Para las velitas, la novena y la foto de Navidad. Diseños propios en tallas para adultos y niños.',
    portada: 'familia-navidad-renos',
  },
  {
    slug: 'pijamas-de-pareja', nombre: 'Pareja', titulo: 'Pijamas de pareja para estar iguales',
    seoTitle: 'Pijamas de pareja iguales | Tejiendo Sueños',
    descripcion: 'Pijamas de pareja de algodón, iguales para ella y para él. Un regalo que se usa por años.',
    intro: 'Escoge un diseño y la talla de cada uno. Todos nuestros diseños familiares también vienen para pareja.',
    portada: 'pareja-gris-cuadros',
  },
  {
    slug: 'pijamas-mujer', nombre: 'Dama', titulo: 'Pijamas para mujer, suaves y con diseños que enamoran',
    seoTitle: 'Pijamas para mujer de algodón | Tejiendo Sueños',
    descripcion: 'Pijamas de dama de algodón certificado: ejecutivas, joggers, divertidas y de short. Tallas S a XL.',
    intro: 'Ejecutivas, joggers, divertidas y de short. Tallas S, M, L y XL.',
    portada: 'dama-ejecutiva-azul',
  },
  {
    slug: 'pijamas-hombre', nombre: 'Caballero', titulo: 'Pijamas para hombre, cómodas y resistentes',
    seoTitle: 'Pijamas para hombre de algodón | Tejiendo Sueños',
    descripcion: 'Pijamas de caballero de algodón: náuticas, ranglan y familiares. Tallas S a XL.',
    intro: 'Náuticas, ranglan y todos los diseños familiares. Tallas S, M, L y XL.',
    portada: 'nautica-caballero-azul',
  },
  {
    slug: 'pijamas-ninos', nombre: 'Niños', titulo: 'Pijamas para niños que les quedan pequeñas antes de dañarse',
    seoTitle: 'Pijamas para niños y niñas de algodón | Tejiendo Sueños',
    descripcion: 'Pijamas infantiles de algodón con tintas sin plomo. Tallas 2 a 16. Hechas en Bogotá.',
    intro: 'Tallas 2, 4, 6, 8, 10, 12, 14 y 16. Estampados con tintas sin plomo.',
    portada: 'infantil-nina-arcoiris',
  },
  {
    slug: 'pijamas-divertidas', nombre: 'Divertidas', titulo: 'Pijamas divertidas y de superhéroes',
    seoTitle: 'Pijamas divertidas y de superhéroes | Tejiendo Sueños',
    descripcion: 'Pijamas divertidas con personajes y pijamas de superhéroes para niños, dama y caballero. Algodón certificado.',
    intro: 'Personajes que te sacan una sonrisa y superhéroes para toda la familia. Pantalón largo o short.',
    portada: 'divertida-elmo',
  },
  {
    slug: 'pijamas-futboleras', nombre: 'Futboleras', titulo: 'Pijamas de equipos de fútbol',
    seoTitle: 'Pijamas de equipos de fútbol | Tejiendo Sueños',
    descripcion: 'Pijamas futboleras de tu equipo para dama, caballero y niños. Algodón certificado, hechas en Bogotá.',
    intro: 'Pijamas de tu equipo para dama, caballero y niños. Escríbenos qué equipo buscas y te mostramos los diseños disponibles.',
    portada: null,
  },
  {
    slug: 'batas', nombre: 'Batas', titulo: 'Batas de dormir',
    seoTitle: 'Batas de dormir para mujer | Tejiendo Sueños',
    descripcion: 'Batas de dormir de algodón para mujer: de botones y con diseños tiernos.',
    intro: 'De botones o con diseños tiernos. Tallas S a XL.',
    portada: 'dama-camisero-azul',
  },
  {
    slug: 'pantuflas', nombre: 'Pantuflas', titulo: 'Pantuflas y medias térmicas',
    seoTitle: 'Pantuflas de animales en Bogotá | Tejiendo Sueños',
    descripcion: 'Pantuflas peluditas de animales, tallas 35 a 45, y medias térmicas de marca colombiana.',
    intro: 'Pantuflas peluditas en tallas 35 a 45. También tenemos medias térmicas de marca colombiana ($30.000).',
    portada: 'pantuflas-perro',
  },
];

export interface Producto {
  slug: string;
  nombre: string;
  linea: string; // nombre de la línea en el catálogo de WhatsApp
  precio: number | null; // por persona; null = por confirmar
  tallaje: Tallaje;
  propia?: boolean; // false = no la fabrica Tejiendo Sueños
  puntos?: string[]; // características propias (reemplazan las de fábrica)
  lineas: string[]; // slugs de LINEAS donde aparece
  fotos: string[];
  alt: string;
  descripcion: string;
  destacado?: boolean;
}

const FAM = ['pijamas-familiares', 'pijamas-de-pareja', 'pijamas-mujer', 'pijamas-hombre', 'pijamas-ninos'];
const NAV = ['pijamas-navidenas', 'pijamas-familiares', 'pijamas-de-pareja', 'pijamas-mujer', 'pijamas-hombre', 'pijamas-ninos'];

export const PRODUCTOS: Producto[] = [
  { slug: 'familiar-tortugas', nombre: 'Familiar Tortugas', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-tortugas'], alt: 'Familia de seis con pijamas iguales verde menta estampadas con tortugas', destacado: true,
    descripcion: 'Camiseta de manga larga verde menta con tortugas y pantalón a juego. Para toda la familia.' },
  { slug: 'familiar-gorilas', nombre: 'Familiar Gorilas', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-gorilas'], alt: 'Familia con pijamas iguales color arena estampadas con gorilas y pantalón de cuadros', destacado: true,
    descripcion: 'Camiseta arena con gorila y pantalón de cuadros oscuros.' },
  { slug: 'familiar-ositos-azul', nombre: 'Familiar Ositos', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-azul-ositos'], alt: 'Familia con pijamas azul oscuro estampadas con ositos y pantalón de cuadros azules',
    descripcion: 'Camiseta azul oscuro con ositos y pantalón de cuadros azules.' },
  { slug: 'familiar-nubes', nombre: 'Familiar Nubes', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-nubes-petroleo'], alt: 'Familia con pijamas azul petróleo estampadas con nubes y pantalón de cuadros', destacado: true,
    descripcion: 'Camiseta azul petróleo con nubes y pantalón de cuadros claros.' },
  { slug: 'familiar-hipopotamo', nombre: 'Familiar Hipopótamo', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-hipopotamo'], alt: 'Familia con pijamas iguales azul petróleo estampadas con hipopótamos',
    descripcion: 'Camiseta azul petróleo con hipopótamo y pantalón de cuadros.' },
  { slug: 'familiar-osos-perezosos', nombre: 'Familiar Osos Perezosos', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-osos-perezosos'], alt: 'Familia con pijamas verde oliva estampadas con osos perezosos',
    descripcion: 'Camiseta verde oliva con osos perezosos y pantalón de cuadros.' },
  { slug: 'familiar-mapaches', nombre: 'Familiar Mapaches', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-mapaches'], alt: 'Familia sentada con pijamas rojas estampadas con mapaches y pantalón de cuadros',
    descripcion: 'Camiseta roja con mapaches y pantalón de cuadros grises.' },
  { slug: 'familiar-ejecutiva-verde', nombre: 'Familiar Ejecutiva Verde', linea: 'Pijamas familiares ejecutivas', precio: 130000, tallaje: 'familia', lineas: FAM,
    fotos: ['familia-ejecutiva-verde', 'dama-ejecutiva-verde'], alt: 'Familia con pijamas ejecutivas de botones a cuadros verdes',
    descripcion: 'Pijama ejecutiva de botones, camisa y pantalón a cuadros verdes. Clásica y elegante.' },
  { slug: 'navidad-pinguinos', nombre: 'Navidad Pingüinos', linea: 'Navideñas', precio: 130000, tallaje: 'familia', lineas: NAV,
    fotos: ['familia-navidad-pinguinos'], alt: 'Familia con pijamas navideñas rojas estampadas con pingüinos', destacado: true,
    descripcion: 'Camiseta roja con pingüinos navideños y pantalón a rayas.' },
  { slug: 'navidad-renos', nombre: 'Navidad Renos', linea: 'Navideñas', precio: 130000, tallaje: 'familia', lineas: NAV,
    fotos: ['familia-navidad-renos'], destacado: true, alt: 'Familia sentada con pijamas navideñas color beige y pantalón de cuadros rojos',
    descripcion: 'Camiseta beige con renos y pantalón de cuadros rojos.' },
  { slug: 'navidad-oso', nombre: 'Navidad Osito', linea: 'Navideñas', precio: 130000, tallaje: 'familia', lineas: NAV,
    fotos: ['familia-navidad-oso'], alt: 'Familia con pijamas navideñas azul oscuro con osito y pantalón de cuadros rojos',
    descripcion: 'Camiseta azul oscuro con osito navideño y pantalón de cuadros rojos.' },
  { slug: 'pareja-gris-cuadros', nombre: 'Pareja Gris', linea: 'Pijamas familiares', precio: 130000, tallaje: 'familia', lineas: ['pijamas-de-pareja', 'pijamas-mujer', 'pijamas-hombre'],
    fotos: ['pareja-gris-cuadros'], alt: 'Pareja abrazada con pijamas grises y pantalón de cuadros azules',
    descripcion: 'Camiseta gris de manga larga y pantalón de cuadros azules, para ella y para él.' },
  { slug: 'ejecutiva-azul', nombre: 'Ejecutiva Azul', linea: 'Pijamas ejecutivas', precio: 130000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['dama-ejecutiva-azul'], alt: 'Mujer con pijama ejecutiva de botones a cuadros azules',
    descripcion: 'Pijama ejecutiva de botones a cuadros azules, camisa y pantalón.' },
  { slug: 'jogger-dama', nombre: 'Jogger Dama', linea: 'Jogger dama', precio: 110000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['jogger-dama-ovejas'], destacado: true, alt: 'Mujer con pijama jogger, camiseta azul oscuro y pantalón azul claro con ovejas',
    descripcion: 'Camiseta de manga larga y pantalón jogger con puño, estampado de ovejitas.' },
  { slug: 'divertida-short', nombre: 'Divertida Short', linea: 'Divertidas short', precio: 110000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['dama-short-blanco'], alt: 'Mujer con pijama de camiseta blanca y short negro',
    descripcion: 'Camiseta y short para dormir fresca. Ideal para clima cálido.' },
  { slug: 'nautica', nombre: 'Náutica', linea: 'Náuticas', precio: 120000, tallaje: 'adulto-caballero', lineas: ['pijamas-hombre'], destacado: true,
    fotos: ['nautica-caballero-azul', 'nautica-papa-hija'], alt: 'Hombre con pijama náutica de botones azul oscuro y pantalón de cuadros',
    descripcion: 'Camiseta tipo henley de botones con ancla bordada y pantalón de cuadros.' },
  { slug: 'ranglan', nombre: 'Ranglan', linea: 'Ranglan', precio: 120000, tallaje: 'adulto-caballero', lineas: ['pijamas-hombre'],
    fotos: ['ranglan-caballero', 'ranglan-padre-hijo'], alt: 'Hombre con pijama ranglan gris de mangas azul oscuro y pantalón azul',
    descripcion: 'Camiseta ranglan de mangas contrastadas y pantalón largo.' },
  { slug: 'infantil-arcoiris', nombre: 'Infantil Arcoíris', linea: 'Línea infantil kitty', precio: 90000, tallaje: 'ninos', lineas: ['pijamas-ninos'], destacado: true,
    fotos: ['infantil-nina-arcoiris', 'infantil-mama-hija-arcoiris'], alt: 'Niña con pijama fucsia estampada con un arcoíris',
    descripcion: 'Camiseta fucsia con arcoíris y pantalón estampado. Tallas 2 a 16.' },
  { slug: 'infantil-caballito-de-mar', nombre: 'Infantil Caballito de Mar', linea: 'Línea infantil', precio: null, tallaje: 'ninos', lineas: ['pijamas-ninos'],
    fotos: ['nina-caballito-de-mar'], alt: 'Niña con pijama azul claro estampada con un caballito de mar',
    descripcion: 'Camiseta azul claro con caballito de mar y pantalón estampado.' },
  { slug: 'divertida-elmo', nombre: 'Divertida Elmo', linea: 'Divertidas pantalón largo', precio: 120000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'], destacado: false,
    fotos: ['divertida-elmo'], alt: 'Mujer con pijama de camiseta negra con Elmo y pantalón gris',
    descripcion: 'Camiseta negra con Elmo y pantalón largo gris con detalle a juego.' },
  { slug: 'divertida-come-galletas', nombre: 'Divertida Come Galletas', linea: 'Divertidas pantalón largo', precio: 120000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['divertida-come-galletas'], alt: 'Mujer con pijama de camiseta azul claro con el Monstruo Come Galletas y pantalón azul',
    descripcion: 'Camiseta azul claro con el Monstruo Come Galletas y pantalón largo azul.' },
  { slug: 'divertida-snoopy', nombre: 'Divertida Snoopy', linea: 'Divertidas pantalón largo', precio: 120000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['divertida-snoopy'], alt: 'Mujer con pijama de camiseta amarilla con Snoopy y pantalón gris',
    descripcion: 'Camiseta amarilla con Snoopy y pantalón largo gris.' },
  { slug: 'divertida-garfield', nombre: 'Divertida Garfield', linea: 'Divertidas pantalón largo', precio: 120000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['divertida-garfield'], alt: 'Mujer con pijama de camiseta negra con Garfield y pantalón gris',
    descripcion: 'Camiseta negra con Garfield y pantalón largo gris.' },
  { slug: 'divertida-short-gatitos', nombre: 'Divertida Short Gatitos', linea: 'Divertidas short', precio: 110000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['divertida-short-gatitos'], alt: 'Mujer con pijama de camiseta rosada con gatitos y short gris',
    descripcion: 'Camiseta rosada con gatitos y short gris. Fresca para clima cálido.' },
  { slug: 'superheroes-spiderman', nombre: 'Familiar Spider-Man', linea: 'Pijamas superhéroes', precio: 120000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-familiares', 'pijamas-ninos'], destacado: true,
    fotos: ['superheroes-familia-spiderman'], alt: 'Familia con pijamas azul oscuro de Spider-Man',
    descripcion: 'Pijama azul oscuro con Spider-Man, para niños y adultos.' },
  { slug: 'superheroes-superman', nombre: 'Familiar Superman', linea: 'Pijamas superhéroes', precio: 120000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-familiares', 'pijamas-ninos'],
    fotos: ['superheroes-familia-superman'], alt: 'Familia con pijamas azul oscuro con el escudo de Superman',
    descripcion: 'Pijama azul oscuro con el escudo de Superman, para niños y adultos.' },
  { slug: 'superheroes-mix', nombre: 'Superhéroes para todos', linea: 'Pijamas superhéroes', precio: 120000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-ninos'],
    fotos: ['superheroes-familia-mix'], alt: 'Familia con pijamas de distintos superhéroes: Batman, Capitán América, Deadpool e Iron Man',
    descripcion: 'Cada uno escoge su superhéroe: Batman, Capitán América, Iron Man, Deadpool y más.' },
  { slug: 'superheroes-batman', nombre: 'Batman Caballero', linea: 'Pijamas superhéroes', precio: 120000, tallaje: 'adulto-caballero', lineas: ['pijamas-divertidas', 'pijamas-hombre'],
    fotos: ['superheroes-batman-caballero'], alt: 'Hombre con pijama de camiseta gris con el logo de Batman y pantalón negro',
    descripcion: 'Camiseta gris con el logo de Batman y pantalón largo negro.' },
  { slug: 'futboleras', nombre: 'Futboleras', linea: 'Futboleras', precio: 125000, tallaje: 'familia', lineas: ['pijamas-futboleras', 'pijamas-hombre'], destacado: false,
    fotos: [], alt: '',
    descripcion: 'Pijama de tu equipo de fútbol, para dama, caballero y niños. Cuéntanos tu equipo y te mostramos los diseños disponibles.' },
  { slug: 'seda-pantalon-largo', nombre: 'Seda Pantalón Largo', linea: 'Seda pantalón largo', precio: 150000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'], propia: false,
    puntos: ['Tela satinada, suave y fresca', 'Cómoda y ligera', 'Colores: rosado, lila, verde menta y azul oscuro'],
    fotos: ['seda-colores'], alt: 'Pijama de seda de manga corta y pantalón largo en rosado, lila, verde menta y azul oscuro',
    descripcion: 'Pijama satinada de camisa con botones y pantalón largo. Disponible en varios colores.' },
  { slug: 'bata-botones', nombre: 'Bata de Botones', linea: 'Bata botones', precio: 95000, tallaje: 'adulto-dama', lineas: ['batas', 'pijamas-mujer'],
    fotos: ['dama-camisero-azul'], alt: 'Mujer con bata de botones azul oscuro con puntos',
    descripcion: 'Bata camisera de botones con bolsillo, cómoda para dormir y estar en casa.' },
  { slug: 'bata-gatito', nombre: 'Bata Gatito', linea: 'Batas', precio: null, tallaje: 'adulto-dama', lineas: ['batas', 'pijamas-mujer'],
    fotos: ['bata-gato'], alt: 'Mujer con bata de dormir lila estampada con un gato',
    descripcion: 'Bata de dormir lila con carita de gato.' },
  { slug: 'pantuflas-perrito', nombre: 'Pantuflas Perrito', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-perro'], alt: 'Pantufla peluda blanca con forma de perrito',
    descripcion: 'Pantuflas peluditas de perrito.' },
  { slug: 'pantuflas-conejo', nombre: 'Pantuflas Conejo', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-conejo'], alt: 'Pantufla peluda rosada con forma de conejo',
    descripcion: 'Pantuflas peluditas de conejo, rosadas.' },
  { slug: 'pantuflas-gatito', nombre: 'Pantuflas Gatito', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-gato'], alt: 'Pantufla peluda rosada con carita de gato',
    descripcion: 'Pantuflas peluditas de gatito.' },
];


export const pesos = (n: number) => '$' + n.toLocaleString('es-CO');
export const productosDe = (linea: string) => PRODUCTOS.filter((p) => p.lineas.includes(linea));
export const lineaPorSlug = (slug: string) => LINEAS.find((l) => l.slug === slug)!;
