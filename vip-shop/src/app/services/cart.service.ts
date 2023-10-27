import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartShort} from "../models/cartShort";
import {HTTP_OPTIONS, SERVER_URL} from "../config/http-config";
import {CustomResponse} from "../models/customResponse";

@Injectable({providedIn: 'root'})
export class CartService {
  constructor(private http: HttpClient) {
  }

  public getActiveCart() : Observable<CustomResponse> {
    return this.http.get<CustomResponse>(SERVER_URL + '/carts/active', HTTP_OPTIONS);
  }

  public orderActiveCart() : Observable<CustomResponse> {
    return this.http.put<CustomResponse>(SERVER_URL + '/carts/active/order', {}, HTTP_OPTIONS);
  }
}
