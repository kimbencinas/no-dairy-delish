import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';

function Results({ recipes, recipeItem}) {

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-bold">Search Results</h2>
          <div className="flex gap-4">
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;