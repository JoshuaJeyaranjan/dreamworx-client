import React from 'react'
import './ServiceListItem.scss'
export default function ServiceListItem({title, paragraph}) {
  return (
    <div className='service-list-item'>
        <h3 className='service-list-item__title'> {title} </h3>
        <p className='service-list-item__paragraph'> {paragraph} </p>
    </div>
  )
}
