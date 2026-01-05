import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { LayoutDefault } from "../../layouts";

import { UseUtilsService } from "../../services";

@Component({
  selector: "app-page-index",
  imports: [LayoutDefault],
  templateUrl: "./page-index.component.html",
  styleUrl: "./page-index.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "app-container-reset",
  },
})
export class PageIndexComponent {
  readonly $$ = inject(UseUtilsService);
}
