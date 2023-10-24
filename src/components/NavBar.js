import React from "react";
import "../styles/navbar.css";
import logo from "../Images/logo.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="My Logo" className="logo" />
        <span className="logo-name">Surreal Estate</span>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="#view-properties">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="#add-property">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
