import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { ProductService } from 'src/app/core/services/product.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'vsi-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductModalComponent {
  form: UntypedFormGroup = new UntypedFormGroup({});
  constructor(
    private fb: UntypedFormBuilder,
    private productService: ProductService,
    private dialogRef: DialogRef<AddProductModalComponent>,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      basePrice: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.productService.addProduct({
      ...this.form.value,
      id: Math.floor(Math.random() * 100000) + 1, // Just random Ids
    });
    this.dialogRef.close();
  }
}
