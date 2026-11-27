/** Páginas por función (R-17). El orden es el de los enlaces entre ellas y en el pie. */
export const featurePages = [
  {
    slug: 'registro-de-uso-de-relojes',
    label: 'Registro de uso',
  },
  {
    slug: 'cronometria-relojes-automaticos',
    label: 'Cronometría',
  },
  {
    slug: 'inventario-de-relojes',
    label: 'Inventario y seguro',
  },
] as const;

export type FeatureSlug = (typeof featurePages)[number]['slug'];

export const featureUrl = (slug: FeatureSlug) => `/funciones/${slug}/`;
