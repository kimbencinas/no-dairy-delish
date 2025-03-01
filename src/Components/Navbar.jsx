import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className="flex flex-row shadow-md p-3 justify-center gap-80">
      <div className="flex gap-8">
        <Link to="/" className="mt-1 text-lg font-bold">NoDairyDelish</Link>
        <Search onSearch={onSearch} />
      </div>
      <div className="flex flex-row gap-5 items-end mb-1">
        <button onClick={toggleDropdown} className="transition duration-700 ease-in-out">
          Meals
        </button>
        {isOpen && (
          <ul className="absolute top-12 py-3 mr-4 divide-y p-1 bg-emerald-200">
            <li>
              <Link to="/breakfast">Breakfast</Link>
            </li>
            <li>
              <Link to="/lunch">Lunch</Link>
            </li>
            <li>
              <Link to="/dinner">Dinner</Link>
            </li>
        </ul>
        )}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
    
  );
}

export default Navbar;
