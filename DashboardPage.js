import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
import { FaBars, FaUser, FaInfoCircle, FaCalendarAlt, FaSearch, FaCalendarCheck, FaClipboardList, FaProjectDiagram, FaDollarSign, FaPlane, FaBullhorn, FaPhone, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="navbar-content">
          <img src="https://media.istockphoto.com/id/924454254/vector/icon-symbol-with-good-employee-management-concept-illustrated-with-employee-icon-and-check.jpg?s=612x612&w=0&k=20&c=H9d6O_HcvI6jHfW1uMvDaRQStcX5TsgT-4UdJC7zSlc=" alt="Company Logo" className="company-icon" />
          <span><i><b>EazyHR</b></i></span>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <FaSearch className="search-icon" onClick={toggleSearchDropdown} />
            {isSearchDropdownOpen && (
              <div className="search-dropdown">
                <input type="text" placeholder="Search..." />
                <div className="search-results">No results found</div>
              </div>
            )}
          </div>
          <div className="support-dropdown">
            <span className="support-text" onClick={toggleSupportDropdown}>
              Support
              <FaPhone className="support-icon" />
            </span>
            {isSupportDropdownOpen && (
              <div className="dropdown-content">
                <div><strong>Service Center:</strong> +123-456-7890</div>
                <div><strong>Contact:</strong> support@eazyhr.com</div>
                <div><strong>Address:</strong> ABC Street, Townhall,Coimbatore</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="main-content-container">
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="menu-icon" onClick={toggleSidebar}>
            <FaBars />
          </div>
          <div className="sidebar-content">
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
        <div className="main-content">
          <div className="welcome-container">
            <h1>Welcome to EazyHR!!</h1>
          </div>
          <div className="welcome-content">
            <h2>We are thrilled to have you on board!</h2>
            <h2>EazyHR is designed to streamline your employee management processes and enhance your productivity!</h2>
            <h2>Dive in and explore the features we have to offer!</h2>
          </div>
          <div className="grid-container">
            <div className="grid-item" onClick={() => navigateTo('/attendance-management')}>
              <FaCalendarCheck className="icon" />
              Attendance Management
            </div>
            <div className="grid-item" onClick={() => navigateTo('/leave-management')}>
              <FaClipboardList className="icon" />
              Leave Management
            </div>
            <div className="grid-item" onClick={() => navigateTo('/project-manager')}>
              <FaProjectDiagram className="icon" />
              Project Manager
            </div>
            <div className="grid-item" onClick={() => navigateTo('/salary-details')}>
              <FaDollarSign className="icon" />
              Salary Details
            </div>
            <div className="grid-item" onClick={() => navigateTo('/leave-request')}>
              <FaPlane className="icon" />
              Leave Request
            </div>
            <div className="grid-item" onClick={() => navigateTo('/company-updates')}>
              <FaBullhorn className="icon" />
              Company Updates
            </div>
          </div>
          <div className="image-container">
            {/* Add any images here*/}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <span>Contact us on:</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="mailto:support@eazyhr.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
