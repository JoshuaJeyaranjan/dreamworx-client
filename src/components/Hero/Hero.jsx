import { useState, useEffect } from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import Button from "../Button/Button";
import "./Hero.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isLoaded ? "loaded" : ""}`}>
      <div className="hero__background">
        <OptimizedImage
          src="/assets/images/white.jpeg"
          alt="Dreamworx Auto Body - Premium Car Care"
          className="hero__bg-image optimized-image--hero"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <h2 className="hero__sub-heading">
            <span className="hero__sub-heading--line1">Begin Your</span>
            <span className="hero__sub-heading--line2">Automotive Journey</span>
          </h2>

          <h1 className="hero__heading">
            In the Greatest Car Care Center in the GTA
          </h1>

          <div className="hero__promos">
            <div className="hero__promo hero__promo--primary">
              <span>Free Pickup & Dropoff</span>
            </div>
            <div className="hero__promo hero__promo--secondary">
              <span>Lifetime Warranty!</span>
            </div>
          </div>

          <div className="hero__cta">
            <Link to="/contact" className="hero__cta-link">
              <Button variant="primary" size="lg" iconPosition="left">
                Get Free Quote
              </Button>
            </Link>

            <Link to="/services" className="hero__cta-link">
              <Button variant="outline" size="lg" iconPosition="left">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-arrow"></div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
