import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

export default function CartView() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}
