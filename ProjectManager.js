import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ProjectManager.css';

const ProjectManager = () => {
  const navigate = useNavigate();
  const scheduleData = [
    { employeeName: 'Rupasri', task: 'Production Scheduling', hours: { monday: 8, tuesday: 6, wednesday: 8, thursday: 8, friday: 8, saturday: 0, sunday: 0 } },
  ];

  return (
    <div className="project-manager-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h1>Project Manager</h1> 
      <h2>Weekly Work Schedule</h2>
      <div className="supervisor-info">
        <div><strong>Supervisor Name:</strong> Rupasri A </div>
        <div><strong>Department:</strong> R&D </div>
        <div><strong>Week of:</strong> May </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Task</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((data, index) => {
            const totalHours = Object.values(data.hours).reduce((sum, hours) => sum + hours, 0);
            return (
              <tr key={index}>
                <td>{data.employeeName}</td>
                <td>{data.task}</td>
                <td>{data.hours.monday}</td>
                <td>{data.hours.tuesday}</td>
                <td>{data.hours.wednesday}</td>
                <td>{data.hours.thursday}</td>
                <td>{data.hours.friday}</td>
                <td>{data.hours.saturday}</td>
                <td>{data.hours.sunday}</td>
                <td>{totalHours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="signature-section">
        <div><strong>Supervisor Name:</strong> Rupasri A</div>
        <div><strong>Date:</strong> 25.02.2025</div>
      </div>
    </div>
  );
};

export default ProjectManager;
