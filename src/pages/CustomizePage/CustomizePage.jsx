import React from 'react'
import './CustomizePage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

export default function CustomizePage() {
  return (
    <div className='customize'>
      <Nav/>


      <div className='customize__hero'>
        
        <video className='customize__hero-video' autoPlay muted loop>
          <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1288462_Dakar-Rally_Cars_Racing_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='customize__hero-content'>
          <h1>Car Customization</h1>
        </div>
      </div>

      <ContactForm/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
