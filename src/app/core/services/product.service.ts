import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductState } from '../store/product.reducer';
import * as selectors from '../store/product.selector';
import * as actions from '../store/product.actions';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private store: Store<ProductState>) { }

  getAll() {
    return this.store.select(selectors.selectAllProducts);
  }

  getEditingProduct() {
    return this.store.select(selectors.selectEditingProductId);
  }

  setEditing(product: Product | null) {
    if (!product) {
      this.store.dispatch(actions.setEditingProduct({ id: 0 }));
      return;
    }
    this.store.dispatch(actions.setEditingProduct({ id: product.id }));
  }

  updateProduct(product: Product) {
    this.store.dispatch(actions.upsertProduct({ product }));
  }

  addProduct(product: Product) {
    this.store.dispatch(actions.addProduct({ product }));
  }

  deleteProduct(product: Product) {
    this.store.dispatch(actions.deleteProduct({ id: product.id }))
  }

  setTaxPercentage(value: number) {
    this.store.dispatch(actions.setTaxPercentage({ value }));
  }

  getTaxPercentage() {
    return this.store.select(selectors.selectTaxPercentage);
  }

  getSubtotal(): Observable<number> {
    return this.getAll().pipe(map(all => {
      return all.reduce((a, b) => {
        let p = 0;
        this.getTaxPercentage().subscribe(v => p = v).unsubscribe();
        const tax = (p / 100) * b.basePrice;

        return a + (b.basePrice + tax);
      }, 0);
    }));
  }
}
