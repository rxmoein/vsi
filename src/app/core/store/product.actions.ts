import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const loadProducts = createAction('[Product/API] Load Products', props<{ products: Product[] }>());
export const addProduct = createAction('[Product/API] Add Product', props<{ product: Product }>());
export const setProduct = createAction('[Product/API] Set Product', props<{ product: Product }>());
export const upsertProduct = createAction('[Product/API] Upsert Product', props<{ product: Product }>());
export const deleteProduct = createAction('[Product/API] Delete Product', props<{ id: number }>());
export const setEditingProduct = createAction('[Product/API] Set Editing product', props<{ id: number }>());
export const setTaxPercentage = createAction('[Product/API] Set Tax percentage', props<{ value: number }>());
