import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/films"}>Films</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
