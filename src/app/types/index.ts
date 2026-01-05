export type TOrNoValue<T = unknown> = T | undefined | null;
export type TFunctionVoid = <TArg = unknown>(...args: TArg[]) => void;
export type ElementOf<T extends readonly unknown[]> = T[number];
export type THasId<T = unknown, TId = unknown> = T & { id: TId };

export type {
  TBreakpointsCustom,
  TBreakpointCustom,
  TBreakpointKeyCustom,
} from "../assets/breakpoints";
