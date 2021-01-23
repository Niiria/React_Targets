import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav_background p-4 border-b-4 border-black ">
      <ul className="flex justify-evenly text-5xl font-sofia  font-bold flex-wrap">
        <li className="cursor-pointer transform transition duration-500 ease-in hover:scale-110">
          <NavLink exact to="/">
            Targets
          </NavLink>
        </li>
        <li className="cursor-pointer transform transition duration-500 ease-in hover:scale-110">
          <NavLink to="/map">
            Map
          </NavLink>
        </li>
        <li className="cursor-pointer transform transition duration-500 ease-in hover:scale-110">
          <NavLink to="/account">
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
