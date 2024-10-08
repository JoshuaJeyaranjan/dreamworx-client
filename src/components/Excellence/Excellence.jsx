import React from 'react'
import './Excellence.scss'
import LogoSlideshow from '../LogoSlideshow/LogoSlideshow'

export default function Excellence() {
  return (
    <div className='excellence'>
        <div className='excellence__text-container'>
        <h3 className='excellence__header'>Excellence In Service</h3>
        <h4 className='excellence__sub-header'>All Makes, All Models</h4>
        </div>    
        <LogoSlideshow/>        
    </div>
  )
}
