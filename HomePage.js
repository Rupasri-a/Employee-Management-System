import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="navbar">
        <div className="navbar-content">
          <span className="navbar-title">Welcome to EazyHR</span>
          <div className="navbar-buttons">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="background-overlay">
        <h1>Manage Your Workforce Efficiently</h1>
      </div>
    </div>
  );
};

export default HomePage;
