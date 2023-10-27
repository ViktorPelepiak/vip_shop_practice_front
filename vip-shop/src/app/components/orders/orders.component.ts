import { Component } from '@angular/core';
import {OrderShort} from "../../models/orderShort";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public carts: OrderShort[]|undefined;

  constructor(cartService: CartService) {
    cartService.getOrderedCarts().subscribe( response => {
      this.carts = response.result;
    })
  }
}
