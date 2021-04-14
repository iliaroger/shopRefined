import {
  FAIL_PRODUCTS,
  REQUEST_PRODUCTS,
  SUCCESS_PRODUCTS,
} from '../constants/productsConstants';

export const fetchProductsReducer = (
  state = { loading: false, products: [{}] },
  action: any
) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return { loading: true };
    case SUCCESS_PRODUCTS:
      return { loading: false, products: action.payload };
    case FAIL_PRODUCTS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
