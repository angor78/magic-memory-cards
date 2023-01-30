import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CredentialsInterceptor} from "./interceptors/credantionals.interceptor";
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AuthService,{provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}],
})
export class CoreModule { }
