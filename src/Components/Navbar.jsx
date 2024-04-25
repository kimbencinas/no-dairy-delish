import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className="flex flex-row bg-gray-200 p-5 gap-8 justify-end">
        <h2>NoDairyDelish</h2>
        <Link to="/meals">Meals</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Navbar;
