import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Search() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const searchRecipes = async () => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}`;
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'  
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Error");
            }
            const result = await response.json();
            console.log(result);
            setRecipes(result.results || []); 
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (e) => {
        setQuery(e.target.value);
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
                    onChange={handleChange}
                    placeholder="Search..."
                    className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500 w-72"
                />
                <button type="submit" className="transform -translate-x-6">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}

export default Search;