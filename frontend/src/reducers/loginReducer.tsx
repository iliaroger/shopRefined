import {
  FAIL_USER_LOGIN,
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../constants/userConstants';

export const userLoginReducer = (
  state = {
    loading: false,
    userData: {},
  },
  action: any
) => {
  switch (action.type) {
    case REQUEST_USER_LOGIN:
      return { loading: true, userData: action.payload };

    case SUCCESS_USER_LOGIN:
      return { loading: false, userData: action.payload };

    case FAIL_USER_LOGIN:
      return { loading: false, userData: action.payload };

    default:
      return state;
  }
};

export const manageUserReducer = (
  state = { status: 'error', user: {} },
  action: any
) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        status: action.payload.status,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          gender: action.payload.gender,
        },
      };
    case USER_LOGGED_OUT:
      return { status: 'error', user: {} };
    default:
      return state;
  }
};
