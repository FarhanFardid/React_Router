import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';





const ProductDetails = () => {

    const navigate = useNavigate();
    const backToShop = () =>{
  
        navigate(-1);
    }

    const phone= useLoaderData();
    console.log(phone); 
    const {brand,image,name,mainFeatures,releaseDate,others} = phone.data;
    const{storage, displaySize,memory,chipSet} = mainFeatures;
  

    return (
        <div className='text-center bg-slate-400 p-16 grid grid-cols-12 h-full items-center justify-center'>
            
            <div className='col-span-7 p-3'>  
                 <p className='text-lg font-semibold'>Brand: {brand}</p>
            <p className='text-3xl font-extrabold p-2'> {name}</p>
            <p className='text-lg font-bold text-slate-950'>Release Date: { releaseDate? releaseDate : "Coming Soon"}</p>
            <div className='grid grid-cols-12  text-left'>
            <div className='col-span-6 mt-10 pe-4'>
                <h2 className='text-2xl text-center  font-bold'>Main Features</h2>
                <p className='text-lg p-1'><span className='font-bold'>Storage:</span>  {storage}</p>
                <p className='text-lg p-1'><span className='font-bold '>Display:</span>  {displaySize}</p>
                <p className='text-lg p-1'><span className='font-bold '>ChipSet:</span>  {chipSet}</p>
                <p className='text-lg p-1'><span className='font-bold '>Memory:</span>   {memory}</p>
                 
                </div>
                <div  className='col-span-6 mt-10 ps-4'>
                    <h2 className='text-2xl text-center  font-bold'>Others: </h2>
                    <p className='text-lg p-1'><span className='font-bold'>WLAN:</span> { others? others.WLAN : "Wi-Fi 802.11a "}</p>
                    <p className='text-lg p-1'><span className='font-bold'>GPS:</span> { others? others.GPS : "Yes, with GLONASS"}</p>
                    <p className='text-lg p-1'><span className='font-bold'>BlueTooth:</span>  { others? others.Bluetooth : "5.0 ADE"}</p>
                    <p className='text-lg p-1'><span className='font-bold'>NFC:</span> { others? others.NFC : "No"}</p>
                    <p className='text-lg p-1'><span className='font-bold'>Radio:</span>  { others? others.Radio : "NO"}</p>
                </div>
            </div></div>
            <div className='col-span-5'>   <img className='mx-auto border-2 rounded-md p-1 w-72 border-red-950' src={image} alt="images" /></div>
         
           <div className='col-span-12 mt-5'>  <button  className='border-2 rounded-lg bg-slate-950 text-white mx-auto py-4 px-6' onClick={backToShop}> Back to Shop</button></div>

            
        </div>
    );
};

export default ProductDetails;