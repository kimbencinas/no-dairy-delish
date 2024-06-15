import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const searchRecipes = async () => {
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&intolerances=dairy&number=4&ranking=2`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Error");
            }
            const result = await response.json();
            console.log(result);
            onSearch(result.results); 
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchRecipes();
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500 w-72"
                />
                <button onClick={searchRecipes} type="submit" className="transform -translate-x-6">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}

export default Search;