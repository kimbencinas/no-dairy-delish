import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';

function Ingredients() {
  const [itemPrice, setItemPrice] = useState([]);

  useEffect(() => {
    const getItemPrice = async () => {
      const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apple&number=1&ignorePantry=true&ranking=1';

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
          throw new Error('Error');
        }
        const result = await response.json();
        console.log(result);
        setItemPrice(result.itemPrice);
      } catch(error) {
        console.error(error);
      }
    };
    getItemPrice();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        
      </div>
    </div>
  );
}

export default Ingredients;