import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';

function Results({ recipes, recipeItem}) {

  return (
    <div>
        {recipes.map((recipeItem) => (
          <div key={recipeItem.id}>
            <h2>{recipeItem.title}</h2>
          </div>
        ))}
    </div>
  );
}

export default Results;