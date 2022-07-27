import { Component } from '@angular/core';

import { ThemeService } from './core/services';

@Component({
  selector: 'vsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService) { }

  get currentTheme() {
    return this.themeService.currentTheme;
  }
}
