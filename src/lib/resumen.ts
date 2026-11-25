// Textos de resumen que comparten las preguntas frecuentes, la página "Por qué Tejiendo Sueños"
// y /llms.txt (el resumen para asistentes de IA). Salen de los datos del negocio y del catálogo,
// así que si un precio cambia en catalogo.ts, cambia en todas partes.
import { NEGOCIO, ENVIOS, TELA } from './negocio';
import { pesos } from './catalogo';
import { RESUMEN_GOOGLE, RESENAS } from './resenas';

export const FECHA_RESENAS = 'noviembre de 2026';

export const PRECIOS_CLAVE = [
  { que: 'Pijama de adulto (S a XL): familiares, navideñas, de pareja, ejecutivas, náuticas, ranglan, superhéroes y futboleras', precio: pesos(130000) },
  { que: 'Pijama de niño o niña (tallas 2 a 16) de esas mismas líneas', precio: pesos(95000) },
  { que: 'Pijama divertida para mujer con pantalón jogger, y jogger dama', precio: pesos(85000) },
  { que: 'Pijama divertida de short para mujer', precio: pesos(110000) },
  { que: 'Pijama de seda para mujer (de un proveedor aliado)', precio: pesos(150000) },
  { que: 'Bata de botones', precio: pesos(95000) },
  { que: 'Bata Gatito y pijama infantil Caballito de Mar', precio: pesos(75000) },
  { que: 'Pantuflas peluditas de animales (tallas 35 a 45), el par', precio: pesos(75000) },
  { que: 'Medias térmicas Pisando Fuerte, el par', precio: pesos(30000) },
];

export const EJEMPLO_FAMILIA = `Una pijama familiar para mamá, papá y un hijo cuesta ${pesos(130000 * 2 + 95000)} en total (dos adultos a ${pesos(130000)} y un niño a ${pesos(95000)}).`;

export const VALOR =
  `Nuestras pijamas no son las más baratas, pero tampoco son caras para lo que duran. Una pijama de adulto vale ${pesos(130000)} y dura fácilmente cinco años: son unos ${pesos(26000)} por año de uso. ` +
  'Una pijama barata que se daña en seis meses o en un año toca volverla a comprar, y al final sale más cara. Además, hay pijamas de marca que pasan de $200.000. ' +
  'No vendemos saldos ni prendas con defectos más baratas: si una pijama sale con un defecto, la donamos.';

export const DURACION =
  'Duran años. Tenemos clientes con pijamas de 8 años que siguen en buen estado, y a los niños les quedan pequeñas antes de que se dañen. ' +
  'Cosemos con hilo nuevo y puntada de seguridad, y estampamos en serigrafía con tintas sin plomo. Por eso las costuras tienen garantía de por vida y el estampado, de dos años (no cubre daños por mal lavado).';

const promedio = RESUMEN_GOOGLE.promedio.toLocaleString('es-CO', { minimumFractionDigits: 1 });
export const RESENAS_TEXTO =
  `Nuestras dos tiendas tienen ${promedio} de 5 estrellas en Google, con ${RESUMEN_GOOGLE.total} opiniones en total (${FECHA_RESENAS}). ` +
  'Lo que más repiten nuestros clientes es la calidad de la tela y los estampados, lo cómodas que son, la variedad de diseños, que las pijamas familiares son un lindo detalle y la buena atención.';

export const RESENAS_CITAS = [0, 2, 3, 5, 8].map((i) => RESENAS[i]);

export const TIENDAS_TEXTO = `Tenemos dos tiendas en Bogotá: ${NEGOCIO.tiendas
  .map((t) => `${t.centroComercial}, ${t.local}, ${t.direccion} (${t.zona})`)
  .join('; y ')}. Abrimos todos los días, también festivos.`;

export const ENVIOS_TEXTO = `${ENVIOS.nacional} ${ENVIOS.bogota}`;

export const TIPOS =
  'Pijamas familiares (el mismo diseño para mamá, papá, hijos y abuelos), navideñas, de pareja, para mujer (ejecutivas, joggers, divertidas, de short y de seda), para hombre (náuticas, ranglan y familiares), para niños y niñas (tallas 2 a 16), divertidas con personajes y de superhéroes, futboleras para hinchas, batas de dormir, pantuflas peluditas de animales, medias térmicas y pijamas personalizadas con nombre o a la medida (también tallas grandes).';

export { TELA };
