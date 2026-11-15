# Tejiendo Sueños — sitio web

Sitio de Tejiendo Sueños, fábrica de pijamas en Bogotá. Hecho con [Astro](https://astro.build): genera páginas estáticas (HTML) rápidas y fáciles de alojar.

## Páginas
- `/pijamas-al-por-mayor` — página de ventas al por mayor (lista).
- `/` — por ahora redirige a la de por mayor. Aquí irá la tienda al detal.

## Dónde está cada cosa
- `src/lib/negocio.ts`: datos del negocio (WhatsApp, dirección, horario). **Única fuente**: si algo cambia, se cambia aquí.
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
- [ ] Instalar GA4 y la etiqueta de Google Ads (el evento `contacto_whatsapp_mayor` ya se dispara en cada clic a WhatsApp).
- [ ] Cambiar `site` en `astro.config.mjs` por el dominio definitivo.
