# Tejiendo Sueños — sitio web

Sitio de Tejiendo Sueños, fábrica de pijamas en Bogotá. Hecho con [Astro](https://astro.build): genera páginas estáticas (HTML) rápidas y fáciles de alojar.

## Páginas
- **Detal:** `/` (inicio), `/tienda`, una página por línea (`/pijamas-familiares`, `/pijamas-navidenas`, `/pijamas-de-pareja`, `/pijamas-mujer`, `/pijamas-hombre`, `/pijamas-ninos`, `/batas`, `/pantuflas`), una ficha por producto (`/producto/...`), `/pijamas-personalizadas` y `/guia-de-tallas`.
- **Por mayor:** `/pijamas-al-por-mayor`.
- **Compartidas:** `/nosotros`, `/contacto`, `/envios-cambios-y-garantia`, `/preguntas-frecuentes`.

## Dónde está cada cosa
- `src/lib/negocio.ts`: datos del negocio (WhatsApp, las dos tiendas con dirección y horario, envíos). **Única fuente**: si algo cambia, se cambia aquí. `BORRADOR = true` muestra la franja de borrador.
- `src/lib/resenas.ts`: reseñas reales de Google de las dos tiendas y el resumen (promedio y total). Si llegan reseñas nuevas, se actualiza `RESUMEN_GOOGLE` y se agregan aquí.
- `src/lib/catalogo.ts`: productos, precios por persona, líneas y tallas. Para agregar un producto, se agrega aquí con su foto en `src/assets/fotos/`.
- `src/pages/pijamas-al-por-mayor.astro`: textos y estructura de la página de por mayor.
- `src/assets/fotos/`: fotos (Astro las convierte a AVIF/WebP en varios tamaños al compilar).
- `src/components/Logo.astro` y `src/assets/logo-tejiendo-suenos.png`: logo oficial.
- `src/styles/global.css`: colores, tipografías y botones.

## Trabajar en local
```sh
npm install
npm run dev      # vista local en http://localhost:4321
npm run build    # genera la carpeta dist/
```

## Publicación
Vercel (o Cloudflare Pages) publica automáticamente cada cambio que llega a `main`.
Configuración: framework **Astro**, comando `npm run build`, carpeta de salida `dist`.

## Pendientes antes de lanzar
- [ ] Fotos reales de la fábrica y del equipo (sección "Quiénes somos").
- [ ] Confirmar pedido mínimo por mayor y tiempos de producción.
- [ ] Fotos de las navideñas Capibaras, Osos Polares y Gatitos (con las modelos de las sesiones).
- [ ] Medidas en centímetros para la guía de tallas (Rocío la está haciendo).
- [ ] Foto de las medias térmicas y de las futboleras (sin escudos en primer plano).
- [ ] Instalar GA4 y la etiqueta de Google Ads (el evento `contacto_whatsapp_mayor` ya se dispara en cada clic a WhatsApp).
- [x] Dominio: pijamastejiendosuenos.com (Cloudflare).
