import { inject, InjectionToken, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { MemoryStorage } from "../utils";

export const TOKEN_windowDefaultView = new InjectionToken<Window | null>(
  "Window:91418ac1-46ac-5b6d-8113-a6aa5344458f",
  {
    providedIn: "root",
    factory: () => {
      const doc = inject(DOCUMENT);
      return doc.defaultView;
    },
  }
);
export const TOKEN_isPlatformBrowser = new InjectionToken<boolean>(
  "PLATFORM_ID:14b58b0b-95ef-56d9-94dd-0d26ee94ba42",
  {
    providedIn: "root",
    factory: () => {
      const platformId = inject(PLATFORM_ID);
      return isPlatformBrowser(platformId);
    },
  }
);
export const TOKEN_localStorage = new InjectionToken<Storage>(
  "Storage:6090ec87-2fa3-514c-870f-2facbfb50ace",
  {
    providedIn: "root",
    factory: () =>
      inject(TOKEN_isPlatformBrowser) ? localStorage : new MemoryStorage(),
  }
);
