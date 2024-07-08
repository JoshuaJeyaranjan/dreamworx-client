import React from 'react'
import LinkItem from '../LinkItem/LinkItem'
import './LinkList.scss'

export default function LinkList() {
    const linkData = [
        {
         icon: 'src/assets/icons/care.png',
         title: 'Car Care',
         paragraph: 'Revitalize your car with expert detailing, repairs, and regular maintenance',
         link: '/care'  
        },
        {
            icon: 'src/assets/icons/steering-wheel.png',
            title: 'Car Customization',
            paragraph: 'Transform your ride with personalized upgrades, from interiors to exteriors',
            link: '/customize'  
           },
           {
            icon: 'src/assets/icons/sparkle.png',
            title: 'Body Shop',
            paragraph: 'Restore and enhance your vehicles aesthetics with precision bodywork',
            link: '/bodywork'  
           },
           {
            icon: 'src/assets/icons/mechanic.png',
            title: 'Mechanical',
            paragraph: 'Expert mechanical services for a reliable and smoothly running vehicle',
            link: '/mechanical'  
           },
    ]

  return (
    <div className='link-list'>
        {linkData.map((item, index) => (
            <LinkItem
            key={index}
            icon={item.icon}
            title={item.title}
            paragraph={item.paragraph}
            link={item.link}
            />
        ))}
    </div>
  )
}
