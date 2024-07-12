import React, { useState } from 'react';
import './FloatingActionButton.scss'
import phoneIcon from '../../assets/icons/telephone.png'
import whatsappIcon from '../../assets/icons/whatsapp.png'
import mainIcon from '../../assets/icons/typing.png'
import closeIcon from '../../assets/icons/close.png'


export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fab ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="fab__icon fab__main">
        <img src={isOpen ? closeIcon : mainIcon} alt="Menu" />
      </div>
      <div
        className="fab__icon fab__phone"
        onClick={(e) => { e.stopPropagation(); window.location.href = 'tel:+16472978707'; }}
        onMouseEnter={() => setHoveredIcon('phone')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <img src={phoneIcon} alt="Phone" />
        {hoveredIcon === 'phone' && <div className="tooltip">Telephone</div>}
      </div>
      <div
        className="fab__icon fab__whatsapp"
        onClick={(e) => { e.stopPropagation(); window.location.href = 'https://wa.me/14378767666'; }}
        onMouseEnter={() => setHoveredIcon('whatsapp')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <img src={whatsappIcon} alt="WhatsApp" />
        {hoveredIcon === 'whatsapp' && <div className="tooltip">WhatsApp</div>}
      </div>
    </div>
  );
}