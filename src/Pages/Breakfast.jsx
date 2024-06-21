import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import RecipeCard from '../Components/Recipecard';

function Breakfast() {
    const [breakfastRecipe, setBreakfastRecipe] = useState([]);

    useEffect(() => {
        const fetchBreakfastRecipes = async () => {
            const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2&include-tags=breakfast&dairyFree=true';
            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'  
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Error");
                }
                const result = await response.json();
                console.log(result);
                setBreakfastRecipe(result.recipes);
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchBreakfastRecipes();
    }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
      <h2 className="font-semibold text-center text-2xl mt-10">Vegan Recipes</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 p-4">
            {breakfastRecipe.map(recipe => (
                <RecipeCard
                    key={recipe.id}>
                    recipeImg={recipe.image}
                    recipeTitle={recipe.title}
                />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Breakfast;