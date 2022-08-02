import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { ChangeTaxModalComponent } from '../shared/modals/change-tax-modal/change-tax-modal.component';
import { AddProductModalComponent } from '../shared/modals/add-product/add-product.component';
import { ConfirmModalComponent } from '../shared/modals/confirm-modal';
import { SnackbarService } from '../core/services/snackbar.service';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product';


@Component({
  selector: 'vsi-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'basePrice', 'priceAfterTax', 'actions'];
  form = new UntypedFormGroup({});

  constructor(
    private dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private productService: ProductService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      name: ['', Validators.required],
      code: ['', Validators.required],
      basePrice: [0, Validators.required],
    });
  }

  get products() {
    return this.productService.getAll();
  }

  get editingProduct() {
    return this.productService.getEditingProduct();
  }

  get taxPercentage() {
    return this.productService.getTaxPercentage();
  }

  get subTotal() {
    return this.productService.getSubtotal();
  }

  onEdit(product: Product | null): void {
    if (product) {
      this.form.patchValue({
        id: product.id,
        name: product.name,
        code: product.code,
        basePrice: product.basePrice,
      });
    }
    this.productService.setEditing(product);
  }

  onEditDone() {
    if (this.form.invalid) {
      this.snackbarService.error('All the fields are required!');
      return;
    }

    this.productService.updateProduct(this.form.value);
    this.productService.setEditing(null);
  }

  onDelete(product: Product) {
    const ref = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      autoFocus: false,
      data: {
        title: 'Delete Product',
        message: `Are you sure to delete ${product.name}?`,
      }
    });

    ref.afterClosed().subscribe(res => {
      if (res) {
        this.productService.deleteProduct(product);
      }
    });
  }

  onAdd() {
    this.dialog.open(AddProductModalComponent, {
      width: '300px',
    });
  }

  onChangeTax() {
    this.dialog.open(ChangeTaxModalComponent, {
      width: '300px',
    });
  }
}
