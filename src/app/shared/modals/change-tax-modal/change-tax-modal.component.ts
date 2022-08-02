import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

import { AddProductModalComponent } from '../add-product/add-product.component';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'vsi-change-tax-modal',
  templateUrl: './change-tax-modal.component.html',
  styleUrls: ['./change-tax-modal.component.scss']
})
export class ChangeTaxModalComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private fb: UntypedFormBuilder,
    private productService: ProductService,
    private dialogRef: DialogRef<AddProductModalComponent>,
  ) { }

  ngOnInit(): void {
    let tPercentage = 0;
    this.productService.getTaxPercentage().subscribe(p => tPercentage = p).unsubscribe();
    this.form = this.fb.group({
      percentage: [tPercentage, Validators.max(100)]
    });
  }

  onSubmit() {
    this.productService.setTaxPercentage(this.form.value.percentage);
    this.dialogRef.close();
  }
}
