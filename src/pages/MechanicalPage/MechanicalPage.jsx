import React from 'react'
import './MechanicalPage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchMechanical from '../../components/GlitchMechanical/GlitchMechanical';


export default function MechanicalPage() {
  return (
    <div className='mechanical'>
    <Nav/>


    <div className='mechanical__hero'>
      
      <video className='mechanical__hero-video' autoPlay muted loop>
        <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1565017_Engine_Gear_Cog_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='mechanical__hero-content'>
        <h1>Mechanical</h1>
      </div>
    </div>

    <GlitchMechanical/>

    <ContactForm/>
    <ContactInfo/>
    <Footer/>
  </div>
  )
}
