import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './components/wrapper';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar';

@NgModule({
  declarations: [
    WrapperComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    WrapperComponent,
    NavbarComponent,
  ]
})
export class CoreModule { }
