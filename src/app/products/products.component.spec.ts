import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../core/store/product.reducer';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot({ product: fromRoot.productReducer }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be initialized', () => {
    expect(component.form).toBeTruthy();
  });

  it('products use products service', () => {
    component['productService'].getAll = jest.fn().mockReturnValue('test');
    expect(component.products).toBe(component['productService'].getAll());
  });

  it('editingProduct use products service', () => {
    component['productService'].getEditingProduct = jest.fn().mockReturnValue('test');
    expect(component.editingProduct).toBe(component['productService'].getEditingProduct());
  });

  it('taxPercentage use products service', () => {
    component['productService'].getTaxPercentage = jest.fn().mockReturnValue('test');
    expect(component.taxPercentage).toBe(component['productService'].getTaxPercentage());
  });

  it('subTotal use products service', () => {
    component['productService'].getSubtotal = jest.fn().mockReturnValue('test');
    expect(component.subTotal).toBe(component['productService'].getSubtotal());
  });

  it('onEdit should patch form values and use product service', () => {
    component.form = {
      invalid: true,
      patchValue: jest.fn(),
    } as any;

    component['productService'].setEditing = jest.fn();

    const product = {
      id: 2,
      name: 'Test',
      code: 'BE34',
      basePrice: 22,
    };

    component.onEdit(product);
    expect(component.form.patchValue).toHaveBeenCalledWith(product);
    expect(component['productService'].setEditing).toHaveBeenCalledWith(product);
  });

  it('onEditDone shows error if form is not valid', () => {
    component.form = {
      invalid: true,
      patchValue: jest.fn(),
    } as any;

    component['snackbarService'].error = jest.fn();
    component.onEditDone();

    expect(component['snackbarService'].error).toHaveBeenCalled();
  });

  it('onEditDone uses product service to update the product', () => {
    component.form = {
      invalid: false,
      patchValue: jest.fn(),
    } as any;

    component['productService'].updateProduct = jest.fn();
    component['productService'].setEditing = jest.fn();

    component.onEditDone();

    expect(component['productService'].updateProduct).toHaveBeenCalled();
    expect(component['productService'].setEditing).toHaveBeenCalled();
  });

  it('onDelete should open a dialog', () => {
    component['dialog'].open = jest.fn().mockReturnValue({
      afterClosed: jest.fn().mockReturnValue({
        subscribe: jest.fn(),
      }),
    });

    const product = {
      id: 2,
      name: 'Test',
      code: 'BE34',
      basePrice: 22,
    };

    component.onDelete(product);
    expect(component['dialog'].open).toHaveBeenCalled();
  });
});
