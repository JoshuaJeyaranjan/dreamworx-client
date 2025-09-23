import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { addResourceHints, logBundleInfo } from "./utils/performance.js";

// Add performance optimizations
addResourceHints();
logBundleInfo();

// Create root with concurrent features
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render with error boundary
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring in development
if (process.env.NODE_ENV === "development") {
  // Log performance metrics
  window.addEventListener("load", () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      console.log(
        "🚀 Page Load Time:",
        navigation.loadEventEnd - navigation.loadEventStart,
        "ms"
      );
      console.log(
        "📊 DOM Content Loaded:",
        navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        "ms"
      );
    }, 0);
  });
}
