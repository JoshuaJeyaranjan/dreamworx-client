import React, { useState, useEffect } from 'react';
import './ImageCarousel.scss';

const images = [
  'src/assets/images/white.jpeg',
  'src/assets/images/volvo-logo.png',
  'src/assets/images/volkswagon-logo.png',
  'src/assets/images/toyota-logo.png',
  'src/assets/images/tesla-logo.png',
  'src/assets/images/suzuki-logo.png',
  'src/assets/images/subaru-logo.png',
  'src/assets/images/porsche-logo.png'
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='image-carousel'>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='image-carousel__image' />
    </div>
  );
}