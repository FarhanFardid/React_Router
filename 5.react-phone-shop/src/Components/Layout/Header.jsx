import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-gray-800'>
            <div>
                <p className='text-4xl font-bold text-white  ms-10'>Apple Store</p>
            </div>
            <div className='me-7'>
            <ActiveLink  to='/'>Home</ActiveLink>
            <ActiveLink to='/shop'>Shop</ActiveLink>
            <ActiveLink  to='/order'>Order</ActiveLink>
           
       

            </div>
          

            

            
        </nav>
    );
};

export default Header;