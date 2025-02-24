import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import Service from './Service';  // Import Service component
import About from './About';      // Import About component
import Gallery from './Gallery';  // Import Gallery component
import Price from './Price';      // Import Price component

const Home = () => {
  useEffect(() => {
    new Swiper('.home-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <section className="home" id="home">
      {/* Home Section Content */}
      <div className="content">
        <h3>
          where your ideas take off
          <span> Eve events </span>
        </h3>
        <a href="/#quote" className="btn">Get Quote</a>
      </div>

      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="images/home1.jpg" alt="Event planning setup in a venue" />
          </div>
          <div className="swiper-slide">
            <img src="images/home2.jpg" alt="Event decorations with flowers" />
          </div>
          <div className="swiper-slide">
            <img src="images/home3.jpg" alt="Large event with guests" />
          </div>
          <div className="swiper-slide">
            <img src="images/home4.jpg" alt="Professional event organizer team" />
          </div>
          <div className="swiper-slide">
            <img src="images/home5.jpg" alt="Wedding event with reception setup" />
          </div>
          <div className="swiper-slide">
            <img src="images/home6.jpg" alt="Corporate event with guest speakers" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>

      {/* Rendering the Service Component here */}
      <Service /> {/* This will render the services section on the homepage */}

      {/* Rendering the About Component here */}
      <About /> {/* This will render the about section on the homepage */}

      {/* Rendering the Gallery Component here */}
      <Gallery /> {/* This will render the gallery section on the homepage */}

      {/* Rendering the Price Component here */}
      <Price /> {/* This will render the pricing section on the homepage */}
    </section>
  );
};

export default Home;
