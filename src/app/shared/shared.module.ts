import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import {AuthModule} from "../auth/auth.module";
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NotifyComponent } from './components/notify/notify.component';


@NgModule({
  declarations: [
    ModalComponent,
    PreloaderComponent,
    NotifyComponent
  ],
  exports: [
    ModalComponent,
    PreloaderComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthModule
  ],
  providers:[]
})
export class SharedModule { }
