import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {test1Component} from "./test1/test1.component";
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
