import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';

function Breakfast() {
    useEffect(() => {
        const fetchBreakfastRecipes = async () => {
            const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random';
            const queryParams = new URLSearchParams ({
                dishType: 'breakfast',
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
                    throw new Error("Error");
                }
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBreakfastRecipes();
    }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Breakfast;