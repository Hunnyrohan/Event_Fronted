import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us</h1>
      <div className="row">
        <div className="image">
          <img src="images/about.jpg" alt="" />
        </div>
        <div className="content">
          <h3>your occasion deserves our careful planning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            labore fugiat ut esse perferendis perspiciatis provident dolores
            fuga in facilis culpa possimus, quia praesentium itaque, sapiente
            quasi harum rem asperiores.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            vero expedita incidunt provident quibusdam aut odit, numquam
            nesciunt similique nisi.
          </p>
          <a href="/" className="btn">reach us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
