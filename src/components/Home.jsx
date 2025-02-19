import React, { useEffect } from 'react';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

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
      <div className="content">
        <h3>
          where your ideas take off
          <span> Eve  events </span>
        </h3>
        <a href="#" className="btn">get quote</a>
      </div>

      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="images/home1.jpg" alt="Home 1" />
          </div>
          <div className="swiper-slide">
            <img src="images/home2.jpg" alt="Home 2" />
          </div>
          <div className="swiper-slide">
            <img src="images/home3.jpg" alt="Home 3" />
          </div>
          <div className="swiper-slide">
            <img src="images/home4.jpg" alt="Home 4" />
          </div>
          <div className="swiper-slide">
            <img src="images/home5.jpg" alt="Home 5" />
          </div>
          <div className="swiper-slide">
            <img src="images/home6.jpg" alt="Home 6" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </div>
    </section>
  );
};

export default Home;