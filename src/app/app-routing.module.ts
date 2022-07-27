import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './core/components/wrapper';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
