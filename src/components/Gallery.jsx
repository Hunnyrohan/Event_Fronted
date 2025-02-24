import React from 'react';

const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">our <span>gallery</span></h1>
      <div className="box-container">
        {images.map((index) => (
          <div className="box" key={index}>
            <img src={`images/gallery${index}.jpg`} alt="" />
            <h3 className="title">best events</h3>
            <div className="icons">
              <a href="/" className="fas fa-heart"></a>
              <a href="/" className="fas fa-share"></a>
              <a href="/" className="fas fa-eye"></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
