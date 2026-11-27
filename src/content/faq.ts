import { PREMIUM_PRICES, formatEUR } from '../config';

export interface FaqItem {
  question: string;
  /** Texto plano: se muestra en la página y se usa tal cual en los datos estructurados. */
  answer: string;
  /** Acción extra que se muestra bajo la respuesta (no va a los datos estructurados). */
  action?: 'ios-waitlist' | 'privacy';
}

export const faq: FaqItem[] = [
  {
    question: '¿Cuánto cuesta Caliber Guard?',
    answer:
      `La app es gratis, con anuncios, y el plan básico no caduca. Premium cuesta ${formatEUR(PREMIUM_PRICES.monthly)} al mes o ${formatEUR(PREMIUM_PRICES.yearly)} al año, IVA incluido: quita los anuncios y desbloquea la analítica, el mantenimiento y las copias ilimitadas. Se paga y se cancela desde Google Play. Si quieres probar la analítica antes, puedes desbloquearla gratis durante 24 horas una vez a la semana viendo anuncios.`,
  },
  {
    question: '¿Hay versión para iPhone?',
    answer:
      'Todavía no. Desarrollo la app yo solo en mi tiempo libre, y publicar en iPhone tiene un coste fijo que ahora mismo no puedo asumir. La versión de iOS está en pausa hasta que la de Android lo financie. Si te apuntas a la lista de espera, serás de los primeros en saberlo.',
    action: 'ios-waitlist',
  },
  {
    question: '¿Qué pasa con mis datos si cambio de móvil?',
    answer:
      'Tu colección se guarda solo en tu móvil, así que para llevártela haz una copia de seguridad: un archivo ZIP con todos tus relojes y fotos que puedes guardar en Google Drive o en otra app. En el móvil nuevo, instala Caliber Guard y restaura la copia; restaurar es gratis. Con el plan básico tienes una copia al mes viendo anuncios, y con Premium, todas las que quieras. Si desinstalas la app sin haber hecho una copia, los datos se pierden.',
  },
  {
    question: '¿Funciona sin conexión?',
    answer:
      'Sí. La colección, el registro de uso, la cronometría y las estadísticas funcionan sin internet, porque todo está en tu móvil. Solo necesitas conexión para comprar Premium y para ver los anuncios que desbloquean la prueba de 24 horas o la copia mensual.',
  },
  {
    question: '¿Puedo importar mi colección desde Excel?',
    answer:
      'Sí, con Premium. Guarda tu hoja de Excel como CSV y, en Ajustes, elige «Importar colección (CSV)». La primera fila debe llevar los nombres de las columnas: basta con la marca o el alias y la fecha de compra, y la app reconoce también el precio, la referencia, el calibre, las medidas y más. Antes de importar te enseña qué filas tienen errores y por qué.',
  },
  {
    question: '¿Qué datos recoge la app?',
    answer:
      'Caliber Guard no tiene cuentas: no te pide nombre, email ni teléfono, y tus relojes, fotos y precios no salen de tu móvil. La app usa servicios de Google para medir el uso de forma anónima y para mostrar anuncios, que en Europa piden tu consentimiento antes. Las compras las gestiona Google Play. En esta web solo medimos las visitas si aceptas las cookies.',
    action: 'privacy',
  },
];
