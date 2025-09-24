import React, { useState, useEffect } from "react";
import { socialLinks, contacts, handleWhatsAppClick } from "../Socials/Socials";
import "../Socials/Socials.scss";
import "./FloatingActionButton.scss";

export default function FloatingActionButton() {


  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (e, href) => {
    e.stopPropagation();
    if (href.startsWith("tel:")) window.location.href = href;
    else window.open(href, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

        const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
      preWrittenMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`fab ${isOpen ? "fab--open" : ""}`}>
      <div className="fab__menu" onClick={toggleMenu}>
        <div className="fab__main-button">
          <span className="fab__main-icon">{isOpen ? "✕" : "💬"}</span>
        </div>
        
      </div>

      <div className="fab__actions">
        {[...contacts, ...socialLinks].map((link, index) => (
          <div
            key={link.id || link.name}
            className={`fab__action fab__action--${link.name?.toLowerCase()}`}
            onClick={(e) => handleClick(e, link.link || link.url)}
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              "--action-color": link.color || "#000",
              "--delay": `${index * 0.1}s`,
            }}
          >
            <img className="fab__action-icon" src={link.icon} alt={link.name} />
            <div className="fab__tooltip fab__tooltip--action">
              {link.title || link.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}