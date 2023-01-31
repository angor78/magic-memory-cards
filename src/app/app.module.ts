import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
