import "./CarePage.scss";
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

export default function CarePage() {
  const carCareServices = [
    {
      title: "Car Wash",
      paragraph:
        "Revitalize with our thorough, eco-friendly car washing solutions.",
    },
    {
      title: "Paint Protection Film",
      paragraph: 'Shield your car"s paint from chips and scratches with PPF.',
    },
    {
      title: "Polishing",
      paragraph:
        "Restore brilliance and shine with our expert polishing services.",
    },
    {
      title: "Ceramic Coating",
      paragraph:
        "Unmatched protection for both interior and exterior surfaces.",
    },
    {
      title: "Window Tinting",
      paragraph:
        "Enhance style and comfort with precision window tinting solutions.",
    },
    {
      title: "Paintless Dent Repair",
      paragraph:
        "Effortless removal of dents, preserving your car’s flawless look.",
    },
    {
      title: "Leather Treatment",
      paragraph: "Luxurious leather care for a supple and refined interior.",
    },
    {
      title: "Wrapping",
      paragraph:
        "Personalize your ride with vibrant and durable vehicle wrapping.",
    },
    {
      title: "Accessories",
      paragraph:
        "Explore unique additions, like Alligator accessories, for personalized flair.",
    },
  ];

  const header = "WITH OUR COMPREHENSIVE CAR CARE SERVICES";
  const subHeader = "ELEVATE YOUR VEHICLE MAINTENANCE";
  const paragraph =
    "Experience top-tier car care with our extensive services. From eco-friendly washes to advanced paint protection films, we ensure your vehicle looks its best. Our offerings include expert polishing, ceramic coatings, window tinting, paintless dent repair, leather treatment, and vibrant vehicle wrapping. Explore unique accessories like Alligator for a personalized touch. Trust us to keep your car in pristine condition with precision and care.";

  return (
    <div className="care">
      <Nav />

      <CareHero
        videoSrc="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/2436732_Detailing_Service_Vehicle_1920x1080.mp4"
        title="Car Care"
      />

      <Glitch {...{ subHeader, header, paragraph }}></Glitch>

      <ServiceList services={carCareServices} />

      <BookService />

      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton />
      <FloatingActionButton />
    </div>
  );
}
