import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Review = () => {
  React.useEffect(() => {
    new Swiper('.review-slider', {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <section className="reivew" id="review">
      <h1 className="heading">client's <span>review</span></h1>

      <div className="review-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src="images/img1.jpg" alt="" />
              <div className="user-info">
                <h3>nayana</h3>
                <span>happy customer</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
              corrupti, ipsam iure nisi unde et assumenda perspiciatis
              voluptatibus nihil.
            </p>
          </div>

          <div className="swiper-slide box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src="images/img2.jpg" alt="" />
              <div className="user-info">
                <h3>lisa</h3>
                <span>happy customer</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
              corrupti, ipsam iure nisi unde et assumenda perspiciatis
              voluptatibus nihil.
            </p>
          </div>

          <div className="swiper-slide box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src="images/img3.jpg" alt="" />
              <div className="user-info">
                <h3>mary</h3>
                <span>happy customer</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
              corrupti, ipsam iure nisi unde et assumenda perspiciatis
              voluptatibus nihil.
            </p>
          </div>

          <div className="swiper-slide box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src="images/img4.jpg" alt="" />
              <div className="user-info">
                <h3>rose</h3>
                <span>happy customer</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
              corrupti, ipsam iure nisi unde et assumenda perspiciatis
              voluptatibus nihil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;