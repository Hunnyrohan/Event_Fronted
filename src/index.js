import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 19
import App from './App';
import './index.css';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
