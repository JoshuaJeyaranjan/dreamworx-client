import React from 'react'
import './BodyWorkPage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';


export default function BodyWorkPage() {
  return (
    <div className='body-work'>
    <Nav/>


    <div className='body-work__hero'>
      
      <video className='body-work__hero-video' autoPlay muted loop>
        <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1994192_Auto_Autobody_Automobile_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='body-work__hero-content'>
        <h1>Body Work</h1>
      </div>
    </div>

    <ContactForm/>
    <ContactInfo/>
    <Footer/>
  </div>
  )
}
