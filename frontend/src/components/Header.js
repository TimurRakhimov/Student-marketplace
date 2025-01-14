import React from 'react';
import './Header.css';

const Header = ({ onLoginClick}) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="logo.png" alt="Marketplace Logo" className="logo-img" />
          <span className="logo-text">TRU Marketplace</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <button className="nav-button" onClick={() => window.location.href = "/"}>
            Home
          </button>
          <button className="nav-button" onClick={() => window.location.href = "/about"}>
            About
          </button>
          <button className="nav-button" onClick={() => window.location.href = "/features"}>
            Features
          </button>
          <button className="nav-button" onClick={() => window.location.href = "/pricing"}>
            Pricing
          </button>
          <button className="nav-button" onClick={() => window.location.href = "/contact"}>
            Contact
          </button>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <button className="get-started-button" onClick={onLoginClick}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
