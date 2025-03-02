import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const PhotosVideosDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const photoVideoOptions = [
    {
      id: 1,
      name: 'Photography by Urban Reesa',
      image: '/images/photo1.jpg',
      price: 'NPR 20,000',
      type: 'Photography',
      hours: 8,
    },
    {
      id: 2,
      name: 'Visualsbyvrraj',
      image: '/images/photo2.jpg',
      price: 'NPR 35,000',
      type: 'Videography',
      hours: 10,
    },
    {
      id: 3,
      name: 'Photography By Captured Forever',
      image: '/images/photo3.jpg',
      price: 'NPR 40,000',
      type: 'Photography + Videography',
      hours: 12,
    },
    {
      id: 4,
      name: 'Avigraphy',
      image: '/images/photo4.jpg',
      price: 'NPR 32,000',
      type: 'Aerial Videography',
      hours: 6,
    },
  ];

  const filteredPhotosVideos = photoVideoOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        <h1 className="heading">
          <span>photos and videos</span>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Photos & Videos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="box-container">
          {filteredPhotosVideos.map((option) => (
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

export default PhotosVideosDetail;