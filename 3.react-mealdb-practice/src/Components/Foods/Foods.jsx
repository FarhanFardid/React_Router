import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Canadian from '../CanadianFood/Canadian';

const Foods = () => {
    const foods = useLoaderData();
    const {meals} = foods;
     console.log(meals);
    return (
        <div>
            <h2 className='text-4xl font-extrabold text-center text-yellow-300 bg-gray-400 p-5'>Canadian Foods</h2>
           <div className='grid grid-cols-3 gap-2 p-2'>
            {
                meals.map(meal => <Canadian 
                    key={meal.id}
                    meal ={meal}></Canadian>)
            }
            </div>
        </div>
    );
};

export default Foods;