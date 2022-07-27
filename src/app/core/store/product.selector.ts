import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('product');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectAllProducts = createSelector(
    selectProductState,
    selectAll
);