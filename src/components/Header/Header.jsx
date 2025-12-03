import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';

function Header({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear persisted login
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="header">
      <h1>HR Portal</h1>
      <nav>
        <NavLink to="/hr-policy" className="nav-link">HR Policy</NavLink>
        <NavLink to="/employees" className="nav-link">Employee Catalog</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;