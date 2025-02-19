import React from 'react';

const Price = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">our <span>pricing</span></h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">basic</h3>
          <h3 className="amount">$879.00</h3>
          <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li><i className="fas fa-check"></i> decorations</li>
            <li><i className="fas fa-check"></i> music and photos</li>
            <li><i className="fas fa-check"></i> food and drinks</li>
            <li><i className="fas fa-check"></i> invitation card</li>
          </ul>
          <a href="#" className="btn">check out</a>
        </div>

        <div className="box">
          <h3 className="title">prime</h3>
          <h3 className="amount">$799.00</h3>
          <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li><i className="fas fa-check"></i> decorations</li>
            <li><i className="fas fa-check"></i> music and photos</li>
            <li><i className="fas fa-check"></i> food and drinks</li>
            <li><i className="fas fa-check"></i> invitation card</li>
          </ul>
          <a href="#" className="btn">check out</a>
        </div>

        <div className="box">
          <h3 className="title">luxury</h3>
          <h3 className="amount">$379.00</h3>
          <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li><i className="fas fa-check"></i> decorations</li>
            <li><i className="fas fa-check"></i> music and photos</li>
            <li><i className="fas fa-check"></i> food and drinks</li>
            <li><i className="fas fa-check"></i> invitation card</li>
          </ul>
          <a href="#" className="btn">check out</a>
        </div>

        <div className="box">
          <h3 className="title">ultra</h3>
          <h3 className="amount">$920.00</h3>
          <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li><i className="fas fa-check"></i> decorations</li>
            <li><i className="fas fa-check"></i> music and photos</li>
            <li><i className="fas fa-check"></i> food and drinks</li>
            <li><i className="fas fa-check"></i> invitation card</li>
          </ul>
          <a href="#" className="btn">check out</a>
        </div>
      </div>
    </section>
  );
};

export default Price;