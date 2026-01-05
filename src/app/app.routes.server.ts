import { RenderMode, type ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  { path: "", renderMode: RenderMode.Prerender },
  { path: "demo", renderMode: RenderMode.Prerender },

  // Keep unknown/dynamic routes client-side unless you provide params
  { path: "**", renderMode: RenderMode.Client },
];
