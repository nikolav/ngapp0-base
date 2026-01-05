import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";

import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { MAT_DATE_FORMATS } from "@angular/material/core";
import {
  provideMatDayjsAdapter,
  withDayjsAdapterOptions,
} from "./modules/providers/mat-dayjs-adapter";

import { MAT_DAYJS_DATE_FORMATS, MAT_DEFAULTS } from "./config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    //
    importProvidersFrom(CommonModule),
    provideAnimationsAsync(),

    // ## mat-datepicker/timepicker
    // { provide: MAT_DATE_LOCALE, useValue: "sr-RS" },
    provideMatDayjsAdapter(withDayjsAdapterOptions({ useUtc: false })),
    { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS_sr_RS },

    // ##mat
    ...MAT_DEFAULTS,
  ],
};
