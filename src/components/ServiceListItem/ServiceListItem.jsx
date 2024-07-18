import React, { useRef, useEffect } from "react";
import "./ServiceListItem.scss";

export default function ServiceListItem({ title, paragraph }) {
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceRef.current.classList.add("animate-service");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 }); // Adjust threshold as needed

    observer.observe(serviceRef.current);

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div className="service-list-item" ref={serviceRef}>
      <h3 className="service-list-item__title">{title}</h3>
      <p className="service-list-item__paragraph">{paragraph}</p>
    </div>
  );
}
