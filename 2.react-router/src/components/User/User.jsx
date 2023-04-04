import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    return (
        <div className='user'>
            <h2>Name: {user.name}</h2>
         
          
            <p><Link to={`/user/${user.id}`}> Show Details</Link></p>
        </div>
    );
};

export default User;