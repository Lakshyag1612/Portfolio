import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JS Jigar</div>
      <ul className="nav-links">
        {["Home", "About", "Skills", "Education", "Work", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth={true} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
