import React from 'react'
import './MechanicalPage.scss'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import GlitchMechanical from '../../components/GlitchMechanical/GlitchMechanical';
import ServiceList from '../../components/ServiceList/ServiceList'

export default function MechanicalPage() {

  const mechanicalServices = [
    {
      title: 'Lube Service',
      paragraph: 'Routine maintenance for engine health and longevity.', 

    },
    {
      title: 'Minor Services',
      paragraph: 'Scheduled inspections and minor repairs for optimal performance.', 

    },
    {
      title: 'Major Services',
      paragraph: 'Comprehensive inspections and servicing for peak vehicle health.', 

    },
    {
      title: 'Engine and Gearbox',
      paragraph: 'Expert solutions for engine and gearbox issues.', 

    },
    {
      title: 'AC System',
      paragraph: 'Efficient repairs to keep your vehicle’s climate control in top condition.', 

    },
    {
      title: 'Tire Changing',
      paragraph: 'Swift and reliable tire replacement services.', 

    },
    {
      title: 'Brakes Repair',
      paragraph: 'Ensure safety with precision brake system repairs.', 

    },
    {
      title: 'Wheel Alignment',
      paragraph: 'Maintain stability and extend tire life with accurate wheel alignment.', 

    },
    {
      title: 'Electric Repair',
      paragraph: 'Diagnostic and repair services for electrical systems.', 

    }
  ]
  return (
    

    <div className='mechanical'>
    <Nav/>


    <div className='mechanical__hero'>
      
      <video className='mechanical__hero-video' autoPlay muted loop>
        <source src="https:\/\/55carcare.ae\/1709749782988\/wp-content\/uploads\/2024\/03\/1565017_Engine_Gear_Cog_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='mechanical__hero-content'>
        <h1>Mechanical</h1>
      </div>
    </div>

    <GlitchMechanical/>

    <ServiceList services={mechanicalServices} />

   

    <ContactForm/>
    <ContactInfo/>
    <Footer/>
  </div>
  )
}
