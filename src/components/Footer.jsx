import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Kathmandu </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Pokhara </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Janakpur </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Butwal </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Ramgopalpur </a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> service </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> about </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> gallery </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> price </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> reivew </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> contact </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#"> <i className="fas fa-phone"></i> 9827839930 </a>
          <a href="#"> <i className="fas fa-phone"></i> 9864089451 </a>
          <a href="#"> <i className="fas fa-envelope"></i> roohanyadav45@gmail.com </a>
          <a href="#"> <i className="fas fa-envelope"></i> massterforu@gmail.com </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal - 44600
          </a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
          <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
          <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
          <a href="#"> <i className="fab fa-linkedin-in"></i> linkedin </a>
        </div>
      </div>
      <div className="credit">
        created by <span>Rohan</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;