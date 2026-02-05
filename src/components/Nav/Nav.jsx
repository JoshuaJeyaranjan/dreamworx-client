import { useState, useEffect } from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubmenuVisible(false);
  };

  return (
    <nav className={`nav ${isScrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">
        <Link to="/" className="nav__brand" onClick={closeMenu}>
          <img
            className="nav__logo"
            src="/assets/images/logo.JPG"
            alt="Dreamworx Logo"
          />
          <span className="nav__brand-text">DreamWorx</span>
        </Link>

        <button
          className="nav__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav__menu ${isMenuOpen ? "nav__menu--open" : ""}`}>
          <NavLink to="/" className="nav__link" onClick={closeMenu}>
            <span>Home</span>
          </NavLink>

          <NavLink to="/about" className="nav__link" onClick={closeMenu}>
            <span>About Us</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="nav__link nav__link--cta"
            onClick={closeMenu}
          >
            <span>Contact</span>
          </NavLink>

          <div className="nav__services">
            <NavLink to="/services" className="nav__link" onClick={closeMenu}>
              <span>Services</span>
            </NavLink>
            <button
              className="nav__submenu-toggle"
              onClick={toggleSubmenu}
              aria-expanded={isSubmenuVisible}
            >
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`nav__submenu ${isSubmenuVisible ? "visible" : ""}`}
            >
              <NavLink to="/care" className="nav__sub-link" onClick={closeMenu}>
                <span>Car Care</span>
              </NavLink>
              <NavLink
                to="/customize"
                className="nav__sub-link"
                onClick={closeMenu}
              >
                <span>Customization</span>
              </NavLink>
              <NavLink
                to="/mechanical"
                className="nav__sub-link"
                onClick={closeMenu}
              >
                <span>Mechanical</span>
              </NavLink>
              <NavLink
                to="/bodywork"
                className="nav__sub-link"
                onClick={closeMenu}
              >
                <span>Body Work</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
