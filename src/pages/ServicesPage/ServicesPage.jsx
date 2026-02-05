import "./ServicesPage.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Glitch from "../../components/Glitch/Glitch";
import ServiceLinkList from "../../components/ServiceLinkList/ServiceLinkList";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import CareHero from "../../components/CareHero/CareHero";

export default function ServicesPage() {
  const header = "For Your Vehicle's Every Need";
  const subHeader = "Discover our Expert Services";
  const paragraph =
    "At Dreamworx Auto Body, we redefine automotive care with precision and passion. From top-teir car care and customization to expert mechanical and body shop services, we cater to your vehicle's every need. Choose excellence, choose Dreamworx Auto Body.";

  return (
    <div className="services">
      <Nav></Nav>
      <CareHero
        videoSrc="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/2260688_Car_Drifting_Parking_1920x1080.mp4"
        title="Services"
      />

      <Glitch {...{ subHeader, header, paragraph }}></Glitch>

      <ServiceLinkList />

      <ContactForm></ContactForm>

      <ContactInfo></ContactInfo>

      <Footer></Footer>

      <BackToTopButton />

      <FloatingActionButton />
    </div>
  );
}
