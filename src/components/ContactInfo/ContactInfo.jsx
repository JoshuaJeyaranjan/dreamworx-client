import { useEffect, useRef } from "react";
import "./ContactInfo.scss";
import Socials from "../Socials/Socials";

export default function ContactInfo() {
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactInfoRef.current) {
        const contactInfoTop =
          contactInfoRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const triggerOffset = windowHeight * 1.8;

        if (contactInfoTop < triggerOffset) {
          contactInfoRef.current.classList.add("slide-up");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contact-info" ref={contactInfoRef}>
      <Socials />
    </div>
  );
}
