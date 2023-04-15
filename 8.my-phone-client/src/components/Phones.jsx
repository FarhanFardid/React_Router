import React from 'react';
import { useLoaderData,Link } from 'react-router-dom';

import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <h2>Phones</h2>
           <div>
            {
                phones.map(phone => 
                    <li><Link to={`/phones/${phone.id}`}> {phone.phone_name}</Link></li>
                    )
            }
           </div>
        </div>
    );
};

export default Phones;