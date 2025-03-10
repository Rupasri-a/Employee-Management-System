import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h2>About Our App</h2>
      <p>Welcome to <b>EazyHR</b>, your go-to solution for comprehensive employee data management! We understand the importance of maintaining accurate and up-to-date employee information, and our app is designed to make this process seamless and efficient for you.</p>

      <h3>What We Do</h3>
      <p>Our app is a robust platform that stores and manages detailed employee information, ensuring that all essential data is organized, secure, and easily accessible. From personal details and contact information to work history and performance records, our app handles it all.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Comprehensive Data Storage:</strong> Keep all employee information in one place, including personal details, contact information, job history, performance reviews, and more.</li>
        <li><strong>Secure Management:</strong> Our top priority is the security of your data. We implement advanced security measures to protect sensitive employee information.</li>
        <li><strong>User-Friendly Interface:</strong> Navigate through our app effortlessly with an intuitive and easy-to-use interface.</li>
        <li><strong>Real-Time Updates:</strong> Make sure your employee records are always up to date with real-time data entry and updates.</li>
        <li><strong>Efficient Search and Retrieval:</strong> Quickly find the information you need with powerful search and filtering options.</li>
        <li><strong>Reporting and Analytics:</strong> Generate insightful reports and analytics to understand workforce trends and make informed decisions.</li>
        <li><strong>Accessibility:</strong> Access employee data anytime, anywhere, with our mobile-friendly app.</li>
      </ul>

      <h3>Our Mission</h3>
      <p>Our mission is to simplify the process of employee data management, enabling companies to focus on their core business functions. We strive to provide a solution that not only enhances productivity but also ensures compliance with data protection regulations.</p>

      <h3>Contact Us</h3>
      <p>For more information about our app, feel free to reach out to our support team at support@eazyhr.com or visit our website at http://localhost:3000/dashboard.</p>
    </div>
  );
};

export default AboutPage;
