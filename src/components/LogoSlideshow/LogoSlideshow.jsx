import React from 'react'
import './LogoSlideshow.scss'

export default function LogoSlideshow() {

    const carLogos = [
        'src/assets/images/acura-logo.png',
        'src/assets/images/alfa-logo.png',
        'src/assets/images/aston-logo.png',
        'src/assets/images/audi-logo.png',
        'src/assets/images/bentley-logo.png',
        'src/assets/images/benz-logo.png',
        'src/assets/images/bmw-logo.png',
        'src/assets/images/bugatti-logo.png',
        'src/assets/images/buick-logo.png',
        'src/assets/images/cadillac-logo-2014.png',
        'src/assets/images/chevrolet-corvette-logo.png',
        'src/assets/images/chevy-logo.png',
        'src/assets/images/chrysler-logo.png',
        'src/assets/images/dodge-logo.png',
        'src/assets/images/ferrari-logo.png',
        'src/assets/images/fiat-logo.png',
        'src/assets/images/ford-logo.png',
        'src/assets/images/GMC-logo.png',
        'src/assets/images/honda-logo.png',
        'src/assets/images/hyundai-logo.png',
        'src/assets/images/infiniti-logo.png',
        'src/assets/images/jaguar-logo.png',
        'src/assets/images/jeep-logo.png',
        'src/assets/images/kia-logo.png',
        'src/assets/images/Lamborghini-logo.png',
        'src/assets/images/lexus-logo.png',
        'src/assets/images/lincoln-logo.png',
        'src/assets/images/mclaran-logo.png',
        'src/assets/images/mini-logo.png',
        'src/assets/images/mitsubishi-logo.png',
        'src/assets/images/nissan-logo.png',
        'src/assets/images/pontiac-logo.png',
        'src/assets/images/porsche-logo.png',
        'src/assets/images/ram-logo.png',
        'src/assets/images/rolls-logo.png',
        'src/assets/images/rover-logo.png',
        'src/assets/images/subaru-logo.png',
        'src/assets/images/suzuki-logo.png',
        'src/assets/images/tesla-logo.png',
        'src/assets/images/toyota-logo.png',
        'src/assets/images/volkswagon-logo.png',
        'src/assets/images/volvo-logo.png',
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
