import React from 'react'
import './BodyWorkPage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchBody from '../../components/GlitchBody/GlitchBody';
import ServiceList from '../../components/ServiceList/ServiceList'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'
import BookService from '../../components/BookService/BookService';

export default function BodyWorkPage() {

  const bodyServices = [
    {
      title: 'Chassis Collision',
      paragraph: 'Restoration of structural integrity after collisions.'
    },
    {
      title: 'Frame Repair',
      paragraph: "Ensure your vehicle's structural integrity and safety."
    },
    {
      title: 'Dent Repair',
      paragraph: 'Flawless restoration with advanced dent repair techniques.'
    },
    {
      title: 'Body Paint',
      paragraph: 'Revitalize your vehicle with expert body painting.'
    },
    {
      title: 'Wrapping',
      paragraph: 'Innovative peelable wrapping for customizable and temporary transformations.'
    },
  ]
  return (
    <div className='body-work'>
    <Nav/>


    <div className='body-work__hero'>
      
      <video className='body-work__hero-video' autoPlay muted loop>
        <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1994192_Auto_Autobody_Automobile_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'></div>
      <div className='body-work__hero-content'>
        <h1 className='page-hero'>Body Work</h1>
      </div>
    </div>

    <GlitchBody/>

    <ServiceList services={bodyServices}/>

    <BookService/>

    <ContactForm/>
    <ContactInfo/>
    <Footer/>
    <BackToTopButton/>
    <FloatingActionButton/>
  </div>
  )
}
