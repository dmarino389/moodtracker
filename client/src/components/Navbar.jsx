// src/Components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mood Tracker</div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === '/journal' ? 'active' : ''}>
          <Link to="/journal">Journal</Link>
        </li>
        <li className={location.pathname === '/insights' ? 'active' : ''}>
          <Link to="/insights">Insights</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Login</Link>
        </li>
        <li className={location.pathname === '/register' ? 'active' : ''}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
