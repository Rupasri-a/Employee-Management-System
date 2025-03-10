import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './CompanyUpdates.css';

const CompanyUpdates = () => {
  const navigate = useNavigate();

  return (
    <div className="company-updates-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h2>Company Updates</h2>
      <div className="update-section">
        <h3>Company News and Announcements</h3>
        <ul>
          <li>Announcing new hires and promotions to keep everyone informed about the latest changes in our team.</li>
          <li>Celebrating our latest achievements and milestones to recognize our collective efforts and success.</li>
          <li>Communicating any changes in company policies or procedures to ensure everyone is up-to-date and compliant.</li>
          <li>Sharing news about mergers, acquisitions, or partnerships that impact our business and its direction.</li>
        </ul>
      </div>
      <div className="update-section">
        <h3>Project Updates</h3>
        <ul>
          <li>Providing progress reports on key projects to keep everyone aligned and informed.</li>
          <li>Highlighting upcoming project deadlines to ensure we stay on track.</li>
          <li>Introducing new project launches to showcase our ongoing initiatives and innovations.</li>
        </ul>
      </div>
      <div className="update-section">
        <h3>Employee Recognition</h3>
        <ul>
          <li>Recognizing the Employee of the Month/Quarter to celebrate outstanding contributions.</li>
          <li>Honoring work anniversaries and birthdays to foster a positive and supportive workplace culture.</li>
          <li>Acknowledging exceptional performance and contributions to motivate and inspire our team.</li>
        </ul>
      </div>
      <div className="update-section">
        <h3>Training and Development</h3>
        <ul>
          <li>Announcing upcoming training sessions or workshops to promote continuous learning and development.</li>
          <li>Sharing new learning resources or courses available to enhance skills and knowledge.</li>
          <li>Highlighting career development opportunities to support professional growth and advancement.</li>
        </ul>
      </div>
      <div className="update-section">
        <h3>Events and Activities</h3>
        <ul>
          <li>Promoting company events, such as team-building activities and holiday parties, to strengthen team bonds.</li>
          <li>Encouraging participation in community service or volunteer opportunities to give back to our community.</li>
          <li>Organizing social events and gatherings to foster camaraderie and collaboration.</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyUpdates;
