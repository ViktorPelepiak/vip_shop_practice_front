import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product-component/product.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './components/security/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/security/login/login.component';
import {ConfirmationComponent} from "./components/security/confirmation/confirmation.component";
import { NewItemComponent } from './components/new-item/new-item.component';
import { ImageUploaderDirective } from './directives/image-uploader.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegistrationComponent,
    ConfirmationComponent,
    NewItemComponent,
    ImageUploaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
