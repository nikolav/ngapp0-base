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

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from "@angular/common/http";
import { logRequestInterceptor } from "./middleware";

import { MAT_DATE_FORMATS } from "@angular/material/core";
import {
  provideMatDayjsAdapter,
  withDayjsAdapterOptions,
} from "./modules/providers/mat-dayjs-adapter";

import { MAT_DAYJS_DATE_FORMATS, MAT_DEFAULTS } from "./config";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),

    // ##routes
    provideRouter(routes),

    //
    provideAnimationsAsync(),

    // ##http
    provideHttpClient(
      withFetch(),
      withInterceptors([
        // interceptor --log-http
        logRequestInterceptor,
        // interceptor --set-auth-header
        // authRequestInterceptor,
      ])
    ),

    // ## mat-datepicker/timepicker
    // { provide: MAT_DATE_LOCALE, useValue: "sr-RS" },
    provideMatDayjsAdapter(withDayjsAdapterOptions({ useUtc: false })),
    { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS_sr_RS },

    // ##mat
    ...MAT_DEFAULTS,
  ],
};
