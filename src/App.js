import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Gallery from './components/Gallery';
import Price from './components/Price';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggler from './components/ThemeToggler';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import './components/Auth.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        <ThemeToggler />
      </div>
    </Router>
  );
};

export default App;
