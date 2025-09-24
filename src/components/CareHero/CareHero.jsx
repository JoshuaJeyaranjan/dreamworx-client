import React from 'react';
import './CareHero.scss';

export default function CareHero({ videoSrc, title }) {
  return (
    <div className="care-hero">
      <video
        className="care-hero__video"
        src={videoSrc}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      >
        Your browser does not support the video tag.
      </video>

      <div className="care-hero__overlay"></div>

      <div className="care-hero__content">
        <h1 className="care-hero__title">{title}</h1>
      </div>
    </div>
  );
}