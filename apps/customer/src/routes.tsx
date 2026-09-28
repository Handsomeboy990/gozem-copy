import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Splash, PhoneEntry, OtpVerify } from "./pages/Onboarding";
import { Home } from "./pages/Home";
import {
  RideDestination,
  RideClassPicker,
  RideSearching,
  RideAssigned,
  RideTracking,
  RideArrived,
  RidePay,
  RideRate,
} from "./pages/Ride";
import { Wallet, WalletRecharge, WalletHistory } from "./pages/Wallet";
import { FoodBrowse, FoodMerchantDetail, Cart, FoodOrder } from "./pages/Food";
import { ParcelBooking, ParcelTracking } from "./pages/Parcel";
import { ShopBrowse } from "./pages/Shop";
import { Tickets } from "./pages/Tickets";
import { Topup } from "./pages/Topup";
import { Financing } from "./pages/Financing";
import { Promotions } from "./pages/Promotions";
import { Referral } from "./pages/Referral";
import { Profile } from "./pages/Profile";
import { History, Receipt } from "./pages/History";
import { Support } from "./pages/Support";
import { Addresses } from "./pages/Addresses";

export interface AppRoute {
  path: string;
  element: ReactElement;
}

/** Add a route: push { path, element } here, add the page under src/pages. */
export const routes: AppRoute[] = [
  { path: "/", element: <Navigate to="/onboarding" replace /> },

  // C-01..C-03: onboarding, journey 1
  { path: "/onboarding", element: <Splash /> },
  { path: "/onboarding/phone", element: <PhoneEntry /> },
  { path: "/onboarding/otp", element: <OtpVerify /> },

  // C-04: home / dashboard
  { path: "/home", element: <Home /> },

  // C-05..C-12: ride booking, journey 1
  { path: "/ride/destination", element: <RideDestination /> },
  { path: "/ride/class", element: <RideClassPicker /> },
  { path: "/ride/searching", element: <RideSearching /> },
  { path: "/ride/assigned", element: <RideAssigned /> },
  { path: "/ride/tracking", element: <RideTracking /> },
  { path: "/ride/arrived", element: <RideArrived /> },
  { path: "/ride/pay", element: <RidePay /> },
  { path: "/ride/rate", element: <RideRate /> },

  // C-13..C-15: wallet, journey 5
  { path: "/wallet", element: <Wallet /> },
  { path: "/wallet/recharge", element: <WalletRecharge /> },
  { path: "/wallet/history", element: <WalletHistory /> },

  // C-16..C-19: food, journey 2
  { path: "/food", element: <FoodBrowse /> },
  { path: "/food/merchant", element: <FoodMerchantDetail /> },
  { path: "/food/cart", element: <Cart /> },
  { path: "/food/order", element: <FoodOrder /> },

  // C-20..C-21: parcel, journey 4
  { path: "/parcel", element: <ParcelBooking /> },
  { path: "/parcel/tracking", element: <ParcelTracking /> },

  // C-22: shop, journey 3 (reuses /food/cart and /food/order)
  { path: "/shop", element: <ShopBrowse /> },

  // C-23: tickets, journey 6
  { path: "/tickets", element: <Tickets /> },

  // C-24: airtime top-up, journey 7
  { path: "/topup", element: <Topup /> },

  // C-25: vehicle financing explainer
  { path: "/financing", element: <Financing /> },

  // C-26..C-27: promo + referral, journey 8
  { path: "/promotions", element: <Promotions /> },
  { path: "/referral", element: <Referral /> },

  // C-28: profile
  { path: "/profile", element: <Profile /> },

  // C-29..C-30: history + receipt, journey 9
  { path: "/history", element: <History /> },
  { path: "/history/receipt", element: <Receipt /> },

  // C-31: support, journey 9
  { path: "/support", element: <Support /> },

  // C-32: saved addresses
  { path: "/addresses", element: <Addresses /> },
];
