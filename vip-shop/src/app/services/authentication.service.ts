import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppConfig} from '../app.config';
import {HTTP_OPTIONS, SERVER_URL} from "../config/http-config";
import {UserLoginDto} from "../models/user";
import {HeaderComponent} from "../components/header/header.component";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  static USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  static USER_ROLE = 'userRole';
  static USERNAME = 'username';
  static IS_USER_BLOCKED = 'isUserBlocked';

  public email: string;
  public password: string;

  constructor(private http: HttpClient) {
    this.email = "";
    this.password = "";
  }

  // login(email: string, password: string) {
  //   return this.http.post<any>(`${SERVER_URL}/security/login`,
  //     {headers: {authorization: this.createBasicAuthToken(email, password)}}).pipe(map((res) => {
  //     this.email = email;
  //     this.registerSuccessfulLogin(email, res.principal.authorities[0].authority);
  //   }));
  // }
  login(credentials: UserLoginDto) {
    return this.http.post<any>(`${SERVER_URL}/security/login`, credentials, HTTP_OPTIONS)
      .pipe(map((res) => {
      this.email = credentials.login;
      this.registerSuccessfulLogin(credentials.login, res.result.username, res.result.role, res.result.blocked);
    }));
  }

  createBasicAuthToken(email: string, password: string) {
    return 'Basic ' + btoa(email + ':' + password);
  }

  registerSuccessfulLogin(email : string, username: string, role : string, isBlocked : boolean) {
    sessionStorage.setItem(AuthenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME, email);
    sessionStorage.setItem(AuthenticationService.USERNAME, username)
    sessionStorage.setItem(AuthenticationService.USER_ROLE, role);
    sessionStorage.setItem(AuthenticationService.IS_USER_BLOCKED, String(isBlocked));
  }

  logout() {
    this.http.post(`${SERVER_URL}/security/logout`, {}, HTTP_OPTIONS).subscribe();
    sessionStorage.clear();
    this.email = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AuthenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user !== null;
  }

  isAdmin() {
    let userRoles = sessionStorage.getItem(AuthenticationService.USER_ROLE);
    console.log(userRoles);
    console.log("isAdmin => " + (userRoles != null && userRoles.split(",").includes('ADMIN')));
    return userRoles != null && userRoles.split(",").includes('ADMIN');
  }

  isUserBlocked() : boolean{
    return 'true' == sessionStorage.getItem(AuthenticationService.IS_USER_BLOCKED);
  }
}
