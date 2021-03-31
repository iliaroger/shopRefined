import React, { useState, useEffect } from 'react';
import ProductList from '../products';
import FilterProducts from '../components/FilterProducts';

export default function Products() {
  const [loaded, setLoading] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [clickedItem, setClickedItem] = useState<number>(0);
  const [clickCooloff, setClickCooloff] = useState<boolean>(false);

  interface IProductItem {
    name: string;
    available: boolean;
    collection: string;
    image: string;
    price: number;
    key: number;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  const addToCartAnimation = (el: IProductItem) => {
    if (clickCooloff) return;
    if (!el.available) return;
    setClickedItem(el.key);
    setAddedToCart(true);
    setClickCooloff(true);
    setTimeout(() => {
      setAddedToCart(false);
      setClickCooloff(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <FilterProducts></FilterProducts>
      <div
        className={`flex flex-row flex-wrap border-b h-full ${
          clickCooloff ? 'cursor-wait' : 'null'
        }`}
      >
        {!loaded
          ? ProductList.map(() => {
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
          : ProductList.map((el) => {
              return (
                <div
                  className="flex flex-col relative h-80 w-1/6 m-6 border hover:border hover:border-blue-700 transition duration-200 shadow"
                  key={el.key}
                >
                  <div
                    className={`absolute mr-2 top-0 w-full bg-blue-600 ${
                      addedToCart && clickedItem === el.key
                        ? 'opacity-100'
                        : 'opacity-0'
                    } transition duration-200 z-10`}
                  >
                    <p className="text-center text-white">Added to your cart</p>
                  </div>
                  <img
                    src={el.image}
                    alt="adidas shoe zx4000"
                    className="h-40 object-cover -translate-y-6 select-none"
                  ></img>
                  <h2 className="mx-auto font-bold mt-1 text-lg text-blue-700">
                    {el.name}
                  </h2>

                  {el.available ? (
                    <p className="mx-auto text-sm text-green-400">In Stock</p>
                  ) : (
                    <p className="mx-auto text-sm text-red-400">Out of Stock</p>
                  )}
                  <hr className="w-8 mx-auto m-1"></hr>
                  <p className="mx-auto text-gray-600 text-sm">
                    {`${el.collection} Collection`}
                  </p>
                  <p className="mx-auto">{`${el.price}€`}</p>
                  <button
                    className={`border ${
                      el.available
                        ? 'border-gray-600'
                        : 'border-gray-400 text-gray-400'
                    } ${
                      clickCooloff ? 'cursor-wait' : ''
                    } w-1/2 self-center mt-2 border-gray-400 rounded-sm p-1 select-none text-sm`}
                    disabled={!el.available || clickCooloff}
                    onClick={() => addToCartAnimation(el)}
                  >
                    {el.available ? 'Add to cart' : 'Unavailable'}
                  </button>
                </div>
              );
            })}
      </div>
    </React.Fragment>
  );
}
