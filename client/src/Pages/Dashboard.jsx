import React from 'react';
import CalendarSnapshot from '../components/CalendarSnapshot';
import '../Styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <CalendarSnapshot />
      
    </div>
  );
}

export default Dashboard;
