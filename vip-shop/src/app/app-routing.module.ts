import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./components/security/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/security/login/login.component";
import {ConfirmationComponent} from "./components/security/confirmation/confirmation.component";
import {NewItemComponent} from "./components/new-item/new-item.component";
import {ProductComponent} from "./components/product-component/product.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {DebtorsComponent} from "./components/debtors/debtors.component";
import {DebtNotificationComponent} from "./components/debt-notification/debt-notification.component";

const routes: Routes = [
  {path: "",                  component: HomeComponent},
  {path: "login",             component: LoginComponent},
  {path: "registration",      component: RegistrationComponent},
  {path: "user/verification", component: ConfirmationComponent},
  {path: "item/new",          component: NewItemComponent},
  {path: "item/:id",          component: ProductComponent},
  {path: "orders",            component: OrdersComponent},
  {path: "debtors",           component: DebtorsComponent},
  {path: "debt-notification", component: DebtNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
