import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Results from './Pages/Results';
import './App.css';

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
      const recipeData = async () => {
        const url = 'https://tasty.p.rapidapi.com/recipes/list';
        const queryParams = new URLSearchParams({
          from: '0',
          size: '5',
          tags: 'dairy_free,vegan' // Add the tags parameter
        });

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(`${url}?${queryParams}`, options);
          const result = await response.json();
          console.log(result);
          setRecipeList(result.results);
        } catch (error) {
          console.error(error);
        }
      };

      recipeData();
  }, []);

  const handleSearchResult = (results) => {
    setSearchResult(results);
  };

  return (
    <div>
      <Navbar onSearch={handleSearchResult} />
      {searchResult.length > 0 ? (
        <Results recipes={searchResult} />
      ) : (
        <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-bold">Recipes</h2>
          <div className="flex gap-4">
            {recipeList.map(recipe => (
                <div key={recipe.id}>
                  <h3>{recipe.name}</h3>
                  <img src={recipe.thumbnail_url} alt={recipe.thumbnail_alt_text} />
                </div>
            ))}
          </div>
        </div>
       </div>
      )}
    </div>
  );
}

export default App;
