import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinkItem.scss';

export default function LinkItem({ icon, title, paragraph, link }) {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top
  };

  return (
    <NavLink to={link} className='link-item' onClick={handleClick}>
      <img className='link-item__image' src={icon} alt={title} />
      <div className='link-item__text-container'>
        <h3 className='link-item__title'>{title}</h3>
        <p className='link-item__paragraph'>{paragraph}</p>
      </div>
    </NavLink>
  );
}