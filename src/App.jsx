import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "./utils/ScrolltoTop";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const BodyWorkPage = lazy(() => import("./pages/BodyWorkPage/BodyWorkPage"));
const CarePage = lazy(() => import("./pages/CarePage/CarePage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const CustomizePage = lazy(() => import("./pages/CustomizePage/CustomizePage"));
const MechanicalPage = lazy(() =>
  import("./pages/MechanicalPage/MechanicalPage")
);
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

// Loading component for Suspense
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__content">
      <div className="page-loader__spinner"></div>
      <p>Loading page...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/bodywork" element={<BodyWorkPage />} />
            <Route path="/care" element={<CarePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/customize" element={<CustomizePage />} />
            <Route path="/mechanical" element={<MechanicalPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
