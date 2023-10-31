export class OrderShort {
  id: number;
  status: string;
  orderingDate: string;
  price: number;
  payButton: string;


  constructor(id: number, status: string, orderingDate: string, price: number, payButton: string) {
    this.id = id;
    this.status = status;
    this.orderingDate = orderingDate;
    this.price = price;
    this.payButton = payButton;
  }
}
