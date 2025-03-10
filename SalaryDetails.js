import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './SalaryDetails.css';

const SalaryDetails = () => {
  const navigate = useNavigate();
  

  const years = Array.from({ length: 31 }, (_, i) => 2000 + i);


  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="salary-details-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
      </button>
      <h2>Salary Details</h2>
      <div className="filter-container">
        <select>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Employee Name</th>
            <th>Summary</th>
            <th>Year</th>
            <th>Month</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Arun</td>
            <td>Basic Salary: $2000.00, <br></br>Total Allowance: $0.00,<br></br>Total Deduction: $0.00, <br></br>Net Salary: $2000.00</td>
            <td>2023</td>
            <td>July</td>
            <td>PAID</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bharath</td>
            <td>Basic Salary: $2000.00, <br></br>Total Allowance: $0.00,<br></br> Total Deduction: $0.00,<br></br> Net Salary: $2000.00</td>
            <td>2022</td>
            <td>March</td>
            <td>PAID</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rupa</td>
            <td>Basic Salary: $0.00,<br></br> Total Allowance: $0.00,<br></br> Total Deduction: $0.00, <br></br>Net Salary: $0.00</td>
            <td>2021</td>
            <td>December</td>
            <td>PAID</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Sowndar</td>
            <td>Basic Salary: $2000.00,<br></br> Total Allowance: $500.00,<br></br> Total Deduction: $100.00,<br></br> Net Salary: $2400.00</td>
            <td>2020</td>
            <td>May</td>
            <td>PAID</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalaryDetails;
