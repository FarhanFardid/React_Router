import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>This is users page components</h2>
            <p>Users:  {users.length}</p>
            <div>
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;