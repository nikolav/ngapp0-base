import { InjectionToken } from "@angular/core";

import { BreakpointsCustom } from "../assets/breakpoints";

export const TOKEN_breakpoints = new InjectionToken<typeof BreakpointsCustom>(
  "BreakpointsCustom:437a48fe-da99-52e5-ae57-a35cf36a00a3",
  {
    providedIn: "root",
    factory: () => BreakpointsCustom,
  }
);
