import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import CartProducts from '../CartProducts/CartProducts';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    
    const [cart,setCart] = useState(savedCart);

    const removeCart = (id) => {

        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
     console.log(id);
    }
   
    return (
        <div className='shop'>
        <div className=''>
              {
               cart.map(cart=> <CartProducts
                 cart={cart}
                 key ={cart.id}
                 removeCart={removeCart}></CartProducts>)
            
              }
              
        </div>
        <div className='product-summary'>
       <Cart cart={cart}></Cart>
        </div>
    </div>
    );
};

export default Order;