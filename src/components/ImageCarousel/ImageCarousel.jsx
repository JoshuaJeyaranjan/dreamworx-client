import React, { useState, useEffect } from 'react';
import './ImageCarousel.scss';

const images = [
  '/assets/images/cool-car-1.jpg',
  '/assets/images/cool-car-5.jpg',
  '/assets/images/cool-car-6.jpg',
  '/assets/images/cool-car-7.jpg',
  '/assets/images/cool-car-8.jpg',
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