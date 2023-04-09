import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);
const phones= loadedData.data;
    return (
        <div>
            <h2 className="text-6xl font-semibold text-center p-5 bg-zinc-400">
        Welcome to Apple Store
      </h2>

      <div className="grid grid-cols-12 gap-4">
  <div className="col-span-8 bg-gray-200">
   <h2 className='text-3xl font-bold text-center p-5'> Products </h2>
    </div>
  <div className="col-span-4 bg-gray-600">
  <h2 className='text-xl font-bold text-center p-5'> Cart Summary </h2>
    </div>
</div>
        </div>
    );
};

export default Shop;