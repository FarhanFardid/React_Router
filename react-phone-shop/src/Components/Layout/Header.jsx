import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-gray-800'>
            <div>
                <p className='text-5xl font-extrabold text-white '>Apple Store</p>
            </div>
            <div className='me-7'>
            <Link className='font-bold text-xl ms-4 p-3 text-red-300' to='/'>Home</Link>
            <Link className='font-bold text-xl ms-4 p-3 text-red-300' to='/shop'>Shop</Link>
            <Link className='font-bold text-xl ms-4 p-3 text-red-300' to='/order'>Order</Link>
           
       

            </div>
          

            

            
        </nav>
    );
};

export default Header;