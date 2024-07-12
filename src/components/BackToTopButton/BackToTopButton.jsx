import React, { useState, useEffect } from 'react';
import './BackToTopButton.scss';
import upArrowIcon from '../../assets/icons/up-chevron.png'; // Make sure this path points to your PNG icon

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <img src={upArrowIcon} alt="Back to Top" className="back-to-top__icon" />
    </div>
  );
}