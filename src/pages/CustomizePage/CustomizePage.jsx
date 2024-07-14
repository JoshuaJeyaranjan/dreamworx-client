import React, { useEffect, useRef } from 'react';
import './CustomizePage.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchCustomization from '../../components/GlitchCustomization/GlitchCustomization';
import ServiceList from '../../components/ServiceList/ServiceList';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import BookService from '../../components/BookService/BookService';

export default function CustomizePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

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
  ];

  return (
    <div className='customize'>
      <Nav />

      <div className='customize__hero'>
        <video className='customize__hero-video' autoPlay muted loop ref={videoRef}>
          <source src="src/assets/videos/spoiler.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='overlay'></div>
        <div className='customize__hero-content'>
          <h1 className='page-hero'>Car Customization</h1>
        </div>
      </div>

      <GlitchCustomization />
      <ServiceList services={customizeServices} />
      <BookService />
      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton />
      <FloatingActionButton />
    </div>
  );
}
