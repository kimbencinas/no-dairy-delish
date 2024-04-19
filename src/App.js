import React, { useState, useEffect } from 'react';

function App() {
  const [recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
      const recipeData = async () => {
        const url = 'https://tasty.p.rapidapi.com/recipes/list';
        const queryParams = new URLSearchParams({
          from: '0',
          size: '20',
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

  return (
    <div className="App">
      <header className="App-header">
       <h2>NoDairyDelish</h2>
       <div>
        {recipeList.map(recipe => (
            <p key={recipe.id}>{recipe.name}</p>
        ))}
       </div>
      </header>
    </div>
  );
}

export default App;
