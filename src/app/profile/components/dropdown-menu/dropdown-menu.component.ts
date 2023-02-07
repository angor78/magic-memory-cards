import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../shared/services/modal.service";

@Component({
  selector: 'magic-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
