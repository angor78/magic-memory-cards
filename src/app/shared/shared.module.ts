import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import {AuthModule} from "../auth/auth.module";
import { PreloaderComponent } from './components/preloader/preloader.component';


@NgModule({
  declarations: [
    ModalComponent,
    PreloaderComponent
  ],
  exports: [
    ModalComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthModule
  ],
  providers:[]
})
export class SharedModule { }
