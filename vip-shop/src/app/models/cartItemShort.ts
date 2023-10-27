export class CartItemShort {
  public title: string;
  public quantity: number;
  public price: number;

  constructor(title: string, quantity: number, price: number) {
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }
}
