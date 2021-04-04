import {
  FAIL_PRODUCTS,
  REQUEST_PRODUCTS,
  SUCCESS_PRODUCTS,
} from '../constants/productsConstants';
import axios from 'axios';

export const fetchProductAction = async (dispatch: any) => {
  dispatch({
    type: REQUEST_PRODUCTS,
  });
  try {
  } catch (err) {
    dispatch({
      type: FAIL_PRODUCTS,
      payload: err.message,
    });
  }
};
