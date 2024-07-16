import React from "react";
import "./BookService.scss";

const whatsappNumber = "+14378767666"; // Your WhatsApp number with country code
const preWrittenMessage = "Hello Dreamworx, I would like to inquire about booking a service.";

export default function BookService() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(preWrittenMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="book-service">
      <button className="book-service__button" onClick={handleWhatsAppClick}>
        <img
          src="src/assets/icons/whatsapp.png"
          alt="WhatsApp"
          className="book-service__icon"
        />
        Book Your Service
      </button>
    </div>
  );
}
