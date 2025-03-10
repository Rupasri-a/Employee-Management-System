import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import './DashboardPage.css'; 

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="menu-icon" onClick={toggleNavbar}>
          <FaBars />
        </div>
        <div className={`navbar-content ${isNavbarOpen ? 'open' : ''}`}>
          <div onClick={() => navigateTo('/profile')}>
            <FaUser className="icon" /> Profile
          </div>
          <div onClick={() => navigateTo('/about')}>
            <FaInfoCircle className="icon" /> About
          </div>
          <div onClick={() => navigateTo('/calendar')}>
            <FaCalendarAlt className="icon" /> Calendar
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
