import React from "react";
import "./Socials.scss";

export default function Socials() {
  const socialLinks = [
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
          <span className="socials__tooltip">{social.name}</span>
        </a>
      ))}
    </div>
  </div>
  );
}
