import {
  FAIL_USER_REGISTER,
  REQUEST_USER_REGISTER,
  SUCCESS_USER_REGISTER,
} from '../constants/userConstants';

export const registerReducer = (
  state = {
    loading: false,
    message: {},
  },
  action: any
) => {
  switch (action.type) {
    case REQUEST_USER_REGISTER:
      return { loading: true, data: action.payload };
    case SUCCESS_USER_REGISTER:
      return { loading: false, data: action.payload };
    case FAIL_USER_REGISTER:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
