import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NotificationSuccess from '../components/NotificationSuccess';
import { userLoggedInAction } from '../actions/notificationsAction';

export default function UserDashboard() {
  const history = useHistory();
  const userData = useSelector((state: any) => state.manageUserReducer);
  const { initLogin } = useSelector((state: any) => state.notificationsReducer);
  const [successNotification, setSuccessNotification] = useState(false);
  const dispatch = useDispatch();

  const triggerSuccessNotification = () => {
    setSuccessNotification(true);
    setTimeout(() => {
      setSuccessNotification(false);
    }, 3000);
  };

  useEffect(() => {
    console.log(initLogin);
    if (!initLogin) {
      triggerSuccessNotification();
      dispatch(userLoggedInAction());
    }
  }, []);

  return (
    <React.Fragment>
      {successNotification ? (
        <NotificationSuccess
          animation={true}
          headerText="Successfully logged in!"
          subText="If you have any questions regarding the dashboard, visit the FAQ section."
        ></NotificationSuccess>
      ) : (
        <NotificationSuccess
          animation={false}
          headerText="Successfully logged in!"
          subText="If you have any questions regarding the dashboard, visit the FAQ section."
        ></NotificationSuccess>
      )}
      <div className="flex flex-col text-center">
        <h1 className="text-lg">
          Welcome, {userData?.user?.firstName} to your Dashboard
        </h1>
        <button onClick={() => history.push('/profile/settings')}>
          My Settings
        </button>
        <button onClick={() => history.push('/profile/purchases')}>
          Recent Purchases
        </button>
        <button>Logout</button>
      </div>
    </React.Fragment>
  );
}
