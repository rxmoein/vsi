import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vsi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menu = new EventEmitter();

  onMenu() {
    this.menu.emit();
  }
}
