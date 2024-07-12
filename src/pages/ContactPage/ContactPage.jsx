import React from 'react'
import './ContactPage.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'
export default function ContactPage() {
  return (
    <div className='contact-page'>
      <Nav/>
      
    <div className='contact-page__hero'>
      
      <video className='contact-page__hero-video' autoPlay muted loop>
        <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1242130_Car_Modern_Sportcar_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'></div>
      <div className='contact-page__hero-content'>
        <h1 className='page-hero'>
          Contact Us 
        </h1>
      </div>
    </div>

      <ContactForm/>
      <ContactInfo/>
      <Footer/>

      <BackToTopButton/>
      <FloatingActionButton/>
    </div>
  )
}
