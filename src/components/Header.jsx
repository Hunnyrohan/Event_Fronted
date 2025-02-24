import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo"><span>E</span>ve</a>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="/">home</a>
        <a href="/services">service</a>
        <a href="/about">about</a>
        <a href="/gallery">gallery</a>
        <a href="/pricing">price</a>
        <a href="/reviews">review</a>
        <a href="/contact">contact</a>
        <a href="/Login">Login</a>
      </nav>
      <div id="menu-bars" className="fas fa-bars" onClick={toggleNavbar}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;