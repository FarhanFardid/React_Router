import React from 'react';
// import { LineChart, Line, CartesianGrid, BarChart, XAxis, YAxis } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, } from 'recharts';

const ReChart = () => {
    const students = [
        {
          name: 'John',
          math: 85,
          physics: 76,
          chemistry: 92
        },
        {
          name: 'Emily',
          math: 92,
          physics: 88,
          chemistry: 79
        },
        {
          name: 'Alex',
          math: 78,
          physics: 82,
          chemistry: 84
        },
        {
          name: 'Sarah',
          math: 95,
          physics: 90,
          chemistry: 87
        },
        {
          name: 'Michael',
          math: 80,
          physics: 85,
          chemistry: 91
        },
        {
          name: 'Emma',
          math: 89,
          physics: 79,
          chemistry: 88
        },
        {
          name: 'David',
          math: 92,
          physics: 91,
          chemistry: 85
        },
        {
          name: 'Lucy',
          math: 87,
          physics: 84,
          chemistry: 82
        },
        {
          name: 'Daniel',
          math: 78,
          physics: 80,
          chemistry: 75
        },
        {
          name: 'Sophia',
          math: 91,
          physics: 92,
          chemistry: 89
        }
      ];
      
    return (
        <div>
           
  <LineChart width={600} height={300} data={students}>
    <Line type="monotone" dataKey="physics" stroke="#8884d8" />
    <Line type="monotone" dataKey="math" stroke="#8854d8" />
    <Line type="monotone" dataKey="chemistry" stroke="#3884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>

         
        </div>
    );
};

export default ReChart;