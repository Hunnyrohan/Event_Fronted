import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Service.css';

const Service = () => {
  const services = [
    {
      icon: 'fas fa-envelope', // Font Awesome icon
      title: 'Invitation Card Design',
      description: 'Designing bespoke invitations that set the tone for your perfect event.',
      path: '/services/invitation',
    },
    {
      icon: 'fas fa-camera', // Font Awesome icon for Photos and Videos
      title: 'Photos And Videos',
      description: 'Capturing every moment with stunning photos and videos.',
      path: '/services/photos-videos',
    },
    {
      icon: 'fas fa-music', // Font Awesome icon
      title: 'Entertainment',
      description: 'Unforgettable entertainment to elevate your event.',
      path: '/services/entertainment',
    },
    {
      icon: 'fas fa-car', // Font Awesome icon
      title: 'Event Vehicles',
      description: 'Luxurious event vehicles to make a grand entrance and leave a lasting impression.',
      path: '/services/vehicles',
    },
    {
      icon: 'fas fa-map-marker-alt', // Font Awesome icon
      title: 'Venue Selection',
      description: 'Discover the perfect venue to bring your vision to life.',
      path: '/services/venue',
    },
    {
      icon: 'fas fa-utensils', // Font Awesome icon for Food Catering
      title: 'Food Catering',
      description: 'Savor delicious moments with our exquisite food catering.',
      path: '/services/catering',
    },
  ];

  return (
    <section className="service" id="service">
      <h1 className="heading">
        <span>our services</span>
      </h1>

      <div className="box-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <i className={service.icon}></i>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={service.path} className="view-btn">View</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;