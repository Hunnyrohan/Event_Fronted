import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        console.log(response.data);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setError(error.response?.data?.message || 'Failed to submit form');
      });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        get in <span>touch</span>
      </h1>
      <div className="contact-container">
        <div className="contact-card form-card">
          <h2>Contact Us</h2>
          {isSubmitted && <p className="success-message">Thank you for your message! We’ll get back to you soon.</p>}
          {error && <p className="error-message">Error: {error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-card info-card">
          <h2>Contact Information</h2>
          <p><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</p>
          <p><i className="fas fa-phone"></i> +977 1 1234567</p>
          <p><i className="fas fa-envelope"></i> contact@eventorganizers.com</p>
          <div className="map-placeholder">
            <p>View Map <i className="fas fa-map"></i></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;