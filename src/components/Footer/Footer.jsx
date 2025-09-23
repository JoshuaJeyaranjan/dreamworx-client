import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <img
              className="footer__logo"
              src="/assets/images/logo.JPG"
              alt="Dreamworx Logo"
            />
            <h3 className="footer__brand-name">DreamWorx Auto Body</h3>
            <p className="footer__tagline">
              Your premier destination for automotive excellence in the GTA
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4 className="footer__section-title">Services</h4>
              <ul className="footer__list">
                <li>
                  <Link to="/care" className="footer__link">
                    Car Care
                  </Link>
                </li>
                <li>
                  <Link to="/customize" className="footer__link">
                    Customization
                  </Link>
                </li>
                <li>
                  <Link to="/mechanical" className="footer__link">
                    Mechanical
                  </Link>
                </li>
                <li>
                  <Link to="/bodywork" className="footer__link">
                    Body Work
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Company</h4>
              <ul className="footer__list">
                <li>
                  <Link to="/about" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer__link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer__link">
                    All Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Contact Info</h4>
              <div className="footer__contact">
                <p className="footer__contact-item">
                  <span className="footer__contact-icon">📍</span>
                  Greater Toronto Area, ON
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-icon">📞</span>
                  Call for Free Quote
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-icon">🚗</span>
                  Free Pickup & Dropoff
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__social">
            <Socials />
          </div>
          <div className="footer__copyright">
            <p className="footer__text">
              © 2024 DreamWorx Auto Body. All rights reserved.
            </p>
            <p className="footer__text">
              Crafted with ❤️ for automotive excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
