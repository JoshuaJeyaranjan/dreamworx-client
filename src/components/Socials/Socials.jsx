import "./Socials.scss";

export const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    "+",
    "",
  )}?text=${encodeURIComponent(preWrittenMessage)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

export const links = [
  {
    id: "call",
    type: "contact",
    icon: "/assets/icons/telephone.png",
    alt: "Telephone Symbol",
    title: "Call Us",
    value: "437-438-8707",
    url: "tel:4374388707",
  },
  {
    id: "whatsapp",
    type: "contact",
    icon: "/assets/icons/typing.png",
    alt: "Text/WhatsApp Symbol",
    title: "Text Us",
    value: "437-438-8707",
    url: "#",
    onClick: handleWhatsAppClick,
  },
  {
    id: "email",
    type: "contact",
    icon: "/assets/icons/email.png",
    alt: "Email Symbol",
    title: "Email Us",
    value: "dreamworxautobody@gmail.com",
    url: "mailto:dreamworxautobody@gmail.com",
  },

  {
    id: "instagram",
    type: "social",
    icon: "/assets/icons/instagram.png",
    alt: "Instagram Logo",
    title: "Instagram",
    url: "https://www.instagram.com/dreamworxautobody/",
    color: "#E4405F",
  },
  {
    id: "tiktok",
    type: "social",
    icon: "/assets/icons/tiktok.png",
    alt: "TikTok Logo",
    title: "TikTok",
    url: "https://www.tiktok.com/@dr34mwrx.auto.body",
    color: "#000000",
  },
  {
    id: "facebook",
    type: "social",
    icon: "/assets/icons/facebook.png",
    alt: "Facebook Logo",
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61558666457522",
    color: "#1877F2",
  },
];

export default function Socials() {
  return (
    <div className="socials">
      <div className="socials__links">
        {links.map(({ id, type, icon, alt, title, url, color, onClick }) => {
          const Tag = type === "contact" ? "div" : "span";

          return (
            <Tag key={id} className={`socials__item socials__item--${type}`}>
              <a
                className="socials__link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                aria-label={
                  type === "social"
                    ? `Follow us on ${title}`
                    : `${title}: ${alt}`
                }
                style={color ? { "--social-color": color } : {}}
              >
                <img
                  className="socials__icon"
                  src={icon}
                  alt={type === "social" ? "" : alt}
                  aria-hidden={type === "social" ? "true" : "false"}
                  loading="lazy"
                />
              </a>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
