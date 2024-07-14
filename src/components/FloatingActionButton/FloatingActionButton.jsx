import React, { useState } from 'react';
import './FloatingActionButton.scss';
import phoneIcon from '../../assets/icons/telephone.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import instagramIcon from '../../assets/icons/instagram.png';
import tiktokIcon from '../../assets/icons/tiktok.png';
import facebookIcon from '../../assets/icons/facebook.png';
import mainIcon from '../../assets/icons/typing.png';
import closeIcon from '../../assets/icons/close.png';

const links = [
  { name: 'phone', icon: phoneIcon, tooltip: 'Telephone', href: 'tel:+16472978707' },
  { name: 'whatsapp', icon: whatsappIcon, tooltip: 'WhatsApp', href: 'https://wa.me/14378767666' },
  { name: 'instagram', icon: instagramIcon, tooltip: 'Instagram', href: 'https://www.instagram.com/dreamworxautobody/' },
  { name: 'tiktok', icon: tiktokIcon, tooltip: 'TikTok', href: 'https://www.tiktok.com/@dr34mwrx.auto.body' },
  { name: 'facebook', icon: facebookIcon, tooltip: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61558666457522' },
];

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e, href) => {
    e.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <div className={`fab ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="fab__icon fab__main">
        <img src={isOpen ? closeIcon : mainIcon} alt="Menu" />
      </div>
      {links.map(link => (
        <div
          key={link.name}
          className={`fab__icon fab__${link.name}`}
          onClick={(e) => handleClick(e, link.href)}
          onMouseEnter={() => setHoveredIcon(link.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={link.icon} alt={link.name} />
          {hoveredIcon === link.name && <div className="tooltip">{link.tooltip}</div>}
        </div>
      ))}
    </div>
  );
}
