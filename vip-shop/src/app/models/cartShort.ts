import {CartItemShort} from "./cartItemShort";

export class CartShort {
  id: bigint;
  status: string;
  items: CartItemShort[];
  price: number;

  constructor(id: bigint, status: string, items: CartItemShort[], price: number) {
    this.id = id;
    this.status = status;
    this.items = items;
    this.price = price;
  }
}
