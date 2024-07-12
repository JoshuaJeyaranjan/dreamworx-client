import React from 'react'
import './CustomizePage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchCustomization from '../../components/GlitchCustomization/GlitchCustomization';
import ServiceList from '../../components/ServiceList/ServiceList'

export default function CustomizePage() {

  const customizeServices = [
    {
      title: 'Vehicle Upholstery',
      paragraph: 'Transform interiors with expert craftsmanship and premium materials.'

    },
    {
      title: 'Vehicle Branding',
      paragraph: 'Personalize your vehicle with unique and stylish branding solutions.'

    },
    {
      title: 'Interior Customization',
      paragraph: 'Enhance comfort and aesthetics with tailored seat and belt customization.'

    },
    {
      title: 'Full Customization',
      paragraph: 'Elevate your ride with comprehensive interior and exterior transformations.'

    },
  ]
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

      <GlitchCustomization/>

      <ServiceList services={customizeServices}/>

      <ContactForm/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
