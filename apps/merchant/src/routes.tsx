import type { ReactElement } from "react";
import { Home } from "./pages/Home";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Home /> },
];
