import {
  FAIL_USER_LOGIN,
  FAIL_USER_REGISTER,
  REQUEST_USER_LOGIN,
  REQUEST_USER_REGISTER,
  SUCCESS_USER_LOGIN,
  SUCCESS_USER_REGISTER,
} from '../constants/userConstants';
import axios from 'axios';

interface FormData {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const userRegisterAction = async (dispatch: any) => (data: FormData) => {
  dispatch({
    type: REQUEST_USER_REGISTER,
  });

  try {
    axios
      .post('/api/register', {
        gender: data.gender,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then((result) => {
        dispatch({
          type: SUCCESS_USER_REGISTER,
          payload: result,
        });
      });
  } catch (err) {
    dispatch({
      type: FAIL_USER_REGISTER,
      payload: err,
    });
  }
};
