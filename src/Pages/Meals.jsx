import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';

function Meals() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random';
      const queryParams = new URLSearchParams({
        number:'1',
        dairyFree: true
      });

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
		      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(`${url}?${queryParams}`, options);
        if (!response.ok) {
          throw new Error('Error');
        }
        const result = await response.json();
        console.log(result);
        setRecipes(result.recipes);
      } catch(error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);
  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="font-semibold text-center text-2xl mt-10">Vegan Recipes</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 p-4">
          {recipes.map(recipe => (
            <div key ={recipe.id}>
              <a href={recipe.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer">
                <h2>{recipe.title}</h2>
              </a>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meals;