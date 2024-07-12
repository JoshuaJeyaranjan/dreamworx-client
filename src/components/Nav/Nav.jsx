import React, { useState } from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="nav">
      <Link to='/'>
        <img className="nav__logo" src="src/assets/images/logo.JPG" alt="Dreamworx Logo" />
      </Link>

      <ul className="nav__menu">
        <NavLink to="/" className="nav__link" activeClassName='active'>
          Home
        </NavLink>
        
        <div 
          className="nav__services"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink to="/services" className="nav__link" activeClassName='active'>
            Services
          </NavLink>
          
          <div className={`nav__submenu ${isHovered ? 'visible' : ''}`}>
            <NavLink to="/care" className="nav__sub-link" activeClassName='active'>
              Car Care
            </NavLink>
            <NavLink to="/customize" className="nav__sub-link" activeClassName='active'>
              Customization
            </NavLink>
            <NavLink to="/mechanical" className="nav__sub-link" activeClassName='active'>
              Mechanical
            </NavLink>
            <NavLink to="/bodywork" className="nav__sub-link" activeClassName='active'>
              Body Shop
            </NavLink>
          </div>
        </div>

        <NavLink to="/about" className="nav__link" activeClassName='active'>
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav__link" activeClassName='active'>
          Contact
        </NavLink>
      </ul>
    </div>
  );
}