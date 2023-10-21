import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {SERVER_URL} from "../config/http-config";
import {Category} from "../models/category";
import {CustomResponse} from "../models/customResponse";
@Injectable({providedIn: 'root'})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(SERVER_URL + '/categories');
  }
}
