import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="flex justify-between border-b shadow-sm h-full">
        <div className="p-5 font-bold text-blue-700">
          <p
            className="select-none cursor-pointer"
            onClick={() => history.push('/')}
          >
            Shekeyo - Streetwear Inji
          </p>
        </div>
        <div className="p-5 flex flex-row z-20">
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
