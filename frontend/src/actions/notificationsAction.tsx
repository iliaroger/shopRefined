import { USER_INIT_LOGIN } from '../constants/notificationConstants';

export const userLoggedInAction = () => (dispatch: any) => {
  dispatch({
    type: USER_INIT_LOGIN,
  });
};
