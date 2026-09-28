export type Role = "client" | "driver" | "courier" | "merchant" | "admin";

export interface User {
  id: string;
  role: Role;
  fullName: string;
  email: string;
  phone: string;
}

export type RideClassId = "zem" | "tricycle" | "taxi" | "clim-plus" | "eco-plus";

export interface RideClass {
  id: RideClassId;
  label: string;
  fareXof: number;
  invented?: boolean;
}

export type RideStatus = "requested" | "accepted" | "ongoing" | "completed" | "cancelled";

export interface Ride {
  id: string;
  classId: RideClassId;
  status: RideStatus;
  pickup: string;
  dropoff: string;
  distanceKm: number;
  fareXof: number;
  driverName?: string;
  createdAt: string;
}

export interface Product {
  id: string;
  merchantId: string;
  name: string;
  priceXof: number;
  category: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  commune: string;
  rating: number;
  products: Product[];
}

export type OrderStatus = "pending" | "preparing" | "delivering" | "delivered" | "cancelled";

export interface Order {
  id: string;
  merchantId: string;
  status: OrderStatus;
  items: { productId: string; quantity: number }[];
  totalXof: number;
  createdAt: string;
}

export type WalletTxType = "credit" | "debit";

export interface WalletTx {
  id: string;
  type: WalletTxType;
  amountXof: number;
  label: string;
  createdAt: string;
}

export type VehicleType = "moto" | "tricycle" | "car";

export interface Vehicle {
  id: string;
  type: VehicleType;
  plate: string;
  model: string;
}

export interface FinancingContract {
  id: string;
  vehicleType: VehicleType;
  totalXof: number;
  dailyDeductionXof: number;
  paidXof: number;
  invented: true;
}

export interface Ticket {
  id: string;
  eventName: string;
  eventDate: string;
  venue: string;
  priceXof: number;
}

export interface Parcel {
  id: string;
  pickup: string;
  dropoff: string;
  recipientName: string;
  recipientPhone: string;
  status: OrderStatus;
  priceXof: number;
}

export interface Promo {
  code: string;
  label: string;
  discountXof: number;
}
