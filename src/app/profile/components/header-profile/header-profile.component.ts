import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ResponseSignIn} from "../../../core/models/auth.models";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'magic-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {

  profileData$!: Observable<ResponseSignIn>

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.profileData$ = this.authService.profileData$
  }

}
