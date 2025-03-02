import React from 'react';
import { Link } from 'react-router-dom'; // For the "Reach Us" button linking to Contact
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        about <span>us</span>
      </h1>
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about.jpg" alt="Event Planning Team" className="about-img" />
        </div>
        <div className="about-content">
          <h2>Your Occasion Deserves Our Careful Planning</h2>
          <p>
            At Event Organizers, we turn your dreams into unforgettable experiences. With a passion for perfection, we specialize in crafting tailor-made events that reflect your unique vision. From the first spark of inspiration to the final touches, our team handles every detail with precision, ensuring your event is nothing short of extraordinary. Let us be the architects of your special moments—where creativity meets flawless execution, and memories are made to last a lifetime.
          </p>
          <Link to="/contact" className="reach-us-btn">Reach Us</Link>
        </div>
      </div>
    </section>
  );
};

export default About;