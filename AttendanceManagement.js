import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaUserSlash, FaHouseUser } from 'react-icons/fa';
import './AttendanceManagement.css';

const AttendanceManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="attendance-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h2>Welcome Back!</h2>
      <div className="attendance-summary">
        <div className="card">
          <div className="icon-number">
            <FaUsers className="icon attendance-icon" />
            <div className="number">254</div>
          </div>
          <span className="card-text">Total Employees</span>
        </div>
        <div className="card on-leave">
          <div className="icon-number">
            <FaUserSlash className="icon attendance-icon" />
            <div className="number">10</div>
          </div>
          <span className="card-text">On Leave</span>
        </div>
        <div className="card working-remotely">
          <div className="icon-number">
            <FaHouseUser className="icon attendance-icon" />
            <div className="number">20</div>
          </div>
          <span className="card-text">Working Remotely</span>
        </div>
      </div>
      <div className="upcoming-holidays">
        <h3>Upcoming Holidays</h3>
        <ul>
          <li>14 March Friday: Holi</li>
          <li>18 April Friday: Good Friday</li>
          <li>21 April Monday: Easter Monday</li>
          <li>12 May Monday: Buddha Purnima</li>
          <li>07 June Saturday: Id-ul-Zuha (Bakrid)</li>
        </ul>
      </div>
    </div>
  );
};

export default AttendanceManagement;
