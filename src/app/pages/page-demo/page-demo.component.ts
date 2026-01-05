import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-page-demo",
  imports: [LayoutDefault],
  templateUrl: "./page-demo.component.html",
  styleUrl: "./page-demo.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageDemoComponent {}
