import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  inject,
  input,
  TemplateRef,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { CoreModulesShared } from "../../modules";

import {
  AppConfigService,
  EmitterService,
  LocalStorageService,
  UseDisplayService,
  UsePageTitleService,
} from "../../services";
import { TOKEN_windowDefaultView } from "../../keys";
import { StoreAppProcessing, StoreFlags, StoreMain } from "../../stores";
import type { TOrNoValue } from "../../types";

@Component({
  selector: "app-layout-default",
  imports: [CoreModulesShared],
  templateUrl: "./layout-default.component.html",
  styleUrl: "./layout-default.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {
  // $
  readonly document = inject(DOCUMENT);

  // $$
  readonly window = inject(TOKEN_windowDefaultView);
  readonly $storage = inject(LocalStorageService);
  readonly $cache = inject(StoreMain);
  readonly $flags = inject(StoreFlags);
  readonly $ps = inject(StoreAppProcessing);
  readonly $emitter = inject(EmitterService);
  readonly $config = inject(AppConfigService);
  readonly $ttl = inject(UsePageTitleService);
  readonly $display = inject(UseDisplayService);
  // readonly $auth = inject(StoreAuth);
  // readonly $userData = inject(StoreAuthProfile);

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
