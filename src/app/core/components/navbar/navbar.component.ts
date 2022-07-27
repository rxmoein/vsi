import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from 'src/app/shared/modals/add-product/add-product.component';

@Component({
  selector: 'vsi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menu = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  onMenu() {
    this.menu.emit();
  }

  onAdd() {
    this.dialog.open(AddProductModalComponent, {
      width: '300px',
    })
  }
}
