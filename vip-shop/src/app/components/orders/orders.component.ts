import { Component } from '@angular/core';
import {OrderShort} from "../../models/orderShort";
import {CartService} from "../../services/cart.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public carts: OrderShort[]|undefined;

  public sanitizer: DomSanitizer

  constructor(cartService: CartService, sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;

    cartService.getOrderedCarts().subscribe( response => {
      this.carts = response.result;
      console.log(JSON.stringify(this.carts));
    })
  }
}
