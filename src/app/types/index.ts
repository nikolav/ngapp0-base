import { Injector, ViewContainerRef } from "@angular/core";
import type { MaybeAsync } from "@angular/router";

export type TOrNoValue<T = unknown> = T | undefined | null;
export type TFunctionVoid = <TArg = unknown>(...args: TArg[]) => void;
export type ElementOf<T extends readonly unknown[]> = T[number];
export type THasId<T = unknown, TId = unknown> = T & { id: TId };

import type {
  JsonDataRecord as TRecordJson,
  TJson,
  TJsonLiteral,
} from "../schemas/json.schema";

export interface CdkPortalFactoryOptions {
  // Required for TemplatePortal (and for ComponentPortal if you want a specific host)
  viewContainerRef?: ViewContainerRef;
  // Optional: pass context for <ng-template let-...>
  context?: Record<string, unknown>;
  // Optional injector for TemplatePortal / ComponentPortal
  injector?: Injector;
  // Optional: custom DI for ComponentPortal (takes priority over injector)
  componentInjector?: Injector;
  // Optional: projected nodes into component (rare; matches ComponentPortal signature)
  projectableNodes?: Node[][];
}

// #
export type {
  TBreakpointsCustom,
  TBreakpointCustom,
  TBreakpointKeyCustom,
} from "../assets/breakpoints";
export type { TRecordJson, TJson, TJsonLiteral, MaybeAsync as TMaybeAsync };
