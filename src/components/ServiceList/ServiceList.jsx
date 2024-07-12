import React from 'react'
import './ServiceList.scss'
import ServiceListItem from '../ServiceListItem/ServiceListItem'

export default function ServiceList( {services}) {
  return (
    <div className='service-list'>
        {services.map((service, index) => (
            <ServiceListItem
            key={index}
            title={service.title}
            paragraph={service.paragraph}
            />
        ))}
    </div>
  )
}
