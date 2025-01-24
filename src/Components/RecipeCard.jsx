import React from 'react';

function Recipecard({ recipeImg, recipeTitle }) {
    <div>
        <div className="rounded-lg shadow-md hover:shadow-lg p-4">
            <img src={recipeImg} alt={recipeTitle} className="w-24" />
            <h2 className="text-lg font-semibold">{recipeTitle}</h2>
        </div>
    </div>
}

export default Recipecard;