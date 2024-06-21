import React from 'react';

function RecipeCard({ recipeImg, recipeTitle }) {
    <div>
        <div>
            <img src={recipeImg} alt={recipeTitle} className="w-24" />
            <h2 className="text-lg font-semibold">{recipeTitle}</h2>
        </div>
    </div>
}

export default RecipeCard;