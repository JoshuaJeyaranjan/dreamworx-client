import React from 'react';
import './AboutPage.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'

export default function AboutPage() {
  return (
    <div className='about'>
      <Nav />
      <div className='about__hero'>
        
        <video className='about__hero-video' autoPlay muted loop playsInline>
          <source src="https://55carcare.ae//1709749782988//wp-content//uploads//2024//03//4766652_A-Helping-Hand_Adult_Agreement_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='overlay'></div>
        <div className='about__hero-content'>
          <h1 className='page-hero'>About Us</h1>
        </div>
      </div>

      <div className='subsection'>

        <div className='subsection__text-container'>
            <h3 className='subsection__header'>At Dreamworx Car Care & Auto Services</h3>

            
            <p className='subsection__paragraph'>We stand as your foremost choice for comprehensive automotive solutions. Our extremely qualified team epitomizes meticulous design, fostering an ideal environment for our dedicated team and discerning clientele alike. commited to delivering unparalleled solutions, we empower our clients to make informed choices tailored to their distinct needs.</p>
        </div>

        <ImageCarousel/>

        

      </div>

      <div className='journey'>
        <h1 className='journey__header'>Join Us on the Journey</h1>

        <p className='journey__paragraph'>We invite you to join us on this exciting journey of automotive excellence. Discover the difference at Dreamworx, where passion meets precision, and every vehicle recieves the attention it deserves.</p>

      </div>


      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton/>
      <FloatingActionButton/>
    </div>
  );
}