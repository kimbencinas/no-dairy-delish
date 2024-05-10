import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';

function Meals() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
      const feedData = async () => {
          const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
          const options = {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '46bdcb908amsh37465532556edf5p168cafjsn62a83629af8d',
                  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
              }
          };
  
          try {
              const response = await fetch(url, options);
              if(!response.ok) {
                  throw new Error('Response was not ok.');
              }
              const result = await response.json();
              console.log(result);
              setFeedList(result);
          } catch(error) {
              console.error(error);
          }
      };
  
      feedData();
  }, []);
  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="font-semibold text-center text-2xl mt-10">Vegan Recipes</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 p-4">
          {feedList.map((recipe, index) => (
            <div key={index}>
              <img src={recipe.image} alt={recipe.title} className="w-48" />
              <p className="text-center w-52">{recipe.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meals;