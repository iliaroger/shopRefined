import {
  FAIL_USER_LOGIN,
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
} from '../constants/userConstants';

import axios from 'axios';

export const loginUserAction = (email: string, password: string) => async (
  dispatch: any
) => {
  dispatch({
    type: REQUEST_USER_LOGIN,
  });
  try {
    await axios
      .post('/api/loginUser', {
        email: email,
        password: password,
      })
      .then((result) => {
        dispatch({
          type: SUCCESS_USER_LOGIN,
          payload: result,
        });
      });
  } catch (err) {
    dispatch({
      type: FAIL_USER_LOGIN,
      payload: err,
    });
  }
};
