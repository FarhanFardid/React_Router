import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { name: 'Home', path: '/', },
        { name: 'About', path: '/about', },
        { name: 'Products', path: '/products', },
        { name: 'Contact', path: '/contact', },
      ];
      
    return (
        <nav>
            <div onClick={()=> setOpen(!open)}>
                <span>{open == true ? <Bars3Icon className="h-6 w-6 text-black-800" /> :  <XMarkIcon className="h-6 w-6 text-black-800" />  } </span>
             
            </div>
          
            <ul className ={`md:flex absolute font-bold ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(route => <Link route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;