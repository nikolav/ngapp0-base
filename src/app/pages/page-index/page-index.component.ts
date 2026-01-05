import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutDefault } from "../../layouts";

@Component({
  selector: "app-page-index",
  imports: [LayoutDefault],
  templateUrl: "./page-index.component.html",
  styleUrl: "./page-index.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageIndexComponent {}
