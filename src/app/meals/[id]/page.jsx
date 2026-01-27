import Image from 'next/image';
import React from 'react';

export const getMealById = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals[0];
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const meal = await getMealById(id);
    return {
        title: meal.strMeal,
        description: meal.strInstructions.substring(0, 150),
    };
}

const SingleMealPage = async ({ params }) => {
    const { id } = await params;
    const meal = await getMealById(id);
    return (
        <div>
            <h1>Single Meal</h1>
            <p>Meal ID: {id}</p>
            <p className='text-xl font-bold'>Meal Name: {meal.strMeal}</p>
            <Image width={641} height={641} src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-100 object-cover mb-2' />
            <p className='text-lg'>{meal.strInstructions}</p>
        </div>
    );
};

export default SingleMealPage;