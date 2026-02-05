import "./BodyWorkPage.scss";
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
export default function BodyWorkPage() {
  const bodyServices = [
    {
      title: "Chassis Collision",
      paragraph: "Restoration of structural integrity after collisions.",
    },
    {
      title: "Frame Repair",
      paragraph: "Ensure your vehicle's structural integrity and safety.",
    },
    {
      title: "Dent Repair",
      paragraph: "Flawless restoration with advanced dent repair techniques.",
    },
    {
      title: "Body Paint",
      paragraph: "Revitalize your vehicle with expert body painting.",
    },
    {
      title: "Wrapping",
      paragraph:
        "Innovative peelable wrapping for customizable and temporary transformations.",
    },
  ];

  const header = "EXPERT BODY WORK SERVICES FOR A FLAWLESS FINISH";
  const subHeader = "RESTORE AND ENHANCE YOUR VEHICLE'S APPEARANCE";
  const paragraph =
    "At Dreamworx Auto Body, we specialize in comprehensive body work services to restore and enhance your vehicle's appearance. Our expert team handles everything from chassis collision repairs and frame straightening to flawless dent removal and professional body painting. We also offer innovative peelable wrapping solutions for customizable and temporary transformations. Trust us to bring your vehicle back to its pristine condition with precision and care.";
  return (
    <div className="body-work">
      <Nav />
      <CareHero
        videoSrc="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1994192_Auto_Autobody_Automobile_1920x1080.mp4"
        title="Body Work"
      />

      <Glitch {...{ subHeader, header, paragraph }}></Glitch>

      <ServiceList services={bodyServices} />

      <BookService />

      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton />
      <FloatingActionButton />
    </div>
  );
}
