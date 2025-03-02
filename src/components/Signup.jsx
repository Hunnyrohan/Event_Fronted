import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Form submitted'); // Log form submission

    try {
      console.log('Sending request to backend'); // Log request initiation
      const response = await axios.post('/api/auth/register', {
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1] || '',
        email,
        password,
      });

      console.log('Response received:', response); // Log the response

      if (response.status === 201) {
        console.log('Signup successful:', response.data);
        navigate('/login');
      } else {
        setError(response.data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again later.');
    }
  };

  return (
    <section className="auth signup">
      <div className="auth-container">
        <h1 className="heading">
          <span>sign up</span> for an account
        </h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="auth-link">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;