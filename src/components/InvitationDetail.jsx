import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const InvitationDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const invitationOptions = [
    {
      id: 1,
      name: 'Elegant Wedding Invitations',
      image: '/images/invitation1.jpg',
      price: 'NPR 5,000',
      style: 'Premium Paper',
      quantity: 200,
    },
    {
      id: 2,
      name: 'Corporate Event Invitations',
      image: '/images/invitation2.jpg',
      price: 'NPR 4,000',
      style: 'Digital Design',
      quantity: 150,
    },
    {
      id: 3,
      name: 'Eco-Friendly Invitations',
      image: '/images/invitation3.jpg',
      price: 'NPR 3,500',
      style: 'Recycled Paper',
      quantity: 100,
    },
    {
      id: 4,
      name: 'Luxury Birthday Invitations',
      image: '/images/invitation4.jpg',
      price: 'NPR 6,000',
      style: 'Foil Stamping',
      quantity: 250,
    },
  ];

  const filteredInvitations = invitationOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>invitation card design</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Invitation Designs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredInvitations.map((option) => (
            <div className="venue-box" key={option.id}>
              <img src={option.image} alt={option.name} className="venue-image" />
              <h3 className="venue-title">{option.name}</h3>
              <p className="venue-price">Starting at {option.price}</p>
              <div className="venue-details">
                <p><span>{option.style}</span> | <span>{option.quantity}</span> Units</p>
              </div>
              <Link to="/booking" className="book-btn">Book Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvitationDetail;