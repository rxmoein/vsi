import { Injectable } from '@angular/core';
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

  addProduct(product: Product) {
    this.store.dispatch(actions.addProduct({ product }))
  }
}
