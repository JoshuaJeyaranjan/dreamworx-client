import React from 'react'
import './ServiceLinkList.scss'
import ServiceLinkItem from '../ServiceLinkItem/ServiceLinkItem'


export default function ServiceLinkList() {
    const serviceLinkData = [
        {
         image: 'src/assets/images/waxing.jpg',
         title: 'Car Care',
         paragraph: 'Comprehensive Auto Wellness',
         link: '/care'  
        },
        {
            image: 'src/assets/images/painting.jpg',
            title: 'Car Customization',
            paragraph: 'Tailored Auto Enhancements',
            link: '/customize'  
           },
           {
            image: 'src/assets/images/customization.jpg',
            title: 'Body Shop',
            paragraph: 'Automative Restoration Experts',
            link: '/bodywork'  
           },
           {
            image: 'src/assets/images/mechanic.jpg',
            title: 'Mechanical',
            paragraph: 'Precision Auto Repairs',
            link: '/mechanical'  
           },
    ]
  return (
    <div className='service-link-list'>
        {serviceLinkData.map((item, index) => (
            <ServiceLinkItem
            key={index}
            image={item.image}
            title={item.title}
            paragraph={item.paragraph}
            link={item.link}
            />
        ))
        }
    </div>
  )
}
