import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {AuthenticationService} from "../../services/authentication.service";
import {HTTP_OPTIONS} from "../../config/http-config";

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  returnUrl: string;

  public product:Product|undefined;

  public isUserLoggedIn: boolean;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, authService: AuthenticationService) {

    this.isUserLoggedIn = authService.isUserLoggedIn();
    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.returnUrl = '/item/' + productId;
    if (productId) {
      this.productService.getProductById(productId)
        .subscribe(response => {
          this.product = response.result;
        })
    }

  }

  addToCart(){
    console.log("isUserLoggedIn => " + this.isUserLoggedIn);
    if (this.isUserLoggedIn) {
      if (this.product) {
        this.productService.addToCart(this.product.id).subscribe( response => {
          if (response.success) {
            // @ts-ignore
            window.location = '/'
            // this.router.navigate(['/']);
          }
        });
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
