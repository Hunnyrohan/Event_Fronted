import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>contact</span> us</h1>
      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>
        <div className="inputBox">
          <input type="tel" placeholder="number" />
          <input type="text" placeholder="subject" />
        </div>
        <textarea placeholder="message" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;