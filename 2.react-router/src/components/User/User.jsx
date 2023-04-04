import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>UserName: {user.username}</p>
            <p>Email:{user.email}</p>
            <p>Address:{user.address.city}</p>
        </div>
    );
};

export default User;