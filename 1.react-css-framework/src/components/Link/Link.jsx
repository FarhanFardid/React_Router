import React from 'react';

const Link = ({route}) => {

    return (
        <li className='p-2 justify-around m-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;