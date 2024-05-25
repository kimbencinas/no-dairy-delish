import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className="flex flex-row bg-emerald-200 p-3 justify-center gap-80">
      <div className="flex gap-2">
        <Link to="/" className="mt-1">NoDairyDelish</Link>
        <input
            type="text"
            placeholder="Search..."
            className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500 w-72"
        />
      </div>
      <div className="flex flex-row gap-5 items-end mb-1">
        <button onClick={toggleDropdown} className="">
          Meals
        </button>
        {isOpen && (
          <ul className="absolute top-12 py-3 mr-4 divide-y p-1 bg-gray-100">
            <DropdownItem text="Breakfast" to="/breakfast"></DropdownItem>
            <DropdownItem text="Lunch" to="/lunch"></DropdownItem>
            <DropdownItem text="Dinner" to="/dinner"></DropdownItem>
        </ul>
        )}
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
    
  );
}

function DropdownItem(props){
  return (
    <li>
      <a>{props.text}</a>
    </li>
  )
}

export default Navbar;
