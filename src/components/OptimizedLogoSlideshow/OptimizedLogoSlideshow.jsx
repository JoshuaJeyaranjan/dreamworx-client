import React, { useEffect, useRef } from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./OptimizedLogoSlideshow.scss";

const OptimizedLogoSlideshow = ({
  logos = [],
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || logos.length === 0) return;

    const container = containerRef.current;
    const wrapper = container.querySelector(
      ".optimized-logo-slideshow__wrapper"
    );

    if (!wrapper) return;

    let animationId;
    let position = 0;
    const isLeft = direction === "left";

    const animate = () => {
      position += isLeft ? -1 : 1;

      // Reset position when logos have scrolled completely
      const logoWidth = wrapper.children[0]?.offsetWidth || 0;
      const totalWidth = logoWidth * logos.length;

      if (isLeft && position <= -totalWidth) {
        position = 0;
      } else if (!isLeft && position >= 0) {
        position = -totalWidth;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationId) return;
      animationId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Start animation
    startAnimation();
    animationRef.current = { startAnimation, stopAnimation };

    // Pause on hover
    if (pauseOnHover) {
      container.addEventListener("mouseenter", stopAnimation);
      container.addEventListener("mouseleave", startAnimation);
    }

    return () => {
      stopAnimation();
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", stopAnimation);
        container.removeEventListener("mouseleave", startAnimation);
      }
    };
  }, [logos, speed, direction, pauseOnHover]);

  if (!logos.length) {
    return (
      <div className={`optimized-logo-slideshow ${className}`}>
        <div className="optimized-logo-slideshow__empty">
          <p>No logos available</p>
        </div>
      </div>
    );
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className={`optimized-logo-slideshow ${className}`}
      role="region"
      aria-label="Brand logos slideshow"
    >
      <div className="optimized-logo-slideshow__wrapper">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="optimized-logo-slideshow__logo-container">
            <OptimizedImage
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="optimized-logo-slideshow__logo optimized-image--logo"
              loading="lazy"
              sizes="(max-width: 768px) 80px, 120px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizedLogoSlideshow;
