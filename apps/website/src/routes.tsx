import type { ReactElement } from "react";
import { Home } from "./pages/Home";
import { Ride } from "./pages/Ride";
import { Food } from "./pages/Food";
import { Shop } from "./pages/Shop";
import { Parcel } from "./pages/Parcel";
import { Partners } from "./pages/Partners";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Home /> }, // W-01
  { path: "/services/ride", element: <Ride /> }, // W-02
  { path: "/services/food", element: <Food /> }, // W-03
  { path: "/services/shop", element: <Shop /> }, // W-04
  { path: "/services/parcel", element: <Parcel /> }, // W-05
  { path: "/partners", element: <Partners /> }, // W-06
  { path: "/about", element: <About /> }, // W-07
  { path: "/legal", element: <Legal /> }, // W-08
];
