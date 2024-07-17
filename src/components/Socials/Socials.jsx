import React from 'react'
import './Socials.scss'
export default function Socials() {
  return (
    <div className='socials'>
        <a className='socials__link' target='blank' href="https://www.instagram.com/dreamworxautobody/"> <img className='socials__icon' src="/assets/icons/instagram.png" alt="instagram" /> </a>
        <a className='socials__link' target='blank'  href="https://www.tiktok.com/@dr34mwrx.auto.body"> <img className='socials__icon' src="/assets/icons/tiktok.png" alt="tiktok" />  </a>
        <a className='socials__link' target='blank' href="https://www.facebook.com/profile.php?id=61558666457522">  <img className='socials__icon' src="/assets/icons/facebook.png" alt="facebook" /> </a>
        {/* <a className='socials__link' href="">  </a> */}
    </div>
  )
}
