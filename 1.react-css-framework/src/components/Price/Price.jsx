import React from 'react';

const Price = (props) => {
    const {pack} = props;
    return (
        <div className='text-center p-3 py-4 bg-slate-300 m-3 border-solid border-black rounded-lg'>
            <h2 className='text-4xl font-bold text-purple-600'>${pack.pricing}<span className='text-slate-500 text-xl'>/month</span></h2>
            <p className='text-2xl fw-bolder '>{pack.name}</p>
            <button className='w-full py-3 font-bold border-red-600 rounded-md bg-purple-500 m-2 mx-auto'>Buy Now</button>
        </div>
    );
};

export default Price;