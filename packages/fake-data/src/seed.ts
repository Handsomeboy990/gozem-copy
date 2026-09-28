import type {
  FinancingContract,
  Merchant,
  Order,
  Parcel,
  Promo,
  Ride,
  RideClass,
  Ticket,
  User,
  Vehicle,
  WalletTx,
} from "./types";

export const FIXED_OTP = "123456";

export const users: User[] = [
  { id: "u-client", role: "client", fullName: "Aïcha Dossou", email: "client@gozem-copy.test", phone: "+229 97 00 00 01" },
  { id: "u-driver", role: "driver", fullName: "Rodrigue Agossou", email: "driver@gozem-copy.test", phone: "+229 97 00 00 02" },
  { id: "u-courier", role: "courier", fullName: "Fabrice Houngbo", email: "courier@gozem-copy.test", phone: "+229 97 00 00 03" },
  { id: "u-merchant", role: "merchant", fullName: "Chantal Adjovi", email: "merchant@gozem-copy.test", phone: "+229 97 00 00 04" },
  { id: "u-admin", role: "admin", fullName: "Serge Houessou", email: "admin@gozem-copy.test", phone: "+229 97 00 00 05" },
];

// Fares: invented per spec section 8, Cotonou ~5km sample trip.
export const rideClasses: RideClass[] = [
  { id: "zem", label: "Zem", fareXof: 700, invented: true },
  { id: "tricycle", label: "Tricycle", fareXof: 900, invented: true },
  { id: "taxi", label: "Taxi", fareXof: 1500, invented: true },
  { id: "clim-plus", label: "Clim+", fareXof: 2500, invented: true },
  { id: "eco-plus", label: "Eco+", fareXof: 1800, invented: true },
];

export const communes = ["Cotonou", "Akpakpa", "Fidjrossè", "Calavi"];

export const rides: Ride[] = [
  {
    id: "ride-1",
    classId: "zem",
    status: "completed",
    pickup: "Akpakpa, Cotonou",
    dropoff: "Fidjrossè, Cotonou",
    distanceKm: 5.2,
    fareXof: 700,
    driverName: "Rodrigue Agossou",
    createdAt: "2026-09-27T08:12:00+01:00",
  },
  {
    id: "ride-2",
    classId: "eco-plus",
    status: "ongoing",
    pickup: "Calavi",
    dropoff: "Cotonou centre",
    distanceKm: 6.0,
    fareXof: 1800,
    driverName: "Rodrigue Agossou",
    createdAt: "2026-09-28T09:40:00+01:00",
  },
  {
    id: "ride-3",
    classId: "taxi",
    status: "requested",
    pickup: "Fidjrossè, Cotonou",
    dropoff: "Akpakpa, Cotonou",
    distanceKm: 4.8,
    fareXof: 1500,
    createdAt: "2026-09-28T10:05:00+01:00",
  },
];

export const merchants: Merchant[] = [
  {
    id: "m-1",
    name: "Chez Chantal",
    category: "Restaurant",
    commune: "Cotonou",
    rating: 4.6,
    products: [
      { id: "p-1", merchantId: "m-1", name: "Riz gras poulet", priceXof: 1500, category: "Plat" },
      { id: "p-2", merchantId: "m-1", name: "Pâte rouge poisson", priceXof: 1200, category: "Plat" },
      { id: "p-3", merchantId: "m-1", name: "Jus de bissap", priceXof: 500, category: "Boisson" },
    ],
  },
  {
    id: "m-2",
    name: "Boutique Fidjrossè",
    category: "Épicerie",
    commune: "Fidjrossè",
    rating: 4.2,
    products: [
      { id: "p-4", merchantId: "m-2", name: "Sac de riz 5kg", priceXof: 4500, category: "Épicerie" },
      { id: "p-5", merchantId: "m-2", name: "Huile 1L", priceXof: 1600, category: "Épicerie" },
    ],
  },
  {
    id: "m-3",
    name: "Pharmacie Akpakpa",
    category: "Santé",
    commune: "Akpakpa",
    rating: 4.8,
    products: [
      { id: "p-6", merchantId: "m-3", name: "Paracétamol", priceXof: 800, category: "Santé" },
      { id: "p-7", merchantId: "m-3", name: "Gel hydroalcoolique", priceXof: 1000, category: "Santé" },
    ],
  },
];

export const orders: Order[] = [
  {
    id: "order-1",
    merchantId: "m-1",
    status: "delivered",
    items: [{ productId: "p-1", quantity: 2 }],
    totalXof: 3000,
    createdAt: "2026-09-26T12:30:00+01:00",
  },
  {
    id: "order-2",
    merchantId: "m-2",
    status: "delivering",
    items: [{ productId: "p-4", quantity: 1 }, { productId: "p-5", quantity: 2 }],
    totalXof: 7700,
    createdAt: "2026-09-28T09:00:00+01:00",
  },
];

export const walletTx: WalletTx[] = [
  { id: "wtx-1", type: "credit", amountXof: 5000, label: "Recharge", createdAt: "2026-09-25T18:00:00+01:00" },
  { id: "wtx-2", type: "debit", amountXof: 700, label: "Course Zem", createdAt: "2026-09-27T08:12:00+01:00" },
  { id: "wtx-3", type: "credit", amountXof: 1000, label: "Récompense de parrainage", createdAt: "2026-09-28T07:00:00+01:00" },
];

export const vehicles: Vehicle[] = [
  { id: "v-1", type: "moto", plate: "AB 1234 RB", model: "Sanya Moto 125" },
  { id: "v-2", type: "car", plate: "AB 5678 RB", model: "Toyota Corolla" },
];

// Invented per spec section 8 owner answer.
export const financingContract: FinancingContract = {
  id: "fin-1",
  vehicleType: "car",
  totalXof: 6500000,
  dailyDeductionXof: 12000,
  paidXof: 480000,
  invented: true,
};

export const tickets: Ticket[] = [
  {
    id: "tk-1",
    eventName: "Festival Gospel Cotonou",
    eventDate: "2026-10-12",
    venue: "Palais des Congrès, Cotonou",
    priceXof: 3000,
  },
];

export const parcels: Parcel[] = [
  {
    id: "parcel-1",
    pickup: "Akpakpa, Cotonou",
    dropoff: "Calavi",
    recipientName: "Fabrice Houngbo",
    recipientPhone: "+229 97 00 00 03",
    status: "delivering",
    priceXof: 1200,
  },
];

export const promos: Promo[] = [
  { code: "TESTGOZEM10", label: "10% sur votre prochaine course", discountXof: 200 },
];

// Invented values, spec section 8 owner answer table.
export const walletRechargeMinXof = 500;
export const walletRechargeMaxXof = 500000;
export const referralRewardXof = 1000;
export const referralCap = 10;
