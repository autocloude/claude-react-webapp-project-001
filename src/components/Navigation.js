import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>React App</h2>
        </div>
        <div className="nav-menu">
          <button className="nav-item">Dashboard</button>
          <button className="nav-item">Profile</button>
          <button className="nav-item logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;