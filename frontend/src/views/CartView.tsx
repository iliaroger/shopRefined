import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

export default function CartView() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="h-full">
        <Cart></Cart>
      </div>
      <div className="h-16">
        <Footer></Footer>
      </div>
    </div>
  );
}
