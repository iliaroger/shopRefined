import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function LoginView() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="h-full">
        <Profile></Profile>
      </div>
      <div className="h-16">
        <Footer></Footer>
      </div>
    </div>
  );
}
