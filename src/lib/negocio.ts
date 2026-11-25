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
        { dias: 'Festivos', horas: '11:00 a. m. – 7:00 p. m.' },
      ],
      foto: 'tienda-pijamas-centro-comercial-santafe-fachada-bogota',
      fotoAlt: 'Fachada de la tienda de pijamas Tejiendo Sueños en el Centro Comercial Santafé, Bogotá',
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
        { dias: 'Festivos', horas: '11:00 a. m. – 7:00 p. m.' },
      ],
      foto: 'tienda-pijamas-bulevar-niza-fachada-bogota',
      fotoAlt: 'Fachada de la tienda de pijamas Tejiendo Sueños en el Centro Comercial Bulevar Niza, Bogotá',
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
export const BORRADOR = false;

export const MENSAJE_GENERAL = 'Hola, Tejiendo Sueños. Quiero información sobre sus pijamas.';

export const ENVIOS = {
  nacional: 'Enviamos a toda Colombia con Interrapidísimo. El envío cuesta entre $15.000 y $20.000 según la ciudad, y puedes pagar contraentrega.',
  bogota: 'En Bogotá te la llevamos con domiciliario: si la pijama está en la tienda sale de una vez y te llega el mismo día; si está en la fábrica, te llega al día siguiente. El valor del domicilio depende de tu barrio y te lo decimos por WhatsApp.',
  corto: [
    { t: 'Bogotá', d: 'Domicilio el mismo día o al día siguiente' },
    { t: 'Toda Colombia', d: 'Interrapidísimo, $15.000 a $20.000' },
    { t: 'Contraentrega', d: 'Pagas cuando recibes' },
  ],
};

export const PAGOS = {
  tienda: 'En nuestras tiendas recibimos todos los medios de pago: efectivo, tarjeta débito o crédito, Bre-B, Nequi y Daviplata.',
  distancia: 'A distancia puedes pagar por transferencia, Bre-B, Nequi, Daviplata o con tarjeta por un link de pago seguro que te enviamos por WhatsApp. También puedes pagar contraentrega.',
};

// Cuidado y lavado (consejos de Rocío). Se muestran en cada producto y en la página de envíos.
export const CUIDADO = [
  'En la primera lavada, agrégale una copita de vinagre blanco y no la metas a la secadora. Después ya la puedes lavar normal.',
  'Usa detergente para ropa delicada y un buen suavizante.',
  'Trata de no lavarla con toallas ni con tenis: así no le salen motas.',
];
