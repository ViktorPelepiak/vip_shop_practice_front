import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private product:Product|undefined;

  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute) {

    http.get<Product>( 'https://fakestoreapi.com/products/' + this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.product = res;
      })
  }
}
