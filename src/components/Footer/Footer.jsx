import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__text'>Copyright &copy; 2024 | Powered by <Link to='home' className='footer__link'> Dreamworx Auto Body  </Link> </p>
    </div>
  )
}
