import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product';

@Component({
  selector: 'vsi-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'basePrice', 'actions'];
  form = new UntypedFormGroup({});

  constructor(
    private fb: UntypedFormBuilder,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      code: [''],
      basePrice: [0],
    });
  }

  get products() {
    return this.productService.getAll();
  }

  get editingProduct() {
    return this.productService.getEditingProduct();
  }

  onEdit(product: Product | null): void {
    if (product) {
      this.form.patchValue({
        name: product.name,
        code: product.code,
        basePrice: product.basePrice,
      });
    }
    this.productService.setEditing(product);
  }
}
