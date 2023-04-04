import React, { useState } from 'react';
import axios  from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
const[phone, setPhone] =useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data => {
    const loadedData = data.data.data;
   
    const phones = loadedData.map(phone =>{
       const parts =  phone.slug.split('-');
       const price= parseInt (parts[1]);
       const phoneInfo ={
        name : phone.phone_name,
        price : price
       }
         return phoneInfo;
    }
         
         );
         setPhone(phones);
 


})

    return (
       


        <div>
            <BarChart
          width={1500}
          height={500}
          data={phone}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        
        </BarChart>
        </div>
    );
};

export default Phones;