import type { ReactElement } from "react";
import { Splash } from "./pages/onboarding/Splash";
import { Otp } from "./pages/onboarding/Otp";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Orders } from "./pages/Orders";
import { OrderDetail } from "./pages/OrderDetail";
import { ScanToPay } from "./pages/ScanToPay";
import { Coupon } from "./pages/Coupon";
import { Wallet } from "./pages/Wallet";
import { Dispatcher } from "./pages/Dispatcher";
import { Redeem } from "./pages/Redeem";
import { Courier } from "./pages/Courier";
import { Ads } from "./pages/Ads";
import { Profile } from "./pages/Profile";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Splash /> },
  { path: "/onboarding", element: <Splash /> },
  { path: "/onboarding/otp", element: <Otp /> },
  { path: "/home", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/orders", element: <Orders /> },
  { path: "/orders/detail", element: <OrderDetail /> },
  { path: "/scan-to-pay", element: <ScanToPay /> },
  { path: "/coupon", element: <Coupon /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/dispatcher", element: <Dispatcher /> },
  { path: "/redeem", element: <Redeem /> },
  { path: "/courier", element: <Courier /> },
  { path: "/ads", element: <Ads /> },
  { path: "/profile", element: <Profile /> },
];
