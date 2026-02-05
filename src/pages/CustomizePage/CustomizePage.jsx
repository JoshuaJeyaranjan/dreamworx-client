import { useEffect, useRef } from "react";
import "./CustomizePage.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Glitch from "../../components/Glitch/Glitch";
import ServiceList from "../../components/ServiceList/ServiceList";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import BookService from "../../components/BookService/BookService";
import CareHero from "../../components/CareHero/CareHero";

export default function CustomizePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const customizeServices = [
    {
      title: "Vehicle Upholstery",
      paragraph:
        "Transform interiors with expert craftsmanship and premium materials.",
    },
    {
      title: "Vehicle Branding",
      paragraph:
        "Personalize your vehicle with unique and stylish branding solutions.",
    },
    {
      title: "Interior Customization",
      paragraph:
        "Enhance comfort and aesthetics with tailored seat and belt customization.",
    },
    {
      title: "Exterior Customization",
      paragraph:
        "Transform your ride with sleek wide body kits and modern facelift upgrades.",
    },
    {
      title: "Full Customization",
      paragraph:
        "Elevate your ride with comprehensive interior and exterior transformations.",
    },
  ];

  const header = "WITH OUR UPHOLSTERY AND CUSTOMIZATION SERVICES";
  const subHeader = "PERSONALIZE YOUR DRIVING EXPERIENCE";
  const paragraph =
    "From bespoke upholstery jobs to unique branding and complete interior customization, we offer tailored solutions. Upgrade your seats, seat belts, and embrace comprehensive customization options such as body kits and rim changes. Let our skilled craftsmen bring your automotive vision to life with precision and style.";

  return (
    <div className="customize">
      <Nav />
      <CareHero
        videoSrc="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1288462_Dakar-Rally_Cars_Racing_1920x1080.mp4"
        title="Customization"
      />

      <Glitch {...{ subHeader, header, paragraph }} />
      <ServiceList services={customizeServices} />
      <BookService />
      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton />
      <FloatingActionButton />
    </div>
  );
}
