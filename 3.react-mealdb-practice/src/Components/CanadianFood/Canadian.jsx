import React from 'react';

const Canadian = ({meal}) => {
    const {idMeal,strMeal,strMealThumb} = meal;
    return (
        <div className='border-2 border-gray-950 rounded-lg bg-slate-400'>
            <img className='w-full p-1' src={strMealThumb} alt="" />
            <h4 className='text-2xl text-center py-2'>Meal Id: {idMeal}</h4>
            <h2 className='text-3xl text-center py-1'>Meal Title:  {strMeal}</h2>

        </div>
    );
};

export default Canadian;