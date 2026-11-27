export const SITE_URL = 'https://caliberguard.com/';
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.apmysoft.caliber_guard';

/** Precios de Premium en Google Play, IVA incluido. La licencia vitalicia no se anuncia. */
export const PREMIUM_PRICES = {
  monthly: '3.99',
  yearly: '29.99',
} as const;

/** Ahorro del plan anual frente a pagar 12 meses, en porcentaje redondeado. */
export const YEARLY_SAVING_PERCENT = Math.round(
  (1 - Number(PREMIUM_PRICES.yearly) / (Number(PREMIUM_PRICES.monthly) * 12)) * 100,
);

/** Valoración media en Google Play (comprobada el 27/11/2026). Actualizar a mano. */
export const PLAY_RATING = '5,0';

/** Formato español para mostrar un precio: 3.99 -> «3,99 €». */
export const formatEUR = (price: string) => `${price.replace('.', ',')} €`;

/** Hilo de Hablemos de Relojes donde se cuenta el desarrollo de la app. */
export const HDR_THREAD_URL =
  'https://www.hablemosderelojes.com/t/caliber-guard-he-creado-una-app-para-gestionar-colecciones-de-relojes-y-me-gustaria-vuestra-opinion/273999';
