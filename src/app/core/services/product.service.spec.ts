import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import * as fromRoot from '../store/product.reducer';
import * as actions from '../store/product.actions';
import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ product: fromRoot.productReducer }),
      ],
    });
    service = TestBed.inject(ProductService);

    service['store'] = {
      select: jest.fn().mockReturnValue(of()),
      dispatch: jest.fn(),
    } as any;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should select all products', () => {
    const value = service.getAll();
    expect(value).toBeTruthy();
    expect(service['store'].select).toHaveBeenCalledTimes(1);
  });

  it('should select editing product', () => {
    const value = service.getEditingProduct();
    expect(value).toBeTruthy();
    expect(service['store'].select).toHaveBeenCalledTimes(1);
  });

  it('should set editing product', () => {
    service.setEditing(null);
    service.setEditing({ id: 0 } as any);
    expect(service['store'].dispatch).toHaveBeenCalledTimes(2);
    expect(service['store'].dispatch).toHaveBeenCalledWith(actions.setEditingProduct({ id: 0 }));
  });

  it('should update product', () => {
    let product = {} as Product;
    service.updateProduct(product);
    expect(service['store'].dispatch).toHaveBeenCalledWith(actions.upsertProduct({ product }));
  });

  it('should add product', () => {
    let product = {} as Product;
    service.addProduct(product);
    expect(service['store'].dispatch).toHaveBeenCalledWith(actions.addProduct({ product }));
  });

  it('should delete product', () => {
    let product = { id: 220 } as Product;
    service.deleteProduct(product);
    expect(service['store'].dispatch).toHaveBeenCalledWith(actions.deleteProduct({ id: product.id }));
  });

  it('should set tax percentage', () => {
    service.setTaxPercentage(20);
    expect(service['store'].dispatch).toHaveBeenCalledWith(actions.setTaxPercentage({ value: 20 }));
  });

  it('should get percentage', () => {
    const value = service.getTaxPercentage();
    expect(value).toBeTruthy();
    expect(service['store'].select).toHaveBeenCalledTimes(1);
  });

  it('should get subtotal', () => {
    const value = service.getSubtotal();
    expect(value).toBeTruthy();
    expect(service['store'].select).toHaveBeenCalledTimes(1);
  });
});