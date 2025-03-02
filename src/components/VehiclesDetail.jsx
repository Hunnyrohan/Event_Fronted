import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const VehiclesDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const vehicleOptions = [
    {
      id: 1,
      name: 'Luxury Limousine',
      image: '/images/vehicle1.jpg',
      price: 'NPR 25,000',
      type: 'Limousine',
      seats: 6,
    },
    {
      id: 2,
      name: 'Vintage Car',
      image: '/images/vehicle2.jpg',
      price: 'NPR 20,000',
      type: 'Vintage',
      seats: 4,
    },
    {
      id: 3,
      name: 'Luxury SUV',
      image: '/images/vehicle3.jpg',
      price: 'NPR 18,000',
      type: 'SUV',
      seats: 7,
    },
    {
      id: 4,
      name: 'Executive Van',
      image: '/images/vehicle4.jpg',
      price: 'NPR 15,000',
      type: 'Van',
      seats: 8,
    },
  ];

  const filteredVehicles = vehicleOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>event vehicles</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Vehicles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredVehicles.map((option) => (
            <div className="venue-box" key={option.id}>
              <img src={option.image} alt={option.name} className="venue-image" />
              <h3 className="venue-title">{option.name}</h3>
              <p className="venue-price">Starting at {option.price}</p>
              <div className="venue-details">
                <p><span>{option.type}</span> | <span>{option.seats} Seats</span></p>
              </div>
              <Link to="/booking" className="book-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesDetail;