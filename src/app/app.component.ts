import { Component } from "@angular/core";

import { CoreModulesShared } from "./modules";
import { routeTransitionBlurInOut } from "./assets/route-transitions";

@Component({
  selector: "app-root",
  imports: [CoreModulesShared],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [routeTransitionBlurInOut],
})
export class AppComponent {
  title = "app";
}
