import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();

    return (
        <div>
            <h2>User information:</h2>
            <h3>Name:{user.name}</h3>
            <h5>UserName: {user.username}</h5>
            <h6>Email:{user.email}</h6>
            <p>Address: {user.address.city}</p>

        </div>
    );
};

export default UserDetails;