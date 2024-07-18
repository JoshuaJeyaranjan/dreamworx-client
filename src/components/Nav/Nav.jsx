import React, { useState } from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <div className="nav">
      <Link to='/'>
        <img className="nav__logo" src="/assets/images/logo.JPG" alt="Dreamworx Logo" />
      </Link>

      <div className="nav__mobile-toggle" onClick={toggleMenu}>
        <span className="nav__mobile-toggle-icon">&#9776;</span>
      </div>

      <ul className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
        <NavLink to="/" className="nav__link" activeClassName='active'>
          Home
        </NavLink>

        <div className="nav__services">
          <NavLink to="/services" className="nav__link" activeClassName='active'>
            Services
          </NavLink>
          <span className="nav__submenu-toggle" onClick={toggleSubmenu}>&#9660;</span>
          <div className={`nav__submenu ${isSubmenuVisible ? 'visible' : ''}`}>
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
              Body Work
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
