import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({phone}) => 
{
    const {brand,image,phone_name,slug} = phone;
    return (
        <div className="col-span-4 gap-2 border-2 border-gray-600 rounded-lg p-4 text-center relative">
           <div className='mb-8'>
           <img className='mx-auto p-2' src={image} alt="phone-image" />
            <p className='text-xs p-1'>Brand: {brand}</p>
            <h4 className='text-sm font-normal'>Model: {slug}</h4>
            <h2 className='text-xl font-medium'>Phone Name: {phone_name}</h2>
       
           </div>
          <div className='absolute bottom-0 mt-4 '>
          <button className='border-2 rounded-md bg-slate-600 font-bold text-white hover:bg-slate-900 p-2 m-1'>Buy Now </button>
         <Link to ={`/details/${slug}`}> <button className='border-2 rounded-md bg-slate-950 font-bold text-white hover:bg-gray-500 p-2 m-1'>View Details</button></Link>
          </div>
        </div>
    );
};

export default Product;