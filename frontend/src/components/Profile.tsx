import React, { useState, useEffect } from 'react';
import ProfileLogin from '../components/ProfileLogin';
import ProfileSignIn from '../components/ProfileSignIn';
import { ToggleProvider } from '../context/ProfileContext';
import { useSelector } from 'react-redux';
import { setUserAction } from '../actions/loginUserAction';
import { useDispatch } from 'react-redux';
import UserDashboard from '../components/UserDashboard';

export default function Profile() {
  const [currentView, setCurrentView] = useState('login');
  let values = { currentState: currentView, changeState: setCurrentView };
  const loginSuccess = useSelector((state: any) => state.userLoginReducer);
  const userData = useSelector((state: any) => state.manageUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginSuccess?.userData?.data?.status === 'success') {
      dispatch(
        setUserAction(
          loginSuccess.userData.data.status,
          loginSuccess.userData.data.message.firstName,
          loginSuccess.userData.data.message.lastName,
          loginSuccess.userData.data.message.email,
          loginSuccess.userData.data.message.gender
        )
      );
    }
  }, [loginSuccess]);

  return (
    <React.Fragment>
      <ToggleProvider value={values}>
        <div className="flex flew-row h-full w-full justify-center items-center">
          {currentView === 'login' ? (
            userData.status !== 'success' ? (
              <ProfileLogin></ProfileLogin>
            ) : (
              <UserDashboard></UserDashboard>
            )
          ) : (
            <ProfileSignIn></ProfileSignIn>
          )}
        </div>
      </ToggleProvider>
    </React.Fragment>
  );
}
