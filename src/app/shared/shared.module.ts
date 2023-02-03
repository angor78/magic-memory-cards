import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthModule
  ],
  providers:[]
})
export class SharedModule { }
