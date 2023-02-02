import {Component, OnInit} from '@angular/core';
import {ModalService} from "./shared/services/modal.service";

@Component({
  selector: 'magic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private modalService: ModalService) {
  }

  ngOnInit() {

  }

  openModal(id: string) {
    this.modalService.open(id);
    console.log('open',id)
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
