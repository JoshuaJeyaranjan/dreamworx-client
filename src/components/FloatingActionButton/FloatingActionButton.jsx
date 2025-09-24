import React, { useState, useEffect } from "react";
import { links } from "../Socials/Socials"; // unified array with type: "contact" | "social"
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

  const handleClick = (e, link) => {
    e.stopPropagation();
    if (link.onClick) {
      link.onClick(e); // handles WhatsApp or any custom click
    } else if (link.url.startsWith("tel:") || link.url.startsWith("mailto:")) {
      window.location.href = link.url;
    } else {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fab ${isOpen ? "fab--open" : ""}`}>
      <div className="fab__menu" onClick={toggleMenu}>
        <div className="fab__main-button">
          <span className="fab__main-icon">{isOpen ? "✕" : "💬"}</span>
        </div>
      </div>

      <div className="fab__actions">
        {links.map((link, index) => (
          <div
            key={link.id}
            className={`fab__action fab__action--${link.id}`}
            onClick={(e) => handleClick(e, link)}
            onMouseEnter={() => setHoveredIcon(link.id)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              "--action-color": link.color || "#000",
              "--delay": `${index * 0.1}s`,
            }}
          >
            <img className="fab__action-icon" src={link.icon} alt={link.title} />
            <div className="fab__tooltip fab__tooltip--action">
              {link.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}