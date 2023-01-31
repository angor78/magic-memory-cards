import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalFormWindowComponent } from './components/modal-form-window/modal-form-window.component';


@NgModule({
  declarations: [
    ModalFormWindowComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
