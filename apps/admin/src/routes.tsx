import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Drivers } from "./pages/Drivers";
import { Merchants } from "./pages/Merchants";
import { Disputes } from "./pages/Disputes";
import { Payouts } from "./pages/Payouts";
import { Content } from "./pages/Content";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Login /> }, // A-01
  { path: "/dashboard", element: <Dashboard /> }, // A-02
  { path: "/drivers", element: <Drivers /> }, // A-03
  { path: "/merchants", element: <Merchants /> }, // A-04
  { path: "/disputes", element: <Disputes /> }, // A-05
  { path: "/payouts", element: <Payouts /> }, // A-06
  { path: "/content", element: <Content /> }, // A-07
];
