import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./components/security/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/security/login/login.component";
import {ConfirmationComponent} from "./components/security/confirmation/confirmation.component";
import {NewItemComponent} from "./components/new-item/new-item.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "user/verification", component:ConfirmationComponent},
  {path: "item/new", component:NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
