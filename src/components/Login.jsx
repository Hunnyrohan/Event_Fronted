import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; // Ensures consistent authentication styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic (API call, validation)
    console.log('Email:', email, 'Password:', password);

    // Navigate to home after "login"
    navigate('/');
  };

  return (
    <section className="auth">
      <h1 className="heading">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" className="btn" />
      </form>
      {/* Link to Signup Page */}
      <p style={{ marginTop: '1rem', color: 'var(--secondary-text-color)' }}>
        Don't have an account? <Link to="/signup" style={{ color: 'var(--theme-color)' }}>Sign up</Link>
      </p>
    </section>
  );
};

export default Login;
