import products from './products';

import { combineReducers } from 'redux';

import { StateModel as ProductsStateModel } from './products';

export interface StateModel {
  products: ProductsStateModel;
}

export const root = combineReducers({
  products,
});
