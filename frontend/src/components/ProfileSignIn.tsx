import React, { useState, useContext } from 'react';
import { toggleContext } from '../context/ProfileContext';

export default function ProfileSignIn() {
  const [activeGender, setActiveGender] = useState<string>('none');
  const [ageChecked, setAgeChecked] = useState<boolean>(false);
  const { changeState } = useContext(toggleContext);

  return (
    <div className="flex flex-row h-full w-full justify-center items-center">
      <div className="w-2/6">
        <h1 className="text-3xl text-center font-semibold mb-8">
          Create a new account 👋
        </h1>
        {/* <hr className="w-1/4 mx-auto"></hr> */}
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
              <input type="text" className="border rounded shadow p-1"></input>
            </div>
            <div className="flex flex-col w-1/2 ml-1">
              <label className="font-semibold text-lg">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input type="text" className="border shadow rounded p-1"></input>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-lg">
              Email <span className="text-red-600">*</span>
            </label>
            <input type="text" className="border shadow rounded p-1"></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-lg">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="border rounded shadow p-1"
            ></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-lg">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="border shadow rounded p-1"
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
            <button className="border w-full text-white bg-blue-600 p-3 rounded border-transparent cursor-pointer">
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
  );
}
