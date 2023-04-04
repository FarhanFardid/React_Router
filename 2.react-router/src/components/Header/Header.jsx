import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contacts">Contact</Link>
            <Link to ="/users">Users</Link>
        </nav>
    );
};

export default Header;