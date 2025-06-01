import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="wrapper">
    <div className="logo">
       <img src={logo} alt="Logo" className="logo-img" />
     </div>
    <ul className="nav-links">
      {["Home", "About", "Skills", "Education", "Work", "Experience", "Contact"].map((item) => (
        <li key={item}>
          <Link to={item.toLowerCase()} smooth={true} duration={500}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
