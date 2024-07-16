import React from 'react'
import './ServiceLinkItem.scss'
import { Link } from 'react-router-dom'

export default function ServiceLinkItem({image, title, paragraph, link}) {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top
  }
    return (
      <Link to={link} className='service-link-item' onClick={handleClick} >
        <div className='service-link-item__background' style={{backgroundImage: `url(${image})`}}>
          <div className='service-link-item__overlay'></div>
            <div className='service-link-item__content'>
                <h3 className='service-link-item__title'> {title} </h3>
                <p className='service-link-item__paragraph'> {paragraph} </p>
                
            </div>
            <div className='service-link-item__gradient'></div>
        </div>
      </Link>
    )
  }
  