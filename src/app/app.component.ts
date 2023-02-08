import {Component, OnInit} from '@angular/core';
import {ModalService} from "./shared/services/modal.service";
import {AuthService} from "./core/services/auth.service";
import {Observable} from "rxjs";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PreloaderService} from "./shared/services/preloader.service";
import {NotificationService} from "./core/services/notification.service";


@Component({
  selector: 'magic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private preloaderService: PreloaderService
  ) {
  }


  isLoading$?: boolean
  isAuth$: boolean = false


  ngOnInit() {
    this.authService.me()
    this.preloaderService.isLoading$.subscribe(isLoading => {
      this.isLoading$ = isLoading
    })
    this.authService.isAuth$.subscribe(isAuth => {
      this.isAuth$ = isAuth
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
