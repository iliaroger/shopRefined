import React, { useState, useContext } from 'react';
import { toggleContext } from '../context/ProfileContext';
import { userRegisterAction } from '../actions/registerUserAction';
import { useDispatch } from 'react-redux';
import NotificationWarning from '../components/NotificationWarning';
import { setTimeout } from 'timers';
import NotificationSuccess from '../components/NotificationSuccess';

export default function ProfileSignIn() {
  const [activeGender, setActiveGender] = useState<string>('');
  const [ageChecked, setAgeChecked] = useState<boolean>(false);
  const { changeState } = useContext(toggleContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [notificationWarning, setNotificationWarning] = useState(false);
  const [notificationSuccess, setNotificationSuccess] = useState(false);
  const dispatch = useDispatch();

  const postRegister = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (
      activeGender !== '' &&
      ageChecked &&
      !checkEmptyName() &&
      checkPasswords() &&
      checkEmail()
    ) {
      dispatch(
        userRegisterAction({
          gender: activeGender,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: pw1,
        })
      );
      resetInputFields();
      notificationSuccessTrigger();
    } else {
      notificationWarningTrigger();
    }
  };

  const resetInputFields = () => {
    setAgeChecked(false);
    setActiveGender('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPw1('');
    setPw2('');
  };

  const checkEmail = () => {
    if (email !== '') return true;
    else return false;
  };

  const notificationWarningTrigger = () => {
    setNotificationWarning(true);
    setTimeout(() => {
      setNotificationWarning(false);
    }, 3000);
  };

  const notificationSuccessTrigger = () => {
    setNotificationSuccess(true);
    setTimeout(() => {
      setNotificationSuccess(false);
    }, 3000);
  };

  const checkEmptyName = (): boolean => {
    if ((firstName && lastName) === '') return true;
    else return false;
  };

  const checkPasswords = (): boolean => {
    if (pw1 === pw2 && pw1 && pw2 !== '') return true;
    else return false;
  };

  return (
    <React.Fragment>
      {notificationWarning ? (
        <NotificationWarning
          animation={true}
          notificationMessage="A problem occured while creating a new user account."
        ></NotificationWarning>
      ) : (
        <NotificationWarning
          animation={false}
          notificationMessage="A problem occured while creating a new user account."
        ></NotificationWarning>
      )}

      {notificationSuccess ? (
        <NotificationSuccess animation={true}></NotificationSuccess>
      ) : (
        <NotificationSuccess animation={false}></NotificationSuccess>
      )}

      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="w-2/6">
          <h1 className="text-3xl text-center font-semibold mb-8">
            Create a new account 👋
          </h1>
          <form>
            <label className="font-semibold text-lg">
              Gender <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-row">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  checked={activeGender === 'male'}
                  onChange={() => setActiveGender('male')}
                ></input>
                <label
                  className="ml-1 select-none cursor-pointer"
                  onClick={() => setActiveGender('male')}
                >
                  Male
                </label>
              </div>
              <div className="flex flex-row items-center ml-2">
                <input
                  type="checkbox"
                  checked={activeGender === 'female'}
                  onChange={() => setActiveGender('female')}
                ></input>
                <label
                  className="ml-1 select-none cursor-pointer"
                  onClick={() => setActiveGender('female')}
                >
                  Female
                </label>
              </div>
              <div className="flex flex-row items-center ml-2">
                <input
                  type="checkbox"
                  checked={activeGender === 'divers'}
                  onChange={() => setActiveGender('divers')}
                ></input>
                <label
                  className="ml-1 select-none cursor-pointer"
                  onClick={() => setActiveGender('divers')}
                >
                  Divers
                </label>
              </div>
            </div>
            <div className="flex flex-row mt-2 mb-2 flex-nowrap">
              <div className="flex flex-col w-1/2">
                <label className="font-semibold text-lg">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="border rounded shadow p-1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder={'Leeroy'}
                  value={firstName}
                ></input>
              </div>
              <div className="flex flex-col w-1/2 ml-1">
                <label className="font-semibold text-lg">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="border shadow rounded p-1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLastName(e.target.value);
                  }}
                  placeholder={'Jenkins'}
                  value={lastName}
                ></input>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-lg">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border shadow rounded p-1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder={'plan@justrush.com'}
                value={email}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-lg">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="border rounded shadow p-1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPw1(e.target.value)
                }
                value={pw1}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-lg">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="border shadow rounded p-1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPw2(e.target.value);
                }}
                value={pw2}
              ></input>
            </div>
            <div className="flex flex-row items-center mt-2 mb-2">
              <input
                type="checkbox"
                checked={ageChecked}
                onChange={() => setAgeChecked(!ageChecked)}
              ></input>
              <label
                className="ml-1 select-none text-sm font-semibold cursor-pointer"
                onClick={() => setAgeChecked(!ageChecked)}
              >
                Are you older than 16? <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="text-center mt-6 mb-4">
              <button
                className="border w-full text-white bg-blue-600 p-3 rounded border-transparent cursor-pointer"
                onClick={(e) => {
                  postRegister(e);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Already a member?{' '}
              <button
                className="text-blue-600 cursor-pointer"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  changeState('login');
                }}
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
