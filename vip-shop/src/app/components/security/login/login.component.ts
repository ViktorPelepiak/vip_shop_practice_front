import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {first} from "rxjs/operators";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : any;
  loading = false;
  submitted = false;
  returnUrl = 'surveys';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required,Validators.minLength(4) ]]
    });
    console.log(this.route.snapshot)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl)
          // @ts-ignore
          window.location = this.returnUrl
        },
        error => {
          this.loading = false;
          // this.toast.error("Email or password wrong.")
          this.router.navigate(['login']);
        });
  }

  isLoggedIn() {
    return (
      sessionStorage.getItem(AuthenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME) != null &&
      sessionStorage.getItem(AuthenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME) != undefined
    )
  }
}
