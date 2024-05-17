import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Feed from '../Components/Feed';

function Ingredients() {
  const [itemPrice, setItemPrice] = useState([]);

  useEffect(() => {
    const getItemPrice = async () => {
      const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/priceBreakdownWidget.json';

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch(error) {
        console.error(error);
      }

    }
  })

  return (
    <div>
      <Navbar />
      <div>
      </div>
    </div>
  );
}

export default Ingredients;