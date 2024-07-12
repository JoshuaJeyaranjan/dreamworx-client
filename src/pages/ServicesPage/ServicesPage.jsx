import React from 'react'
import './ServicesPage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Glitch from '../../components/Glitch/Glitch';
import ServiceLinkList from '../../components/ServiceLinkList/ServiceLinkList';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'

export default function ServicesPage() {
  return (
    <div className='services'>
      <Nav></Nav>

      <div className='services__hero'>
        
        <video className='services__hero-video' autoPlay muted loop>
          <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/2260688_Car_Drifting_Parking_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='services__hero-content'>
          <h1>Services</h1>
        </div>
      </div>

      <Glitch/>

      <ServiceLinkList/>

      <ContactForm></ContactForm>

      <ContactInfo></ContactInfo>

      <Footer></Footer>

      <BackToTopButton/>

      <FloatingActionButton/>

    </div>
  )
}
