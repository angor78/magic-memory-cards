import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'magic-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  profileData$!: Observable<any>
  // // @ts-ignore
  // avatar: string = this.profileData$.avatar
  // // @ts-ignore
  // name: string = this.profileData$.name

  ngOnInit(): void {
  }

  logOutHandler() {
    this.authService.logout()
  }
}
