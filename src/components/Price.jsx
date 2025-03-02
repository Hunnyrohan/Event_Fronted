import React, { useState, useEffect } from 'react';
import './Price.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility, set the root element

const Price = () => {
  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      title: 'Basic Plan',
      price: 'NPR 10,000',
      features: [
        '1 Event Planning Session',
        'Basic Venue Selection',
        'Standard Catering',
        'Basic Photography',
      ],
      popular: false,
    },
    {
      id: 2,
      title: 'Standard Plan',
      price: 'NPR 25,000',
      features: [
        '3 Event Planning Sessions',
        'Premium Venue Selection',
        'Gourmet Catering',
        'Professional Photography & Videography',
        'Live Entertainment',
      ],
      popular: true,
    },
    {
      id: 3,
      title: 'Premium Plan',
      price: 'NPR 50,000',
      features: [
        'Unlimited Event Planning Sessions',
        'Luxury Venue Selection',
        'Exquisite Catering',
        'Full Photography & Videography Package',
        'Live Band & DJ',
        'Luxury Event Vehicles',
      ],
      popular: false,
    },
  ]);

  // Optional: Fetch pricing plans from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/pricing')
      .then(response => response.json())
      .then(data => setPricingPlans(data))
      .catch(error => console.error('Error fetching pricing plans:', error));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (planTitle) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true); // Open the modal with the success message
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan('');
  };

  return (
    <section className="price" id="price">
      <h1 className="heading">
        our <span>pricing</span>
      </h1>
      <div className="price-container">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`price-box ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <span className="popular-tag">Most Popular</span>}
            <h2 className="price-title">{plan.title}</h2>
            <p className="price-amount">{plan.price}</p>
            <ul className="price-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleSelectPlan(plan.title)} className="select-btn">
              Select
            </button>
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
        <p>Thanks for choosing our plan. We will respond soon.</p>
        <button onClick={closeModal} style={{ background: '#ff6347', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Price;