import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import Calendar from './Calendar';
import AttendanceManagement from './AttendanceManagement';
import LeaveManagement from './LeaveManagement';
import LeaveRequest from './LeaveRequest';
import CompanyUpdates from './CompanyUpdates';
import SalaryDetails from './SalaryDetails';
import ProjectManager from './ProjectManager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/attendance-management" element={<AttendanceManagement />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/company-updates" element={<CompanyUpdates />} />
        <Route path="/salary-details" element={<SalaryDetails />} />
        <Route path="/project-manager" element={<ProjectManager />} />
       
      </Routes>
    </Router>
  );
};

export default App;
