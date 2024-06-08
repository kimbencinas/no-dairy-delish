import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';

function Results({ recipes, recipeItem}) {

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipeItem) => (
          <div key={recipeItem.id}>
            <h2>{recipeItem.title}</h2>
          </div>
        ))
        ) : (
          <p>Recipe not found.</p>
      )}
    </div>
  );
}

export default Results;