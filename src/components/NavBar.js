import React from "react";
import { Link } from "react-router-dom";
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
           <Link className="view-properties" to= "/properties">View Properties</Link>
         </li>
         <li className="navbar-links-item">
           <Link className="add-property" to= "/add-property">Add a Property</Link>
         </li>
       </ul>
    </div>
  );
};

export default NavBar;
