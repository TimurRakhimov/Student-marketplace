import React, { useState } from 'react';
import PopupOverlay from './PopupOverlay';
import './SignupPage.css';

const SignupPage = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, role });
  };

  return (
    <PopupOverlay onClose={onClose}>
      <div className="signup-page">
        <div className="signup-left">
          <h1>Welcome!</h1>
          <p>Simplifying transitions, connecting students, and finding new homes for your treasures.</p>
        </div>
        <div className="signup-right">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="both">Both</option>
              </select>
            </div>
            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </PopupOverlay>
  );
};

export default SignupPage;
