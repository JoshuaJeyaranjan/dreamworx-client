import "./MechanicalPage.scss";
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

export default function MechanicalPage() {
  const mechanicalServices = [
    {
      title: "Lube Service",
      paragraph: "Routine maintenance for engine health and longevity.",
    },
    {
      title: "Minor Services",
      paragraph:
        "Scheduled inspections and minor repairs for optimal performance.",
    },
    {
      title: "Major Services",
      paragraph:
        "Comprehensive inspections and servicing for peak vehicle health.",
    },
    {
      title: "Engine and Gearbox",
      paragraph: "Expert solutions for engine and gearbox issues.",
    },
    {
      title: "AC System",
      paragraph:
        "Efficient repairs to keep your vehicle’s climate control in top condition.",
    },
    {
      title: "Tire Changing",
      paragraph: "Swift and reliable tire replacement services.",
    },
    {
      title: "Brakes Repair",
      paragraph: "Ensure safety with precision brake system repairs.",
    },
    {
      title: "Wheel Alignment",
      paragraph:
        "Maintain stability and extend tire life with accurate wheel alignment.",
    },
    {
      title: "Electric Repair",
      paragraph: "Diagnostic and repair services for electrical systems.",
    },
  ];

  const header = "EXPERT MECHANICAL SERVICES FOR YOUR VEHICLE'S PERFORMANCE";
  const subHeader = "KEEP YOUR VEHICLE RUNNING SMOOTHLY";
  const paragraph =
    "At Dreamworx Auto Body, we offer a comprehensive range of mechanical services to ensure your vehicle operates at its best. From routine lube services and minor maintenance to major repairs, our skilled technicians are equipped to handle all your automotive needs. We specialize in engine and gearbox repairs, AC system servicing, tire changes, brake repairs, wheel alignments, and electrical system diagnostics. Trust us to keep your vehicle running smoothly and safely on the road.";

  return (
    <div className="mechanical">
      <Nav />

      <CareHero
        videoSrc="https://55carcare.ae/1709749782988/wp-content/uploads/2024/03/1565017_Engine_Gear_Cog_1920x1080.mp4"
        title="Mechanical"
      />

      <Glitch {...{ subHeader, header, paragraph }}></Glitch>

      <ServiceList services={mechanicalServices} />

      <BookService />

      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton />
      <FloatingActionButton />
    </div>
  );
}
