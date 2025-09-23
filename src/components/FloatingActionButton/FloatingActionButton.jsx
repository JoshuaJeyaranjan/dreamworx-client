import React, { useState, useEffect } from "react";
import "./FloatingActionButton.scss";

const links = [
  {
    name: "phone",
    icon: "📞",
    tooltip: "Call Us",
    href: "tel:+16472978707",
    color: "#25D366",
  },
  {
    name: "whatsapp",
    icon: "💬",
    tooltip: "WhatsApp",
    href: "https://wa.me/14378767666",
    color: "#25D366",
  },
  {
    name: "instagram",
    icon: "📷",
    tooltip: "Instagram",
    href: "https://www.instagram.com/dreamworxautobody/",
    color: "#E4405F",
  },
  {
    name: "tiktok",
    icon: "🎵",
    tooltip: "TikTok",
    href: "https://www.tiktok.com/@dr34mwrx.auto.body",
    color: "#000000",
  },
  {
    name: "facebook",
    icon: "👥",
    tooltip: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61558666457522",
    color: "#1877F2",
  },
];

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e, href) => {
    e.stopPropagation();
    if (href.startsWith("tel:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fab ${isOpen ? "fab--open" : ""}`}>
      <div className="fab__menu" onClick={toggleMenu}>
        <div className="fab__main-button">
          <span className="fab__main-icon">{isOpen ? "✕" : "💬"}</span>
        </div>

        <div className="fab__tooltip fab__tooltip--main">
          {isOpen ? "Close Menu" : "Get in Touch"}
        </div>
      </div>

      <div className="fab__actions">
        {links.map((link, index) => (
          <div
            key={link.name}
            className={`fab__action fab__action--${link.name}`}
            onClick={(e) => handleClick(e, link.href)}
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              "--action-color": link.color,
              "--delay": `${index * 0.1}s`,
            }}
          >
            <span className="fab__action-icon">{link.icon}</span>
            <div className="fab__tooltip fab__tooltip--action">
              {link.tooltip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
