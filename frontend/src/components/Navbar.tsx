import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="flex justify-between border shadow-sm">
        <div className="p-4 font-bold text-blue-700">
          <p>Shekeyo</p>
        </div>
        <div className="p-4 flex flex-row">
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
