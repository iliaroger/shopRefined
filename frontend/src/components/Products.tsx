import React, { useState, useEffect } from 'react';

export default function Products() {
  const [loaded, setLoading] = useState(false);
  const allItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-row flex-wrap border-b ">
        {!loaded
          ? allItems.map(() => {
              return (
                <div className="flex flex-col h-80 w-1/6 m-6 border shadow">
                  <div className="h-40 w-full mx-auto bg-gray-200 animate-pulse"></div>
                  <div className="h-8 w-40 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-20 mx-auto mt-1 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-40 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-20 mx-auto mt-1 bg-gray-200 animate-pulse"></div>
                  <div className="h-8 w-32 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                </div>
              );
            })
          : allItems.map(() => {
              return (
                <div className="flex flex-col h-80 w-1/6 m-6 border hover:border hover:border-blue-700 transition duration-200 shadow">
                  <img
                    src="https://i0.wp.com/cultedge.com/wp-content/uploads/2019/06/adidas-ZX4000-4D-BD7927-003-0033.jpg"
                    alt="adidas shoe zx4000"
                    className="w-full select-none"
                  ></img>
                  <h2 className="mx-auto font-bold mt-1 text-lg text-blue-700">
                    Adidas ZX4000
                  </h2>
                  <p className="mx-auto text-sm text-green-400">In Stock</p>
                  <hr className="w-8 mx-auto m-1"></hr>
                  <p className="mx-auto text-gray-600 text-sm">
                    Jzen Keo Collection
                  </p>
                  <p className="mx-auto">129,99€</p>
                  <button className="border border-gray-600 w-1/2 self-center mt-2 border-gray-400 rounded-sm p-1 select-none text-sm">
                    Add to cart
                  </button>
                </div>
              );
            })}
      </div>
    </React.Fragment>
  );
}
