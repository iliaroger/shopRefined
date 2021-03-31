import React, { useState } from 'react';

export default function Profile() {
  const [loginMode, setLoginMode] = useState<string>('signUp');
  const [activeGender, setActiveGender] = useState<string>('none');
  const [ageChecked, setAgeChecked] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="flex flew-row h-full w-full justify-center items-center">
        {loginMode === 'login' ? (
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
                ></input>
                <label className="font-bold text-gray-800 text-lg">
                  Password
                </label>
                <input
                  type="password"
                  className="border w-full shadow p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></input>
              </div>
              <div className="flex flex-row justify-between mb-8">
                <div className="flex flex-row items-center">
                  <input type="checkbox"></input>
                  <label className="text-sm ml-1">Remember me</label>
                </div>
                <div>
                  <a className="text-sm text-blue-800" href="/resetPassword">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="text-center">
                <button className="border w-full p-3 rounded text-white bg-blue-600 border-transparent">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-sm">
                Don't have an account yet?{' '}
                <button
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setLoginMode('signIn')}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row h-full w-full justify-center items-center">
            <div className="w-2/6">
              <h1 className="text-3xl text-center font-semibold">
                Create a new account 👋
              </h1>
              <form>
                <div className="flex flex-row mt-8 mb-2 flex-nowrap">
                  <div className="flex flex-col w-1/2">
                    <label className="font-semibold text-lg">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border rounded shadow p-1"
                    ></input>
                  </div>
                  <div className="flex flex-col w-1/2 ml-1">
                    <label className="font-semibold text-lg">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border shadow rounded p-1"
                    ></input>
                  </div>
                </div>
                <label className="font-semibold text-lg">
                  Gender <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-row mb-4">
                  <div className="flex flex-row items-center">
                    <input
                      type="checkbox"
                      checked={activeGender === 'male'}
                      onClick={() => setActiveGender('male')}
                    ></input>
                    <label
                      className="ml-1 select-none"
                      onClick={() => setActiveGender('male')}
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex flex-row items-center ml-2">
                    <input
                      type="checkbox"
                      checked={activeGender === 'female'}
                      onClick={() => setActiveGender('female')}
                    ></input>
                    <label
                      className="ml-1 select-none"
                      onClick={() => setActiveGender('female')}
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex flex-row items-center ml-2">
                    <input
                      type="checkbox"
                      checked={activeGender === 'divers'}
                      onClick={() => setActiveGender('divers')}
                    ></input>
                    <label
                      className="ml-1 select-none"
                      onClick={() => setActiveGender('divers')}
                    >
                      Divers
                    </label>
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label className="font-semibold text-lg">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border shadow rounded p-1"
                  ></input>
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
                    onClick={() => setAgeChecked(!ageChecked)}
                  ></input>
                  <label
                    className="ml-1 select-none text-sm font-semibold"
                    onClick={() => setAgeChecked(!ageChecked)}
                  >
                    Are you older than 16?{' '}
                    <span className="text-red-600">*</span>
                  </label>
                </div>
                <div className="text-center mt-6 mb-4">
                  <button className="border w-full text-white bg-blue-600 p-3 rounded border-transparent">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="text-sm">
                  Already a member?{' '}
                  <button
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setLoginMode('login')}
                  >
                    Log In
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
