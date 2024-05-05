import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
<div className="flex flex-row bg-emerald-200 justify-between p-5">
      <div className="flex gap-4">
        <Link to="/">NoDairyDelish</Link>
        <input
            type="text"
            placeholder="Search..."
            className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500"
        />
      </div>
      <div className="flex flex-row gap-8">
        <Link to="/meals">Meals</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
  );
}

export default Navbar;
