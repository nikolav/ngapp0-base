import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  inject,
  input,
  TemplateRef,
} from "@angular/core";

import { CoreModulesShared } from "../../modules";

import { AppConfigService, UsePageTitleService } from "../../services";
import type { TOrNoValue } from "../../types";

@Component({
  selector: "app-layout-default",
  imports: [CoreModulesShared],
  templateUrl: "./layout-default.component.html",
  styleUrl: "./layout-default.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {
  // $$
  readonly $config = inject(AppConfigService);
  readonly $ttl = inject(UsePageTitleService);

  // [@]
  readonly pageTitle = input<TOrNoValue<string>>(null, { alias: "page-title" });

  // #
  readonly slot_page = contentChild("slot_page", {
    read: TemplateRef,
    descendants: false,
  });

  constructor() {
    effect(() => {
      if (!this.pageTitle()) return;
      this.$ttl.title.set(this.pageTitle()!);
    });
  }
}
