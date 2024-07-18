import './LogoSlideshow.scss'
import React from 'react'

export default function LogoSlideshow() {

    const carLogos = [
        '/assets/images/alfa-logo.png',
        '/assets/images/acura-logo.png',
        '/assets/images/aston-logo.png',
        '/assets/images/audi-logo.png',
        '/assets/images/bentley-logo.png',
        '/assets/images/benz-logo.png',
        '/assets/images/bmw-logo.png',
        '/assets/images/bugatti-logo.png',
        '/assets/images/buick-logo.png',
        '/assets/images/cadillac-logo-2014.png',
        '/assets/images/chevrolet-corvette-logo.png',
        '/assets/images/new-chevrolet-logo.png',
        '/assets/images/true-chrysler-logo.png',
        '/assets/images/true-dodge-logo.png',
        '/assets/images/ferrari-logo.png',
        '/assets/images/fiat-logo.png',
        '/assets/images/ford-logo.png',
        '/assets/images/new-GMC-logo.png',
        '/assets/images/new-honda-logo.png',
        '/assets/images/hyundai-logo.png',
        '/assets/images/infiniti-logo.png',
        '/assets/images/jaguar-logo.png',
        '/assets/images/jeep-logo.png',
        '/assets/images/kia-logo.png',
        '/assets/images/Lamborghini-logo.png',
        '/assets/images/lexus-logo.png',
        '/assets/images/lincoln-logo.png',
        '/assets/images/mclaran-logo.png',
        '/assets/images/mini-logo.png',
        '/assets/images/mitsubishi-logo.png',
        '/assets/images/nissan-logo.png',
        '/assets/images/pontiac-logo.png',
        '/assets/images/porsche-logo.png',
        '/assets/images/ram-logo.png',
        '/assets/images/rolls-logo.png',
        '/assets/images/rover-logo.png',
        '/assets/images/subaru-logo.png',
        '/assets/images/suzuki-logo.png',
        '/assets/images/new-tesla-logo.png',
        '/assets/images/new-toyoto-logo.png',
        '/assets/images/new-volk-logo.png',
        '/assets/images/new-volvo-logo.png',
    ]

    const duplicatedLogos = [...carLogos, ...carLogos];

  return (
    <div className='logo-slideshow'>
        <div className='logo-slideshow__wrapper'>
            {duplicatedLogos.map((logo, index) => (
                <img 
                key={index}
                src={logo} 
                alt={`Car Brand ${index + 1}`} 
                className='logo-slideshow__logo'
                />
            ))}
        </div>
    </div>
  )
}
