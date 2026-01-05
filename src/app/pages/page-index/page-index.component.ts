import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutDefault } from "../../layouts";
import { CoreModulesShared, MaterialSharedModule } from "../../modules";

@Component({
  selector: "app-page-index",
  imports: [CoreModulesShared, MaterialSharedModule, LayoutDefault],
  templateUrl: "./page-index.component.html",
  styleUrl: "./page-index.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageIndexComponent {
  ok() {
    console.log("@ok");
  }
}
