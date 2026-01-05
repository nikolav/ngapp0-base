import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import type { IEventApp } from "../../types";

@Injectable({
  providedIn: "root",
})
export class EmitterService<TEvent = IEventApp> {
  subject = new Subject<TEvent>();
}
