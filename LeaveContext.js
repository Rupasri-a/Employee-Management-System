
import React, { createContext, useState } from 'react';

export const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const addLeaveRequest = (request) => {
    setLeaveRequests((prevRequests) => [...prevRequests, request]);
  };

  return (
    <LeaveContext.Provider value={{ leaveRequests, addLeaveRequest }}>
      {children}
    </LeaveContext.Provider>
  );
};
