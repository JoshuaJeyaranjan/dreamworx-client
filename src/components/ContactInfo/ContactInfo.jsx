import React from "react";
import "./ContactInfo.scss";
import Socials from "../Socials/Socials";
import InTouch from "../InTouch/InTouch";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <Socials />
      <InTouch />
    </div>
  );
}
