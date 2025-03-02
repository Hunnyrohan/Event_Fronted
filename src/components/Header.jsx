import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Link to="/" className="logo"><span>H</span>amro</Link>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <Link to="/" onClick={toggleNavbar}>home</Link>
        <Link to="/services" onClick={toggleNavbar}>service</Link>
        <Link to="/about" onClick={toggleNavbar}>about</Link>
        <Link to="/gallery" onClick={toggleNavbar}>gallery</Link>
        <Link to="/pricing" onClick={toggleNavbar}>price</Link>
        <Link to="/reviews" onClick={toggleNavbar}>review</Link>
        <Link to="/contact" onClick={toggleNavbar}>contact</Link>
        <Link to="/login" onClick={toggleNavbar}>Login</Link>
      
      </nav>
      <div id="menu-bars" className="fas fa-bars" onClick={toggleNavbar}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;