import React from 'react';

export default function Cart() {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-1/2 items-center">
        <h1 className="text-center text-2xl font-semibold">Your Cart</h1>
        <div className="flex flex-row shadow nowrap w-3/4 center">
          <img
            className="w-30 h-20 object-cover"
            alt="item"
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
          ></img>
          <h1 className="self-center text-lg font-semibold ml-4">Item Name</h1>
          <p className="self-center ml-4 text-gray-600">Qt: 20</p>
          <p className="self-center ml-4 text-gray-600">Total: 120€</p>
          <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none">
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col w-1/2 border">
        <p>Your Oders</p>
      </div>
    </div>
  );
}
