export class OrderShort {
  id: number;
  status: string;
  orderingDate: string;
  price: number;


  constructor(id: number, status: string, orderingDate: string, price: number) {
    this.id = id;
    this.status = status;
    this.orderingDate = orderingDate;
    this.price = price;
  }
}
