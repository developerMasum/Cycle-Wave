import { order_status, paymentMethod } from "../constants/order.const";
import { IProduct } from "./product.type";

export type TOrderStatus = (typeof order_status)[number];
export interface IOrderedProduct {
  product: IProduct;
  quantity: number;
  name: string;
  price: number;
}

export interface IOrder {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: {
    _id: string;
    product: string;
    quantity: number;
    name: string;
  }[];
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";
  paymentStatus: "Pending" | "Paid" | "Failed";
  transactionId: string;
  paymentMethod: "Cash On Delivery" | "Online Payment";
  deliveryCharge: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IOrderPaginatedResult {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: IOrder[];
}

export type OrderDataType = {
  products: {
    product: string;
    quantity: number;
    name: string;
  }[];
  payment: number;
  address: string;
  name: string;
  contact: string;
  email?: string;
  userId?: string;
  paymentMethod: (typeof paymentMethod)[number];
};
