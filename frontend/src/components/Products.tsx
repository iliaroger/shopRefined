import React, { useState, useEffect } from 'react';
import FilterProducts from '../components/FilterProducts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../actions/productsAction';

export default function Products() {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [clickedItem, setClickedItem] = useState<string>('');
  const [clickCooloff, setClickCooloff] = useState<boolean>(false);
  const dispatch = useDispatch();
  let { loading, products }: DestructuredData = useSelector(
    (state: FetchState) => state.productsReducer
  );

  interface ProductItem {
    name: string;
    available: Boolean;
    image: string;
    price: number;
    productCollection: string;
    _id: string;
  }

  interface FetchState {
    productsReducer: DestructuredData;
  }

  interface DestructuredData {
    loading: Boolean;
    products: {
      name: string;
      available: Boolean;
      image: string;
      price: number;
      productCollection: string;
      _id: string;
    }[];
  }

  useEffect(() => {
    dispatch(fetchProductsAction);
  }, [dispatch]);

  const addToCartAnimation = (el: any) => {
    if (clickCooloff) return;
    if (!el.available) return;
    setClickedItem(el._id);
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
        {loading
          ? Array.from(Array(10).keys()).map((i) => {
              return (
                <div
                  className="flex flex-col h-80 w-1/6 m-6 border shadow"
                  key={i}
                >
                  <div className="h-40 w-full mx-auto bg-gray-200 animate-pulse"></div>
                  <div className="h-8 w-40 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-20 mx-auto mt-1 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-40 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-20 mx-auto mt-1 bg-gray-200 animate-pulse"></div>
                  <div className="h-8 w-32 mx-auto mt-2 bg-gray-200 animate-pulse"></div>
                </div>
              );
            })
          : products.map((el: ProductItem, i) => {
              return (
                <div
                  className="flex flex-col relative h-80 w-1/6 m-6 border hover:border hover:border-blue-700 transition duration-200 shadow"
                  key={`${el._id}`}
                >
                  <div
                    className={`absolute mr-2 top-0 w-full bg-blue-600 ${
                      addedToCart && clickedItem === el._id
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
                    {`${el.productCollection} Collection`}
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
