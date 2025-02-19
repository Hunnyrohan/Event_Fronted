import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> bangalore </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> hyderabad </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> delhi </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> kolkata </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> chennai </a>
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
          <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
          <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
          <a href="#"> <i className="fas fa-envelope"></i> kanasu@gmail.com </a>
          <a href="#"> <i className="fas fa-envelope"></i> kanasuind@gmail.com </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> bangalore, india - 560054
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
        created by <span>Tivotal</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;