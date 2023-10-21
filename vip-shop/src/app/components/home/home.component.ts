import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product";
import {AuthenticationService} from "../../services/authentication.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggedUserIsAdmin : Boolean;
  public products: Product[] = [];

  constructor(private productService: ProductService,
              private authService: AuthenticationService) {
    this.isLoggedUserIsAdmin = authService.isAdmin();
    // this.http.get<Product[]>('https://fakestoreapi.com/products')
    //   .subscribe(res => {
    //     this.products = res;
    //   });

    this.productService.getAll().subscribe( data => {
      this.products = data.result;
    })

  }

}
