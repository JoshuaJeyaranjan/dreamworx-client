import React from 'react'
import './HomePage.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Glitch from '../../components/Glitch/Glitch'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import ContactUs from '../../components/ContactUs/ContactUs'



import './HomePage.scss'

export default function HomePage() {
  return (
    <>

        <Nav/>

        <Hero/>

        <Glitch/>

        <ContactForm/>

        <ContactInfo/>

        <ContactUs/>

        <Footer/>
    </>
  )
}
