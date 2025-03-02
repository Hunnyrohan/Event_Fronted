import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const CateringDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cateringOptions = [
    {
      id: 1,
      name: 'Gourmet Catering Deluxe',
      image: '/images/catering1.jpg',
      price: 'NPR 18,000',
      halls: 1,
      area: '5,000 Sq Ft',
      capacity: 500,
    },
    {
      id: 2,
      name: 'Buffet Catering Classic',
      image: '/images/catering2.jpg',
      price: 'NPR 15,000',
      halls: 1,
      area: '4,000 Sq Ft',
      capacity: 300,
    },
    {
      id: 3,
      name: 'Wedding Feast Catering',
      image: '/images/catering3.jpg',
      price: 'NPR 20,000',
      halls: 2,
      area: '8,000 Sq Ft',
      capacity: 800,
    },
    {
      id: 4,
      name: 'Corporate Catering',
      image: '/images/catering4.jpg',
      price: 'NPR 12,000',
      halls: 1,
      area: '3,000 Sq Ft',
      capacity: 200,
    },
  ];

  const filteredCatering = cateringOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>food catering</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Catering Options"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredCatering.map((option) => (
            <div className="venue-box" key={option.id}>
              <img src={option.image} alt={option.name} className="venue-image" />
              <h3 className="venue-title">{option.name}</h3>
              <p className="venue-price">Starting at {option.price}</p>
              <div className="venue-details">
                <p><span>{option.halls}</span> Halls | <span>{option.area}</span></p>
                <p>Capacity: <span>{option.capacity}</span></p>
              </div>
              <Link to="/booking" className="book-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CateringDetail;