import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const phone= useLoaderData();
    console.log(phone); 
    const {brand,image,name,mainFeatures,releaseDate,others} = phone.data;
    const{storage, displaySize,memory,chipSet} = mainFeatures;
    const{WLAN,GPS,Bluetooth,NFC,Radio} = others;

    return (
        <div className='text-center bg-slate-600 p-10'>
            <img className='mx-auto border-2 rounded-md ' src={image} alt="images" />
            <p>{brand}</p>
            <p>{name}</p>
            <p>{releaseDate}</p>
            <div>
            <div>
                <h2>Main Features</h2>
                <p>Storage: {storage}</p>
                <p>Display: {displaySize}</p>
                <p>ChipSet: {chipSet}</p>
                <p>Memory: {memory}</p>
                 
                </div>
                <div>
                    <h2>Others: </h2>
                    <p>W-LAN: {WLAN} </p>
                    <p>GPS: {GPS}</p>
                    <p>BlueTooth: {Bluetooth}</p>
                    <p>NFC: {NFC}</p>
                    <p>Radio: {Radio}</p>
                </div>
            </div>
            

            
        </div>
    );
};

export default ProductDetails;