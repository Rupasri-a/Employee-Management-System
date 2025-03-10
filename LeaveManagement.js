import React from 'react';
import './LeaveManagement.css';

const LeaveManagement = () => {
  return (
    <div className="leave-management-container">
      <div className="leave-summary">
        <div className="summary-box requests-box">Requests - 2</div>
        <div className="summary-box pending-box">Pending - 1</div>
        <div className="summary-box approved-box">Approved - 1</div>
      </div>
      <div className="leave-section">
        <h3>Requests</h3>
        <div className="leave-card requests-card">
          <div className="employee-name">Rupasri A</div>
          <div className="leave-type">Sick Leave</div>
          <div className="leave-dates">March 1, 2023 - March 3, 2023</div>
          <div className="leave-status">Pending</div>
        </div>
        <div className="leave-card requests-card">
          <div className="employee-name">Anusri A</div>
          <div className="leave-type">Vacation</div>
          <div className="leave-dates">March 5, 2023 - March 10, 2023</div>
          <div className="leave-status">Pending</div>
        </div>
      </div>
      <div className="leave-section">
        <h3>Pending</h3>
        <div className="leave-card pending-card">
          <div className="employee-name">Arulmozhiselvan R</div>
          <div className="leave-type">Sick Leave</div>
          <div className="leave-dates">March 1, 2023 - March 3, 2023</div>
          <div className="leave-status">Pending</div>
        </div>
      </div>
      <div className="leave-section">
        <h3>Approved</h3>
        <div className="leave-card approved-card">
          <div className="employee-name">Dhavamani K A</div>
          <div className="leave-type">Maternity Leave</div>
          <div className="leave-dates">April 1, 2023 - June 30, 2023</div>
          <div className="leave-status">Approved</div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;