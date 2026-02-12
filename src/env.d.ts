/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
