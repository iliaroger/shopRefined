import React, { useState } from 'react';
import ProfileLogin from '../components/ProfileLogin';
import ProfileSignIn from '../components/ProfileSignIn';
import { ToggleProvider } from '../context/Context';

export default function Profile() {
  const [currentView, setCurrentView] = useState('login');
  let values = { currentState: currentView, changeState: setCurrentView };

  return (
    <React.Fragment>
      <ToggleProvider value={values}>
        <div className="flex flew-row h-full w-full justify-center items-center">
          {currentView === 'login' ? (
            <ProfileLogin></ProfileLogin>
          ) : (
            <ProfileSignIn></ProfileSignIn>
          )}
        </div>
      </ToggleProvider>
    </React.Fragment>
  );
}
