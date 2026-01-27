import MealSearchInput from './components/MealSearchInput';

const MealsPage = async ({searchParams}) => {
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search || ''}`);
            const data = await res.json();
            return data.meals;
        } catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <div>
            <h1 className='text-3xl font-bold mb-6'>Meals Page</h1>

            <div>
                <MealSearchInput></MealSearchInput>
            </div>

            {
                !meals ? (
                    <p>No meals found.</p>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {
                            meals.map(meal => (
                                <div key={meal.idMeal} className='border p-4 m-4 rounded-lg shadow-lg'>
                                    <h2 className='text-2xl font-bold mb-2'>{meal.strMeal}</h2>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-auto mb-2' />
                                    <p className='text-sm'>{meal.strInstructions.substring(0, 100)}...</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default MealsPage;