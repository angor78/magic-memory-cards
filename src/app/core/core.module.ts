import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import { AuthService } from './services/auth.service'
import { NotificationService } from './services/notification.service'
import {CredentialsInterceptor} from "./interceptors/credantionals.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
    AuthService,
    NotificationService,
  ],
})
export class CoreModule {}
