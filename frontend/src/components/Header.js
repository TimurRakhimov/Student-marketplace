import React from 'react';
import './Header.css';

const Header = ({ onLoginClick, onSignupClick }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button className="nav-button" onClick={onLoginClick}>
              Login
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={onSignupClick}>
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
