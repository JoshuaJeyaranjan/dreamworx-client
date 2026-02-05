import { Suspense, lazy } from "react";
import "./HomePage.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import OptimizedLogoSlideshow from "../../components/OptimizedLogoSlideshow/OptimizedLogoSlideshow";
import ContactForm from "../../components/ContactForm/ContactForm";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Socials from "../../components/Socials/Socials";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import ServiceLinkList from "../../components/ServiceLinkList/ServiceLinkList";

const Glitch = lazy(() => import("../../components/Glitch/Glitch"));

const brandLogos = [
  "/assets/images/alfa-logo.png",
  "/assets/images/acura-logo.png",
  "/assets/images/aston-logo.png",
  "/assets/images/audi-logo.png",
  "/assets/images/bentley-logo.png",
  "/assets/images/benz-logo.png",
  "/assets/images/bmw-logo.png",
  "/assets/images/bugatti-logo.png",
  "/assets/images/buick-logo.png",
  "/assets/images/cadillac-logo-2014.png",
  "/assets/images/chevrolet-corvette-logo.png",
  "/assets/images/new-chevrolet-logo.png",
  "/assets/images/true-chrysler-logo.png",
  "/assets/images/true-dodge-logo.png",
  "/assets/images/ferrari-logo.png",
  "/assets/images/fiat-logo.png",
  "/assets/images/ford-logo.png",
  "/assets/images/new-GMC-logo.png",
  "/assets/images/new-honda-logo.png",
  "/assets/images/hyundai-logo.png",
  "/assets/images/infiniti-logo.png",
  "/assets/images/jaguar-logo.png",
  "/assets/images/jeep-logo.png",
  "/assets/images/kia-logo.png",
  "/assets/images/Lamborghini-logo.png",
  "/assets/images/lexus-logo.png",
  "/assets/images/lincoln-logo.png",
  "/assets/images/mclaran-logo.png",
  "/assets/images/mini-logo.png",
  "/assets/images/mitsubishi-logo.png",
  "/assets/images/nissan-logo.png",
  "/assets/images/pontiac-logo.png",
  "/assets/images/porsche-logo.png",
  "/assets/images/ram-logo.png",
  "/assets/images/rolls-logo.png",
  "/assets/images/rover-logo.png",
  "/assets/images/subaru-logo.png",
  "/assets/images/suzuki-logo.png",
  "/assets/images/new-tesla-logo.png",
  "/assets/images/new-toyoto-logo.png",
  "/assets/images/new-volk-logo.png",
  "/assets/images/new-volvo-logo.png",
];

const header = "For Your Vehicle's Every Need";
const subHeader = "Discover our Expert Services";
const paragraph =
  "At Dreamworx Auto Body, we redefine automotive care with precision and passion. From top-teir car care and customization to expert mechanical and body shop services, we cater to your vehicle's every need. Choose excellence, choose Dreamworx Auto Body.";

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="loading-spinner__content">
      <div className="loading-spinner__spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Nav />

      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <Glitch {...{ subHeader, header, paragraph }} />
      </Suspense>

      <ServiceLinkList />

      <ChooseUs />

      <section className="homepage__brands">
        <div className="homepage__brands-content">
          <h2 className="homepage__brands-title">Trusted by Leading Brands</h2>
        </div>
        <OptimizedLogoSlideshow
          logos={brandLogos}
          speed={30}
          direction="left"
          pauseOnHover={true}
          className="homepage__brands-slideshow"
        />
      </section>

      <ContactForm />

      <Socials />

      <Footer />

      <BackToTopButton />

      <FloatingActionButton />
    </>
  );
}
