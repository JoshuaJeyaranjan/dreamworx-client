import { useState, useRef, useEffect } from "react";
import "./OptimizedImage.scss";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  placeholder = "/assets/images/placeholder.jpg",
  loading = "lazy",
  sizes = "100vw",
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getOptimizedSrc = (originalSrc) => {
    if (typeof window !== "undefined" && window.Modernizr?.webp) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div
      ref={imgRef}
      className={`optimized-image ${className} ${isLoaded ? "loaded" : ""} ${
        hasError ? "error" : ""
      }`}
      {...props}
    >
      {!isInView && !priority ? (
        <div className="optimized-image__placeholder">
          <div className="optimized-image__skeleton" />
        </div>
      ) : (
        <>
          {!isLoaded && !hasError && (
            <div className="optimized-image__placeholder">
              <div className="optimized-image__skeleton" />
            </div>
          )}

          <img
            src={hasError ? placeholder : optimizedSrc}
            alt={alt}
            loading={priority ? "eager" : loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`optimized-image__img ${isLoaded ? "loaded" : ""}`}
            style={{ opacity: isLoaded ? 1 : 0 }}
          />
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
