import React, { useState } from 'react';
import './Booking.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility, set the root element

const Booking = () => {
  // Static booking data (hardcoded instead of fetching from backend)
  const bookings = [
    {
      id: 1,
      user_id: 1,
      service_id: 1,
      venue_id: 1,
      date: '2025-03-15 14:00:00',
      status: 'pending',
    },
    {
      id: 2,
      user_id: 2,
      service_id: 2,
      venue_id: 1,
      date: '2025-03-20 16:00:00',
      status: 'confirmed',
    },
    {
      id: 3,
      user_id: 3,
      service_id: 3,
      venue_id: 2,
      date: '2025-03-25 18:00:00',
      status: 'cancelled',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true); // Open the modal with the success message
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="booking" id="booking">
      <h1 className="heading">
        <span>your bookings</span>
      </h1>
      <div className="booking-container">
        {/* Book Now Button */}
        <button onClick={handleBookNow} className="book-now-btn">
          Book Now
        </button>

        {/* Display Existing Bookings */}
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-box">
            <p>User ID: {booking.user_id}</p>
            <p>Service ID: {booking.service_id}</p>
            <p>Venue ID: {booking.venue_id}</p>
            <p>Date: {new Date(booking.date).toLocaleString()}</p>
            <p>Status: <span className={booking.status === 'confirmed' ? 'status-confirmed' : booking.status === 'cancelled' ? 'status-cancelled' : 'status-pending'}>{booking.status}</span></p>
          </div>
        ))}
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          content: {
            background: '#16213e', /* Navy-blue background */
            color: '#fff', /* White text */
            border: '2px solid #ff6347', /* Red border */
            borderRadius: '1rem',
            margin: 'auto',
            maxWidth: '400px',
            textAlign: 'center',
          },
        }}
      >
        <h2 style={{ color: '#ff6347' }}>Success!</h2>
        <p>Congratulations! You have successfully booked. We will respond soon.</p>
        <button onClick={closeModal} style={{ background: '#ff6347', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Booking;