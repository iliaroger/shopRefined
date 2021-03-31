import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function LoginView() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}
