import React from "react";
import "./Socials.scss";

  export  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
      preWrittenMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };



   export const contacts = [
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

  export const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/dreamworxautobody/",
      icon: "/assets/icons/instagram.png",
      color: "#E4405F",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@dr34mwrx.auto.body",
      icon: "/assets/icons/tiktok.png",
      color: "#000000",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61558666457522",
      icon: "/assets/icons/facebook.png",
      color: "#1877F2",
    },
  ];

export default function Socials() {






  

  return (
    <div className="socials">
    
    <div className="socials__links">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          className="socials__link"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          style={{ "--social-color": social.color }}
        >
          <img
            className="socials__icon"
            src={social.icon}
            alt="" // icon is decorative, aria-label already covers meaning
            aria-hidden="true"
            loading="lazy"
          />
          
        </a>
      ))}
    </div>

        <section className="socials">


      <address className="socials__links">
        {contacts.map(({ id, icon, alt, title, value, link, onClick }) => (
          <div key={id} className="in-touch__item">
            

            
            
              <a
                className="socials__link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
              >
              <img className="socials__icon" src={icon} alt={alt} />
              </a>
            
          </div>
        ))}
      </address>
    </section>


  </div>
  );
}
