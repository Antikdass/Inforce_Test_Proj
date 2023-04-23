import { IProducts } from '../../typings/products';
import { IReduxAction } from '../../typings/redux';
import { ActionType } from '../actions/products';

export interface StateModel {
  products: IProducts[] | [];
  productsByCategory: IProducts[] | [];
  isUpdated: any;
}
const initialState: StateModel = {
  products: [],
  productsByCategory: [],
  isUpdated: {},
};

const products = (state: any = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_PRODUCTS: {
      return { ...state, products: payload };
    }

    default:
      return state;
  }
};

export default products;
