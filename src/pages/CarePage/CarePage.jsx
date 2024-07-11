import React from 'react'
import './CarePage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

export default function CarePage() {
  return (
    <div className='care'>
      <Nav/>


      <div className='care__hero'>
        
        <video className='care__hero-video' autoPlay muted loop>
          <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/2436732_Detailing_Service_Vehicle_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='care__hero-content'>
          <h1>Car Care</h1>
        </div>
      </div>

      <ContactForm/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
