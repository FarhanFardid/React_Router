import React from 'react';

import { NavLink } from 'react-router-dom';


const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive}) =>isActive ? "text-yellow-400 text-xl font-bold p-3 ms-4 hover:text-yellow-600" : 'font-bold text-xl ms-4 p-3 text-slate-300 hover:text-white'}
        
       >
          {children}
      </NavLink>
    );
};

export default ActiveLink;