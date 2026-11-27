# Caliber Guard · web

Web pública de [Caliber Guard](https://caliberguard.com), la app Android para coleccionistas de relojes. Está hecha con Astro y Tailwind CSS y se publica en Cloudflare Pages con cada push a `main`.

## Comandos

| Comando           | Qué hace                                    |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala las dependencias                    |
| `npm run dev`     | Servidor local en `http://localhost:4321`   |
| `npm run build`   | Genera la web estática en `dist/`           |
| `npm run preview` | Sirve `dist/` en local para revisarla       |

## Dónde se cambia cada cosa

| Qué                                          | Dónde                                   |
| :------------------------------------------- | :-------------------------------------- |
| Precios de Premium, valoración de Play, URL de Play y del hilo del foro | `src/config.ts` |
| Funciones de cada plan                       | `src/components/Plans.astro`            |
| Preguntas frecuentes (página y datos estructurados) | `src/content/faq.ts`             |
| Registro de cambios                          | `src/content/changelog.json`            |
| «Próximamente»                               | `src/components/Roadmap.astro`          |
| Título, descripción y datos estructurados de la portada | `src/pages/index.astro`      |
| Metadatos comunes, analítica y eventos       | `src/layouts/Layout.astro`              |
| Imagen para compartir en redes               | `public/og-image.jpg` (1200×630)        |

Los precios y la valoración se escriben a mano: si cambian en Google Play, hay que actualizarlos en `src/config.ts`.

## Analítica

Google Analytics solo se carga si el visitante acepta las cookies. Eventos propios:

- `click_download_android`: clic en un enlace a Google Play, con la posición del botón (`hero`, `header`, `mini_cta`, `plans_free`, `plans_premium`).
- `click_forum_hdr`: clic en el hilo de Hablemos de Relojes (`hero`, `story`, `changelog`, `footer`).
- `cta_ios_click` y `cta_ios_form_submit`: lista de espera de iPhone.

## Hoja de ruta

El trabajo pendiente está en [`ROADMAP.md`](ROADMAP.md).
