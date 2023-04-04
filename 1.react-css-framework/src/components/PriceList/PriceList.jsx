import React from 'react';
import Price from '../Price/Price';

const PriceList = () => {
    const pricePackages = [
        {
          id: 1,
          name: 'Basic',
          pricing: 9.99
        },
        {
          id: 2,
          name: 'Standard',
          pricing: 19.99
        },
        {
          id: 3,
          name: 'Premium',
          pricing: 29.99
        }
      ];
      
    return (
        <div>
            <h2 className='text-4xl font-bold p-3 text-center bg-purple-400'>Affordable Packages</h2>
      
         <div className='grid md:grid-cols-3 gap-3' >
            {
                pricePackages.map(pack => <Price 
                    pack={pack}
                    key={pack.id} ></Price>)
            }
            </div> 
      
      
        </div>
    );
};

export default PriceList;