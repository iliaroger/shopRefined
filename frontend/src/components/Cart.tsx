import React from 'react';

export default function Cart() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col relative h-5/6 w-1/2 items-center">
        <h1 className="text-center text-2xl font-semibold mt-6 mb-4">
          Your Shopping Cart
        </h1>
        <hr className="bg-gray-200 w-16 mb-4"></hr>
        <div className="flex flex-col h-full w-full items-center overflow-y-scroll">
          <div className="flex flex-row shadow nowrap w-3/4 mt-2 mb-2 justify-between transition duration-200 bg-white">
            <img
              className="w-30 h-20 object-cover"
              alt="item"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
            ></img>
            <div className="text-center">
              <h1 className="self-center text-lg font-semibold">Item Name</h1>
              <p className="self-center text-sm text-gray-600">Qt: 20</p>
              <p className="self-center text-sm text-gray-600">Total: 120€</p>
            </div>
            <div className="flex h-full mr-4">
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none hover:border-green-300 transition duration-200 select-none">
                +
              </button>
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-red-200 text-red-400 focus:outline-none hover:border-red-300 transition duration-200 select-none">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row shadow nowrap w-3/4 mt-2 mb-2 justify-between transition duration-200 bg-white">
            <img
              className="w-30 h-20 object-cover"
              alt="item"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
            ></img>
            <div className="text-center">
              <h1 className="self-center text-lg font-semibold">Item Name</h1>
              <p className="self-center text-sm text-gray-600">Qt: 20</p>
              <p className="self-center text-sm text-gray-600">Total: 120€</p>
            </div>
            <div className="flex h-full mr-4">
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none hover:border-green-300 transition duration-200 select-none">
                +
              </button>
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-red-200 text-red-400 focus:outline-none hover:border-red-300 transition duration-200 select-none">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row shadow nowrap w-3/4 mt-2 mb-2 justify-between transition duration-200 bg-white">
            <img
              className="w-30 h-20 object-cover"
              alt="item"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
            ></img>
            <div className="text-center">
              <h1 className="self-center text-lg font-semibold">Item Name</h1>
              <p className="self-center text-sm text-gray-600">Qt: 20</p>
              <p className="self-center text-sm text-gray-600">Total: 120€</p>
            </div>
            <div className="flex h-full mr-4">
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none hover:border-green-300 transition duration-200 select-none">
                +
              </button>
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-red-200 text-red-400 focus:outline-none hover:border-red-300 transition duration-200 select-none">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row shadow nowrap w-3/4 mt-2 mb-2 justify-between transition duration-200 bg-white">
            <img
              className="w-30 h-20 object-cover"
              alt="item"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
            ></img>
            <div className="text-center">
              <h1 className="self-center text-lg font-semibold">Item Name</h1>
              <p className="self-center text-sm text-gray-600">Qt: 20</p>
              <p className="self-center text-sm text-gray-600">Total: 120€</p>
            </div>
            <div className="flex h-full mr-4">
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none hover:border-green-300 transition duration-200 select-none">
                +
              </button>
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-red-200 text-red-400 focus:outline-none hover:border-red-300 transition duration-200 select-none">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row shadow nowrap w-3/4 mt-2 mb-2 justify-between transition duration-200 bg-white">
            <img
              className="w-30 h-20 object-cover"
              alt="item"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg"
            ></img>
            <div className="text-center">
              <h1 className="self-center text-lg font-semibold">Item Name</h1>
              <p className="self-center text-sm text-gray-600">Qt: 20</p>
              <p className="self-center text-sm text-gray-600">Total: 120€</p>
            </div>
            <div className="flex h-full mr-4">
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-green-200 text-green-400 focus:outline-none hover:border-green-300 transition duration-200 select-none">
                +
              </button>
              <button className="border h-1/2 w-10 self-center ml-4 rounded border-red-200 text-red-400 focus:outline-none hover:border-red-300 transition duration-200 select-none">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 text-center w-1/6 h-10 justify-center transform translate-y-14">
            <h1 className="text-gray-400 text-sm self-center">Scroll down</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 self-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="lightgray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <h1 className="text-center text-2xl font-semibold mt-6 mb-4">
          Checkout
        </h1>
        <hr className="bg-gray-200 w-16 mb-4 self-center"></hr>
        <div className="flex flex-col shadow rounded w-3/4 self-center bg-white mt-2">
          <p>
            All items: <br></br>-Flex Tape x 4 (102€)
          </p>
        </div>
      </div>
    </div>
  );
}
