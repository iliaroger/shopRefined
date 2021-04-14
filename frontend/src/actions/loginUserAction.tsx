import {
  FAIL_USER_LOGIN,
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
  USER_LOGGED_IN,
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

export const setUserAction = (
  status: string,
  firstName: string,
  lastName: string,
  email: string,
  gender: string
) => (dispatch: any) => {
  dispatch({
    type: USER_LOGGED_IN,
    payload: {
      status,
      firstName,
      lastName,
      email,
      gender,
    },
  });
};
