import React from "react";
import "./InTouch.scss";
const whatsappNumber = '+14378767666';
export default function InTouch() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="in-touch">
      <h3 className="in-touch__header">Get In Touch</h3>

      <div className="in-touch__container">
        <img className="in-touch__icon" src="src/assets/icons/telephone.png" alt="telephone Symbol" />

        <div className="in-touch__text-container">
          <p className="in-touch__link-title">Call Us</p>
          <a className="in-touch__link" target="blank" href="tel:6472978707">647-297-8707</a>
        </div>
      </div>

      <div className="in-touch__container">
      <img className="in-touch__icon" src="src/assets/icons/typing.png" alt="Email Symbol" />

      <div className="in-touch__text-container">
        <p className="in-touch__link-title">Text Us</p>
        <a className="in-touch__link" target="_blank" rel="noopener noreferrer" href="#" onClick={handleWhatsAppClick}>
        437-876-7666
        </a>
      </div>
    </div>

      <div className="in-touch__container">
        <img className="in-touch__icon" src="src/assets/icons/email.png" alt="Email Symbol" />

        <div className="in-touch__text-container">
          <p className="in-touch__link-title">Email Us</p>
          <a className="in-touch__link" href="mailto:dreamworxautobody@gmail.com">dreamworxautobody@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
