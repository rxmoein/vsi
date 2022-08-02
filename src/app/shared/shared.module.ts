import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { AddProductModalComponent } from './modals/add-product/add-product.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { ChangeTaxModalComponent } from './modals/change-tax-modal/change-tax-modal.component';
import { PriceAfterTaxPipe } from './pipes/price-after-tax.pipe';


@NgModule({
  declarations: [
    AddProductModalComponent,
    ConfirmModalComponent,
    ChangeTaxModalComponent,
    PriceAfterTaxPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PriceAfterTaxPipe,
  ]
})
export class SharedModule { }
