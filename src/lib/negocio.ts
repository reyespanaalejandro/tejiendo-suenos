// Datos del negocio: la ÚNICA fuente. Si algo cambia, se cambia aquí.
//  

export const NEGOCIO = {
  nombre: 'Tejiendo Sueños',
  whatsapp: '573059399326',
  whatsappVisible: '305 939 9326',
  // Las dos tiendas. Santafé va primero: es la sede que queremos impulsar.
  tiendas: [
    {
      id: 'santafe',
      nombre: 'Santafé',
      centroComercial: 'Centro Comercial Santafé',
      local: 'Local 3-110, Plaza Ecuador',
      direccion: 'Cl. 185 #45-03',
      zona: 'Norte de Bogotá',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pijamas+Tejiendo+Sue%C3%B1os+Centro+comercial+Santaf%C3%A9&query_place_id=ChIJ9c2eRkaFP44RcOuUA9fspoQ',
      horario: [
        { dias: 'Lunes a jueves', horas: '10:30 a. m. – 8:00 p. m.' },
        { dias: 'Viernes a domingo', horas: '10:30 a. m. – 8:30 p. m.' },
      ],
    },
    {
      id: 'bulevar',
      nombre: 'Bulevar Niza',
      centroComercial: 'Centro Comercial Bulevar Niza',
      local: 'Local 163',
      direccion: 'Cl. 127D #58-99',
      zona: 'Suba, Bogotá',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pijamas+Tejiendo+Sue%C3%B1os+Centro+Comercial+Bulevar+Niza',
      horario: [
        { dias: 'Lunes a jueves', horas: '10:30 a. m. – 7:30 p. m.' },
        { dias: 'Viernes a domingo', horas: '10:30 a. m. – 8:00 p. m.' },
      ],
    },
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
