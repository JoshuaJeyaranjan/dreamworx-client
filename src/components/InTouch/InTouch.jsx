import React from "react";
import "./InTouch.scss";

const whatsappNumber = "+14378767666";
const preWrittenMessage = "Hello Dreamworx, I would like to get in touch with you.";

export default function InTouch() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
      preWrittenMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const contacts = [
    {
      id: "call",
      icon: "/assets/icons/telephone.png",
      alt: "Telephone Symbol",
      title: "Call Us",
      value: "647-297-8707",
      link: "tel:6472978707",
    },
    {
      id: "whatsapp",
      icon: "/assets/icons/typing.png",
      alt: "Text/WhatsApp Symbol",
      title: "Text Us",
      value: "437-876-7666",
      link: "#",
      onClick: handleWhatsAppClick,
    },
    {
      id: "email",
      icon: "/assets/icons/email.png",
      alt: "Email Symbol",
      title: "Email Us",
      value: "dreamworxautobody@gmail.com",
      link: "mailto:dreamworxautobody@gmail.com",
    },
  ];

  return (
    <section className="in-touch">


      <address className="in-touch__list">
        {contacts.map(({ id, icon, alt, title, value, link, onClick }) => (
          <div key={id} className="in-touch__item">
            

            <div className="in-touch__links">
            
              <a
                className="in-touch__link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
              >
              <img className="in-touch__icon" src={icon} alt={alt} />
              </a>
            </div>
          </div>
        ))}
      </address>
    </section>
  );
}