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
        <Link to="/" className="mt-1 text-lg font-bold text-indigo-600">NoDairyDelish</Link>
        <Search onSearch={onSearch} />
      </div>
      <div className="flex flex-row gap-5 items-end mb-1">
        <button onClick={toggleDropdown} className="transition duration-700 ease-in-out hover:text-indigo-600">
          Meals
        </button>
        {isOpen && (
          <ul className="absolute top-12 py-3 mr-4 divide-y p-1 bg-white shadow-md">
            <li className="hover:text-indigo-600">
              <Link to="/breakfast">Breakfast</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/lunch">Lunch</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/dinner">Dinner</Link>
            </li>
        </ul>
        )}
        <Link to="/about" className="hover:text-indigo-600">About Us</Link>
        <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>
        <Link to="/account" className="hover:text-indigo-600">Account</Link>
      </div>
    </div>
    
  );
}

export default Navbar;
