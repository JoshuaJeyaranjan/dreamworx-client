// Performance monitoring and optimization utilities

// Web Vitals monitoring
export const measureWebVitals = () => {
  if (typeof window === "undefined") return;

  // Measure Core Web Vitals
  const measureCLS = () => {
    let clsValue = 0;
    let clsEntries = [];
    let sessionValue = 0;
    let sessionEntries = [];

    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            clsEntries = [...sessionEntries];
          }
        }
      }
    });

    observer.observe({ type: "layout-shift", buffered: true });
    return { clsValue, clsEntries };
  };

  const measureFID = () => {
    let fidValue = 0;
    let fidEntries = [];

    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        fidValue = entry.processingStart - entry.startTime;
        fidEntries.push(entry);
      }
    });

    observer.observe({ type: "first-input", buffered: true });
    return { fidValue, fidEntries };
  };

  const measureLCP = () => {
    let lcpValue = 0;
    let lcpEntries = [];

    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpValue = lastEntry.startTime;
      lcpEntries.push(lastEntry);
    });

    observer.observe({ type: "largest-contentful-paint", buffered: true });
    return { lcpValue, lcpEntries };
  };

  return {
    measureCLS,
    measureFID,
    measureLCP,
  };
};

// Image optimization utilities
export const preloadCriticalImages = (imageUrls) => {
  if (typeof window === "undefined") return;

  imageUrls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback, options = {}) => {
  if (typeof window === "undefined") return null;

  const defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle utility for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Resource hints for performance
export const addResourceHints = () => {
  if (typeof window === "undefined") return;

  // DNS prefetch for external domains
  const dnsPrefetchDomains = ["fonts.googleapis.com", "fonts.gstatic.com"];

  dnsPrefetchDomains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });

  // Preconnect to critical origins
  const preconnectOrigins = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  preconnectOrigins.forEach((origin) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Bundle analyzer helper
export const logBundleInfo = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("🚀 Performance optimizations loaded");
    console.log("📦 Bundle size monitoring enabled");
    console.log("🖼️ Image optimization active");
  }
};
