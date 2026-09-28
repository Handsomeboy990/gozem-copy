import type { ReactElement } from "react";
import { Splash } from "./pages/onboarding/Splash";
import { Phone } from "./pages/onboarding/Phone";
import { Otp } from "./pages/onboarding/Otp";
import { Documents } from "./pages/onboarding/Documents";
import { Home } from "./pages/Home";
import { Request } from "./pages/Request";
import { Trip } from "./pages/Trip";
import { TripComplete } from "./pages/TripComplete";
import { Wallet } from "./pages/Wallet";
import { Financing } from "./pages/Financing";
import { Profile } from "./pages/Profile";
import { History } from "./pages/History";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Splash /> },
  { path: "/onboarding", element: <Splash /> },
  { path: "/onboarding/phone", element: <Phone /> },
  { path: "/onboarding/otp", element: <Otp /> },
  { path: "/onboarding/documents", element: <Documents /> },
  { path: "/home", element: <Home /> },
  { path: "/request", element: <Request /> },
  { path: "/trip", element: <Trip /> },
  { path: "/trip/complete", element: <TripComplete /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/financing", element: <Financing /> },
  { path: "/profile", element: <Profile /> },
  { path: "/history", element: <History /> },
];
