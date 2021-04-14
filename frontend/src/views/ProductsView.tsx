import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function ProductsView() {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <div className="h-16">
          <Navbar></Navbar>
        </div>
        <div className="h-full">
          <Products></Products>
        </div>
        <div className="h-16">
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}
