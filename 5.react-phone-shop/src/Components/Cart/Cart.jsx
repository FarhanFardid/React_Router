import React from 'react';

const Cart = ({carts}) => {
    let cart = false;
    if(carts.length > 0){
        cart = true;
    }

    return (
        <div>
            <p className='text-2xl font-bold text-center p-5 text-white'> Cart Summary </p>
            <div className='text-xl font-medium text-center p-2'>{ cart? <p>Items Added in the Cart: {carts.length}</p> : <p>Please, Add Products in the Cart to Buy</p> }</div>

            <div>
              {
                carts.map(pd=> <li className='text-2xl text-center font-light text-white list-decimal p-2'>{pd}</li> )
              }
            </div>
        </div>
    );
};

export default Cart;