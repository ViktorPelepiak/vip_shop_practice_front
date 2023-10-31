import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {CartShort} from "../../models/cartShort";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLoggedIn: Boolean
  isLoggedUserIsAdmin: Boolean
  isUserBlocked: Boolean
  authenticatedUser: string | null
  activeCart: CartShort | null = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthenticationService,
              private cartService: CartService) {
    this.isUserLoggedIn = authService.isUserLoggedIn();
    this.isLoggedUserIsAdmin = authService.isAdmin();
    this.authenticatedUser = sessionStorage.getItem(AuthenticationService.USERNAME);
    this.isUserBlocked = authService.isUserBlocked();

    if (this.isUserLoggedIn) {
      cartService.getActiveCart().subscribe( response => {
        this.activeCart = response.result;
      })
    }
  }

  handleLogout() {
    this.authService.logout();
  }

  orderActiveCart() {
    this.cartService.orderActiveCart().subscribe( response => {
      if (this.isUserBlocked) {
        this.router.navigate(['debt-notification'])
      } else if (response.success) {
        this.router.navigate(['orders']);
      }
    })
  }
}
