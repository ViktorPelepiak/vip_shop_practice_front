import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomResponse} from "../models/customResponse";
import {HTTP_OPTIONS, SERVER_URL} from "../config/http-config";
import {ProductSaveDto} from "../models/product";

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<CustomResponse> {
    return this.http.get<CustomResponse> (SERVER_URL + '/products', HTTP_OPTIONS);
  }

  public save(productInfo: ProductSaveDto, fileArray: number[]): Observable<CustomResponse> {
    productInfo.image = fileArray;
    return this.http.post<CustomResponse>(SERVER_URL + '/products', productInfo, HTTP_OPTIONS);
  }
}
