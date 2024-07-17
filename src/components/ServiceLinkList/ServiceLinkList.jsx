import React from 'react'
import './ServiceLinkList.scss'
import ServiceLinkItem from '../ServiceLinkItem/ServiceLinkItem'


export default function ServiceLinkList() {
    const serviceLinkData = [
        {
         image: '/assets/images/waxing.jpg',
         title: 'Car Care',
         paragraph: 'Comprehensive Auto Wellness',
         link: '/care'  
        },
        {
            image: '/assets/images/drift.jpg',
            title: 'Car Customization',
            paragraph: 'Tailored Auto Enhancements',
            link: '/customize'  
           },
           {
            image: '/assets/images/painting.jpg',
            title: 'Body Shop',
            paragraph: 'Automative Restoration Experts',
            link: '/bodywork'  
           },
           {
            image: '/assets/images/mechanic.jpg',
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
