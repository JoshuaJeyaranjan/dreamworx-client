import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss';


export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <img src='/assets/images/car-404.jpg' alt="Car" className="not-found__image" />
        <h1 className="not-found__title">404 - Page Not Found</h1>
        <p className="not-found__text">
          Looks like you've taken a wrong turn. Let's get you back on track.
        </p>
        <NavLink to="/" className="not-found__button">Go Home</NavLink>
      </div>
    </div>
  );
}