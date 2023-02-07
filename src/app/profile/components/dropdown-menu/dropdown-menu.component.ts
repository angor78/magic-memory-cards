import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../shared/services/modal.service";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'magic-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor(private modalService: ModalService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  logoutHandler(){
    this.authService.logout()
  }
}
