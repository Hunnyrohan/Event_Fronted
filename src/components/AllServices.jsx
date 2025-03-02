import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const AllServices = () => {
  const services = [
    {
      id: 1,
      category: 'Invitation Card Design',
      name: 'Custom Invitation Cards',
      image: '/images/invitation.jpg',
      price: 'NPR 5,000',
      description: 'Designing bespoke invitations that set the tone for your perfect event.',
    },
    {
      id: 2,
      category: 'Photos and Videos',
      name: 'Photography by Urban Reesa',
      image: '/images/photo1.jpg',
      price: 'NPR 20,000',
      description: 'Capturing every moment with stunning photos and videos.',
    },
    {
      id: 3,
      category: 'Entertainment',
      name: 'Live Band Performance',
      image: '/images/entertainment.jpg',
      price: 'NPR 15,000',
      description: 'Unforgettable entertainment to elevate your event.',
    },
    {
      id: 4,
      category: 'Event Vehicles',
      name: 'Luxury Limousine',
      image: '/images/vehicle.jpg',
      price: 'NPR 25,000',
      description: 'Luxurious event vehicles to make a grand entrance and leave a lasting impression.',
    },
    {
      id: 5,
      category: 'Venue Selection',
      name: 'Scenic Outdoor Venue',
      image: '/images/venue.jpg',
      price: 'NPR 30,000',
      description: 'Discover the perfect venue to bring your vision to life.',
    },
    {
      id: 6,
      category: 'Food Catering',
      name: 'Gourmet Catering',
      image: '/images/catering.jpg',
      price: 'NPR 18,000',
      description: 'Savor delicious moments with our exquisite food catering.',
    },
  ];

  return (
    <section className="service all-services" id="all-services">
      <div className="service-header">
        <h1 className="heading">All Our Services</h1>
      </div>

      <div className="box-container">
        {services.map((service) => (
          <div className="service-box" key={service.id}>
            <img src={service.image} alt={`${service.category} - ${service.name}`} />
            <h3 className="service-title">{service.name}</h3>
            <p className="service-category">{service.category}</p>
            <p className="service-description">{service.description}</p>
            <p className="service-price">Starting at {service.price}</p>
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;