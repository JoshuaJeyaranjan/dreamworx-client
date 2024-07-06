import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="nav">
      <img className="nav__logo" src="src/assets/images/logo.JPG" alt="" />

      <ul className="nav__menu">
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <div
          className="nav__services"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink to="/services" className="nav__link">
            Services
          </NavLink>
          {isHovered && (
            <div className="nav__submenu">
              <NavLink to="/care" className="nav__sub-link">
                Car Care
              </NavLink>
              <NavLink to="/customize" className="nav__sub-link">
                Customization
              </NavLink>
              <NavLink to="/mechanical" className="nav__sub-link">
                Mechanical
              </NavLink>
              <NavLink to="/bodywork" className="nav__sub-link">
                Body Shop
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/about" className="nav__link">
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav__link">
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
