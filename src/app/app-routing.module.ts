import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './core/components/wrapper';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
