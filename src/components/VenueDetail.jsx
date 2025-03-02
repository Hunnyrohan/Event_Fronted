import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const VenueDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const venues = [
    {
      id: 1,
      name: 'Quick 20 Event Venue',
      image: '/images/venue1.jpg',
      price: 'NPR 17,000',
      halls: 2,
      area: '17,000 Sq Ft',
      capacity: 1000,
    },
    {
      id: 2,
      name: 'Bawarchi Restaurant',
      image: '/images/venue2.jpg',
      price: 'NPR 18,000',
      halls: 1,
      area: '6,000 Sq Ft',
      capacity: 200,
    },
    {
      id: 3,
      name: 'Bagh Bhairab Banquet',
      image: '/images/venue3.jpg',
      price: 'NPR 16,000',
      halls: 1,
      area: '10,000 Sq Ft',
      capacity: 1000,
    },
    {
      id: 4,
      name: 'KNS Kitchen And Banquet',
      image: '/images/venue4.jpg',
      price: 'NPR 10,000',
      halls: 1,
      area: '10,952 Sq Ft',
      capacity: 1000,
    },
  ];

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>venue selection</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Venues"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredVenues.map((venue) => (
            <div className="venue-box" key={venue.id}>
              <img src={venue.image} alt={venue.name} className="venue-image" />
              <h3 className="venue-title">{venue.name}</h3>
              <p className="venue-price">Starting at {venue.price}</p>
              <div className="venue-details">
                <p><span>{venue.halls}</span> Halls | <span>{venue.area}</span></p>
                <p>Capacity: <span>{venue.capacity}</span></p>
              </div>
              <Link to="/booking" className="book-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueDetail;