# Hoja de ruta — Caliber Guard (landing)

Web pública de Caliber Guard, la app Android para coleccionistas de relojes. Está hecha con Astro y se publica en Cloudflare Pages en cada cambio de la rama principal. Presenta la app, sus planes gratuito y Premium, el blog y el registro de cambios de cada versión publicada en Google Play.

<!-- nexus:indice -->
## Base

- [x] R-1 Landing con presentación, funciones, planes y blog
  Página principal con cabecera, funciones, público, historia, artículos, planes y enlace a Google Play, más la política de privacidad.
- [x] R-2 SEO, analítica y consentimiento de cookies
  Google Analytics con banner de cookies, verificación de Search Console, sitemap, robots.txt, imágenes optimizadas y app-ads.txt para AdMob.
- [x] R-3 Despliegue en Cloudflare Pages
  Publicación automática desde GitHub, con página 404 correcta y sin indexar las vistas previas.

## Contenido

- [x] R-4 Registro de cambios al día con la app publicada
  Añadida la 1.3 (prueba de 24 h con anuncios, copia mensual gratuita y copias más fiables); el rediseño de la cronometría pasa a la 1.4.
- [ ] R-5 Actualizar las tarjetas de planes con las novedades de la 1.3
  El plan básico aún dice solo «Backups: seguridad local»; falta contar la copia mensual con fotos y la prueba de 24 h de la analítica y el buscador viendo anuncios.
- [x] R-6 Integrar hilo HdR
  Enlaces al hilo de Hablemos de Relojes en la historia del creador, junto al registro de cambios y en el pie, con medición de clics por posición.

## SEO y conversión

- [x] R-7 Favicon ligero y metadatos para buscadores y redes sociales
  Favicon de 4 MB y logos por defecto de Astro sustituidos por el de Caliber Guard en pocos KB. Cada página tiene ya título, descripción, canonical e imagen para compartir.
- [x] R-8 Quitar promesas falsas y unificar qué es gratis y qué es Premium
  Fuera el «sin tracking» y la promesa de exportar gratis; las funciones indican qué es gratis y qué Premium igual que la app. La insignia de copias cambia con R-5.
- [ ] R-9 Datos estructurados de la app para Google
  Describir la app, sus planes y su valoración en un formato que Google entiende, para optar a resultados enriquecidos.
- [ ] R-10 Sección de preguntas frecuentes
  Responder precio, iOS, cambio de móvil, uso sin conexión e importación desde Excel; resuelve dudas antes de descargar y atrae búsquedas concretas.
- [ ] R-11 Hero centrado en beneficios y con prueba social
  Reescribir el subtítulo sin jerga, presentar el plan gratuito en positivo y mostrar valoración, descargas y el hilo del foro.
- [ ] R-12 Sección de planes con precio, separada de la hoja de ruta
  Hoy los planes están bajo «Roadmap y actualizaciones» y no se ve el precio de Premium.
- [ ] R-13 Pulir textos, mayúsculas y textos alternativos
  Mayúsculas a la española, menos anglicismos, textos alternativos descriptivos, registro de cambios de lo más nuevo a lo más antiguo y otros retoques de copy.
- [ ] R-14 Tipografías, contraste y carga del hero
  Cargar la negrita real de Inter, subir el contraste del texto gris y evitar que la animación retrase la carga del contenido principal.
- [ ] R-15 Medir instalaciones desde la web y altas reales en la lista iOS
  Etiquetar los enlaces a Google Play para saber cuántas instalaciones vienen de la web, y no contar como alta un envío fallido a MailerLite.
- [ ] R-16 Banner de cookies con rechazo igual de visible
  Dar al botón de rechazar la misma prominencia que al de aceptar y permitir cambiar la elección más tarde, como pide la AEPD.
- [ ] R-17 Contenido propio: páginas por función y blog
  Crear páginas propias para las funciones clave y un blog en el dominio, en lugar de enviar todo el tráfico de artículos a otra web.
- [x] R-18 Enlace a la web desde el hilo del foro
  El hilo de Hablemos de Relojes enlaza a la web con etiqueta de origen, así que Analytics muestra las visitas que llegan desde el foro.
- [ ] R-19 Actividad del hilo y opiniones de foreros en la web
  Mostrar cuántas respuestas tiene el hilo y cuándo se actualizó, y citar comentarios del foro como testimonios, con permiso de sus autores.
<!-- /nexus:indice -->

## Detalle de lo pendiente

### R-5 Actualizar las tarjetas de planes con las novedades de la 1.3

- **Objetivo:** que la comparativa de planes refleje lo que ofrece la versión gratuita desde la 1.3.
- **Alcance:** tarjeta «Plan Básico» de `src/components/Roadmap.astro`; revisar también la tarjeta Premium (copias ilimitadas, sin anuncios) y la de «Futuro (v2.0)» frente a la hoja de ruta de la app.
- **También:** la insignia «Premium: Copia de seguridad y Restauración» de `src/components/Privacy.astro` pasa a «Gratis: una copia al mes» y «Premium: copias ilimitadas», porque desde la 1.3 restaurar es libre y hay una copia mensual gratuita.
- **Criterios de hecho:** textos coherentes con la versión publicada en Play y `npm run build` sin errores.
- **Dependencias:** publicar antes la 1.3 en Google Play (R-16 de la hoja de ruta de la app).

> Las tareas R-7 a R-17 salen de la auditoría SEO y de copywriting del 27/11/2026.

### R-9 Datos estructurados de la app para Google

- JSON-LD `MobileApplication` en `src/layouts/Layout.astro` o en la portada: `name`, `operatingSystem: ANDROID`, `applicationCategory: LifestyleApplication`, `offers` (0 € y precio Premium), `downloadUrl` de Play, `aggregateRating` cuando haya valoraciones públicas.
- `Organization` con logo y `sameAs` (Instagram, YouTube).
- `FAQPage` cuando exista R-10.
- **Criterios de hecho:** sin errores en la prueba de resultados enriquecidos de Google.

### R-10 Sección de preguntas frecuentes

- Preguntas: precio de Premium, versión iOS, qué pasa al cambiar de móvil (copias), uso sin conexión, importación CSV/Excel, qué datos se recogen.
- Usar `<details>` para que sea accesible sin JavaScript. Marcar con `FAQPage` (R-9).

### R-11 Hero centrado en beneficios y con prueba social

- Subtítulo propuesto: «Descubre qué relojes llevas de verdad, cuándo toca revisión y cuánto vale tu colección. Todo en tu móvil, sin crear cuenta.»
- Debajo de los botones: «Gratis para siempre. Premium sin anuncios desde X €» (falta el precio real).
- Prueba social: valoración y descargas de Play, y una línea como «Hecha con el feedback de la comunidad de Hablemos de Relojes» que enlace al hilo (usar `HDR_THREAD_URL` de `src/config.ts`).
- Valorar un botón de descarga fijo en la cabecera para móvil.

### R-12 Sección de planes con precio, separada de la hoja de ruta

- Sacar las tarjetas Básico y Premium de `src/components/Roadmap.astro` a una sección «Planes» con precio y botón en cada tarjeta.
- Dejar la tarjeta «Futuro» y el registro de cambios en la hoja de ruta. Cambiar «mejoras trimestrales» por algo que case con el ritmo real.
- En la tarjeta de futuro, cambiar los nombres internos por beneficios: «Amazon API Real» por «Precios y fotos automáticos» e «IA Scanner» por «Reconoce tu reloj con una foto».

### R-13 Pulir textos, mayúsculas y textos alternativos

- Mayúsculas a la española en las tarjetas de planes («Inventario ilimitado», «Coste por puesta»).
- Funciones: cambiar «fichas tácticas», «ROI» y «Entiende tu pasión» por beneficios concretos.
- Audiencia: «Colección 10+» excluye a quien empieza.
- Historia: firma del autor, «Excel» con mayúscula, «registrar» en vez de «trackear».
- Registro de cambios en orden inverso.
- Textos alternativos descriptivos y en español (hero, funciones). Logo con `alt=""` cuando va junto al nombre.
- Pie: el icono «Suscribirse a newsletter» es un `mailto`; abrir el modal o cambiar la etiqueta.
- Artículos externos: avisar de que son de otra web.
- Sustituir el README de plantilla de Astro.

### R-14 Tipografías, contraste y carga del hero

- Importar Inter 400/600/700, solo el subconjunto latin, en `src/layouts/Layout.astro`.
- Texto gris `#888` sobre `#2C2C2C` da un contraste aproximado de 3,9:1; subirlo a 4,5:1 como mínimo. Texto legal del modal a 12 px como mínimo.
- El H1 y la imagen del hero arrancan con `opacity: 0`: acortar o quitar la animación de opacidad.
- Añadir `theme-color` y el manifest web.

### R-15 Medir instalaciones desde la web y altas reales en la lista iOS

- Enlaces a Play con `&referrer=utm_source%3Dcaliberguard.com%26utm_medium%3D<posición>`.
- `WaitlistModal.astro` envía con `no-cors` y siempre muestra éxito: usar el endpoint JSONP de MailerLite o un Worker que devuelva el resultado real.

### R-16 Banner de cookies con rechazo igual de visible

- «Rechazar» con el mismo estilo de botón que «Aceptar».
- Enlace «Configurar cookies» en el pie que vuelva a mostrar el banner.

### R-17 Contenido propio: páginas por función y blog

- Páginas candidatas: control de marcha de relojes automáticos, registro de uso de relojes, inventario de relojes para el seguro.
- Blog en `/blog` con colecciones de contenido de Astro. Temas ligados a la app: medir la marcha, cada cuánto revisar un reloj, asegurar una colección, coste por puesta.
- Decidir qué hacer con los enlaces a completatuestilo.com.

### R-19 Actividad del hilo y opiniones de foreros en la web

- **Objetivo:** reforzar la prueba social con actividad real del foro.
- **Actividad:** HdR usa Discourse, que publica cada hilo en JSON (`/t/273999.json`). Leerlo al compilar para mostrar «X respuestas · actualizado hace N días» junto al enlace de la historia. Si la petición falla, el build tiene que seguir y mostrar solo el enlace.
- **Testimonios:** dos o tres comentarios del hilo con su nombre de usuario, cada uno con permiso de su autor. Valorar si encajan en la historia o en el hero (R-11).
- **Antes de empezar:** comprobar con el evento `click_forum_hdr` de Analytics que la gente pulsa los enlaces.
- **Criterios de hecho:** los datos se ven en la web, el build no se rompe sin conexión con el foro y hay permiso guardado de cada testimonio.
