import React from 'react'
import './HomePage.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Glitch from '../../components/Glitch/Glitch'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import ContactUs from '../../components/ContactUs/ContactUs'
import LinkList from '../../components/LinkList/LinkList'
import Excellence from '../../components/Excellence/Excellence'
import ChooseUs from '../../components/ChooseUs/ChooseUs'


import './HomePage.scss'

export default function HomePage() {
  return (
    <>

        <Nav/>

        <Hero/>

        <Glitch/>

        <LinkList/>

        <Excellence/>

        <ChooseUs/>

        <ContactForm/>

        <ContactInfo/>

        <ContactUs/>

        <Footer/>
    </>
  )
}
