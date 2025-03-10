import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './LeaveRequest.css';

const LeaveRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    department: '',
    dateOfRequest: '',
    absenceType: '',
    reason: '',
    startDate: '',
    endDate: '',
    certification: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="leave-request-container">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          <FaArrowLeft />
        </button>
        <h2>Leave Application</h2>
        <p>Your leave request has been submitted successfully!</p>
      </div>
    );
  }

  return (
    <div className="leave-request-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h2>Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Employee ID</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Request</label>
          <input type="date" name="dateOfRequest" value={formData.dateOfRequest} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Type of Absence</label>
          <select name="absenceType" value={formData.absenceType} onChange={handleChange} required>
            <option value="">Select type of absence</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
            <option value="bereavement">Bereavement</option>
            <option value="maternity">Maternity/Paternity</option>
            <option value="unpaid">Time off without Payment</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reason for Leave</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="checkbox" name="certification" checked={formData.certification} onChange={handleChange} required />
          <label>I certify that the information provided is true and accurate. Falsification of this form may result in disciplinary action.</label>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LeaveRequest;
