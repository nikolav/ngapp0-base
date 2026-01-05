import { Component } from "@angular/core";

import { CoreModulesShared } from "./modules";

@Component({
  selector: "app-root",
  imports: [CoreModulesShared],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "app";
}
