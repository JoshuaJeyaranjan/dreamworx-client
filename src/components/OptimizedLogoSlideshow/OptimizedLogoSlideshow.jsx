import { useEffect, useRef } from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./OptimizedLogoSlideshow.scss";

const OptimizedLogoSlideshow = ({
  logos = [],
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || logos.length === 0) return;

    const wrapper = wrapperRef.current;
    const isLeft = direction === "left";
    let animationFrame;
    let position = isLeft ? window.innerWidth : -wrapper.scrollWidth;

    const animate = () => {
      position += isLeft ? -1 : 1;
      if (isLeft && position <= -wrapper.scrollWidth) {
        position = window.innerWidth;
      } else if (!isLeft && position >= window.innerWidth) {
        position = -wrapper.scrollWidth;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    startAnimation();

    if (pauseOnHover) {
      wrapper.addEventListener("mouseenter", stopAnimation);
      wrapper.addEventListener("mouseleave", startAnimation);
    }

    return () => {
      stopAnimation();
      if (pauseOnHover) {
        wrapper.removeEventListener("mouseenter", stopAnimation);
        wrapper.removeEventListener("mouseleave", startAnimation);
      }
    };
  }, [logos, direction, pauseOnHover]);

  if (!logos.length) {
    return (
      <div className={`optimized-logo-slideshow ${className}`}>
        <div className="optimized-logo-slideshow__empty">
          <p>No logos available</p>
        </div>
      </div>
    );
  }

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`optimized-logo-slideshow ${className}`}
      role="region"
      aria-label="Brand logos slideshow"
    >
      <div className="optimized-logo-slideshow__wrapper" ref={wrapperRef}>
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
