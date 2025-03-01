import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div>

        </div>
    );
}

export default RecipePage;