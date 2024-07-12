import React from 'react'
import './ChooseUs.scss'

export default function ChooseUs() {
  return (
    <div className='choose-us'>
        <h1 className='choose-us__header'> Why Choose Us?</h1>

        <div className='choose-us__component-container'>


        <div className='choose-us__component'>
            <p className='choose-us__title'>Comprehensive Expertise:</p>
            <p className='choose-us__paragraph'>With four specialized divisions covering car care, upholstery, customization, mechanical and body shop services, we're your one stop destination for all things automotive</p>
        </div>

        <div className='choose-us__component'>
            <p className='choose-us__title'>Personalized approach:</p>
            <p className='choose-us__paragraph'>We understand that every vehicle is unique, just like its owner. Our personalized approach ensures that your specific needs are met, delivering a tailored and satisfying experience.</p>
        </div>

        <div className='choose-us__component'>
            <p className='choose-us__title'>Skilled Craftsmanship</p>
            <p className='choose-us__paragraph'>Our team is comprised of highly skilled professionals who bring a passion for perfection to every job. From car wash to engine repair, expect nothing but the best.</p>
        </div>

        <div className='choose-us__component'>
            <p className='choose-us__title'>Transparancy and Trust</p>
            <p className='choose-us__paragraph'>We believe in open communication and transparency. From clear explanations of services to fair pricing, you can trust us to keep you informed at every step.</p>
        </div>

        <div className='choose-us__component'>
            <p className='choose-us__title'>Innovation at Every Turn</p>
            <p className='choose-us__paragraph'>Stay ahead of the curve with our innovative services, including ceramic coating, PPF, and smart paint. We’re always exploring new techniques and technologies to enhance your vehicle.</p>
        </div>

        <div className='choose-us__component'>
            <p className='choose-us__title'></p>
            <p className='choose-us__paragraph'>Choose <span className='orange'>Dreamworx</span> for a transformative automotive experience that goes beyond the ordinary. Your journey deserves the best, and we’re here to deliver.</p>
        </div>

        </div>

    </div>
  )
}
