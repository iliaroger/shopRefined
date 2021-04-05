import {
  FAIL_PRODUCTS,
  REQUEST_PRODUCTS,
  SUCCESS_PRODUCTS,
} from '../constants/productsConstants';
import axios from 'axios';

export const fetchProductsAction = async (dispatch: any) => {
  dispatch({
    type: REQUEST_PRODUCTS,
  });
  try {
    setTimeout(() => {
      axios
        .get('/api/fetchProducts')
        .then((products) => {
          dispatch({
            type: SUCCESS_PRODUCTS,
            payload: products.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: FAIL_PRODUCTS,
            payload: err.message,
          });
        });
    }, 1000);
  } catch (err) {
    dispatch({
      type: FAIL_PRODUCTS,
      payload: err.message,
    });
  }
};
