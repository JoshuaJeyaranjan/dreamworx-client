import React from 'react';
import './AboutPage.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'
import Glitch from '../../components/Glitch/Glitch';
import CareHero from '../../components/CareHero/CareHero';

export default function AboutPage() {

  const header = "ABOUT DREAMWORX AUTO BODY";
  const subHeader = "YOUR TRUSTED PARTNER IN AUTOMOTIVE EXCELLENCE";          
  const paragraph = "At Dreamworx Auto Body, we are passionate about delivering top-tier automotive services with precision and care. With years of experience in the industry, our skilled team is dedicated to restoring and enhancing your vehicle's performance and appearance. From expert mechanical repairs to flawless body work and bespoke customization, we cater to every aspect of your automotive needs. Our commitment to quality craftsmanship and customer satisfaction sets us apart as a trusted partner for all your car care requirements. Experience the Dreamworx difference, where your vehicle's excellence is our priority.";     


  return (
    <div className='about'>
      <Nav />

      <CareHero 
        videoSrc="https://55carcare.ae//1709749782988//wp-content//uploads//2024//03//4766652_A-Helping-Hand_Adult_Agreement_1920x1080.mp4" 
        title="About Us"
      />
      

      <div className='about__content'>
          <Glitch {...{subHeader, header, paragraph}}></Glitch>
        <div/>

        

        

      </div>



      <ContactForm />
      <ContactInfo />
      <Footer />
      <BackToTopButton/>
      <FloatingActionButton/>
    </div>
  );
}