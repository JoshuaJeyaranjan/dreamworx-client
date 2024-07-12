import React from 'react'
import './CarePage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchCare from '../../components/GlitchCare/GlitchCare';
import ServiceList from '../../components/ServiceList/ServiceList';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'
import BookService from '../../components/BookService/BookService';

export default function CarePage() {

  const carCareServices = [
    {
      title: 'Car Wash',
      paragraph: 'Revitalize with our thorough, eco-friendly car washing solutions'
    },
    {
      title: 'Paint Protection Film',
      paragraph: 'Sheild your car"s paint from chips and scratches with PPF'
    },
    {
      title: 'Polishing',
      paragraph: 'Restore brilliance and shine with our expert polishing services.'
    },
    {
      title: 'Ceramic Coating',
      paragraph: 'Unmatched protection for both interior and exterior surfaces.'
    },
    {
      title: 'Window Tinting',
      paragraph: 'Enhance style and comfort with precision window tinting solutions.'
    },
    {
      title: 'Paintless Dent Repair',
      paragraph: 'Effortless removal of dents, preserving your car’s flawless look.'
    },
    {
      title: 'Leather Treatment',
      paragraph: 'Luxurious leather care for a supple and refined interior.'
    },
    {
      title: 'Wrapping',
      paragraph: 'Personalize your ride with vibrant and durable vehicle wrapping.'
    },
    {
      title: 'Accessories',
      paragraph: 'Explore unique additions, like Alligator accessories, for personalized flair.'
    },
  ]

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

      <GlitchCare/>

      <ServiceList services={carCareServices}/>

      <BookService/>

      <ContactForm/>
      <ContactInfo/>
      <Footer/>
      <BackToTopButton/>
      <FloatingActionButton/>
    </div>
  )
}
