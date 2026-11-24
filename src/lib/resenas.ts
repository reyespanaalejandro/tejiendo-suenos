// Reseñas reales de los perfiles de Google de las dos tiendas (consultadas el 23 nov. 2026).
// Texto tal cual: solo se corrigen errores de tipeo evidentes. Nombre + inicial del apellido.
// Si cambian las cifras, se actualizan en RESUMEN_GOOGLE.

export const RESUMEN_GOOGLE = {
  promedio: 5.0,
  total: 28, // 17 en Santafé + 11 en Bulevar Niza
};

export type Tema = 'calidad' | 'familia' | 'futbol' | 'atencion' | 'envio' | 'precio' | 'diseno' | 'comodidad';

export interface Resena { nombre: string; texto: string; tienda: 'santafe' | 'bulevar'; temas: Tema[] }

export const RESENAS: Resena[] = [
  { nombre: 'Valentina C.', tienda: 'santafe', temas: ['calidad'], texto: 'He comprado estas pijamas por años y en definitiva su calidad es la mejor, siempre volveré.' },
  { nombre: 'J Milena L.', tienda: 'bulevar', temas: ['familia', 'atencion'], texto: 'Me encantaron las pijamas para hacer match con mi familia y la atención fue muy agradable.' },
  { nombre: 'Johanna M.', tienda: 'bulevar', temas: ['futbol', 'calidad'], texto: 'Compré pijamas de nuestro equipo de fútbol y han sido el mejor regalo que haya escogido. Su material es abrigado y su diseño es muy lindo.' },
  { nombre: 'Juan David H.', tienda: 'santafe', temas: ['calidad', 'atencion'], texto: 'Productos de muy buena calidad, la atención es impecable de la Sra. Rocío, y la tienda es muy linda y organizada.' },
  { nombre: 'Sonia H.', tienda: 'santafe', temas: ['envio', 'calidad'], texto: 'Divina la pijama, muy buena calidad y me llegó súper rápido.' },
  { nombre: 'Luna Alejandra M.', tienda: 'bulevar', temas: ['comodidad', 'precio'], texto: 'Las pijamas son muy cómodas, dan una frescura al momento de dormir y lo mejor, los precios son muy buenos.' },
  { nombre: 'Jhue J.', tienda: 'santafe', temas: ['familia', 'calidad'], texto: 'Excelente calidad, buena variedad en las pijamas. Las pijamas familiares son un lindo detalle.' },
  { nombre: 'Viviana A.', tienda: 'bulevar', temas: ['calidad', 'diseno'], texto: 'Excelente calidad en tela y estampados.' },
  { nombre: 'Adriana C.', tienda: 'bulevar', temas: ['calidad', 'precio', 'atencion'], texto: 'Son pijamas de muy buena calidad, precio justo y buena atención.' },
  { nombre: 'Caro A.', tienda: 'santafe', temas: ['diseno', 'atencion', 'calidad'], texto: 'Me encantan sus productos variados y la atención que se recibe en sus locales. Me encantan sus diseños y calidad.' },
  { nombre: 'J Milena L.', tienda: 'santafe', temas: ['comodidad', 'atencion'], texto: 'Una atención súper amable y las pijamas son demasiado cómodas.' },
  { nombre: 'Paula Z.', tienda: 'santafe', temas: ['diseno', 'calidad'], texto: 'Tienen gran variedad de diseños, buena calidad, y el lugar es muy agradable.' },
  { nombre: 'Victoria M.', tienda: 'santafe', temas: ['diseno'], texto: 'Todas sus pijamas son muy lindas, los diseños únicos.' },
  { nombre: 'Raquel B.', tienda: 'santafe', temas: ['atencion'], texto: 'Divinas estas pijamas. La atención es excelente. ¡Recomendadísimo!' },
  { nombre: 'Sara A.', tienda: 'santafe', temas: ['calidad', 'diseno', 'precio'], texto: 'Excelente calidad, variedad de diseños y muy buenos precios.' },
  { nombre: 'Juan Carlos T.', tienda: 'santafe', temas: ['diseno', 'atencion'], texto: 'Excelentes diseños y lo mejor, muy buena atención. Los recomiendo 100%.' },
];

// Para la página de inicio.
export const RESENAS_INICIO = [0, 1, 2, 3, 4, 5].map((i) => RESENAS[i]);

// Tres reseñas para una ficha: primero las del tema que más le sirve al producto,
// luego otras, rotando según el producto para que no se repitan siempre las mismas.
export function resenasPara(temas: Tema[], semilla: string, n = 3): Resena[] {
  let h = 0;
  for (const c of semilla) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const rot = RESENAS.map((_, i) => RESENAS[(i + h) % RESENAS.length]);
  const elegidas: Resena[] = [];
  for (const t of temas) for (const r of rot) if (r.temas.includes(t) && !elegidas.includes(r) && elegidas.length < n) elegidas.push(r);
  for (const r of rot) if (!elegidas.includes(r) && elegidas.length < n) elegidas.push(r);
  return elegidas.slice(0, n);
}
