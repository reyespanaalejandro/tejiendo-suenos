// Catálogo al detal. ÚNICA fuente de productos, precios y líneas.
// Precios por persona confirmados con Rocío (nov. 2026): adulto $130.000 y niño $95.000
// en todas las pijamas, salvo las excepciones que tienen su propio precio.
import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.webp', { eager: true });
export const foto = (nombre: string): ImageMetadata => {
  const f = fotos[`../assets/fotos/${nombre}.webp`];
  if (!f) throw new Error(`Falta la foto ${nombre}`);
  return f.default;
};

export type Tallaje = 'familia' | 'adulto-dama' | 'adulto-caballero' | 'adulto' | 'ninos' | 'calzado' | 'unica';

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
    descripcion: 'Pijamas familiares de polialgodón certificado, con diseños propios para mamá, papá e hijos. Hechas en Bogotá. Envíos a toda Colombia.',
    intro: 'El mismo diseño para mamá, papá, hijos y abuelos. Escoge el diseño y la talla de cada uno: el precio es por persona.',
    portada: 'pijamas-familiares-tortugas-bogota',
  },
  {
    slug: 'pijamas-navidenas', nombre: 'Navidad', titulo: 'Pijamas navideñas para vestir igual a toda la familia',
    seoTitle: 'Pijamas navideñas familiares en Bogotá | Tejiendo Sueños',
    descripcion: 'Pijamas navideñas familiares de polialgodón, con diseños propios. Para la noche de las velitas, la novena y la foto de Navidad.',
    intro: 'Para las velitas, la novena y la foto de Navidad. Estos son los diseños de este año, en todas las tallas: adultos $130.000 y niños $95.000 por persona.',
    portada: 'pijama-navidena-familiar-reno-bufanda-vitrina',
  },
  {
    slug: 'pijamas-de-pareja', nombre: 'Pareja', titulo: 'Pijamas de pareja para estar iguales',
    seoTitle: 'Pijamas de pareja iguales | Tejiendo Sueños',
    descripcion: 'Pijamas de pareja de polialgodón, iguales para ella y para él. Un regalo que se usa por años.',
    intro: 'Escoge un diseño y la talla de cada uno. Todos nuestros diseños familiares también vienen para pareja.',
    portada: 'pijama-pareja-gris-pantalon-cuadros',
  },
  {
    slug: 'pijamas-mujer', nombre: 'Dama', titulo: 'Pijamas para mujer, suaves y con diseños que enamoran',
    seoTitle: 'Pijamas para mujer de polialgodón | Tejiendo Sueños',
    descripcion: 'Pijamas de dama de polialgodón certificado: ejecutivas, joggers, divertidas, de short y de seda. Tallas S a XL.',
    intro: 'Ejecutivas, joggers, divertidas y de short. Tallas S, M, L y XL.',
    portada: 'pijama-ejecutiva-mujer-cuadros-azules',
  },
  {
    slug: 'pijamas-hombre', nombre: 'Caballero', titulo: 'Pijamas para hombre, cómodas y resistentes',
    seoTitle: 'Pijamas para hombre de polialgodón | Tejiendo Sueños',
    descripcion: 'Pijamas de caballero de polialgodón: náuticas, ranglan y familiares. Tallas S a XL.',
    intro: 'Náuticas, ranglan y todos los diseños familiares. Tallas S, M, L y XL.',
    portada: 'pijama-nautica-hombre-azul',
  },
  {
    slug: 'pijamas-ninos', nombre: 'Niños', titulo: 'Pijamas para niños que les quedan pequeñas antes de dañarse',
    seoTitle: 'Pijamas para niños y niñas de polialgodón | Tejiendo Sueños',
    descripcion: 'Pijamas infantiles de polialgodón con tintas sin plomo. Tallas 2 a 16. Hechas en Bogotá.',
    intro: 'Tallas 2, 4, 6, 8, 10, 12, 14 y 16. Estampados con tintas sin plomo.',
    portada: 'pijama-nina-arcoiris-fucsia',
  },
  {
    slug: 'pijamas-divertidas', nombre: 'Divertidas', titulo: 'Pijamas divertidas y de superhéroes',
    seoTitle: 'Pijamas divertidas y de superhéroes | Tejiendo Sueños',
    descripcion: 'Pijamas divertidas con personajes y pijamas de superhéroes para niños, dama y caballero. Polialgodón certificado.',
    intro: 'Personajes que te sacan una sonrisa y superhéroes para toda la familia. Pantalón largo o short.',
    portada: 'pijama-divertida-mujer-monstruo-rojo',
  },
  {
    slug: 'pijamas-futboleras', nombre: 'Futboleras', titulo: 'La pijama favorita de tu equipo favorito',
    seoTitle: 'Pijamas futboleras para hinchas | Tejiendo Sueños',
    descripcion: 'Pijamas futboleras para hinchas: dama, caballero y niños. Polialgodón certificado, hechas en Bogotá. Pregúntanos por tu equipo.',
    intro: 'En Tejiendo Sueños encuentras la pijama favorita de tu equipo favorito, para dama, caballero y niños. Escríbenos qué equipo buscas y te mandamos las fotos de los diseños disponibles.',
    portada: null,
  },
  {
    slug: 'batas', nombre: 'Batas', titulo: 'Batas de dormir',
    seoTitle: 'Batas de dormir para mujer | Tejiendo Sueños',
    descripcion: 'Batas de dormir de polialgodón para mujer: de botones y con diseños tiernos.',
    intro: 'De botones o con diseños tiernos. Tallas S a XL.',
    portada: 'bata-camisera-botones-mujer-azul',
  },
  {
    slug: 'pantuflas', nombre: 'Pantuflas', titulo: 'Pantuflas y medias térmicas',
    seoTitle: 'Pantuflas de animales y medias térmicas en Bogotá | Tejiendo Sueños',
    descripcion: 'Pantuflas peluditas de animales, tallas 35 a 45, y medias térmicas de marca colombiana.',
    intro: 'Pantuflas peluditas en tallas 35 a 45, y medias térmicas de la marca colombiana Pisando Fuerte.',
    portada: 'pantuflas-peludas-perrito',
  },
];

export interface Producto {
  slug: string;
  nombre: string;
  linea: string; // nombre de la línea en el catálogo de WhatsApp
  precio: number | null; // por persona (adulto); null = por confirmar
  precioNino?: number; // precio de las tallas de niño (2 a 16) en pijamas familiares
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
  { slug: 'familiar-tortugas', nombre: 'Familiar Tortugas', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijamas-familiares-tortugas-bogota'], alt: 'Familia de seis con pijamas iguales verde menta estampadas con tortugas', destacado: true,
    descripcion: 'Camiseta de manga larga verde menta con tortugas y pantalón a juego. Para toda la familia.' },
  { slug: 'familiar-gorilas', nombre: 'Familiar Gorilas', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-gorilas'], alt: 'Familia con pijamas iguales color arena estampadas con gorilas y pantalón de cuadros', destacado: true,
    descripcion: 'Camiseta arena con gorila y pantalón de cuadros oscuros.' },
  { slug: 'familiar-ositos-azul', nombre: 'Familiar Ositos', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-ositos-azul'], alt: 'Familia con pijamas azul oscuro estampadas con ositos y pantalón de cuadros azules',
    descripcion: 'Camiseta azul oscuro con ositos y pantalón de cuadros azules.' },
  { slug: 'familiar-nubes', nombre: 'Familiar Nubes', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-nubes-azul-petroleo'], alt: 'Familia con pijamas azul petróleo estampadas con nubes y pantalón de cuadros', destacado: true,
    descripcion: 'Camiseta azul petróleo con nubes y pantalón de cuadros claros.' },
  { slug: 'familiar-hipopotamo', nombre: 'Familiar Hipopótamo', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-hipopotamo'], alt: 'Familia con pijamas iguales azul petróleo estampadas con hipopótamos',
    descripcion: 'Camiseta azul petróleo con hipopótamo y pantalón de cuadros.' },
  { slug: 'familiar-osos-perezosos', nombre: 'Familiar Osos Perezosos', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-osos-perezosos'], alt: 'Familia con pijamas verde oliva estampadas con osos perezosos',
    descripcion: 'Camiseta verde oliva con osos perezosos y pantalón de cuadros.' },
  { slug: 'familiar-mapaches', nombre: 'Familiar Mapaches', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: FAM,
    fotos: ['pijama-familiar-mapaches'], alt: 'Familia sentada con pijamas rojas estampadas con mapaches y pantalón de cuadros',
    descripcion: 'Camiseta roja con mapaches y pantalón de cuadros grises.' },
  { slug: 'navidad-reno-bufanda', nombre: 'Navidad Reno con Bufanda', linea: 'Navideñas', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: NAV, destacado: true,
    fotos: ['pijama-navidena-familiar-reno-bufanda-vitrina'], alt: 'Pijamas navideñas familiares color crema con reno de bufanda y pantalón navideño estampado, en la vitrina de la tienda',
    descripcion: 'Camiseta de manga larga color crema con un reno de bufanda y pantalón navideño estampado. Para adultos y niños.' },
  { slug: 'navidad-capibaras', nombre: 'Navidad Capibaras', linea: 'Navideñas', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: NAV,
    fotos: [], alt: '',
    descripcion: 'Camiseta de manga larga vinotinto con una familia de capibaras junto al árbol de Navidad y pantalón de cuadros rojos y blancos.' },
  { slug: 'navidad-osos-polares', nombre: 'Navidad Osos Polares', linea: 'Navideñas', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: NAV,
    fotos: [], alt: '',
    descripcion: 'Camiseta de manga larga gris claro con osos polares y árbol de Navidad, y pantalón de cuadros verdes.' },
  { slug: 'navidad-gatitos', nombre: 'Navidad Gatitos', linea: 'Navideñas', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: NAV,
    fotos: [], alt: '',
    descripcion: 'Camiseta de manga larga azul oscuro con gatitos navideños y regalos, y pantalón de cuadros rojos.' },
  { slug: 'pareja-gris-cuadros', nombre: 'Pareja Gris', linea: 'Pijamas familiares', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: ['pijamas-de-pareja', 'pijamas-mujer', 'pijamas-hombre'],
    fotos: ['pijama-pareja-gris-pantalon-cuadros'], alt: 'Pareja abrazada con pijamas grises y pantalón de cuadros azules',
    descripcion: 'Camiseta gris de manga larga y pantalón de cuadros azules, para ella y para él.' },
  { slug: 'ejecutiva-azul', nombre: 'Ejecutiva Azul', linea: 'Pijamas ejecutivas', precio: 130000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['pijama-ejecutiva-mujer-cuadros-azules'], alt: 'Mujer con pijama ejecutiva de botones a cuadros azules',
    descripcion: 'Pijama ejecutiva de botones a cuadros azules, camisa y pantalón.' },
  { slug: 'jogger-dama', nombre: 'Jogger Dama', linea: 'Jogger dama', precio: 85000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['pijama-jogger-mujer-ovejas'], destacado: true, alt: 'Mujer con pijama jogger, camiseta azul oscuro y pantalón azul claro con ovejas',
    descripcion: 'Camiseta de manga larga y pantalón jogger con puño, estampado de ovejitas.' },
  { slug: 'divertida-short', nombre: 'Divertida Short', linea: 'Divertidas short', precio: 110000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'],
    fotos: ['pijama-short-mujer-blanca'], alt: 'Mujer con pijama de camiseta blanca y short negro',
    descripcion: 'Camiseta y short para dormir fresca. Ideal para clima cálido.' },
  { slug: 'nautica', nombre: 'Náutica', linea: 'Náuticas', precio: 130000, tallaje: 'adulto-caballero', lineas: ['pijamas-hombre'], destacado: true,
    fotos: ['pijama-nautica-hombre-azul', 'pijama-nautica-papa-e-hija'], alt: 'Hombre con pijama náutica de botones azul oscuro y pantalón de cuadros',
    descripcion: 'Camiseta tipo henley de botones con ancla bordada y pantalón de cuadros.' },
  { slug: 'ranglan', nombre: 'Ranglan', linea: 'Ranglan', precio: 130000, tallaje: 'adulto-caballero', lineas: ['pijamas-hombre'],
    fotos: ['pijama-ranglan-hombre-gris', 'pijama-ranglan-papa-e-hijo'], alt: 'Hombre con pijama ranglan gris de mangas azul oscuro y pantalón azul',
    descripcion: 'Camiseta ranglan de mangas contrastadas y pantalón largo.' },
  { slug: 'infantil-arcoiris', nombre: 'Infantil Arcoíris', linea: 'Línea infantil kitty', precio: 95000, tallaje: 'ninos', lineas: ['pijamas-ninos'], destacado: true,
    fotos: ['pijama-nina-arcoiris-fucsia', 'pijama-mama-e-hija-arcoiris'], alt: 'Niña con pijama fucsia estampada con un arcoíris',
    descripcion: 'Camiseta fucsia con arcoíris y pantalón estampado. Tallas 2 a 16.' },
  { slug: 'infantil-caballito-de-mar', nombre: 'Infantil Caballito de Mar', linea: 'Línea infantil', precio: 75000, tallaje: 'ninos', lineas: ['pijamas-ninos'],
    fotos: ['pijama-nina-caballito-de-mar'], alt: 'Niña con pijama azul claro estampada con un caballito de mar',
    descripcion: 'Camiseta azul claro con caballito de mar y pantalón estampado.' },
  { slug: 'divertida-elmo', nombre: 'Divertida Elmo', linea: 'Divertidas pantalón jogger', precio: 85000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'], destacado: false,
    fotos: ['pijama-divertida-mujer-monstruo-rojo'], alt: 'Mujer con pijama de camiseta negra con Elmo y pantalón gris',
    descripcion: 'Camiseta negra con Elmo y pantalón largo gris con detalle a juego.' },
  { slug: 'divertida-come-galletas', nombre: 'Divertida Come Galletas', linea: 'Divertidas pantalón jogger', precio: 85000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['pijama-divertida-mujer-monstruo-azul'], alt: 'Mujer con pijama de camiseta azul claro con el Monstruo Come Galletas y pantalón azul',
    descripcion: 'Camiseta azul claro con el Monstruo Come Galletas y pantalón largo azul.' },
  { slug: 'divertida-snoopy', nombre: 'Divertida Snoopy', linea: 'Divertidas pantalón jogger', precio: 85000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['pijama-divertida-mujer-perrito-amarilla'], alt: 'Mujer con pijama de camiseta amarilla con Snoopy y pantalón gris',
    descripcion: 'Camiseta amarilla con Snoopy y pantalón largo gris.' },
  { slug: 'divertida-garfield', nombre: 'Divertida Garfield', linea: 'Divertidas pantalón jogger', precio: 85000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['pijama-divertida-mujer-gato-naranja'], alt: 'Mujer con pijama de camiseta negra con Garfield y pantalón gris',
    descripcion: 'Camiseta negra con Garfield y pantalón largo gris.' },
  { slug: 'divertida-short-gatitos', nombre: 'Divertida Short Gatitos', linea: 'Divertidas short', precio: 110000, tallaje: 'adulto-dama', lineas: ['pijamas-divertidas', 'pijamas-mujer'],
    fotos: ['pijama-short-mujer-gatitos'], alt: 'Mujer con pijama de camiseta rosada con gatitos y short gris',
    descripcion: 'Camiseta rosada con gatitos y short gris. Fresca para clima cálido.' },
  { slug: 'superheroes-spiderman', nombre: 'Familiar Superhéroe Azul y Rojo', linea: 'Pijamas superhéroes', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-familiares', 'pijamas-ninos'], destacado: true,
    fotos: ['pijama-familiar-superheroes-azul'], alt: 'Familia con pijamas iguales azul oscuro de superhéroe',
    descripcion: 'Pijama azul oscuro de superhéroe, igual para niños y adultos.' },
  { slug: 'superheroes-superman', nombre: 'Familiar Superhéroe Azul', linea: 'Pijamas superhéroes', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-familiares', 'pijamas-ninos'],
    fotos: ['pijama-familiar-superheroes-escudo'], alt: 'Familia con pijamas iguales azul oscuro con escudo de superhéroe',
    descripcion: 'Pijama azul oscuro con escudo de superhéroe, igual para niños y adultos.' },
  { slug: 'superheroes-mix', nombre: 'Superhéroes para todos', linea: 'Pijamas superhéroes', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: ['pijamas-divertidas', 'pijamas-ninos'],
    fotos: ['pijamas-superheroes-familia'], alt: 'Familia con pijamas de distintos superhéroes',
    descripcion: 'Cada uno escoge su superhéroe favorito. Pregúntanos por WhatsApp qué diseños hay disponibles.' },
  { slug: 'superheroes-batman', nombre: 'Superhéroe Caballero', linea: 'Pijamas superhéroes', precio: 130000, tallaje: 'adulto-caballero', lineas: ['pijamas-divertidas', 'pijamas-hombre'],
    fotos: ['pijama-superheroe-hombre-gris'], alt: 'Hombre con pijama de camiseta gris de superhéroe y pantalón negro',
    descripcion: 'Camiseta gris de superhéroe y pantalón largo negro.' },
  { slug: 'futboleras', nombre: 'La pijama de tu equipo favorito', linea: 'Futboleras', precio: 130000, precioNino: 95000, tallaje: 'familia', lineas: ['pijamas-futboleras', 'pijamas-hombre'], destacado: false,
    fotos: [], alt: '',
    descripcion: 'En Tejiendo Sueños encuentras la pijama favorita de tu equipo favorito, para dama, caballero y niños. Cuéntanos tu equipo por WhatsApp y te mostramos los diseños disponibles.' },
  { slug: 'seda-pantalon-largo', nombre: 'Pijama de Seda', linea: 'Seda pantalón largo', precio: 150000, tallaje: 'adulto-dama', lineas: ['pijamas-mujer'], propia: false,
    puntos: ['Tela satinada, suave y fresca', 'Cómoda y ligera', 'Varios colores: rosado, lila, verde menta, azul oscuro y más', 'De un proveedor aliado: la escogemos por su calidad'],
    fotos: ['pijama-seda-mujer-rosada-pantalon-largo', 'pijama-seda-mujer-verde-menta-pantalon-largo', 'pijama-seda-mujer-lila-short-estampada'], alt: 'Mujer con pijama de seda rosada de camisa con botones y pantalón largo',
    descripcion: 'Pijama satinada de camisa con botones y pantalón largo, suave y fresca. Disponible en varios colores; pregúntanos por WhatsApp cuáles hay hoy.' },
  { slug: 'bata-botones', nombre: 'Bata de Botones', linea: 'Bata botones', precio: 95000, tallaje: 'adulto-dama', lineas: ['batas', 'pijamas-mujer'],
    fotos: ['bata-camisera-botones-mujer-azul'], alt: 'Mujer con bata de botones azul oscuro con puntos',
    descripcion: 'Bata camisera de botones con bolsillo, cómoda para dormir y estar en casa.' },
  { slug: 'bata-gatito', nombre: 'Bata Gatito', linea: 'Batas', precio: 75000, tallaje: 'adulto-dama', lineas: ['batas', 'pijamas-mujer'],
    fotos: ['bata-de-dormir-mujer-gatito-lila'], alt: 'Mujer con bata de dormir lila estampada con un gato',
    descripcion: 'Bata de dormir lila con carita de gato.' },
  { slug: 'medias-termicas', nombre: 'Medias Térmicas Pisando Fuerte', linea: 'Medias', precio: 30000, tallaje: 'unica', lineas: ['pantuflas'], propia: false,
    puntos: ['Medias gruesas y pomposas para el frío', 'Marca colombiana Pisando Fuerte', 'Talla única'],
    fotos: [], alt: '',
    descripcion: 'Medias térmicas, gruesas y calientitas, de la marca colombiana Pisando Fuerte. Talla única.' },
  { slug: 'pantuflas-perrito', nombre: 'Pantuflas Perrito', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-peludas-perrito'], alt: 'Pantufla peluda blanca con forma de perrito',
    descripcion: 'Pantuflas peluditas de perrito.' },
  { slug: 'pantuflas-conejo', nombre: 'Pantuflas Conejo', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-peludas-conejo'], alt: 'Pantufla peluda rosada con forma de conejo',
    descripcion: 'Pantuflas peluditas de conejo, rosadas.' },
  { slug: 'pantuflas-gatito', nombre: 'Pantuflas Gatito', linea: 'Pantuflas', precio: 75000, tallaje: 'calzado', lineas: ['pantuflas'],
    fotos: ['pantuflas-peludas-gatito'], alt: 'Pantufla peluda rosada con carita de gato',
    descripcion: 'Pantuflas peluditas de gatito.' },
];


export const pesos = (n: number) => '$' + n.toLocaleString('es-CO');
export const productosDe = (linea: string) => PRODUCTOS.filter((p) => p.lineas.includes(linea));
export const lineaPorSlug = (slug: string) => LINEAS.find((l) => l.slug === slug)!;
