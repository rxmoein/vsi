import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { AddProductModalComponent } from './modals/add-product/add-product.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    AddProductModalComponent,
    ConfirmModalComponent,
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
  ]
})
export class SharedModule { }
