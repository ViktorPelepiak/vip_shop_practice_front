import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-debt-notification',
  templateUrl: './debt-notification.component.html',
  styleUrls: ['./debt-notification.component.css']
})
export class DebtNotificationComponent {


  constructor(private router: Router) {
  }

  openOrders() {
    this.router.navigate(['orders']);
  }
}
