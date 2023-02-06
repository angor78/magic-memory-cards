import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProfileModule} from "./profile/profile.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
