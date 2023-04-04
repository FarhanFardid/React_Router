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
        <nav className='bg-purple-800 text-white'>
            <div onClick={()=> setOpen(!open)} className='md:hidden p-2'>
                <span>{open == false ? <Bars3Icon className="h-6 w-6 text-black-800" /> :  <XMarkIcon className="h-6 w-6 text-black-800" />  } </span>
             
            </div>
          
            <ul className ={`md:flex absolute font-bold md:static p-3 bg-purple-800 duration-500 ${open ? 'top-7' : '-top-60'}`}>
                {
                    routes.map(route => <Link route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;