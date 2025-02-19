import React from 'react';
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
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Service />
      <About />
      <Gallery />
      <Price />
      <Review />
      <Contact />
      <Footer />
      <ThemeToggler />
    </div>
  );
};

export default App;