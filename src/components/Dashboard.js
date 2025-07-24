import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import './Dashboard.css';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('username');
    
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    
    setUsername(storedUsername || 'User');
  }, [navigate]);

  return (
    <div className="dashboard">
      <Navigation />
      <div className="dashboard-content">
        <h1>Welcome to Dashboard</h1>
        <p>Hello, {username}! You have successfully logged in.</p>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Statistics</h3>
            <p>View your app statistics here</p>
          </div>
          <div className="card">
            <h3>Settings</h3>
            <p>Manage your account settings</p>
          </div>
          <div className="card">
            <h3>Reports</h3>
            <p>Generate and view reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;