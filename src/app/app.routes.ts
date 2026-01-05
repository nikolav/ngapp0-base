import { Routes } from "@angular/router";

import { PageDemo, PageIndex } from "./pages";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PageIndex,
    data: {
      key: "a54d1306-3658-50b7-b1a9-e0479ebdd3f8",
    },
  },
  {
    path: "demo",
    component: PageDemo,
    data: {
      key: "19d955e0-c759-56d4-8795-ad765f3db475",
    },
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
