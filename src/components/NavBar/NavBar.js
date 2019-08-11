import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const  NavBar = () => {
  return (
    <div className='nav_wrapper'>
      <div className='navLeft'>
        
        <Link to ='/' style={{textDecoration: 'none'}}>
            <div id="nav_link">Waller's Market</div>
        </Link>
      </div>
        <div className='navRight'>
          <Link to="/" style={{textDecoration: 'none'}}>
            <div id="nav_link">Home</div>
          </Link>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <div id="nav_link">About</div>
          </Link>
          <Link to="/history" style={{textDecoration: 'none'}}>
            <div id="nav_link">History</div>
          </Link>
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <div id="nav_link">Contact</div>
          </Link>
        </div>
    </div>
  );
}

export default NavBar;