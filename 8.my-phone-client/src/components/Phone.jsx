import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    const {phone_name,image} = phone;
    
    return (
        <div>
            <h2>phone Name: {phone_name} </h2>
            <img src={image} alt=""  />
        </div>
    );
};

export default Phone;