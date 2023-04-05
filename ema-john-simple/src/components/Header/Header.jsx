import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav'> 
            <div className="nav-logo">
              <img src={logo} alt="logo"  />
               
            </div>
            <div className="nav-link">
                <Link  to="/">Shop</Link >
to             <Link  to="/orders">Orders</Link >
to             <Link  to="/inventory">Inventory</Link >
to             <Link  to="/login">Login</Link >

to          </div>
           
        </nav>
    );
};

export default Header;