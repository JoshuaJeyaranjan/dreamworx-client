import React, { useEffect, useRef } from "react";
import "./ContactInfo.scss";
import Socials from "../Socials/Socials";
import InTouch from "../InTouch/InTouch";

export default function ContactInfo() {
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactInfoRef.current) {
        const contactInfoTop = contactInfoRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const triggerOffset = windowHeight * 1.8; // Adjust this value (e.g., 0.8 means 80% of the viewport height)

        if (contactInfoTop < triggerOffset) {
          contactInfoRef.current.classList.add("slide-up");
          window.removeEventListener("scroll", handleScroll); // Remove listener after animation triggers
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
      <InTouch />
    </div>
  );
}
