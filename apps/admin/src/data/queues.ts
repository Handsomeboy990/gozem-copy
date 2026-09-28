import { users, vehicles, merchants, promos } from "@gozem/fake-data";
import type { User, Vehicle, Merchant } from "@gozem/fake-data";

/**
 * Admin back office has no public Gozem source (MOCKUP_SPEC.md 2.4): every queue
 * below is inferred from the approval/reconciliation step each other app's
 * screens already imply, composed from the shared fake-data seed.
 */

export interface DriverQueueItem {
  user: User;
  vehicle: Vehicle;
}

export const driverQueue: DriverQueueItem[] = users
  .filter((u) => u.role === "driver" || u.role === "courier")
  .map((u, index) => ({ user: u, vehicle: vehicles[index % vehicles.length] }));

export const merchantQueue: Merchant[] = merchants;

export type DisputeSource = "support" | "rating";

export interface DisputeItem {
  id: string;
  subject: string;
  source: DisputeSource;
  customerName: string;
  createdAt: string;
}

export const disputeQueue: DisputeItem[] = [
  {
    id: "disp-1",
    subject: "Montant de course contesté",
    source: "support",
    customerName: users[0].fullName,
    createdAt: "2026-09-27T14:00:00+01:00",
  },
  {
    id: "disp-2",
    subject: "Note de 2 étoiles, retard signalé",
    source: "rating",
    customerName: users[0].fullName,
    createdAt: "2026-09-28T08:30:00+01:00",
  },
];

export interface PayoutItem {
  id: string;
  name: string;
  role: "driver" | "merchant";
  balanceXof: number;
  invented: true;
}

export const payoutQueue: PayoutItem[] = [
  { id: "payout-1", name: users.find((u) => u.role === "driver")!.fullName, role: "driver", balanceXof: 42500, invented: true },
  { id: "payout-2", name: users.find((u) => u.role === "merchant")!.fullName, role: "merchant", balanceXof: 128700, invented: true },
];

export interface BannerItem {
  id: string;
  title: string;
}

export const initialBanners: BannerItem[] = [
  { id: "banner-1", title: "Semaine Zem : -10% avec TESTGOZEM10" },
];

export const promoCodes = promos;
