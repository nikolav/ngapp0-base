import { Observable } from "rxjs";

export const empty$$ = () =>
  new Observable<never>((obs) => {
    obs.complete();
  });
