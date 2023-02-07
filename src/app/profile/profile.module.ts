import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderProfileComponent,
    DropdownMenuComponent
  ],
  exports: [
    ProfileComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
