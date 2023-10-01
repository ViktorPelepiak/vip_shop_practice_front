import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products: Product[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe(res => {
        this.products = res;
      });

  }

}
