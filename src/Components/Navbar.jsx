import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Link to="/meals">Meals</Link>
        <ul>
          <DropdownItem text="Breakfast" to="/breakfast"></DropdownItem>
          <DropdownItem text="Lunch" to="/lunch"></DropdownItem>
          <DropdownItem text="Dinner" to="/dinner"></DropdownItem>
        </ul>
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
