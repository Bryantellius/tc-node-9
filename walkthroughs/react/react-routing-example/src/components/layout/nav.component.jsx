import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={({isActive}) => `App-link ${isActive ? "active" : ""}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/films"} className={({isActive}) => `App-link ${isActive ? "active" : ""}`}>Films</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
