import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageKeys } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>('light-theme');

  setTheme(themeName: string) {
    localStorage.setItem(StorageKeys.ThemeName, themeName);
    this.currentTheme.next(`${themeName}-theme`);
  }
}
