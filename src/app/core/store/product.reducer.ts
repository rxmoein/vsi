import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';
import { Product } from '../models/product';

export interface ProductState extends EntityState<Product> {
    editingProductId: number | null;
    taxPercentage: number;
}

export function selectProductId(a: Product): number {
    return a.id;
}

export function sortByName(a: Product, b: Product): number {
    return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: selectProductId,
    sortComparer: sortByName,
});

export const initialState: ProductState = adapter.getInitialState({
    editingProductId: null,
    taxPercentage: 20,
});

export const productReducer = createReducer(
    initialState,
    on(ProductActions.addProduct, (state, { product }) => {
        return adapter.addOne(product, state)
    }),
    on(ProductActions.setProduct, (state, { product }) => {
        return adapter.setOne(product, state)
    }),
    on(ProductActions.upsertProduct, (state, { product }) => {
        return adapter.upsertOne(product, state);
    }),
    on(ProductActions.deleteProduct, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(ProductActions.loadProducts, (state, { products }) => {
        return adapter.setAll(products, state);
    }),
    on(ProductActions.setEditingProduct, (state, { id }) => {
        return { ...state, editingProductId: id };
    }),
    on(ProductActions.setTaxPercentage, (state, { value }) => {
        return { ...state, taxPercentage: value };
    }),
);