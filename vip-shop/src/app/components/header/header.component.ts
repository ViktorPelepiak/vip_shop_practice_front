import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLoggedIn : Boolean
  isLoggedUserIsAdmin : Boolean
  authenticatedUser: string|null

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthenticationService) {
    this.isUserLoggedIn = authService.isUserLoggedIn();
    this.isLoggedUserIsAdmin = authService.isAdmin();
    this.authenticatedUser = sessionStorage.getItem(AuthenticationService.USERNAME);
  }
  handleLogout() {
    this.authService.logout();
  }
}
