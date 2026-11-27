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
- [x] R-23 Guía de estilo para escribir en el hilo de HdR
  Guía sacada de las intervenciones de Tony en el hilo, con su tono, la estructura de actualizaciones, avisos y respuestas, y las peticiones que siguen abiertas.

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
- [x] R-17 Contenido propio: páginas por función
  Páginas de cronometría, registro de uso e inventario para el seguro, enlazadas desde la portada y el pie. El blog pasa a R-20.
- [x] R-18 Enlace a la web desde el hilo del foro
  El hilo de Hablemos de Relojes enlaza a la web con etiqueta de origen, así que Analytics muestra las visitas que llegan desde el foro.
- [ ] R-19 Actividad del hilo y opiniones de foreros en la web
  En pausa. Mostrar cuántas respuestas tiene el hilo y cuándo se actualizó, y citar comentarios del foro como testimonios, con permiso de sus autores.
- [ ] R-20 Sinergia con el blog Completa tu Estilo
  Los artículos se publican en Completa tu Estilo, el blog del autor, y las dos webs se enlazan. Ya enlazan las guías con etiqueta de origen; faltan las piezas nuevas.
- [x] R-21 Capturas nuevas de la app en la web
  Capturas de la versión 1.3 con la colección real en el hero, las funciones, la privacidad y la imagen para compartir, más ocho imágenes listas para Google Play.
- [x] R-22 Subir las capturas nuevas a la ficha de Google Play
  Las ocho capturas de la 1.3 ya están en la ficha. La del calendario se cambiará cuando salga la 1.3.1, que lo muestra en castellano.

## Captación

- [x] R-24 Diagnóstico de retención y conversión desde mayo
  Desde marzo, 76 instalaciones nuevas, casi todas en marzo y abril, y una al mes desde junio; la base se mantiene en unos 40 móviles, pero solo 9 abren la app cada mes. El problema principal es de llegada, no de abandono.
- [ ] R-25 Colaboración con canales de relojería en español
  Contactar con Dando la Hora y Atrapando el Tiempo ofreciendo Premium vitalicio y un mes de Premium para su audiencia, con enlaces etiquetados para medir lo que llega de cada canal.
- [x] R-26 Intervención en el hilo de HdR con la 1.3
  Publicada en el mensaje 62 del hilo el 27/11/2026: copia mensual gratis, aviso de copia, prueba de 24 h y copias más fiables, con la 1.4 de la cronometría como lo siguiente.
- [x] R-27 Ficha de Google Play que aparezca en las búsquedas
  Descripciones nuevas publicadas el 27/11/2026, al día con la 1.3 y con las palabras que buscan los aficionados. Hacia el 25/12/2026, comparar las instalaciones por búsqueda con las de antes.
- [ ] R-28 Presentar la app en el foro Relojes Especiales
  Responder como autor en los hilos donde se pregunta por apps para la colección, respetando las normas del foro sobre autopromoción. Es el mayor foro de relojería en español y sus hilos siguen atrayendo lectores desde Google.
- [ ] R-29 Segunda ronda de canales y podcasts con la 1.4
  Cuando salga la cronometría por posiciones, contactar con Horas y Minutos, El Relojero Aficionado y los podcasts El Podcast de Klokker y Tiempo y Estilo, con lo aprendido en la primera ronda.
<!-- /nexus:indice -->

## Detalle de lo pendiente

> Las tareas R-7 a R-17 salen de la auditoría SEO y de copywriting del 27/11/2026.

### R-19 Actividad del hilo y opiniones de foreros en la web

- **Objetivo:** reforzar la prueba social con actividad real del foro.
- **Actividad:** HdR usa Discourse, que publica cada hilo en JSON (`/t/273999.json`). Leerlo al compilar para mostrar «X respuestas · actualizado hace N días» junto al enlace de la historia. Si la petición falla, el build tiene que seguir y mostrar solo el enlace.
- **Testimonios:** dos o tres comentarios del hilo con su nombre de usuario, cada uno con permiso de su autor. Valorar si encajan en la historia o en el hero (R-11).
- **En pausa por decisión del usuario (27/11/2026).**
- **Punto de partida:** según el foro, el enlace a la web del hilo tenía 119 pulsaciones antes de cambiarlo por el etiquetado (R-18). Comparar con las visitas de `utm_source=hablemosderelojes` y los clics `click_forum_hdr` antes de retomarla.
- **Criterios de hecho:** los datos se ven en la web, el build no se rompe sin conexión con el foro y hay permiso guardado de cada testimonio.

### R-20 Sinergia con el blog Completa tu Estilo

- **Decisión del usuario (27/11/2026):** no habrá blog en caliberguard.com. Completa tu Estilo (completatuestilo.com) es el blog del autor, y las dos webs deben reforzarse entre sí.
- **Hecho:** la sección «Aprende sobre relojes» enlaza a la URL definitiva de cada guía, sin pasar por la redirección 301, con `utm_source=caliberguard.com&utm_medium=referral&utm_campaign=landing&utm_content=articulos`, y presenta el blog como «mi blog de relojería».
- **Hecho en la hoja de ruta del blog** (`../completa-tu-estilo/docs/ROADMAP.md`, sección «Sinergia con Caliber Guard»):
  - actualizar su banner de Caliber Guard con los textos actuales y etiqueta de origen (tarea 25);
  - cuatro piezas que enlazan con las páginas de funciones: revisar un automático, medir la precisión en casa, asegurar la colección y coste por puesta.
- **Pendiente aquí:** cuando se publique cada pieza,
  - sustituir o completar las tarjetas de «Aprende sobre relojes» con las piezas nuevas;
  - enlazar desde cada página de función a su artículo (cronometría a las de revisar y medir; inventario a la de asegurar; registro de uso a la de coste por puesta).
- **Criterios de hecho:** las cuatro piezas publicadas y enlazadas en los dos sentidos, con etiqueta de origen en ambos.

### R-25 Colaboración con canales de relojería en español

- **Objetivo:** llegar a audiencias de aficionados ya formadas sin tener que crear comunidad propia.
- **Pasos:**
  1. Premium vitalicio se regala desde RevenueCat como derecho promocional, con el identificador del móvil del creador. Para sacarlo: Ajustes → pulsar 7 veces el texto «CALIBER GUARD v…» del final → Pantalla Secreta → copiar el ID. El ID es anónimo y va ligado a la instalación: si el creador reinstala o cambia de móvil, tiene que mandar el nuevo.
  2. Personalizar el borrador de cada canal (conversación del 27/11/2026: Alfredo García, por El Número Uno; Atrapando el Tiempo, por sus charlas con aficionados, con la propuesta de salir en una) y enviarlo por el correo de contacto del canal. Confirmar antes el nombre del autor de Atrapando el Tiempo.
  3. Si aceptan, darles un código de un mes de Premium para su audiencia, como el que se regaló en el foro, y un enlace etiquetado para la descripción del vídeo:
     - Dando la Hora: `https://play.google.com/store/apps/details?id=com.apmysoft.caliber_guard&referrer=utm_source%3Ddandolahora%26utm_medium%3Dvideo%26utm_campaign%3Dcreadores`
     - Atrapando el Tiempo: el mismo con `utm_source%3Datrapandoeltiempo`.
  4. Una sola vez, entre una y dos semanas después, un recordatorio amable si no han respondido.
- **Dependencias y riesgos:** la audiencia de Dando la Hora es sobre todo latinoamericana y la app solo trabaja en euros (R-21 de la app, idiomas y monedas); avisarlo en el mensaje. La cronometría por posiciones (R-19 de la app, versión 1.4) es la mejor ocasión para una segunda propuesta.
- **Criterios de hecho:** mensajes enviados a los dos canales y respuesta (o falta de ella) apuntada aquí.

### R-28 Presentar la app en el foro Relojes Especiales

- **Objetivo:** estar presente donde los aficionados en español buscan apps para su colección, con una respuesta que siga trayendo lectores durante años.
- **Hilos candidatos:**
  - «¿Usáis alguna app relojera? ¿Cuál sería la app perfecta?»: https://relojes-especiales.com/threads/%C2%BFus%C3%A1is-alguna-app-relojera-%C2%BFcu%C3%A1l-ser%C3%ADa-la-app-perfecta.517897/
  - «App para organizar la colección de relojes»: https://relojes-especiales.com/threads/app-para-organizar-la-coleccion-de-relojes.457078/
- **Antes de escribir:** leer las normas sobre autopromoción y, si hay dudas, preguntar a un moderador si conviene un hilo propio en el subforo adecuado.
- **Tono:** el de `docs/estilo-hilo-hdr.md`, adaptado a un foro donde nadie conoce la app: decir desde la primera línea que eres el autor y responder a lo que pedía el hilo.
- **Medición:** enlace a la web con `utm_source=relojesespeciales&utm_medium=foro`.
- **Criterios de hecho:** respuesta o hilo publicado con permiso del foro, y las visitas que llegan desde Relojes Especiales visibles en Analytics.

### R-29 Segunda ronda de canales y podcasts con la 1.4

- **Depende de:** la 1.4 publicada (R-19 de la app) y lo aprendido en R-25: qué mensaje funcionó y cuántas instalaciones llegaron.
- **Canales:** Horas y Minutos (Santiago Tejedor), el más recomendado en español aunque publica poco, y El Relojero Aficionado, con relojes asequibles y un público que encaja. Big Ben Theory y Nicol's TV encajan menos.
- **Podcasts:** El Podcast de Klokker (semanal, centrado en quien lleva el reloj) y Tiempo y Estilo (iVoox). Proponer una entrevista sobre el aficionado que se programa su propia app.
- **Mismo regalo y medición que R-25:** Premium vitalicio desde RevenueCat, un mes para la audiencia y un enlace etiquetado por canal.
- **Criterios de hecho:** contactos enviados y respuestas apuntadas aquí.
