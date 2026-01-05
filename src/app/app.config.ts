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

    //
  ],
};
