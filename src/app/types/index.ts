import type { MaybeAsync } from "@angular/router";
import { Subscription } from "rxjs";
import type {
  JsonDataRecord as TRecordJson,
  TJson,
  TJsonLiteral,
} from "../schemas/json.schema";

export type TOrNoValue<T = unknown> = T | undefined | null;
export type TFunctionVoid = <TArg = unknown>(...args: TArg[]) => void;
export type ElementOf<T extends readonly unknown[]> = T[number];
export type THasId<T = unknown, TId = unknown> = T & { id: TId };
export interface IEventApp<TEventAppPayload = unknown> {
  type: string;
  payload: TEventAppPayload;
}
export interface IEventOnStorage<TPayload = unknown>
  extends IEventApp<TPayload> {
  action: "push" | "drop";
}
export type { TRecordJson, TJson, TJsonLiteral, MaybeAsync as TMaybeAsync };
export type TManageSubscriptionsCache = Record<
  string,
  TOrNoValue<Subscription>
>;
