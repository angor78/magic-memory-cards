import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Observable} from "rxjs";
import {ResponseSignIn} from "../../../core/models/auth.models";

@Component({
  selector: 'magic-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData$!: Observable<ResponseSignIn>

  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.profileData$ = this.authService.profileData$
  }

  logOutHandler() {
    this.authService.logout()
  }

}
