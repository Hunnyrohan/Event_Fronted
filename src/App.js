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
import InvitationDetail from './components/InvitationDetail';
import PhotosVideosDetail from './components/PhotosVideosDetail';
import EntertainmentDetail from './components/EntertainmentDetail';
import VehiclesDetail from './components/VehiclesDetail';
import VenueDetail from './components/VenueDetail';
import CateringDetail from './components/CateringDetail';
import Booking from './components/Booking';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <ThemeToggler />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/invitation" element={<InvitationDetail />} />
            <Route path="/services/photos-videos" element={<PhotosVideosDetail />} />
            <Route path="/services/entertainment" element={<EntertainmentDetail />} />
            <Route path="/services/vehicles" element={<VehiclesDetail />} />
            <Route path="/services/venue" element={<VenueDetail />} />
            <Route path="/services/catering" element={<CateringDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Price />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;