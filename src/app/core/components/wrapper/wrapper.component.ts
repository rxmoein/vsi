import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vsi-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  isSidenavOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  onMenu() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
