# Guía de estilo: intervenciones en el hilo de Hablemos de Relojes

Sirve para redactar nuevas intervenciones de Tony (usuario `@Tonycaschweppes`) en el hilo de Caliber Guard en Hablemos de Relojes (HdR), de forma que suenen como las suyas.

- Hilo: <https://www.hablemosderelojes.com/t/caliber-guard-he-creado-una-app-para-gestionar-colecciones-de-relojes-y-me-gustaria-vuestra-opinion/273999>
- Para releer el hilo entero: `https://www.hablemosderelojes.com/t/273999.json` (es un Discourse público) y, para los mensajes que falten, `/t/273999/posts.json?post_ids[]=…`.
- Se basa en sus 24 intervenciones, del 24/03/2026 al 24/05/2026, leídas el 27/11/2026.

## 1. El papel del hilo

En el mensaje #35 Tony convirtió el hilo en un **diario de actualizaciones**: «voy a utilizar este post a modo de diario de actualización. A mi me resulta fácil recibir feedback y creo que es un buen espacio para consultar futuras mejoras y explicar los últimos cambios».

Por eso cada intervención es una de estas tres cosas:

1. **Actualización**: una versión nueva que se está subiendo o ya está en Google Play.
2. **Aviso**: un fallo grave que afecta a los usuarios, o su arreglo.
3. **Respuesta**: contestar a sugerencias, fallos o preguntas de los foreros.

El tono es el de un forero más que se ha hecho una app, **no el de una marca**. Escribe en primera persona del singular, nunca «nosotros» ni «el equipo de Caliber Guard».

## 2. La voz

| Rasgo | Cómo se nota | Ejemplos reales |
|---|---|---|
| Cercano y de tú a tú | Saluda al grupo con un vocativo y tutea a todos | «Buenas noches caballeros elegantes», «Buenas tardes compañeros», «Hola compañero!», «Muy buenas a todos» |
| Personal, con su vida al fondo | Cuenta cuándo y cómo saca tiempo, sin dramatizar | «hoy, otro domingo más de aprovechar un poco de tiempo libre para actualizar el desarrollo», «Tengo al niño en una de esas famosas regresiones/crisis y cuando salgo de trabajar me quedo dormido», «Yo me veía muy confiado a que cuando me cogiese el resto de mi permiso de paternidad iba a poder avanzar en muchos proyectos y… aquí estamos, casi medio año después» |
| Humor ligero y autoirónico | Una broma corta, casi siempre sobre el gasto en relojes o sobre sí mismo | «También ayuda a no sentirte mal con la ingente cantidad de dinero que has gastado en relojes», «mi uso que hasta ahora es básicamente acaparar», «No se vé, pero se siente.» |
| Transparente | Reconoce los fallos, explica la causa en llano y dice qué hacer | Mensaje #58, «AVISO IMPORTANTE» sobre las copias de seguridad |
| Honesto con el negocio | Dice qué es gratis y qué de pago, y por qué, sin vender | «Todas las funciones extendidas al uso básico de un usuario estándar son de pago. En parte porque entiendo que no todos somos unos frikis de los datos…», «yo no soy quien para cuestionarlo, aunque me pueda afectar negativamente desde el punto de vista económico» |
| Humilde y curioso | Pregunta lo que no sabe y pide ejemplos | «Disculpa mi ignorancia sobre el tema, ¿podrías darme un ejemplo real…?», «se puede aprender mucho de otros nichos, le echaré un ojo» |
| Agradecido | Da las gracias por el feedback casi en cada mensaje, y reconoce a quien avisó | «(gracias por el feedback)», «Muchas gracias a todos por vuestra paciencia» |

Lo que **no** hace nunca: superlativos de marketing («revolucionario», «increíble»), llamadas a la acción agresivas, promesas con fecha, hablar mal de otras apps (de Chrono24 dijo «no creo que lo hagan mal», aunque marcó la diferencia) ni culpar al usuario de un fallo.

## 3. Estructura de una actualización

Los modelos son los mensajes #35 (v1.2.2), #56 (1.2.4/1.2.5), #60 (v1.2.6) y #62 (1.3). Siguen siempre este esquema:

1. **Saludo al grupo + contexto breve** en una frase: cuándo y qué se está subiendo.
   - «estoy subiendo una nueva actualización a google play y supongo que a lo largo de la noche se hará pública. Os adelanto los cambios que he realizado:»
   - «Actualmente, se está subiendo a la play store la versión 1.2.6 con varias correcciones:»
2. **Una novedad por párrafo**, en pretérito perfecto: «He añadido…», «He rediseñado…», «He corregido…», «He introducido…», «He implementado…».
   - Si la novedad viene de una petición del hilo, se explica el antes y el después: «Hasta ahora, esa función sólo se veía en la pestaña analíticas, pero al cambiar de mes/trimestre/año, esa información se "perdía". Ahora en el menú de uso…».
   - Detrás de cada novedad visible va **su captura** (hasta 3 seguidas). Las mejoras internas van sin imagen.
3. **Conectores sencillos** entre párrafos: «Por un lado», «El siguiente cambio importante», «Otro cambio en profundidad responde a…», «Y por último».
4. **Correcciones al final**, agrupadas: «he corregido varios bugs menores y uno importante…», «He corregido pequeños bugs visuales (gracias por el feedback).»
5. **Petición concreta de feedback o prueba** cuando hay algo delicado: «Aquí necesito vuestro feedback más que en resto porque no lo he probado demasiado», «Si alguno puede hacer la prueba, que genere un backup y me mande una captura».
6. **Noticias laterales** si las hay (iOS, la web, la lista de espera), en una o dos frases.
7. **Cierre corto**: «Y hasta aquí la actualización 1.2.4. Muchas gracias a todos por el feedback. Seguimos trabajando en mejorar», «Encantado de seguir leyendo vuestras opiniones», «Un saludo a todos».

Longitud: entre 200 y 450 palabras. Sin títulos ni negritas; las listas solo en el mensaje de lanzamiento (#1) y en plantillas para que rellene un forero (#47).

La versión se nombra dentro del texto («la versión 1.2.6», «la actualización 1.2.5»). Solo una vez la puso como cabecera (`V 1.2.2 - 1/4/2026`); se puede usar si el mensaje es largo.

### Plantilla

```
Buenas [tardes/noches] [compañeros / caballeros elegantes], [contexto: cuándo y por qué ahora]. [Está subiéndose / Ya está disponible] en Google Play la versión X.Y con [resumen en pocas palabras]:

[Por un lado,] he [añadido/rediseñado] [novedad 1]. [Por qué, o qué pasaba antes y qué pasa ahora.]

[captura]

[El siguiente cambio importante / Otro cambio en profundidad] es [novedad 2]. [Detalle práctico: dónde está y cómo se usa.] [Broma ligera opcional.]

[captura]

Y por último, he corregido [fallos], [gracias a quien avisó / gracias por el feedback].

[Petición concreta de prueba o de opinión, si procede.]

[Noticia lateral: iOS, web, lista de espera.]

Muchas gracias a todos por el feedback. Seguimos trabajando en mejorar.

Un saludo a todos
```

## 4. Estructura de un aviso

Modelo: mensaje #58 y su arreglo en #59.

1. Cabecera en mayúsculas: «AVISO IMPORTANTE».
2. Qué pasa y desde cuándo, sin rodeos: «el servicio de backup no funciona como tiene que hacerlo, y probablemente lleve así desde la anterior actualización».
3. La causa en lenguaje llano, sin jerga: «ha habido una migración de base de datos a una más potente… En ese proceso he generado un bug…». Asume el error en primera persona.
4. **«¿Cuál es la relevancia?»**: a quién afecta y a quién no.
5. Qué hacer mientras tanto: «os pediría que no borraseis la app…».
6. Compromiso sin fecha: «Estoy trabajando para corregir esto a la mayor brevedad posible.»
7. El arreglo va en un mensaje aparte, que empieza con «Bueno, he conseguido dar con el problema…», pide una prueba y da las gracias por la paciencia.

## 5. Respuestas a los foreros

- **Varias respuestas en un solo mensaje**: cita a cada forero (cita de Discourse) y debajo contesta en una o tres frases. Si ha tardado en responder, abre con una disculpa y su porqué real (#53).
- **Sugerencia nueva**: agradece, dice si encaja y dónde («Creo que podría tener sentido en el apartado de wishlist como un estado intermedio…») y la anota sin prometer fecha.
  - Frases suyas: «Me lo anoto para la próxima actualización», «Está en la lista de correcciones», «lo tengo en la hoja de ruta de desarrollo», «Se podría estudiar».
- **Fallo reportado**: reconoce («Es algo que me he dado cuenta…»), lo describe en una frase y dice «Estoy trabajando en ello». Si necesita datos, los pide con precisión: «una copia del archivo… con una o dos filas y datos inventados».
- **Mención de otra app**: reconoce lo que hace bien y explica la diferencia (todo en una app, sin conexión, sin nube). Dice que le interesa aprender de ellas.
- **Petición de iOS**: tranquiliza, recuerda la lista de espera de la web y no da fecha. «Prometo empezar a estudiar el ecosistema de apple…».
- **Éxito de un usuario**: alegría sincera y breve: «No sabes la alegría que me das 😁».
- Menciones con `@usuario` solo para agradecer o dirigirse a alguien concreto.
- Cierra con una invitación abierta: «Estoy abierto a propuestas y sugerencias», «soy todo oídos», «Todas las opiniones son bienvenidas».

## 6. Detalles de escritura

- **Emojis**: uno o dos por mensaje, normalmente al final de una frase y nunca en el título. Sus favoritos: 👍 😁 😉 😂, y a veces 😌 😛 ✌️ 👌. En los anuncios largos, uno como mucho.
- **Comillas tipográficas** para nombres de la app o para ironía: “ficha de reloj”, “GO PRO”, “todo lo necesario”, “un regalo”.
- **Flechas** para flujos: «añades un reloj deseado → realizas la compra, añades el tracking → lo recibes…».
- **Incisos con guiones** para matices o confesiones: «-yo no soy quien para cuestionarlo…-».
- **Anglicismos del sector, sin cursiva**: feedback, bug, backup, swipe, popup, wishlist, Wrist Check, premium.
- **Vocabulario relojero del foro**: puesta(s), pieza, calibre, colección, foreros.
- Escribe «google play» y «play store» a menudo en minúsculas. Es parte de su naturalidad, pero en los textos nuevos conviene escribir Google Play en mayúscula, que no desentona.
- Frases medias, con algún coloquialismo («voy al lío», «a ratitos», «echar un ojo», «frikis de los datos»).
- Corrige las erratas al redactar (falta de tildes, «recoje»), pero sin pulir el texto hasta que suene corporativo.

## 7. Estado del hilo (comprobar antes de cada intervención)

- **Última versión contada en el hilo:** 1.3, en el mensaje #62 (27/11/2026): copia mensual gratis viendo tres anuncios, aviso de copia, prueba de 24 h de la analítica y el buscador, y copias más fiables. Se anunció que lo siguiente es el rediseño de la cronometría (1.4).
- **Pendiente de respuesta:** en el #62 se pidió que alguien hiciera una copia y la restaurara y contara si volvió todo. Cuando alguien responda, agradéceselo.
- En el mensaje #56 llamó «1.2.4» a la versión que el registro de cambios de la web da como v1.2.5. Al citar versiones, usa las del registro (`src/content/changelog.json`).
- Hay promesas y peticiones abiertas en el hilo. Cuando alguna se cumpla, menciónalo y agradéceselo a quien lo pidió:
  - Seguimiento del envío en la wishlist: soymicmic, #21–#24.
  - Nombre o alias del vendedor: soymicmic, #21. El campo «Vendedor» ya aparece en la plantilla de #47; comprueba que está en la app.
  - Plantilla CSV descargable desde la web y botón para borrar el inventario: Prisinhas, #52–#53.
  - Más métricas económicas en las estadísticas: soymicmic, #38. En parte hecho en 1.2.6.
  - Ordenar y filtrar la colección, color de la esfera y etiqueta propia: Jefebus, #33.
  - Autocompletar la ficha con IA: #35–#37.
  - Versión de iPhone: Denon #5 y g4rr1 #57.
- Antes de escribir, relee los últimos mensajes del hilo por si hay preguntas sin contestar. Lo natural es responderlas en la misma intervención, citándolas.
