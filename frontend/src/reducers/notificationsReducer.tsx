import { USER_INIT_LOGIN } from '../constants/notificationConstants';

export const notificationsReducer = (
  state = { initLogin: false },
  action: any
) => {
  switch (action.type) {
    case USER_INIT_LOGIN:
      return { ...state, initLogin: true };

    default:
      return state;
  }
};
