import React, { useState, useContext } from 'react';
import { toggleContext } from '../context/ProfileContext';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../actions/loginUserAction';
import NotificationWarning from '../components/NotificationWarning';

export default function ProfileLogin() {
  const [rememberBox, setRememberBox] = useState<boolean>(false);
  const { changeState } = useContext(toggleContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [notificationWarning, setNotificationWarning] = useState(false);
  const dispatch = useDispatch();

  // add login form input check, dispatch login user data, get user data from server and update navbar

  const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!checkUserInput()) return triggerWarning();
    dispatch(loginUserAction(email, password));
  };

  const checkUserInput = () => {
    if (checkEmail() && checkPassword()) return true;
    else return false;
  };

  const checkEmail = (): boolean => {
    if (email === '') return false;
    else return true;
  };
  const checkPassword = (): boolean => {
    if (password === '') return false;
    else return true;
  };

  const triggerWarning = () => {
    setNotificationWarning(true);
    setTimeout(() => {
      setNotificationWarning(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      {notificationWarning ? (
        <NotificationWarning
          animation={true}
          notificationMessage="A problem occurred during the login process. Please check your account login credentials."
        ></NotificationWarning>
      ) : (
        <NotificationWarning
          animation={false}
          notificationMessage="A problem occurred during the login process. Please check your account login credentials."
        ></NotificationWarning>
      )}
      <div className="flex flex-col w-2/6">
        <h2 className="font-semibold text-3xl text-center">
          Login to your account ✌️
        </h2>
        <form className="mb-8">
          <div className="mt-8 mb-4">
            <label className="font-bold text-gray-800 text-lg">Email</label>
            <input
              type="text"
              className="mt-1 mb-4 border w-full shadow p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="john@company.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            ></input>
            <label className="font-bold text-gray-800 text-lg">Password</label>
            <input
              type="password"
              className="border w-full shadow p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              value={password}
            ></input>
          </div>
          <div className="flex flex-row justify-between mb-8">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                onChange={() => setRememberBox(!rememberBox)}
                checked={rememberBox}
              ></input>
              <label
                className="text-sm ml-1 select-none cursor-pointer"
                onClick={() => setRememberBox(!rememberBox)}
              >
                Remember me
              </label>
            </div>
            <div>
              <a className="text-sm text-blue-800" href="/resetPassword">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="text-center">
            <button
              className="border w-full p-3 rounded text-white bg-blue-600 border-transparent"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                loginUser(e);
              }}
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Don't have an account yet?{' '}
            <button
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                changeState('signIn');
              }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
