import React from 'react';

function RecipeCard({ recipeImg, recipeTitle }) {
    <div>
        <div>
            <img src={recipeImg} alt={recipeTitle} />
            <h2>{recipeTitle}</h2>
        </div>
    </div>
}

export default RecipeCard;