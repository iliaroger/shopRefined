import {
  FAIL_USER_LOGIN,
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
} from '../constants/userConstants';

export const userLoginReducer = (
  state: {
    loading: false;
    userData: {};
  },
  action: any
) => {
  switch (action.type) {
    case REQUEST_USER_LOGIN:
      return { loading: true };

    case SUCCESS_USER_LOGIN:
      return { loading: false, userData: action.payload };

    case FAIL_USER_LOGIN:
      return { loading: false };

    default:
      return state;
  }
};
