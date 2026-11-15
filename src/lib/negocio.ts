// Datos del negocio: la ÚNICA fuente. Si algo cambia, se cambia aquí.
//  

export const NEGOCIO = {
  nombre: 'Tejiendo Sueños',
  whatsapp: '573059399326',
  whatsappVisible: '305 939 9326',
  tienda: {
    centroComercial: 'Centro Comercial Bulevar Niza',
    local: 'Local 163',
    direccion: 'Cra. 58 #127-59',
    zona: 'Suba, Bogotá',
    mapsUrl: 'https://maps.google.com/?q=Centro+Comercial+Bulevar+Niza+Bogota',
  },
  horario: [
    { dias: 'Lunes a jueves', horas: '10:30 a. m. – 7:30 p. m.' },
    { dias: 'Viernes y sábado', horas: '10:30 a. m. – 8:00 p. m.' },
    { dias: 'Domingo', horas: '10:30 a. m. – 7:00 p. m.' },
  ],
  instagram: 'https://www.instagram.com/pijamastejiendosuenos/',
  fabricaDesde: 2018,
  tiendaDesde: 2022,
};

export function whatsappUrl(mensaje: string) {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const MENSAJE_MAYOR =
  'Hola, Tejiendo Sueños. Tengo un negocio y me interesa comprar pijamas al por mayor. ¿Me envían el catálogo y los precios mayoristas?';

// Muestra la franja "Borrador" arriba del sitio. Poner en false al lanzar.
export const BORRADOR = true;

export const MENSAJE_GENERAL = 'Hola, Tejiendo Sueños. Quiero información sobre sus pijamas.';

export const ENVIOS = {
  nacional: 'Enviamos a toda Colombia con Interrapidísimo. El envío cuesta entre $15.000 y $20.000 según la ciudad, y puedes pagar contraentrega.',
  bogota: 'En Bogotá, si la pijama está en tienda, te la llevamos máximo al día siguiente con domiciliario.',
};
