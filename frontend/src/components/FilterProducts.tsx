import React, { useState } from 'react';

export default function FilterProducts() {
  const [priceFilter, setPriceFilter] = useState<boolean>(true);

  return (
    <div className="flex flex-row justify-center h-8 mt-4">
      <button className="bg-white shadow-sm border-gray-400 border rounded h-full pl-2 pr-2">
        Sort by name
      </button>
      <button className="bg-white border shadow-sm border-gray-400 rounded h-full pl-2 pr-2 ml-4">
        Price up
      </button>
      <button
        className="bg-white border shadow-sm border-gray-400 rounded h-full pl-2 pr-2 ml-4"
        onClick={() => setPriceFilter(!priceFilter)}
      >
        Price down
      </button>
    </div>
  );
}
