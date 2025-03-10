import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (employeeID.trim() === '' || password.trim() === '') {
      alert('Please fill in both the Employee ID and Password');
    } else {
      console.log('Employee ID:', employeeID);
      console.log('Password:', password);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>
      <div className="login-form">
        <label htmlFor="employeeID">Employee ID</label>
        <input
          type="text"
          id="employeeID"
          value={employeeID}
          onChange={(e) => setEmployeeID(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
