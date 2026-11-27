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
- [x] R-5 Actualizar las tarjetas de planes con las novedades de la 1.3
  Las tarjetas y la insignia de copias cuentan la copia mensual gratis y la prueba de 24 h; Premium, las copias ilimitadas; y «Próximamente» sigue la hoja de ruta de la app.
- [x] R-6 Integrar hilo HdR
  Enlaces al hilo de Hablemos de Relojes en la historia del creador, junto al registro de cambios y en el pie, con medición de clics por posición.

## SEO y conversión

- [x] R-7 Favicon ligero y metadatos para buscadores y redes sociales
  Favicon de 4 MB y logos por defecto de Astro sustituidos por el de Caliber Guard en pocos KB. Cada página tiene ya título, descripción, canonical e imagen para compartir.
- [x] R-8 Quitar promesas falsas y unificar qué es gratis y qué es Premium
  Fuera el «sin tracking» y la promesa de exportar gratis; las funciones indican qué es gratis y qué Premium igual que la app. La insignia de copias cambia con R-5.
- [x] R-9 Datos estructurados de la app para Google
  La portada describe para Google la app, la organización y los planes gratis, mensual y anual con IVA. Los precios se ven ya en las tarjetas de planes.
- [x] R-10 Sección de preguntas frecuentes
  Seis preguntas desplegables tras los planes: precio, iPhone, cambio de móvil, uso sin conexión, importación desde Excel y datos recogidos, también en los datos estructurados.
- [x] R-11 Hero centrado en beneficios y con prueba social
  Subtítulo con beneficios, precios claros, valoración de Play y enlace al foro; botón de descarga fijo en la cabecera e iOS como enlace secundario. La valoración se actualiza a mano.
- [x] R-12 Sección de planes con precio, separada de la hoja de ruta
  Sección «Planes» propia, con precio, ahorro del plan anual y botón de descarga en cada plan. La hoja de ruta queda aparte, tras las preguntas frecuentes.
- [x] R-13 Pulir textos, mayúsculas y textos alternativos
  Textos de funciones, audiencia e historia sin jerga, textos alternativos descriptivos, registro de cambios de lo más nuevo a lo más antiguo, pie sin icono duplicado y README propio.
- [x] R-14 Tipografías, contraste y carga del hero
  Inter con negrita real y solo caracteres latinos, texto gris con contraste de 5,2:1 o más, hero visible desde el primer instante, theme-color y manifest web.
- [x] R-15 Medir instalaciones desde la web y altas reales en la lista iOS
  Cada botón a Google Play lleva su etiqueta de origen para Play Console y Firebase, y la lista de iPhone solo confirma y cuenta las altas que MailerLite acepta.
- [x] R-16 Banner de cookies con rechazo igual de visible
  Rechazar y aceptar con el mismo botón, y enlace «Configurar cookies» en el pie para cambiar la elección; al retirar el consentimiento se borran las cookies de Analytics.
- [ ] R-17 Contenido propio: páginas por función y blog
  Crear páginas propias para las funciones clave y un blog en el dominio, en lugar de enviar todo el tráfico de artículos a otra web.
- [x] R-18 Enlace a la web desde el hilo del foro
  El hilo de Hablemos de Relojes enlaza a la web con etiqueta de origen, así que Analytics muestra las visitas que llegan desde el foro.
- [ ] R-19 Actividad del hilo y opiniones de foreros en la web
  Mostrar cuántas respuestas tiene el hilo y cuándo se actualizó, y citar comentarios del foro como testimonios, con permiso de sus autores.
<!-- /nexus:indice -->

## Detalle de lo pendiente

> Las tareas R-7 a R-17 salen de la auditoría SEO y de copywriting del 27/11/2026.

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
