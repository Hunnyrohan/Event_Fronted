import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const EntertainmentDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const entertainmentOptions = [
    {
      id: 1,
      name: 'Live Band Performance',
      image: '/images/entertainment1.jpg',
      price: 'NPR 15,000',
      type: 'Live Band',
      hours: 4,
    },
    {
      id: 2,
      name: 'DJ Night',
      image: '/images/entertainment2.jpg',
      price: 'NPR 12,000',
      type: 'DJ',
      hours: 5,
    },
    {
      id: 3,
      name: 'Magician Show',
      image: '/images/entertainment3.jpg',
      price: 'NPR 10,000',
      type: 'Magician',
      hours: 2,
    },
    {
      id: 4,
      name: 'Dance Performance',
      image: '/images/entertainment4.jpg',
      price: 'NPR 8,000',
      type: 'Dance',
      hours: 3,
    },
  ];

  const filteredEntertainment = entertainmentOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>entertainment</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Entertainment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredEntertainment.map((option) => (
            <div className="venue-box" key={option.id}>
              <img src={option.image} alt={option.name} className="venue-image" />
              <h3 className="venue-title">{option.name}</h3>
              <p className="venue-price">Starting at {option.price}</p>
              <div className="venue-details">
                <p><span>{option.type}</span> | <span>{option.hours} Hours</span></p>
              </div>
              <Link to="/booking" className="book-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentDetail;