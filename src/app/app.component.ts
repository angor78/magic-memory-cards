import {Component, OnInit} from '@angular/core';
import {ModalService} from "./shared/services/modal.service";
import {AuthService} from "./core/services/auth.service";
import {Observable} from "rxjs";


@Component({
  selector: 'magic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private modalService: ModalService, private authService: AuthService) {
  }
  ngOnInit() {
    this.authService.me()
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
