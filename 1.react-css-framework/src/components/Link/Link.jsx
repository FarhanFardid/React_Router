import React from 'react';

const Link = ({route}) => {

    return (
        <li className='p-2 justify-around m-2 hover:bg-purple-900 pl-4'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;