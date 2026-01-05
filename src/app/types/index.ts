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

// #
export type {
  TBreakpointsCustom,
  TBreakpointCustom,
  TBreakpointKeyCustom,
} from "../assets/breakpoints";
export type { TRecordJson, TJson, TJsonLiteral, MaybeAsync as TMaybeAsync };
