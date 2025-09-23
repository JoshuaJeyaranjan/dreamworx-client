import React, { useState, useEffect, useCallback } from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./OptimizedImageCarousel.scss";

const OptimizedImageCarousel = ({
  images = [],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const prevImage = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToImage = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      setTimeout(() => setIsTransitioning(false), 300);
    },
    [currentIndex, isTransitioning]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const intervalId = setInterval(nextImage, interval);
    return () => clearInterval(intervalId);
  }, [isPlaying, interval, nextImage, images.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, isPlaying]);

  // Notify parent of image change
  useEffect(() => {
    onImageChange?.(currentIndex, images[currentIndex]);
  }, [currentIndex, images, onImageChange]);

  if (!images.length) {
    return (
      <div className={`optimized-image-carousel ${className}`}>
        <div className="optimized-image-carousel__empty">
          <p>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`optimized-image-carousel ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Image carousel"
    >
      <div className="optimized-image-carousel__container">
        <OptimizedImage
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="optimized-image-carousel__image optimized-image--carousel"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />

        {showArrows && images.length > 1 && (
          <>
            <button
              className="optimized-image-carousel__arrow optimized-image-carousel__arrow--prev"
              onClick={prevImage}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="optimized-image-carousel__arrow optimized-image-carousel__arrow--next"
              onClick={nextImage}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {showDots && images.length > 1 && (
        <div className="optimized-image-carousel__dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`optimized-image-carousel__dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="optimized-image-carousel__controls">
        <button
          className="optimized-image-carousel__play-pause"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <span className="optimized-image-carousel__counter">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default OptimizedImageCarousel;
