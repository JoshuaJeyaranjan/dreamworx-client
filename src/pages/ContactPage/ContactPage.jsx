import React from 'react'
import './ContactPage.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

export default function ContactPage() {
  return (
    <div className='contact-page'>
      <Nav/>
      <h1 className='contact-page__header' >Contact Us Today!</h1>
      <ContactForm/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}
