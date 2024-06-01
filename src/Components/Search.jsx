    import React, { useState, useEffect } from 'react';

    function Search() {
        const [recipe, setRecipe] = useState([]);

        useEffect(() => {
            const searchRecipes = async () => {
                const url = 'https://api.spoonacular.com/recipes/complexSearch';
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
                    setRecipe(result.recipes);
                    
                } catch (error) {
                    console.error(error);
                }
            };
            searchRecipes();
        }, []);

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500 w-72"
                />
            </div>
        )
    }

    export default Search;