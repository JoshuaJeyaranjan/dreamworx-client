import "./Footer.scss";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import Map from "../Map/Map";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Map />
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
                <li>
                  <Link to="/services" className="footer__link">
                    All Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Connect</h4>
              <ul className="footer__list">
                <li>
                  <Link to="/about" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">More Info</h4>
              <div className="footer__contact">
                <p className="footer__contact-item">Greater Toronto Area, ON</p>
                <p className="footer__contact-item">Call for Free Quote</p>
                <p className="footer__contact-item">Free Pickup & Dropoff</p>
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
              © {new Date().getFullYear()} DreamWorx Auto Body. All rights
              reserved.
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
