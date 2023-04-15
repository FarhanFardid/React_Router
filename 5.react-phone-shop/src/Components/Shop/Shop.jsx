import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const loadedData = useLoaderData();
    const [carts, setCarts] = useState([]);
    const addToCart = (id) => {
        // const exist = cart.find(pd=> pd.id === id);
        // if(!exist){
            let newCart = [...carts,id];
            setCarts(newCart);
        // }
      
    }
 
    // console.log(loadedData);
const phones= loadedData.data;
    return (
        <div>
            <h2 className="text-6xl font-semibold text-center p-5 bg-zinc-400">
        Welcome to Apple Store
      </h2>

      <div className="grid grid-cols-12 gap-1">
  <div className="col-span-8 bg-gray-200 ">
   <h2 className='text-3xl font-bold text-center p-5'> iPhones </h2>
  <div  className='grid grid-cols-12 gap-2 p-3'> {
    phones.map(phone => <Product
                key={phone.slug}
                phone={phone}
                addToCart={addToCart}></Product>)
   }
   </div>
    </div>
  <div className="col-span-4 bg-gray-600 ">
    {
        <Cart carts={carts}
        ></Cart>
    }
  
    </div>
</div>
        </div>
    );
};

export default Shop;