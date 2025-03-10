import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [companyMail, setCompanyMail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [hiredon, setHiredOn] = useState('');
  const [stateCountry, setStateCountry] = useState('');
  const [zipCodeCity, setZipCodeCity] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDetails = {
      name,
      personalEmail,
      companyMail,
      birthday,
      mobileNumber,
      department,
      hiredon,
      stateCountry,
      zipCodeCity,
      address
    };
    setSubmittedDetails([...submittedDetails, newDetails]);
    setSubmitted(true); 
    setName('');
    setPersonalEmail('');
    setCompanyMail('');
    setBirthday('');
    setMobileNumber('');
    setDepartment('');
    setHiredOn('');
    setStateCountry('');
    setZipCodeCity('');
    setAddress('');
  };

  const handleBack = () => {
    setSubmitted(false); 
  };

  return (
    <div className="profile-container">
      {submitted ? (
        <div className="submitted-details">
          <h3>Submitted Details</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Personal Email</th>
                  <th>Company Mail</th>
                  <th>Birthday</th>
                  <th>Mobile Number</th>
                  <th>Department</th>
                  <th>Hired On</th>
                  <th>State/Country</th>
                  <th>Zip Code/City</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {submittedDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.name}</td>
                    <td>{detail.personalEmail}</td>
                    <td>{detail.companyMail}</td>
                    <td>{detail.birthday}</td>
                    <td>{detail.mobileNumber}</td>
                    <td>{detail.department}</td>
                    <td>{detail.hiredon}</td>
                    <td>{detail.stateCountry}</td>
                    <td>{detail.zipCodeCity}</td>
                    <td>{detail.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleBack}>Back</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Employee Directory</h3>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Personal Email</label>
            <input type="email" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} required />
            <label>Company Mail</label>
            <input type="email" value={companyMail} onChange={(e) => setCompanyMail(e.target.value)} required />
            <label>Birthday</label>
            <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
            <label>Mobile Number</label>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
            <label>Department</label>
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
            <label>Hired On</label>
            <input type="text" value={hiredon} onChange={(e) => setHiredOn(e.target.value)} required />
          </div>
          <div className="form-section">
            <h3>Address Details</h3>
            <label>State/Country</label>
            <input type="text" value={stateCountry} onChange={(e) => setStateCountry(e.target.value)} required />
            <label>Zip Code/City</label>
            <input type="text" value={zipCodeCity} onChange={(e) => setZipCodeCity(e.target.value)} required />
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
