import { NavLink } from "react-router-dom";

function Nav(props) {
  function setClassName({ isActive }) {
    return `App-link ${isActive ? "active" : ""}`;
  }

  return (
    <ul>
      <li>
        <NavLink to={"/"} className={setClassName}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className={setClassName}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className={setClassName}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
