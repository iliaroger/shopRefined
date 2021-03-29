import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="flex justify-between border-b shadow-sm h-full">
        <div className="p-5 font-bold text-blue-700">
          <p>Shekeyo - Streetwear Inji</p>
        </div>
        <div className="p-5 flex flex-row">
          <Link to="/" className="hover:underline px-2">
            Products
          </Link>
          <Link to="/cart" className="hover:underline px-2">
            Cart
          </Link>
          <Link to="/profile" className="hover:underline px-2">
            Profile
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
