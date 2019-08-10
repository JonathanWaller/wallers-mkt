import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav_wrapper">
      <div className="nav_linksWrapper">
        <Link to ='/'>
            <div id="nav_link">Waller's Market</div>
        </Link>
        <Link to="/">
          <div id="nav_link">Home</div>
        </Link>
        <Link to="/about">
          <div id="nav_link">About</div>
        </Link>
        <Link to="/history">
          <div id="nav_link">History</div>
        </Link>
        <Link to="/contact">
          <div id="nav_link">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;